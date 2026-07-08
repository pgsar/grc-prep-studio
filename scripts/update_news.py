#!/usr/bin/env python3
"""
update_news.py — GRC Prep Studio News Aggregator
=================================================
Legge feed RSS da fonti di cybersecurity/GRC e aggiorna js/news-data.js.
Eseguito automaticamente da GitHub Actions ogni giorno.

Uso locale:
    pip install feedparser requests
    python update_news.py
"""

import feedparser
import json
import re
import hashlib
import os
import datetime
from html import unescape

# ============================================================
#  CONFIGURAZIONE FEED
# ============================================================

FEEDS = [
    {
        "url": "https://www.isaca.org/rss/news",
        "category": "ISACA",
        "icon": "🏛️",
        "lang": "en"
    },
    {
        "url": "https://thehackernews.com/feeds/posts/default",
        "category": "Security",
        "icon": "🔐",
        "lang": "en"
    },
    {
        "url": "https://www.darkreading.com/rss.xml",
        "category": "Security",
        "icon": "🔐",
        "lang": "en"
    },
    {
        "url": "https://krebsonsecurity.com/feed/",
        "category": "Security",
        "icon": "🔐",
        "lang": "en"
    },
    {
        "url": "https://www.schneier.com/feed/atom/",
        "category": "Security",
        "icon": "🔐",
        "lang": "en"
    },
    {
        "url": "https://csrc.nist.gov/feeds/all",
        "category": "Governance",
        "icon": "📋",
        "lang": "en"
    },
    {
        "url": "https://www.enisa.europa.eu/news/enisa-news/RSS",
        "category": "Governance",
        "icon": "🇪🇺",
        "lang": "en"
    },
    {
        "url": "https://www.cybersecurity360.it/feed/",
        "category": "Security",
        "icon": "🔐",
        "lang": "it"
    },
    {
        "url": "https://www.corrierecomunicazioni.it/feed/",
        "category": "Tech",
        "icon": "📡",
        "lang": "it"
    },
]

# ============================================================
#  PAROLE CHIAVE PER FILTRAGGIO
# ============================================================

KEYWORDS_EN = [
    "cybersecurity", "cyber security", "risk management", "risk assessment",
    "governance", "compliance", "GRC", "ISACA", "CRISC", "CISM", "CISA",
    "AI risk", "artificial intelligence risk", "information security",
    "IT governance", "data protection", "GDPR", "NIS2", "DORA",
    "ransomware", "threat", "vulnerability", "incident", "breach",
    "zero trust", "cloud security", "SOC", "SIEM", "penetration",
    "audit", "ISO 27001", "NIST", "framework", "regulation",
    "privacy", "data governance", "third party risk", "supply chain risk",
    "generative AI", "LLM", "machine learning risk"
]

KEYWORDS_IT = [
    "cybersecurity", "sicurezza informatica", "rischio", "governance",
    "compliance", "GDPR", "NIS2", "DORA", "intelligenza artificiale",
    "protezione dati", "attacco informatico", "ransomware", "vulnerabilità",
    "incidente informatico", "privacy", "audit", "regolamento",
    "ISO 27001", "cloud", "identità digitale", "frode informatica"
]

MAX_ITEMS_PER_FEED = 5
MAX_TOTAL_ITEMS = 30
MAX_AGE_DAYS = 30

# ============================================================
#  FUNZIONI HELPER
# ============================================================

def clean_html(text):
    """Rimuove tag HTML e decodifica entità."""
    if not text:
        return ""
    text = re.sub(r'<[^>]+>', ' ', text)
    text = unescape(text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def truncate(text, max_len=200):
    """Tronca il testo a max_len caratteri."""
    if len(text) <= max_len:
        return text
    return text[:max_len].rsplit(' ', 1)[0] + '...'

def is_relevant(title, summary, keywords):
    """Verifica se l'articolo è rilevante in base alle parole chiave."""
    text = (title + ' ' + summary).lower()
    return any(kw.lower() in text for kw in keywords)

def make_id(title, date):
    """Genera un ID univoco dall'articolo."""
    raw = (title + date).encode('utf-8')
    return 'news-' + hashlib.md5(raw).hexdigest()[:8]

def format_date(entry):
    """Estrae e formatta la data dall'entry."""
    try:
        if hasattr(entry, 'published_parsed') and entry.published_parsed:
            dt = datetime.datetime(*entry.published_parsed[:6])
        elif hasattr(entry, 'updated_parsed') and entry.updated_parsed:
            dt = datetime.datetime(*entry.updated_parsed[:6])
        else:
            dt = datetime.datetime.now()
        
        date_str = dt.strftime('%Y-%m-%d')
        date_label = dt.strftime('%b %d, %Y')
        return date_str, date_label, dt
    except Exception:
        now = datetime.datetime.now()
        return now.strftime('%Y-%m-%d'), now.strftime('%b %d, %Y'), now

def translate_excerpt_it(title_en, excerpt_en, category, icon):
    """
    Genera un excerpt in italiano semplice.
    Non usa API di traduzione — crea una versione sintetica.
    """
    cat_map = {
        "Security": "Sicurezza",
        "Governance": "Governance",
        "ISACA": "ISACA",
        "Tech": "Tecnologia",
        "Risk": "Rischio"
    }
    cat_it = cat_map.get(category, category)
    return f"[{cat_it}] {truncate(excerpt_en, 180)}"

# ============================================================
#  MAIN
# ============================================================

def fetch_all_news():
    """Raccoglie le news da tutti i feed."""
    all_items = []
    cutoff = datetime.datetime.now() - datetime.timedelta(days=MAX_AGE_DAYS)

    for feed_config in FEEDS:
        url = feed_config["url"]
        category = feed_config["category"]
        icon = feed_config["icon"]
        lang = feed_config["lang"]
        keywords = KEYWORDS_IT if lang == "it" else KEYWORDS_EN

        print(f"  Fetching: {url}")
        try:
            feed = feedparser.parse(url)
            count = 0

            for entry in feed.entries:
                if count >= MAX_ITEMS_PER_FEED:
                    break

                title = clean_html(getattr(entry, 'title', ''))
                summary = clean_html(getattr(entry, 'summary', getattr(entry, 'description', '')))
                link = getattr(entry, 'link', '')

                if not title or not is_relevant(title, summary, keywords):
                    continue

                date_str, date_label, dt = format_date(entry)

                if dt < cutoff:
                    continue

                excerpt_en = truncate(summary, 200) if summary else title
                excerpt_it = translate_excerpt_it(title, excerpt_en, category, icon)

                item = {
                    "id": make_id(title, date_str),
                    "date": date_str,
                    "dateLabel": date_label,
                    "category": category,
                    "titleEN": title,
                    "titleIT": title,  # stesso titolo — non traduciamo i titoli
                    "excerptEN": excerpt_en,
                    "excerptIT": excerpt_it,
                    "icon": icon,
                    "link": link
                }

                all_items.append(item)
                count += 1

        except Exception as e:
            print(f"    ⚠️ Errore su {url}: {e}")

    # Ordina per data decrescente e rimuovi duplicati per titolo
    seen_titles = set()
    unique_items = []
    for item in sorted(all_items, key=lambda x: x['date'], reverse=True):
        title_key = item['titleEN'][:50].lower()
        if title_key not in seen_titles:
            seen_titles.add(title_key)
            unique_items.append(item)

    return unique_items[:MAX_TOTAL_ITEMS]

def generate_news_js(items):
    """Genera il contenuto del file news-data.js usando json.dumps per la massima sicurezza dei caratteri."""
    js_items = []
    for item in items:
        # json.dumps gestisce perfettamente gli escape degli apostrofi e dei caratteri speciali
        json_string = json.dumps(item, ensure_ascii=False, indent=2)
        # Rientra l'oggetto in modo che mantenga una formattazione leggibile all'interno dell'array JS
        indented_item = "\n".join(f"  {line}" for line in json_string.splitlines())
        js_items.append(indented_item)

    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M UTC')
    
    content = f"""// ============================================================
//  news-data.js — GRC Prep Studio
//  Aggiornato automaticamente il {now}
//  Script: update_news.py | GitHub Actions
// ============================================================

const NEWS = [
{',\n'.join(js_items)}
];
"""
    return content

def main():
    print("🔍 GRC Prep Studio — News Aggregator")
    print("=" * 50)
    print(f"Raccolta news da {len(FEEDS)} feed...")
    
    items = fetch_all_news()
    
    print(f"\n✅ Raccolti {len(items)} articoli rilevanti")
    for item in items[:5]:
        print(f"   • [{item['date']}] {item['titleEN'][:60]}...")
    if len(items) > 5:
        print(f"   ... e altri {len(items)-5}")
    
    # RISOLUZIONE PATH PER GITHUB ACTIONS
    # Troviamo la cartella radice del progetto partendo dalla posizione di questo script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Se lo script è in una sottocartella, cerca js/ salendo di un livello. Altrimenti usa il livello corrente.
    base_dir = script_dir
    if not os.path.exists(os.path.join(base_dir, 'js')) and os.path.exists(os.path.join(os.path.dirname(base_dir), 'js')):
        base_dir = os.path.dirname(base_dir)
        
    output_path = os.path.join(base_dir, 'js', 'news-data.js')
    
    # Assicura l'esistenza della cartella js/
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    js_content = generate_news_js(items)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\n💾 Salvato correttamente in: {output_path}")
    print("✅ Operazione completata con successo!")

if __name__ == '__main__':
    main()
