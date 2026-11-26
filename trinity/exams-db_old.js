/**
 * DATABASE ESAMI TRINITY ISE II (B2) - READING & WRITING
 * Per aggiungere un nuovo esame, incolla l'oggetto JSON generato dal prompt
 * alla fine dell'array window.EXAM_DATABASE separandolo con una virgola.
 */
window.EXAM_DATABASE = [
   {
    "id": "ise2_official_sp1",
    "title": "Official Sample Paper 1: Plastic Bags & Local Food",
    "durationMinutes": 120,
    "task1": {
      "title": "Plastic Bags: Environmental Challenge and Alternatives",
      "paragraphs": [
        {
          "label": "1",
          "text": "When Swedish engineer Sten Gustaf Thulin invented the lightweight plastic shopping bag in the 1960s, he probably had no idea how controversial they would become, nor for how long the controversy would last. The fact that the bags proved so useful due to their low weight and resistance to degrading biologically made them widespread by the 1980s, but also led to environmental challenges. Millions of shopping bags end up as litter every year. This has resulted in land pollution, blocking of waterways and also to areas of sea being clogged up with plastic, harming wildlife."
        },
        {
          "label": "2",
          "text": "Different measures have been carried out. A total ban was placed on non-biodegradable plastic bags in China, to save oil, and in some African countries like Rwanda, to reduce litter. In China this is said to have saved 4.8 million tonnes of oil and in Rwanda the ban has had a visible effect. As one visitor commented: 'The country is so much cleaner than it used to be.' The United Arab Emirates also banned all single-use bags in 2013, based on pollution caused - and danger to camels, who were eating them."
        },
        {
          "label": "3",
          "text": "Other countries have introduced a 'bag tax', with supermarkets charging customers a small amount for each plastic bag they use. For example, Ireland introduced such a charge in 2002. Jill Burns of Plastic Bag Aware said 'Ireland's bag tax has been incredibly successful, mainly because the charge is quite high, and is increased the more plastic bags are used.' Despite fears to the contrary, customers accepted the charge, but in other countries this measure has been blocked, not by customers, but by manufacturers of plastic bags."
        },
        {
          "label": "4",
          "text": "What's the alternative to the traditional plastic bag? I thought the answer was the bio-degradable plastic bag, but it seems not to be the case. Manufacturers and the major supermarkets claim that such bags degrade completely in under three years. However, research has shown that they do not degrade as efficiently as has been claimed. I was really taken aback by this! They need light and oxygen for the material to degrade, but in landfills both are in short supply. Another criticism has been that it is environmental madness to produce something requiring a lot of oil to make, only so that it can 'self-destruct'."
        },
        {
          "label": "5",
          "text": "I'd always considered paper and cloth bags as an ethical alternative to plastic bags. Again, my ideas have been challenged. Both paper and cloth bags require much more energy to make, and are said to pollute air and water more in manufacture. I've used a cloth bag several times for shopping, and prided myself on protecting the environment. It seems I'm wrong. A cloth bag would have to be used 130 times before its ecological impact was as low as a plastic bag in terms of energy. I guess I have no choice but to do another 90 shopping trips or more with my cloth bag! One packaging manufacturer said 'Plastic bags are more environmentally friendly than cotton bags,' but I'm not convinced. How can something that causes so much damage be acceptable?"
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "The high energy use of producing alternative types of bags" },
        { "letter": "B", "text": "How the positive features of plastic bags led to problems" },
        { "letter": "C", "text": "Other forms of plastic bags may not be the solution" },
        { "letter": "D", "text": "Benefits of forbidding the use of non-biodegradable plastic bags" },
        { "letter": "E", "text": "Consumers must be encouraged to change their way of thinking" },
        { "letter": "F", "text": "An effective measure is accepted by consumers" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph 1", "answer": "B", "explanation": "Paragraph 1 explains how low weight and durability made plastic bags popular, causing litter and harm to wildlife." },
        { "num": 2, "prompt": "Paragraph 2", "answer": "D", "explanation": "Paragraph 2 outlines benefits of total bans in China (saving oil), Rwanda (cleaner streets), and the UAE (protecting camels)." },
        { "num": 3, "prompt": "Paragraph 3", "answer": "F", "explanation": "Paragraph 3 describes Ireland's successful bag tax and notes that customers accepted the charge." },
        { "num": 4, "prompt": "Paragraph 4", "answer": "C", "explanation": "Paragraph 4 questions bio-degradable plastic bags because landfills lack light and oxygen." },
        { "num": 5, "prompt": "Paragraph 5", "answer": "A", "explanation": "Paragraph 5 highlights that paper and cloth bags require much more energy to manufacture." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "The inventor of the carrier bag realised his invention would cause disagreement." },
        { "letter": "B", "text": "One of the reasons behind a ban on plastic bags was to protect wildlife." },
        { "letter": "C", "text": "The more plastic bags shoppers in Ireland use, the more expensive they become." },
        { "letter": "D", "text": "In some countries customers don't agree with the charge being introduced." },
        { "letter": "E", "text": "The writer found it difficult to believe research on the breakdown of bio-degradable bags." },
        { "letter": "F", "text": "According to researchers, one of the elements needed to break down bio-degradable bags in landfills is missing." },
        { "letter": "G", "text": "The writer was incorrect in his belief that using a cloth bag had made him environmentally friendly." },
        { "letter": "H", "text": "The writer feels his only option is to re-use his cloth bag at least 90 more times." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "B", "explanation": "Paragraph 2 mentions the UAE ban was based on pollution and 'danger to camels, who were eating them'." },
        { "num": 7, "answer": "C", "explanation": "Paragraph 3 states Ireland's charge 'is increased the more plastic bags are used'." },
        { "num": 8, "answer": "E", "explanation": "Paragraph 4: 'I was really taken aback by this!' regarding research on bio-degradable bags." },
        { "num": 9, "answer": "G", "explanation": "Paragraph 5: 'I've used a cloth bag several times... and prided myself on protecting the environment. It seems I'm wrong.'" },
        { "num": 10, "answer": "H", "explanation": "Paragraph 5: 'I guess I have no choice but to do another 90 shopping trips or more with my cloth bag!'" }
      ],
      "wordBank": ["widespread", "total ban", "ban", "accepted the charge", "degrade completely", "degrade", "packaging manufacturer", "manufacturer"],
      "questions11to15": [
        { "num": 11, "prefix": "The lightness and durability of plastic bags meant that their use was", "suffix": "twenty years after their invention.", "acceptedAnswers": ["widespread"], "explanation": "Paragraph 1: 'made them widespread by the 1980s'." },
        { "num": 12, "prefix": "Some countries responded directly to excessive oil use and rubbish caused by plastic bags with a", "suffix": "on them.", "acceptedAnswers": ["total ban", "ban"], "explanation": "Paragraph 2: 'A total ban was placed on non-biodegradable plastic bags'." },
        { "num": 13, "prefix": "Instead of objecting to paying for plastic bags, Irish shoppers", "suffix": ".", "acceptedAnswers": ["accepted the charge"], "explanation": "Paragraph 3: 'Despite fears to the contrary, customers accepted the charge'." },
        { "num": 14, "prefix": "The researchers questioned the idea that bio-degradable bags take less than three years to", "suffix": ".", "acceptedAnswers": ["degrade completely", "degrade"], "explanation": "Paragraph 4: 'claim that such bags degrade completely in under three years'." },
        { "num": 15, "prefix": "The writer did not believe the claim made by a", "suffix": "that plastic bags are more ecological than cloth bags.", "acceptedAnswers": ["packaging manufacturer", "manufacturer"], "explanation": "Paragraph 5: 'One packaging manufacturer said Plastic bags are more environmentally friendly than cotton bags'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "The Local Food Movement",
          "type": "article",
          "content": "Some countries are significant producers of local food, others less so. The local food movement is a campaign started in countries which import more food than in the past. In America, for example, in the 1900s over 40 per cent of the population lived on farms, whereas in 2000 the figure was 1 per cent. Nowadays, in such areas, the local food movement wants a shift back towards small-scale farming and locally-supplied food. This is an alternative to imported food, where producers are separated from consumers by 'food miles', resulting in long journey times. Although some big supermarkets stock local food, this is not the main trend as customers still want a wide choice of foods all year round. With local growing, the buyer can purchase food from the farmer in person or online, or from local shops. The farmer retains more money, which has a positive impact on local economies as money is kept within a region."
        },
        {
          "label": "Text B",
          "title": "The Local Food Circle (Infographic)",
          "type": "infographic",
          "content": "1. Farming: Local food, locally grown — wide choice of seasonal produce; farms stay in business.\n2. Storing: Fresh & green — shorter storage times; reusable bags and boxes.\n3. Transporting: Less fuel, less pollution — no air transport; road journey times reduced.\n4. Selling: Buy local, eat local — support local markets, shops and restaurants; help the local economy.\n5. Eating: Delicious and nutritious — food fresh and full of flavour; vitamins and other nutrients retained.\n6. Recycling: Less waste, better produce — minimal packaging; household food waste buried into soil (feeds back into Farming)."
        },
        {
          "label": "Text C",
          "title": "Green Magazine Interview with Jane Gold",
          "type": "article",
          "content": "Why do you support the local food movement, Jane?\n'Well, some countries rely too much on imported food. The effect of transporting food long distances obviously damages the environment, so eating local food is something we should all do to tackle the problem of greenhouse gases. Locally grown food is also better for us. That's another reason why people should buy it. Vitamin levels in food fall quite soon after picking, and large farms often use more chemicals than smaller ones. The change has been incredible. I always used to get colds and now I never do since I've been eating such good food - I feel fantastic!'"
        },
        {
          "label": "Text D",
          "title": "Online Discussion: Robert & Joseph",
          "type": "forum",
          "content": "Robert: Going back to small-scale farming is incredibly unrealistic.\nJoseph: I disagree! I'm a farmer in Kenya, in Africa, and my family has always grown its own food.\nRobert: And do you export food, too?\nJoseph: Yes, I grow beans, corn and bananas for export. The money helps my family and the local and national economies.\nRobert: I'm sure. We'd have a very limited choice in Northern Scotland if we didn't import food. Local farmers couldn't produce enough for everyone in the area, so we couldn't do without food from abroad.\nJoseph: Aren't people worried about the effect transporting food has on the environment?\nRobert: Yes, but the environmental effect of transportation is actually not that high. In fact, the amount of greenhouse gases emitted in producing food locally is more than in the transportation of food. Apparently, cattle on open land produce more greenhouse gas than cows kept inside on large-scale farms.\nJoseph: Well, sending our produce abroad is great for us.\nRobert: And for us!"
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text suggests people buy local food because it tastes better?", "answer": "B", "explanation": "Text B (Eating stage): 'Delicious and nutritious - food fresh and full of flavour'." },
        { "num": 17, "prompt": "Which text criticises the idea that people could return to producing food on small farms?", "answer": "D", "explanation": "In Text D, Robert states: 'Going back to small-scale farming is incredibly unrealistic.'" },
        { "num": 18, "prompt": "Which text suggests that local food production can reduce illness and increase well-being?", "answer": "C", "explanation": "In Text C, Jane says: 'I always used to get colds and now I never do... I feel fantastic!'" },
        { "num": 19, "prompt": "Which text explains that the different stages in the production of local food are connected?", "answer": "B", "explanation": "Text B illustrates 'The local food circle' connecting Farming, Storing, Transporting, Selling, Eating, and Recycling." },
        { "num": 20, "prompt": "Which text compares farming in the last century with the popularity of farming nowadays?", "answer": "A", "explanation": "Text A compares US farm population in the 1900s (over 40%) with 2000 (1%)." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "US local food supporters want a return to farming levels of the 1900s." },
        { "letter": "B", "text": "Supermarkets generally support the local food movement." },
        { "letter": "C", "text": "Local farmers may use technology to help sell their food directly." },
        { "letter": "D", "text": "Storage times and the amount of packaging decrease with local farming." },
        { "letter": "E", "text": "Small farms sometimes use chemicals when producing their food." },
        { "letter": "F", "text": "Jane believes there's been a slight improvement in her health and mood." },
        { "letter": "G", "text": "The transportation of food damages the environment less than food production." },
        { "letter": "H", "text": "Both Robert and Joseph agree that exporting food to other countries is a good idea." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "C", "explanation": "Text A: 'the buyer can purchase food from the farmer in person or online'." },
        { "num": 22, "answer": "D", "explanation": "Text B lists 'shorter storage times' and 'minimal packaging'." },
        { "num": 23, "answer": "E", "explanation": "Text C implies small farms use fewer chemicals ('large farms often use more chemicals than smaller ones'), meaning small farms still use some." },
        { "num": 24, "answer": "G", "explanation": "Text D: 'the amount of greenhouse gases emitted in producing food locally is more than in the transportation of food'." },
        { "num": 25, "answer": "H", "explanation": "Text D ends with Joseph saying sending produce abroad is 'great for us' and Robert replying 'And for us!'" }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Aims of local food movement: to raise levels of production and sales of local food; a return to", "suffix": "and delivery of local food.", "acceptedAnswers": ["small-scale farming"], "explanation": "Text A: 'wants a shift back towards small-scale farming'." },
        { "num": 27, "prefix": "Imported food: increased food miles between farmers and customers leads to", "suffix": ".", "acceptedAnswers": ["long journey times"], "explanation": "Text A: 'separated from consumers by food miles, resulting in long journey times'." },
        { "num": 28, "prefix": "Less time in storage after picking means higher", "suffix": ".", "acceptedAnswers": ["vitamin levels"], "explanation": "Text C: 'Vitamin levels in food fall quite soon after picking'." },
        { "num": 29, "prefix": "Local food: Fresher and tastier; Fewer food miles by", "suffix": "and road.", "acceptedAnswers": ["air"], "explanation": "Text B: 'no air transport - road journey times reduced'." },
        { "num": 30, "prefix": "Insufficient locally farmed food: people in remote areas are unable to", "suffix": "imported food.", "acceptedAnswers": ["do without"], "explanation": "Text D: 'we couldn't do without food from abroad'." }
      ]
    },
    "task3": {
      "genre": "Essay",
      "prompt": "Use the information you read in texts A, B, C and D to write an essay (150–180 words) for your teacher, presenting the advantages and disadvantages of local food.\n\nDo not copy from the texts. Use your own words as far as possible."
    },
    "task4": {
      "genre": "Article",
      "prompt": "Write an article (150–180 words) for your school magazine on whether or not sport should be a compulsory school subject. Express your opinion and give reasons for it."
    }
  },
  {
    "id": "ise2_official_sp2",
    "title": "Official Sample Paper 2: Maths Skills & Memory",
    "durationMinutes": 120,
    "task1": {
      "title": "The importance of maths skills",
      "paragraphs": [
        {
          "label": "1",
          "text": "A new charity called National Numeracy (NN) claims that millions of adults across the country have such poor mathematical skills that they are unable to carry out many of the basic numerical tasks in everyday life that many of us do naturally. These include understanding travel timetables, pay slips, household bills and even checking our change in shops. The charity is keen to argue against the myth that maths at school is boring and not really important to us once we get out of school and start to live in the real world. According to NN, nothing could be further from the truth. It is estimated that poor numeracy skills amongst adults cost the nation billions each year."
        },
        {
          "label": "2",
          "text": "In addition, poor numeracy skills not only contribute to personal disadvantage to individuals who are unable to carry out the most basic tasks, but they can also be linked to a number of other social and personal ills. People without a basic understanding of maths are more likely to be unemployed, more likely to suffer from depression and more likely to suffer from a number of negative social circumstances we would all like to avoid, such as poor housing, poor health and related problems. In short, it pays to possess at least some basic numeracy skills in order to develop one's identity and wellbeing in a difficult world."
        },
        {
          "label": "3",
          "text": "Whilst adult literacy has been improving, thanks to a number of government policies which have provided money for practical support and solutions, adult numeracy has at the same time got worse. The fact of the matter is that many people simply don't like maths and don't see any point to it. Furthermore, maths isn't cool. It's apparently OK to say 'I'm no good at maths' whilst there is much more reluctance to admitting to being unable to read. To many people, maths is simply another inconvenient school subject for which there is no need to make much of an effort because you won't need it once you leave school."
        },
        {
          "label": "4",
          "text": "Unfortunately, the problem seems to be passed down the generations. Parents who tell their children they were no good at maths at school are likely to find the same attitude amongst their own children and will be unable to help them with their maths homework. Even today, with interesting and practical new approaches to maths which have replaced simply learning things by heart, maths is still one of those subjects that many kids hate."
        },
        {
          "label": "5",
          "text": "Perhaps it's the way it's taught in schools, or the way teachers are trained to teach it, or the failure of the teaching profession to attract gifted teachers of maths. There is obviously a need to present maths as a way of solving practical problems and working with others in a stimulating way and of making people see its practical uses in everyday life, rather than treating it as a waste of time and something one has to do until the end of school."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Why numeracy is not regarded as being as important as literacy" },
        { "letter": "B", "text": "How attitudes towards maths are handed down" },
        { "letter": "C", "text": "How maths skills are related to other skills" },
        { "letter": "D", "text": "Possible causes of poor attitude to maths" },
        { "letter": "E", "text": "The results of poor maths skills in daily life" },
        { "letter": "F", "text": "Social and mental problems because of poor maths skills" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph 1", "answer": "E", "explanation": "Paragraph 1 describes everyday numerical tasks people struggle with (bills, timetables, change) and the national financial cost." },
        { "num": 2, "prompt": "Paragraph 2", "answer": "F", "explanation": "Paragraph 2 links poor numeracy to unemployment, depression, poor housing, and poor health." },
        { "num": 3, "prompt": "Paragraph 3", "answer": "A", "explanation": "Paragraph 3 contrasts improving literacy with worsening numeracy and notes people readily admit being bad at maths." },
        { "num": 4, "prompt": "Paragraph 4", "answer": "B", "explanation": "Paragraph 4 explains how parents pass negative attitudes toward maths down to their children." },
        { "num": 5, "prompt": "Paragraph 5", "answer": "D", "explanation": "Paragraph 5 explores causes such as teaching methods, teacher training, and recruiting gifted teachers." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "The charity is trying to make maths at school more interesting." },
        { "letter": "B", "text": "The writer feels the government is trying to deal with the issue." },
        { "letter": "C", "text": "According to NN, adult numeracy is at its lowest ever point." },
        { "letter": "D", "text": "People with poor maths skills often have other problems too." },
        { "letter": "E", "text": "Maths is regarded as a subject which one has to put up with until the end of school." },
        { "letter": "F", "text": "There are now more interesting approaches to maths than there used to be." },
        { "letter": "G", "text": "Many people feel very bad about admitting their poor maths skills." },
        { "letter": "H", "text": "According to NN, poor adult numeracy is a financial burden on the country." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph 1: NN argues against the myth that maths is boring and unimportant." },
        { "num": 7, "answer": "D", "explanation": "Paragraph 2: poor numeracy is linked to unemployment, depression, poor housing, and poor health." },
        { "num": 8, "answer": "E", "explanation": "Paragraph 5: 'treating it as a waste of time and something one has to do until the end of school'." },
        { "num": 9, "answer": "F", "explanation": "Paragraph 4 mentions 'interesting and practical new approaches to maths which have replaced simply learning things by heart'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph 1: 'poor numeracy skills amongst adults cost the nation billions each year'." }
      ],
      "wordBank": ["myth", "identity and wellbeing", "read", "gifted teachers", "practical uses", "numeracy", "bills", "homework"],
      "questions11to15": [
        { "num": 11, "prefix": "The common belief that maths is not useful is a", "suffix": ".", "acceptedAnswers": ["myth"], "explanation": "Paragraph 1: 'argue against the myth that maths at school is boring and not really important'." },
        { "num": 12, "prefix": "As well as practical problems, having difficulty with basic maths can also affect one's", "suffix": ".", "acceptedAnswers": ["identity and wellbeing"], "explanation": "Paragraph 2: 'in order to develop one's identity and wellbeing in a difficult world'." },
        { "num": 13, "prefix": "People are more likely to say they can't add up than to say they can't", "suffix": ".", "acceptedAnswers": ["read"], "explanation": "Paragraph 3: 'reluctance to admitting to being unable to read'." },
        { "num": 14, "prefix": "In the writer's view, poor numeracy may be due to the fact that it's difficult to recruit", "suffix": "of maths.", "acceptedAnswers": ["gifted teachers"], "explanation": "Paragraph 5: 'failure of the teaching profession to attract gifted teachers of maths'." },
        { "num": 15, "prefix": "The writer argues that people need to see the", "suffix": "of maths in daily life.", "acceptedAnswers": ["practical uses"], "explanation": "Paragraph 5: 'making people see its practical uses in everyday life'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Chris' blog - Study tips",
          "type": "article",
          "content": "Mnemonics are really cool tools to help you remember facts. They're techniques or strategies consciously used to improve your memory, and are especially useful if, like me, you often forget things. One of these strategies, which is specifically used for language learning, is called 'LinkWord Technique'. It uses a visualised image to link a word in one language with a word in another; for example, in Thai, the word khao means rice, so you would have to imagine a cow eating a bowl of rice! The funnier the image, the more memorable it is!\nBut the system does have drawbacks - creating a scene for every new word you learn can take up a lot of time. You might also have problems finding similarities between the two languages. Still, give it a try!"
        },
        {
          "label": "Text B",
          "title": "Memory",
          "type": "article",
          "content": "Our senses play an important part in memory creation, starting with a biological process known as encoding, which can involve all five. For example, when you first meet someone, your sense of sight will capture what they look like, while your ears will register the sound of their voice. Your sense of smell may pick up some perfume. Perhaps you shake hands, thus bringing in the sense of touch. Going for a coffee together could even mean that taste is involved.\nEach of these separate sensations is immediately sent to a part of your brain called the hippocampus, which combines them into your experience, or memory, of that particular person. Whether or not that experience will be moved from your short-term to your long-term memory is also believed to depend on the hippocampus, which processes its importance and decides if it's worth remembering. Exactly how it does this is not yet understood, but its role is vital: if it did not discard most of our daily experiences, our memories would be too full to function."
        },
        {
          "label": "Text C",
          "title": "The Memory Pyramid (Infographic)",
          "type": "infographic",
          "content": "We remember:\n• 25% of what we see and hear\n• 30% of what we demonstrate to others\n• 35% of what we read\n• 50% of the things we discuss with others\n• 70% of what we learn by physically doing things\n• 90% of what we teach to others!"
        },
        {
          "label": "Text D",
          "title": "Sleep Memory Research Report",
          "type": "report",
          "content": "New research from a leading US university has uncovered an unconscious form of memory which could mean that people are capable of learning while they're asleep. As researcher Vally Pugland told us: 'We've found evidence that the brain continues to process information without our knowing it, and this ability may aid our waking memory.'\nResearchers played notes, then released certain scents, to sleeping participants. Later, the same notes were played to them without the accompanying scents. The participants reacted by sniffing when they heard the notes, even though they couldn't have smelt anything this time. This happened both while they were asleep and awake. 'This would suggest that people can learn new information while they sleep', said Pugland, 'and that this can unconsciously affect their behaviour when they're awake. We now need to investigate whether this new \"sleep memory\" could improve classroom performance.'"
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text reports on an investigation into brain activity under different conditions?", "answer": "D", "explanation": "Text D reports a US university experiment testing sleeping and waking participants with musical notes and scents." },
        { "num": 17, "prompt": "Which text describes how the brain computes external information in order to make memories?", "answer": "B", "explanation": "Text B explains how the five senses send sensations to the hippocampus for encoding into memory." },
        { "num": 18, "prompt": "Which text recommends a specific technique for remembering vocabulary?", "answer": "A", "explanation": "Text A recommends mnemonics and the 'LinkWord Technique' for language learning." },
        { "num": 19, "prompt": "Which text compares the impact of different activities on the process of remembering?", "answer": "C", "explanation": "Text C ('The Memory Pyramid') compares retention percentages from 25% (seeing/hearing) up to 90% (teaching others)." },
        { "num": 20, "prompt": "Which text presents some surprising results with implications for teaching and learning?", "answer": "D", "explanation": "Text D highlights unexpected 'sleep memory' findings and notes researchers will investigate if it improves classroom performance." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Our memory would stop working if we remembered everything we saw and did." },
        { "letter": "B", "text": "Sight is the most important sense for the creation of memories." },
        { "letter": "C", "text": "The link between words is easier to recall if it is associated with an amusing scene." },
        { "letter": "D", "text": "The sniffing behaviour was only observed when the participants were sleeping." },
        { "letter": "E", "text": "There are both advantages and disadvantages to the LinkWord Technique." },
        { "letter": "F", "text": "Experiences that are important to us tend to generate long-term memories." },
        { "letter": "G", "text": "Research has shown that 'sleep memory' can lead to better exam results." },
        { "letter": "H", "text": "We generally remember more of what we do with others than what we do on our own." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text B: 'if it did not discard most of our daily experiences, our memories would be too full to function'." },
        { "num": 22, "answer": "C", "explanation": "Text A: 'The funnier the image, the more memorable it is!'" },
        { "num": 23, "answer": "E", "explanation": "Text A outlines benefits of LinkWord Technique as well as drawbacks (time-consuming, hard to find word similarities)." },
        { "num": 24, "answer": "F", "explanation": "Text B: the hippocampus 'processes its importance and decides if it's worth remembering' in long-term memory." },
        { "num": 25, "answer": "H", "explanation": "Text C shows higher retention for discussing (50%) and teaching others (90%) compared to reading (35%) or seeing/hearing (25%)." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "The power of memory starts with a biological process:", "suffix": ".", "acceptedAnswers": ["encoding"], "explanation": "Text B: 'starting with a biological process known as encoding'." },
        { "num": 27, "prefix": "Area of the brain that processes physical sensations:", "suffix": ".", "acceptedAnswers": ["the hippocampus", "hippocampus"], "explanation": "Text B: 'sent to a part of your brain called the hippocampus'." },
        { "num": 28, "prefix": "Based on research recently undertaken at a", "suffix": "involving two particular senses.", "acceptedAnswers": ["leading US university", "US university"], "explanation": "Text D: 'New research from a leading US university'." },
        { "num": 29, "prefix": "Involving two particular senses: hearing and", "suffix": ".", "acceptedAnswers": ["smell"], "explanation": "Text D involves musical notes (hearing) and scents (smell)." },
        { "num": 30, "prefix": "Memory improvement strategies, eg", "suffix": ".", "acceptedAnswers": ["LinkWord technique", "mnemonics", "LinkWord Technique"], "explanation": "Text A discusses mnemonics and the 'LinkWord Technique'." }
      ]
    },
    "task3": {
      "genre": "Article",
      "prompt": "Use the information you read in texts A, B, C and D to write an article (150–180 words) for a website giving advice for students on how to improve memory skills.\n\nDo not copy from the texts. Use your own words as far as possible."
    },
    "task4": {
      "genre": "Essay",
      "prompt": "Write an essay (150–180 words) for your college magazine with the title: 'Someone I admire'.\n\nSay what qualities you admire in that person and the ways in which he or she has influenced you."
    }
  },
  {
    "id": "ise2_official_sp3",
    "title": "Official Sample Paper 3: Celebrities & Bird Migration",
    "durationMinutes": 120,
    "task1": {
      "title": "Celebrities and Their Privacy",
      "paragraphs": [
        {
          "label": "1",
          "text": "Being famous is quite a new thing, and certainly not what it used to be. Since the rise of music and films, celebrities have become household names. This is largely because people from all over the country, or even the world, can hear their voices and see their images. In the early 20th century, although there were stars like Rudolph Valentino or Greta Garbo, their private lives and their careers were mainly separate. However, those days of mysterious distant celebrity have gone. Now, celebrities' professional lives and private lives are not so separate."
        },
        {
          "label": "2",
          "text": "The rise of internet blogging sites, celebrity magazines and newspaper gossip pages mean that the public know every small detail about the private lives of celebrities. We can find out who they are dating, what they are eating and what gym they go to, and all kinds of everyday events. There are photographers permanently camped outside the houses of the most famous celebrities, ready to take a picture of any movements. Just look at the hundreds of celebrity gossip magazines in the press or the thousands of celebrity gossip websites and blogs; there are examples everywhere, and nobody knows how we should manage this situation."
        },
        {
          "label": "3",
          "text": "But should celebrities have to put up with someone watching their every move from the moment they get up to the moment they go to bed? This is the subject of much debate. Many countries are looking at the current laws to protect the privacy of celebrities to see if they are strong enough in today's world. Many celebrities have taken legal action against people or newspapers who they think have not respected their private lives. And things have perhaps become rather extreme, with phone hackings, where journalists listen to people's private phone conversations, and wedding crashers. These are photographers who go to a celebrity wedding uninvited to take photos and sell them."
        },
        {
          "label": "4",
          "text": "However, some people say that we should not only blame newspapers, magazines and photographers for this. Perhaps the celebrities themselves play a part in causing the problem. It is difficult to understand that we should feel sorry for celebrities who go out to get attention one minute and then ask for privacy the next. Photographers and reporters often say this is why their reporting of the private lives of celebrities is acceptable, and not immoral, as some people say."
        },
        {
          "label": "5",
          "text": "Although a celebrity lifestyle may seem like a wonderful life, there is clearly a downside. Perhaps the negatives are now greater than the positives for today's celebrities. We may be able to think of celebrities who manage to keep their private lives to themselves, like George Clooney or Natalie Portman. Very little is known about their private lives. But how much effort does this take? Do stars have to change their lives to keep their privacy? Perhaps when people pick up a celebrity magazine, they should remember that these celebrities are human, not just public property."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Do journalists go too far?" },
        { "letter": "B", "text": "Demand for the smallest detail" },
        { "letter": "C", "text": "When fame ends" },
        { "letter": "D", "text": "How fame has changed" },
        { "letter": "E", "text": "Too high a price?" },
        { "letter": "F", "text": "Their own worst enemy" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph 1", "answer": "D", "explanation": "Paragraph 1 explains how fame evolved from mysterious 20th-century stars to modern public exposure." },
        { "num": 2, "prompt": "Paragraph 2", "answer": "B", "explanation": "Paragraph 2 describes the public's appetite for every small detail through blogs, magazines, and paparazzi." },
        { "num": 3, "prompt": "Paragraph 3", "answer": "A", "explanation": "Paragraph 3 highlights extreme intrusions like phone hacking and uninvited wedding photographers." },
        { "num": 4, "prompt": "Paragraph 4", "answer": "F", "explanation": "Paragraph 4 argues that celebrities sometimes invite media attention and then demand privacy." },
        { "num": 5, "prompt": "Paragraph 5", "answer": "E", "explanation": "Paragraph 5 questions whether the downsides of fame now outweigh the benefits." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "People knew a lot about the private lives of early 20th century stars." },
        { "letter": "B", "text": "The media claim that celebrities want the attention." },
        { "letter": "C", "text": "Overall, the writer feels that we should feel sorry for celebrities." },
        { "letter": "D", "text": "People don't know what to do about the growing interest in celebrities." },
        { "letter": "E", "text": "Countries will change the laws on privacy." },
        { "letter": "F", "text": "Celebrities are often complaining about the media." },
        { "letter": "G", "text": "The media are not the only group at fault." },
        { "letter": "H", "text": "The mystery has been removed from celebrities." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "B", "explanation": "Paragraph 4: reporters say reporting is acceptable because celebrities 'go out to get attention one minute and then ask for privacy the next'." },
        { "num": 7, "answer": "C", "explanation": "Paragraph 5 concludes: 'they should remember that these celebrities are human, not just public property'." },
        { "num": 8, "answer": "D", "explanation": "Paragraph 2: 'nobody knows how we should manage this situation'." },
        { "num": 9, "answer": "G", "explanation": "Paragraph 4: 'we should not only blame newspapers, magazines and photographers... celebrities themselves play a part'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph 1: 'those days of mysterious distant celebrity have gone'." }
      ],
      "wordBank": ["separate", "celebrity gossip", "gossip", "detail", "legal action", "play a part", "blame", "downside"],
      "questions11to15": [
        { "num": 11, "prefix": "The private and professional lives of early stars were mostly", "suffix": ".", "acceptedAnswers": ["separate"], "explanation": "Paragraph 1: 'their private lives and their careers were mainly separate'." },
        { "num": 12, "prefix": "People want to read more and more", "suffix": "in magazines and on websites.", "acceptedAnswers": ["celebrity gossip", "gossip", "detail"], "explanation": "Paragraph 2: 'know every small detail' / 'celebrity gossip magazines'." },
        { "num": 13, "prefix": "In some cases, the bad behaviour of the media has led to celebrities taking", "suffix": ".", "acceptedAnswers": ["legal action"], "explanation": "Paragraph 3: 'Many celebrities have taken legal action against people or newspapers'." },
        { "num": 14, "prefix": "The media might not be the only ones to", "suffix": "in creating this situation.", "acceptedAnswers": ["play a part", "blame"], "explanation": "Paragraph 4: 'celebrities themselves play a part in causing the problem'." },
        { "num": 15, "prefix": "Not having a private life is definitely one", "suffix": "of being famous.", "acceptedAnswers": ["downside"], "explanation": "Paragraph 5: 'Although a celebrity lifestyle may seem like a wonderful life, there is clearly a downside.'" }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "WHY DO BIRDS MIGRATE?",
          "type": "article",
          "content": "Many people believe, wrongly, that birds migrate mainly because of changes in temperatures in the winter months. It is certainly one of the factors, but there are many species of birds, some very small and delicate looking, which don't migrate. If temperatures were the main factor, wouldn't they migrate as well?\nIn fact, the main reason why birds migrate is to find the food they eat. Many birds feed mainly on particular insects, which are plentiful during the summer. But as summer turns to autumn and temperatures decrease, so does the number of insects. So birds have to fly south to find them. The same applies to birds such as ducks and geese, which rely on lakes, ponds, rivers etc. for their food. In winter, many of these areas freeze over, so it's necessary for them to move south in search of open water. Journeys for migrating birds can be thousands of kilometres for some species; for others it can be as little as an hour's journey."
        },
        {
          "label": "Text B",
          "title": "Migrating birds of prey",
          "type": "article",
          "content": "Birds of prey (hunting birds) show how far the physical geography of a region can be both a help and a problem for migrating birds. Mountains are no problem for birds of prey such as hawks. They can use their large wings in the warm air travelling up from the ground to keep them in the air and make their journey quite easy. This is in sharp contrast to small songbirds, which don't have the same physical features as hawks and are unable to use these air currents. For this reason they have to fly hundreds of extra kilometres around the mountains. On the other hand, when hawks reach large areas of water such as the Gulf of Mexico, where there are no air currents to support them, they similarly have to fly around them. Songbirds have no problem here. They just fly across them."
        },
        {
          "label": "Text C",
          "title": "Birdwatching Forum: Peter & Hanna",
          "type": "forum",
          "content": "Peter (25th March 21.45): I'm having an argument with one of my birdwatching friends. He says that Redshanks migrate to sub-tropical regions of Africa from Europe during the winter. I'm sure he's mistaken because I know for a fact that they migrate to the Mediterranean. Can anyone help me show him he's wrong?\nHanna (27th March 14.22): Hi Peter, In summer, Redshanks live in northern Europe and central Europe. In winter, the ones that live in central Europe migrate only a short distance to the Mediterranean coast, so that becomes their territory for the winter. The ones that live further north can't land there because it's already occupied, so they have to fly on to parts of Africa. This happens to other birds too. It's called \"Leap Frog Migration\" because birds have to \"jump\" over occupied territories to find the next suitable places. So you're both right. (Sorry!)"
        },
        {
          "label": "Text D",
          "title": "How birds find their way (Infographic)",
          "type": "infographic",
          "content": "• SUN COMPASS: Birds change direction as the position of the sun changes throughout the day.\n• STAR COMPASS: At night, birds seem to find the right direction by using the stars.\n• MAGNETIC MAP: There may be something in a bird's eyes or mouth which can sense the Earth's magnetic field.\n• ODOUR / SIGHT MAP: Birds recognise smells (wet areas, plants etc.) and landmarks (rivers, skyscrapers, bridges etc.)."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text describes difficulties faced during migration?", "answer": "B", "explanation": "Text B explains how mountains challenge small songbirds and open water challenges hawks." },
        { "num": 17, "prompt": "Which text suggests that the movement of objects in space influences birds' flight?", "answer": "D", "explanation": "Text D describes the Sun Compass and Star Compass used by birds to navigate." },
        { "num": 18, "prompt": "Which text explains why some birds of the same species travel further south than others?", "answer": "C", "explanation": "Text C explains 'Leap Frog Migration', where northern Redshanks fly past occupied Mediterranean territories to Africa." },
        { "num": 19, "prompt": "Which text gives an explanation that people do not realise is important?", "answer": "A", "explanation": "Text A notes people wrongly think temperature is the main driver, whereas finding food is the real main reason." },
        { "num": 20, "prompt": "Which text explains why there has been a disagreement?", "answer": "C", "explanation": "Text C opens with Peter explaining his argument with a birdwatching friend over where Redshanks winter." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Migrating birds have to change their diet." },
        { "letter": "B", "text": "Winter makes food difficult to reach." },
        { "letter": "C", "text": "Body type can make parts of some journeys easier." },
        { "letter": "D", "text": "Songbirds can tolerate the cold better than other birds." },
        { "letter": "E", "text": "Songbirds have to make longer journeys than other birds." },
        { "letter": "F", "text": "Birds of the same kind may spend the winter in different places." },
        { "letter": "G", "text": "It isn't clear how some factors help birds choose their route." },
        { "letter": "H", "text": "Birds can use man-made objects to find their way." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "B", "explanation": "Text A explains insects decrease and lakes/rivers freeze over in winter, making food hard to find." },
        { "num": 22, "answer": "C", "explanation": "Text B notes hawks use their large wings on warm rising mountain air currents to make flight easy." },
        { "num": 23, "answer": "F", "explanation": "Text C explains central European Redshanks winter in the Mediterranean while northern ones fly to Africa." },
        { "num": 24, "answer": "G", "explanation": "Text D uses uncertain phrasing ('seem to find', 'There may be something in a bird's eyes or mouth')." },
        { "num": 25, "answer": "H", "explanation": "Text D notes birds recognise landmarks such as 'skyscrapers, bridges etc.'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Fall in temperature leads to decrease in the", "suffix": ".", "acceptedAnswers": ["number of insects"], "explanation": "Text A: 'as summer turns to autumn and temperatures decrease, so does the number of insects'." },
        { "num": 27, "prefix": "Routes taken can be affected by region's", "suffix": ".", "acceptedAnswers": ["physical geography", "geography"], "explanation": "Text B: 'how far the physical geography of a region can be both a help and a problem'." },
        { "num": 28, "prefix": "eg Hawk avoids open", "suffix": ", which lack air currents.", "acceptedAnswers": ["water"], "explanation": "Text B: 'when hawks reach large areas of water... where there are no air currents to support them'." },
        { "num": 29, "prefix": "Inability to land on other birds'", "suffix": ".", "acceptedAnswers": ["occupied territories", "territories", "territory"], "explanation": "Text C: 'have to \"jump\" over occupied territories to find the next suitable places'." },
        { "num": 30, "prefix": "Sights (eg rivers) and", "suffix": "(eg plants).", "acceptedAnswers": ["smells", "odour"], "explanation": "Text D: 'Birds recognise smells (wet areas, plants etc.) and landmarks (rivers...)'." }
      ]
    },
    "task3": {
      "genre": "Article",
      "prompt": "Use the information you read in texts A, B, C and D to write an article (150–180 words) for your college magazine on bird migration, explaining why it is such a fascinating topic.\n\nDo not copy from the texts. Use your own words as far as possible."
    },
    "task4": {
      "genre": "Report",
      "prompt": "Write a report (150–180 words) for a local newspaper about the advantages and disadvantages social media has had on people your age."
    }
  },
  {
    "id": "ise2_official_sp4",
    "title": "Official Sample Paper 4: Children's Play & Waste Management",
    "durationMinutes": 120,
    "task1": {
      "title": "The Importance of Free Play in Childhood",
      "paragraphs": [
        {
          "label": "1",
          "text": "Play makes children very happy. When asked, they say they are happier when playing with friends than in any other situation. Yet the amount of time children play together without parents or teachers watching them or telling them what to do (what the experts call 'free play') is getting less and less. This trend has started to worry a number of senior psychologists and child experts. They argue that without adequate time for free play children cannot develop into confident and fully mature adults, which will eventually have a negative effect on society as a whole."
        },
        {
          "label": "2",
          "text": "Part of the problem lies with parents. They recognise that their children play by themselves less frequently than they did, but admit that they restrict the amount of outdoor play because they worry about their safety. But another part of the problem is that we now want school to start at a very early age. Preschools and nursery schools have introduced more academic activities and many schools have even reduced break times. This doesn't mean we are against the idea of play, but it does show that we don't value play enough as part of a child's development."
        },
        {
          "label": "3",
          "text": "Play is important because it gives children a chance to find and develop their own interests without being instructed by adults. It is here that children first learn how to make decisions, solve problems, use self-control, and follow rules. Children who don't go through this stage are likely to grow up feeling that they are not in control of their own lives and are much more likely to feel anxious as a result."
        },
        {
          "label": "4",
          "text": "As well as making decisions, children also learn how to deal with emotions such as anger or fear when they are playing. Things like role playing and climbing trees can be a little frightening but it is the children themselves who decide how far they want to go with each activity. People who do not have the opportunity to experience and cope with such feelings will be less able to manage when they are faced with emotionally challenging situations in adult life."
        },
        {
          "label": "5",
          "text": "Finally, play is a natural means of making friends through learning to cooperate with other children and treating them fairly. Children must think about the needs and wishes of those they play with as well as their own. If they don't, they will not be allowed to stay in the group (largely because their behaviour will cause the game to fail). Those who miss this early form of social interaction are more likely to feel socially isolated in later life."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Discovering yourself early in life" },
        { "letter": "B", "text": "Thinking about others" },
        { "letter": "C", "text": "What this means for all of us" },
        { "letter": "D", "text": "Play leads to improved academic results" },
        { "letter": "E", "text": "Being limited from two sides" },
        { "letter": "F", "text": "Knowing when to stop" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph 1", "answer": "C", "explanation": "Paragraph 1 warns that declining free play prevents children becoming mature adults, negatively affecting society as a whole." },
        { "num": 2, "prompt": "Paragraph 2", "answer": "E", "explanation": "Paragraph 2 explains play is restricted by both anxious parents and more academic early schooling." },
        { "num": 3, "prompt": "Paragraph 3", "answer": "A", "explanation": "Paragraph 3 highlights how play lets children discover their own interests, make decisions, and build self-control." },
        { "num": 4, "prompt": "Paragraph 4", "answer": "F", "explanation": "Paragraph 4 notes children decide for themselves how far to go in slightly frightening activities like climbing trees." },
        { "num": 5, "prompt": "Paragraph 5", "answer": "B", "explanation": "Paragraph 5 emphasizes cooperating fairly and considering the needs and wishes of other children." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Free play requires no adult to supervise." },
        { "letter": "B", "text": "Adults feel they should supervise some play activities." },
        { "letter": "C", "text": "Parents base attitudes to play on their own childhood experience." },
        { "letter": "D", "text": "Opportunities for play in schools have become fewer." },
        { "letter": "E", "text": "Free play will help children to become more obedient." },
        { "letter": "F", "text": "Play should never be frightening." },
        { "letter": "G", "text": "Play makes children less selfish." },
        { "letter": "H", "text": "Children should not forget their own needs when playing." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph 1 defines free play as playing 'without parents or teachers watching them or telling them what to do'." },
        { "num": 7, "answer": "B", "explanation": "Paragraph 2 notes parents restrict outdoor play because they worry about children's safety." },
        { "num": 8, "answer": "D", "explanation": "Paragraph 2 states 'many schools have even reduced break times'." },
        { "num": 9, "answer": "G", "explanation": "Paragraph 5 explains children must 'think about the needs and wishes of those they play with'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph 5: 'think about the needs and wishes of those they play with as well as their own'." }
      ],
      "wordBank": ["parents or teachers", "safety", "academic", "emotionally challenging", "socially isolated", "isolated", "free play", "break times"],
      "questions11to15": [
        { "num": 11, "prefix": "Today, children's play is more likely to be watched by either", "suffix": ".", "acceptedAnswers": ["parents or teachers"], "explanation": "Paragraph 1: 'without parents or teachers watching them'." },
        { "num": 12, "prefix": "Parents allow children less free play because of", "suffix": "concerns.", "acceptedAnswers": ["safety"], "explanation": "Paragraph 2: 'restrict the amount of outdoor play because they worry about their safety'." },
        { "num": 13, "prefix": "There is less time for play because early schooling has become more", "suffix": ".", "acceptedAnswers": ["academic"], "explanation": "Paragraph 2: 'Preschools and nursery schools have introduced more academic activities'." },
        { "num": 14, "prefix": "Children who don't play are less able to cope later with situations which are", "suffix": ".", "acceptedAnswers": ["emotionally challenging"], "explanation": "Paragraph 4: 'when they are faced with emotionally challenging situations in adult life'." },
        { "num": 15, "prefix": "Early social interaction will prevent people becoming", "suffix": ".", "acceptedAnswers": ["socially isolated", "isolated"], "explanation": "Paragraph 5: 'more likely to feel socially isolated in later life'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Waste Management in the Netherlands",
          "type": "article",
          "content": "The Netherlands is a good example of a country which manages its waste effectively. It discovered that its landfill sites, areas of land where rubbish is put, were almost full. Since then a combination of government action, positive response from industry and the determination of ordinary people to minimise waste has made the Netherlands one of the cleanest countries in Europe.\nAs well as finding effective ways of dealing with waste once it is produced, the emphasis has also been on creating as little waste as possible in the first place. 90% of Dutch families separate their household waste, and many companies have developed their own recycling schemes, taking out any valuable raw materials from waste products, burning anything that is left over and disposing of what is left in an environmentally friendly way."
        },
        {
          "label": "Text B",
          "title": "Email from Mark: School Project Visit",
          "type": "article",
          "content": "To: jake@email.net\nSubject: Recycling\n\nHi Jake,\nWe visited this waste management company yesterday as part of my school project. It's amazing what they're doing. First they take out all the stuff they can recycle from the waste; then they use a special process on the rest which produces a gas that generates electricity. The solid stuff that's left over they use to produce materials for the building industry. After that there's hardly any left to throw away. They told us how important this is as the country is running out of landfill space. They are even considering digging up old landfill sites and recovering waste material from years ago to do the same process. It all depends on the costs. Ideally, we could turn into a waste-free society within a few years.\nMark"
        },
        {
          "label": "Text C",
          "title": "Say 'NO' to Audley Campaign Leaflet",
          "type": "article",
          "content": "The news that the operators of Audley landfill site have submitted an application to extend the life of the site by ten years is a serious threat to the area. The operators say the site is needed, but none of the waste is from our area. We say to the authorities that we have had twenty years of noisy lorries entering and exiting the site all day and twenty years of smells and fumes, which damage our peaceful neighbourhood. So join us in a demonstration against the application this Friday. Bring cars, vans and bikes to block access to the site by rubbish trucks, and demand that our protest is heard.\nFor full details, see 'Action against Audley' on our website.\nFrom the team at the 'No-To-Audley-Landfill' campaign"
        },
        {
          "label": "Text D",
          "title": "Breaking the waste cycle (Infographic)",
          "type": "infographic",
          "content": "Worldwide waste - per day:\n• 2015: 3.5 million tonnes\n• 2025: 7 million tonnes\n• 2100: 11 million tonnes\n\nWhere does it go? Landfill or ocean.\n• UK landfill sites will be full in two years\n• Zero landfill = £17 billion saving per year\n\nREDUCE: 16% of the cost of food is packaging.\nRE-USE: We don't wear 30% of our clothes; 25% of electrical goods could be re-used.\nRECYCLE: Over 60% of rubbish we throw in our bins could be recycled."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text draws attention to the unpleasant effects of waste disposal?", "answer": "C", "explanation": "Text C describes twenty years of noisy lorries, smells, and fumes near Audley landfill site." },
        { "num": 17, "prompt": "Which text predicts that waste will increase in the future?", "answer": "D", "explanation": "Text D projects daily global waste rising from 3.5m tonnes (2015) to 7m (2025) and 11m (2100)." },
        { "num": 18, "prompt": "Which text explains how national waste management can be improved by working together?", "answer": "A", "explanation": "Text A credits 'a combination of government action, positive response from industry and the determination of ordinary people'." },
        { "num": 19, "prompt": "Which text shows why the world needs to take action on the problem of waste?", "answer": "D", "explanation": "Text D highlights overflowing landfills, ocean waste, and £17 billion in annual savings from zero landfill." },
        { "num": 20, "prompt": "Which text describes the different stages in getting the maximum benefit from waste products?", "answer": "B", "explanation": "Text B outlines extracting recyclables, producing gas for electricity, and turning solid residue into building materials." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Food packaging is expensive for the customer and the environment." },
        { "letter": "B", "text": "With modern methods it's possible to put almost all waste to good use." },
        { "letter": "C", "text": "It would be too expensive to take waste out of old landfill sites." },
        { "letter": "D", "text": "We should put as much effort into reducing waste as we do into managing it." },
        { "letter": "E", "text": "Commercial waste is more of a problem than domestic waste." },
        { "letter": "F", "text": "The most frequent protests are against landfill sites in residential areas." },
        { "letter": "G", "text": "We could recycle over half of the waste we currently put in our dustbins." },
        { "letter": "H", "text": "The demonstration aims to stop vehicles getting into the landfill site." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text D notes '16% of the cost of food is packaging' and waste goes to landfills or oceans." },
        { "num": 22, "answer": "B", "explanation": "Text B: 'After that there's hardly any left to throw away.'" },
        { "num": 23, "answer": "D", "explanation": "Text A: 'As well as finding effective ways of dealing with waste... the emphasis has also been on creating as little waste as possible'." },
        { "num": 24, "answer": "G", "explanation": "Text D: 'Over 60% of rubbish we throw in our bins could be recycled.'" },
        { "num": 25, "answer": "H", "explanation": "Text C urges protesters to 'block access to the site by rubbish trucks'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Politicians, businesses and citizens can", "suffix": ".", "acceptedAnswers": ["minimise waste"], "explanation": "Text A: 'determination of ordinary people to minimise waste'." },
        { "num": 27, "prefix": "Households separate rubbish and companies have", "suffix": ".", "acceptedAnswers": ["recycling schemes"], "explanation": "Text A: 'many companies have developed their own recycling schemes'." },
        { "num": 28, "prefix": "Produce electricity using", "suffix": ".", "acceptedAnswers": ["a special process", "gas"], "explanation": "Text B: 'use a special process on the rest which produces a gas that generates electricity'." },
        { "num": 29, "prefix": "Aim: to become a", "suffix": "in a short time.", "acceptedAnswers": ["waste-free society"], "explanation": "Text B: 'turn into a waste-free society within a few years'." },
        { "num": 30, "prefix": "Lorries cause: noise and", "suffix": ".", "acceptedAnswers": ["smells and fumes"], "explanation": "Text C: 'twenty years of noisy lorries... and twenty years of smells and fumes'." }
      ]
    },
    "task3": {
      "genre": "Essay",
      "prompt": "Use the information you read in texts A, B, C and D to write an essay (150–180 words) about the problem of waste and how to solve it.\n\nDo not copy from the texts. Use your own words as far as possible."
    },
    "task4": {
      "genre": "Article",
      "prompt": "Write an article (150–180 words) for your college magazine with the title 'My role model'. Explain why you consider this person a role model and whether you think people should have role models in their lives."
    }
  },
  {
    "id": "ise2_official_sp5",
    "title": "Official Sample Paper 5: Hackney City Farm & Workplace Exercise",
    "durationMinutes": 120,
    "task1": {
      "title": "Hackney City Farm",
      "paragraphs": [
        {
          "label": "1",
          "text": "The site of Hackney City Farm in East London has had many uses, from button making to furniture manufacture. But, early in the 1800s, the site was used as market gardens, and the fruit and vegetables that were produced were sold in the city. From 1940 onwards, the site was used as a base for a lorry transport company, but in 1982 local people started to keep some animals in the area, and in 1984 Hackney City Farm was born. Inspired by another city farm, not far away, its aim was to give adults and children the chance to experience farming in an urban area."
        },
        {
          "label": "2",
          "text": "When the city farm took over the site, it was dirty and run-down. The old buildings were converted into shelters for animals and now it is inhabited by a variety of animals and has a productive vegetable garden. Apart from an employed farm worker, local volunteers help look after the farm. There are regular visits from schoolchildren. The aim is to inform them about food and nature, with extra workshops on creating objects from recycled materials, and on growing plants. Visits are free for schoolchildren, and everyone else, in fact."
        },
        {
          "label": "3",
          "text": "The farm also runs projects. One of these was what is known as an ‘intergenerational project’, in which children and older people worked together. The theme of the project was working life in the past and covered the businesses that have disappeared, like woodworking and clothing manufacture. The older people shared their work experiences and the children used these ideas to do role plays of the jobs people used to do, and write a poem about them. The older people were inspired by the children’s energy, and the children appreciated the older people’s knowledge."
        },
        {
          "label": "4",
          "text": "If you visit the farm, apart from seeing the animals and the gardens, you might take part in a pottery workshop or visit the award-winning café. To remember your visit, you can buy farm produce, including eggs and honey. The farm shop, which is at the entrance to the farm, has recently been re-designed by a firm of architects who were sympathetic to the farm’s aims. They decided not to build a structure there, but keep the space open — in fact they knocked down a small section of wall, so that visitors can immediately see the vegetable garden."
        },
        {
          "label": "5",
          "text": "The farm may not be a key tourist attraction, as there isn’t a huge amount for anyone over five to see there. However, if you go, you will appreciate what the farm has achieved. They have raised awareness of the advantages of eating local products and created a peaceful space in the middle of a city area. Peaceful, that is, apart from the animal noises! People moving into the area have to sign a document to say that they will not complain about the noise — and they have to keep this promise! If you’re finding the stress of the city too much, you should try an afternoon at Hackney City Farm as an enjoyable alternative."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Creating a first impression" },
        { "letter": "B", "text": "Teaching skills to the young" },
        { "letter": "C", "text": "Bringing tourism to the city" },
        { "letter": "D", "text": "Not as quiet as it seems" },
        { "letter": "E", "text": "Going back to its roots" },
        { "letter": "F", "text": "Remembering past industries" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph 1", "answer": "E", "explanation": "Paragraph 1 traces the site from 1800s market gardens and various industries back to urban farming in 1984." },
        { "num": 2, "prompt": "Paragraph 2", "answer": "B", "explanation": "Paragraph 2 describes school visits and workshops teaching children about food, nature, plants, and recycling." },
        { "num": 3, "prompt": "Paragraph 3", "answer": "F", "explanation": "Paragraph 3 focuses on an intergenerational project exploring past and disappeared industries like woodworking and clothing manufacture." },
        { "num": 4, "prompt": "Paragraph 4", "answer": "A", "explanation": "Paragraph 4 describes the entrance farm shop redesign that opens a direct view of the vegetable garden to visitors." },
        { "num": 5, "prompt": "Paragraph 5", "answer": "D", "explanation": "Paragraph 5 notes the space is peaceful except for animal noises and explains the no-complaints agreement for new neighbors." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "The farm site had been used for various industries." },
        { "letter": "B", "text": "The farm in Hackney was the first city farm in London." },
        { "letter": "C", "text": "The old buildings on the city farm site were re-used." },
        { "letter": "D", "text": "Local people work on the city farm for no payment." },
        { "letter": "E", "text": "The children wrote about the jobs the old people used to do." },
        { "letter": "F", "text": "The older people benefited the most from the project." },
        { "letter": "G", "text": "The architects only made minor changes to the shop area." },
        { "letter": "H", "text": "The farm has received complaints about the animal noise." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph 1 mentions past uses including button making, furniture manufacture, and a lorry transport base." },
        { "num": 7, "answer": "C", "explanation": "Paragraph 2: 'The old buildings were converted into shelters for animals'." },
        { "num": 8, "answer": "D", "explanation": "Paragraph 2: 'local volunteers help look after the farm'." },
        { "num": 9, "answer": "E", "explanation": "Paragraph 3: 'the children used these ideas to do role plays of the jobs people used to do, and write a poem about them'." },
        { "num": 10, "answer": "G", "explanation": "Paragraph 4: architects kept the space open and 'knocked down a small section of wall'." }
      ],
      "wordBank": ["lorry transport company", "transport company", "recycled materials", "shared", "aims", "awareness", "volunteers", "woodworking"],
      "questions11to15": [
        { "num": 11, "prefix": "The most recent industrial use of the site before the farm was by a", "suffix": ".", "acceptedAnswers": ["lorry transport company", "transport company"], "explanation": "Paragraph 1: 'From 1940 onwards, the site was used as a base for a lorry transport company'." },
        { "num": 12, "prefix": "On the farm, schoolchildren also learn how to make things from", "suffix": ".", "acceptedAnswers": ["recycled materials"], "explanation": "Paragraph 2: 'extra workshops on creating objects from recycled materials'." },
        { "num": 13, "prefix": "In the project, the older people", "suffix": "their memories of their jobs.", "acceptedAnswers": ["shared"], "explanation": "Paragraph 3: 'The older people shared their work experiences'." },
        { "num": 14, "prefix": "The architects who worked on the shop area understood the", "suffix": "of Hackney City Farm.", "acceptedAnswers": ["aims"], "explanation": "Paragraph 4: 'architects who were sympathetic to the farm’s aims'." },
        { "num": 15, "prefix": "The farm has managed to increase", "suffix": "of the value of local food.", "acceptedAnswers": ["awareness"], "explanation": "Paragraph 5: 'They have raised awareness of the advantages of eating local products'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Workplace Exercise & Productivity",
          "type": "article",
          "content": "We all know that exercise is good for us, but most of us just don’t have time for it in our busy lives. One man thinks he has a solution to this problem. Jim Overlord is the Managing Director of Lords, one of the biggest companies in this city. Lords employs 500 people in its factory and a further 300 administrative staff. Jim is so convinced of the benefits of exercise that he is giving all of his office staff time off during their working day to exercise. He sees this not as an expense for his company, but as a way of making it more profitable.\nHe may be right. A study by the University of Avon found that employees who exercise during the day are more focused and efficient when they return to work, and much better at problem solving. They are also healthier, which means that they take less time off. One study in Australia found that, in companies where staff were able to exercise regularly, employees took an average of 15% fewer days off for illness. Jim Overlord believes that the costs to the company of his exercise programme will be repaid by the improvement in productivity."
        },
        {
          "label": "Text B",
          "title": "Email from Jim: New gym",
          "type": "article",
          "content": "To: employees@lords.com\nFrom: jim@lords.com\nSubject: New gym\n\nDear Employee,\nThe new Lords company gym is finally open! All the details are in the leaflet attached. To encourage you all to get into good habits, anybody who exercises 4 times a week for the next month will get an extra Friday afternoon off!\nFamily members can also use the gym for a small charge, but they must be accompanied by an employee. You can use it at any time, but if you go during normal working hours (9am to 5pm) there’s a limit of 40 minutes per day. Make sure you check with your manager so you’re not out of the office at an inconvenient time.\nOf course, exercising is not compulsory, but I strongly encourage you to make use of the new facilities every day. It’ll be good for you and good for the company!\n\nKind regards,\nJim"
        },
        {
          "label": "Text C",
          "title": "Staff Chat: New Exercise Programme",
          "type": "forum",
          "content": "Keith: What does everyone think about this new exercise programme? Personally, I’m not keen.\nMick: Why not?\nKeith: I don’t like being told what to do. My health is my business. Next we’ll be told what we should eat as well!\nMarianne: But it’s not compulsory, is it? No-one’s forcing you to exercise.\nKeith: Not really, but it’s the boss’s idea so I feel pressured to do it even though I don’t want to.\nAngie: Yes. And yesterday I needed my secretary to do something urgent and I had to wait nearly an hour for her to get back from the gym!\nMarianne: I like the running club. It’s a way to make friends with other people in the company."
        },
        {
          "label": "Text D",
          "title": "Lords Exercise Facilities Guide (Infographic)",
          "type": "infographic",
          "content": "• Gym: Lords ID card; Employees: FREE; Family members: Adults £5, Students 12–18 £2, No children under 12.\n• Running group: Tuesday and Thursday, 1230–1330; Maximum 20 people per day; Book online; Meeting place given when you book.\n• Table tennis: Only available via online booking; 5 minutes’ walk."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text aims to motivate people to use a facility?", "answer": "B", "explanation": "Text B offers an extra Friday afternoon off for exercising 4 times a week and encourages staff to use the gym." },
        { "num": 17, "prompt": "Which text explains why exercise is good for both staff and companies?", "answer": "A", "explanation": "Text A explains how daytime exercise makes staff healthier, more focused, and efficient while boosting company productivity and cutting sick leave." },
        { "num": 18, "prompt": "Which text points out some problems of a system?", "answer": "C", "explanation": "Text C highlights complaints about feeling pressured, disliking being told what to do, and waiting nearly an hour for a secretary at the gym." },
        { "num": 19, "prompt": "Which text says that something is worth more money than it costs?", "answer": "A", "explanation": "Text A states Jim sees the programme not as an expense, expecting its costs to be repaid by higher productivity." },
        { "num": 20, "prompt": "Which text outlines a range of options available?", "answer": "D", "explanation": "Text D presents details and booking/access rules for the gym, running group, and table tennis." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "All of the employees at Lords can take time off for exercise." },
        { "letter": "B", "text": "The Australian study showed that having an exercise programme for employees reduced staff absence by 15%." },
        { "letter": "C", "text": "Families of Lords employees can use the gym on their own." },
        { "letter": "D", "text": "Employees of Lords can use the gym for an hour from 9.00am." },
        { "letter": "E", "text": "Employees have to exercise every day." },
        { "letter": "F", "text": "Marianne enjoys the social benefits of the exercise programme." },
        { "letter": "G", "text": "Only a limited number of people can take part in each run." },
        { "letter": "H", "text": "You have to reserve the tennis table in advance." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A states Jim is giving 'all of his office staff time off during their working day to exercise'." },
        { "num": 22, "answer": "B", "explanation": "Text A: 'employees took an average of 15% fewer days off for illness'." },
        { "num": 23, "answer": "F", "explanation": "Text C: Marianne says 'I like the running club. It’s a way to make friends with other people in the company.'" },
        { "num": 24, "answer": "G", "explanation": "Text D lists 'Maximum 20 people per day' for the running group." },
        { "num": 25, "answer": "H", "explanation": "Text D specifies table tennis is 'Only available via online booking'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Family member welcome, but not open to", "suffix": ".", "acceptedAnswers": ["children under 12", "children"], "explanation": "Text D: 'No children under 12'." },
        { "num": 27, "prefix": "Need to", "suffix": "for running club through website.", "acceptedAnswers": ["book"], "explanation": "Text D: 'Book online'." },
        { "num": 28, "prefix": "Makes employees more", "suffix": "during work time.", "acceptedAnswers": ["focused", "efficient", "focused and efficient"], "explanation": "Text A: 'more focused and efficient when they return to work'." },
        { "num": 29, "prefix": "Staff need", "suffix": "for illness.", "acceptedAnswers": ["fewer days off", "less time off"], "explanation": "Text A: 'fewer days off for illness' / 'take less time off'." },
        { "num": 30, "prefix": "Can be", "suffix": "for managers/colleagues if people absent from office.", "acceptedAnswers": ["inconvenient"], "explanation": "Text B: 'not out of the office at an inconvenient time'." }
      ]
    },
    "task3": {
      "genre": "Article",
      "prompt": "Use the information you read in texts A, B, C and D to write an article (150–180 words) for a website about the exercise programme at Lords. Explain how it works and outline the advantages and disadvantages of the programme.\n\nDo not copy from the texts. Use your own words as far as possible."
    },
    "task4": {
      "genre": "Letter",
      "prompt": "Your friend wants to change a career. Write a letter (150–180 words) to your friend explaining whether you agree that changing a career is a positive thing. Highlight some of the advantages and disadvantages of career change."
    }
    },
	{
    "id": "ise2_official_sp6",
    "title": "Official Sample Paper 6: Cycling in Santiago & Plockton",
    "durationMinutes": 120,
    "task1": {
      "title": "Cycling in Santiago",
      "paragraphs": [
        {
          "label": "1",
          "text": "Santiago is the capital city of Chile, in South America. It is home to 7 million people, and there are over 4 million vehicles on its busy streets. In 2017, a study was done of 390 cities around the world to find which had the worst traffic jams, and Santiago was ranked 10th on the list. So you might not think it would be a great place for cycling. However, there has been an enormous increase in the popularity of cycling in the city. The number of cyclists has been rising by at least 15% every year recently. In 2006, only about 3% of journeys in the city were made by bike, but by 2016 that had doubled to 6%."
        },
        {
          "label": "2",
          "text": "This increase is largely due to the efforts of one man. Gonzalo Stierling Aguayo is the founder of a project to get the people of Santiago cycling more. He persuaded the city's leaders to ban motor vehicles from the main roads of the city once a week. This means that every Sunday until 2pm the centre of the city becomes a 40-kilometre-long cycle path. About 40,000 people use the roads to cycle, roller skate, skateboard or just walk around the city, free from traffic."
        },
        {
          "label": "3",
          "text": "Gonzalo got the idea from a similar project already in place in Bogota, Colombia. The Santiago city leaders refused to give any money to the project, so it relies completely on sponsorship from local businesses. At first just a few roads were closed, but now seven areas of the city participate. Despite some initial opposition from drivers, most people think the project has made an enormous improvement to the city. Many other South American countries, including Mexico, Venezuela and Peru, have been inspired by its success to start something similar."
        },
        {
          "label": "4",
          "text": "The project transforms Santiago. It not only gives people more opportunity to exercise, but also encourages them to explore the city and mix more with their neighbours. According to Gonzalo, this is the greatest benefit of the project. Santiago is a city where people tend to stay in their own part of town and not have much contact with people in other areas, but cycling has changed this and helped to break down some of the social barriers. This is particularly noticeable in Parque Metropolitano, the largest urban park in South America. Previously, it was mostly used by people living near it in the city centre, but many now cycle there from the outskirts of the city."
        },
        {
          "label": "5",
          "text": "Gonzalo and his team plan to continue expanding the project and eventually to have the whole of the city closed to motor vehicle traffic on Sunday mornings. His dream is that there will be a vehicle-free route from the far north of the city through to the south. He also hopes to have an impact on weekday traffic by encouraging people to use their cycles to get to work. He believes more people should use cycles, not just for recreation, but as an everyday form of transport."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Connecting people" },
        { "letter": "B", "text": "No cars allowed!" },
        { "letter": "C", "text": "Big ambitions" },
        { "letter": "D", "text": "Opposition from drivers" },
        { "letter": "E", "text": "The idea spreads" },
        { "letter": "F", "text": "A growing means of transport" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph 1", "answer": "F", "explanation": "Paragraph 1 highlights Santiago's heavy traffic alongside the rapid rise in cycling from 3% to 6% of journeys." },
        { "num": 2, "prompt": "Paragraph 2", "answer": "B", "explanation": "Paragraph 2 describes banning motor vehicles from main roads every Sunday until 2pm to create a traffic-free route." },
        { "num": 3, "prompt": "Paragraph 3", "answer": "E", "explanation": "Paragraph 3 explains how Gonzalo adapted the idea from Bogotá and inspired other South American countries to follow." },
        { "num": 4, "prompt": "Paragraph 4", "answer": "A", "explanation": "Paragraph 4 focuses on how cycling brings neighbours together and breaks down social barriers across the city." },
        { "num": 5, "prompt": "Paragraph 5", "answer": "C", "explanation": "Paragraph 5 outlines plans to close the whole city on Sunday mornings, build a north-to-south route, and boost weekday commuting." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Santiago's traffic jams are the 10th worst in the world." },
        { "letter": "B", "text": "Cars are allowed back on the roads in Santiago after 2 o'clock on Sunday afternoons." },
        { "letter": "C", "text": "There is a separate path for cycles next to the main roads of the city." },
        { "letter": "D", "text": "Santiago was the first city in South America to do something like this." },
        { "letter": "E", "text": "Gonzalo's project depends on money from private companies." },
        { "letter": "F", "text": "Gonzalo thinks the best thing about cycling is that it encourages contact between neighbours." },
        { "letter": "G", "text": "Parque Metropolitano is on the edge of the city of Santiago." },
        { "letter": "H", "text": "Gonzalo wants people to be able to cycle the entire length of the city without meeting any cars." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph 1: in a 2017 study of 390 cities, 'Santiago was ranked 10th on the list' for worst traffic jams." },
        { "num": 7, "answer": "B", "explanation": "Paragraph 2: main roads are banned to motor vehicles 'every Sunday until 2pm'." },
        { "num": 8, "answer": "E", "explanation": "Paragraph 3: 'it relies completely on sponsorship from local businesses'." },
        { "num": 9, "answer": "F", "explanation": "Paragraph 4: encouraging people to explore and mix more with neighbours is 'the greatest benefit of the project'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph 5: 'His dream is that there will be a vehicle-free route from the far north of the city through to the south.'" }
      ],
      "wordBank": ["doubled", "to ban", "inspired", "opportunity to exercise", "recreation", "sponsorship", "social barriers", "everyday form of transport"],
      "questions11to15": [
        { "num": 11, "prefix": "The proportion of trips made by bike in Santiago", "suffix": "in one decade.", "acceptedAnswers": ["doubled"], "explanation": "Paragraph 1: 'In 2006, only about 3% of journeys... by 2016 that had doubled to 6%'." },
        { "num": 12, "prefix": "Gonzalo convinced people that it would be a good idea", "suffix": "cars on Sunday.", "acceptedAnswers": ["to ban"], "explanation": "Paragraph 2: 'persuaded the city's leaders to ban motor vehicles from the main roads... once a week'." },
        { "num": 13, "prefix": "Aguayo's idea has", "suffix": "people in other countries to do the same thing.", "acceptedAnswers": ["inspired"], "explanation": "Paragraph 3: 'Many other South American countries... have been inspired by its success to start something similar.'" },
        { "num": 14, "prefix": "The traffic-free roads offer people a greater", "suffix": ".", "acceptedAnswers": ["opportunity to exercise"], "explanation": "Paragraph 4: 'gives people more opportunity to exercise'." },
        { "num": 15, "prefix": "At the moment, cycling in the city is mainly used as a form of", "suffix": "rather than for getting to work.", "acceptedAnswers": ["recreation"], "explanation": "Paragraph 5: 'use cycles, not just for recreation, but as an everyday form of transport'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "www.visitplockton.com - Plockton, Highlands of Scotland",
          "type": "article",
          "content": "Plockton, surrounded by dramatic mountains and with its lakeside position, is considered to be one of the most beautiful villages in the Highlands. It has around 380 inhabitants. Popular with walkers and sailors, it is the perfect place for a peaceful holiday. Facing away from the winds, Plockton has a mild climate, which has enabled palm trees to grow along the main street. If wildlife is your interest, you should go on the famous Plockton boat trip you are guaranteed to see seals. If you did not, your money would be refunded, but this has never happened. As for food, seafood is a speciality."
        },
        {
          "label": "Text B",
          "title": "Email from Maggie to Pablo",
          "type": "article",
          "content": "To: pablo@email.com\nFrom: maggie@email.com\n\nHi Pablo,\nI've recently returned from Plockton, where I grew up. That was many years ago! Although it's just a small village and fewer than 300 kids went to school there, I got good qualifications. Only a few young people actually lived in the village, and nearly all of us had to leave to find work. That's why I ended up working with you in London!\nI haven't been back for years. But Plockton looked much the same, except for some new houses on the way in to the village. No bad thing, in my opinion, as villages need new life to survive. What was most disappointing was the number of houses in the village that are now just holiday homes - the owners make infrequent visits or rent out their houses to tourists. I can't afford to buy a house there now! And I'm afraid Plockton didn't quite feel the same as it did before. Oh, well, it's still beautiful.\n\nKind regards,\nMaggie"
        },
        {
          "label": "Text C",
          "title": "Paradise village? by Ben Jones",
          "type": "forum",
          "content": "On a recent visit to the village of Plockton, I was stunned by its beauty. 'I could live here,' I thought. But could I? I decided to do some research to find out.\nDonald Campbell told me, 'The locals are friendly but the community life isn't the same it's not so much fun. There used to be great live music. If you'd seen me dancing, you'd have been impressed!'\nThen I talked to Marie Mackenzie. 'I love being outdoors in Plockton with my friends,' she said. 'But life is easier for teenagers in other places - there are no activities for us here. If I want to buy some clothes with my friends, it's a 260-kilometre round trip. In fact, travelling in general is quite tricky. If I were you, I'd think twice about moving here if you have teenage children.'\nSo, would it be fair to bring my family to live here? I'm not sure. We may just have to come for holidays."
        },
        {
          "label": "Text D",
          "title": "Plockton Map & Facts (Infographic)",
          "type": "infographic",
          "content": "• Population: 380\n• Holiday homes: 60%\n• House prices: rising (↑)\n• Nearest city: 130km\n• Features & transport shown: Beaches, Walk paths, Lake, Island, Seals, Boats/sailing, Primary school, Secondary school, New houses, Train station, Bus station (CLOSED)."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text expresses agreement with a new development?", "answer": "B", "explanation": "In Text B, Maggie says the new houses on the way into the village are 'No bad thing, in my opinion, as villages need new life to survive.'" },
        { "num": 17, "prompt": "Which text gives information about some places in the village?", "answer": "D", "explanation": "Text D's map/infographic shows places and features such as beaches, primary and secondary schools, train station, closed bus station, lake, and island." },
        { "num": 18, "prompt": "Which text considers if living in Plockton would be the best option?", "answer": "C", "explanation": "In Text C, Ben asks 'But could I?' and wonders if it would be fair to bring his family to live there or just visit for holidays." },
        { "num": 19, "prompt": "Which text recommends some activities to do in Plockton?", "answer": "A", "explanation": "Text A highlights walking, sailing, eating seafood, and taking the famous Plockton boat trip to see seals." },
        { "num": 20, "prompt": "Which text states the opinion of a young person about life in Plockton?", "answer": "C", "explanation": "Text C quotes teenager Marie Mackenzie on outdoor life, lack of activities for teens, and long travel distances." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "People who have gone on a boat trip have always seen seals." },
        { "letter": "B", "text": "Yachting is a popular pastime on the lake at Plockton." },
        { "letter": "C", "text": "Very few people of Maggie's age stayed in the village." },
        { "letter": "D", "text": "Maggie is planning to buy a house in the place where she grew up." },
        { "letter": "E", "text": "Donald Campbell used to be a good dancer." },
        { "letter": "F", "text": "Marie thinks it would be a good idea for Ben to move to Plockton." },
        { "letter": "G", "text": "It is advisable for tourists to travel to Plockton by bus." },
        { "letter": "H", "text": "Schoolchildren of different ages are educated in the village of Plockton." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A states money would be refunded if seals weren't seen on the boat trip, 'but this has never happened'." },
        { "num": 22, "answer": "B", "explanation": "Text A notes Plockton is 'Popular with walkers and sailors' and Text D shows sailboats on the lake." },
        { "num": 23, "answer": "C", "explanation": "Text B: 'Only a few young people actually lived in the village, and nearly all of us had to leave to find work.'" },
        { "num": 24, "answer": "E", "explanation": "Text C: Donald Campbell remarks, 'If you'd seen me dancing, you'd have been impressed!'" },
        { "num": 25, "answer": "H", "explanation": "Text D shows both a 'Primary school' and a 'Secondary school' in Plockton." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Advantages: Beautiful location;", "suffix": "means palm trees!", "acceptedAnswers": ["mild climate"], "explanation": "Text A: 'Plockton has a mild climate, which has enabled palm trees to grow'." },
        { "num": 27, "prefix": "Disadvantages: Local people", "suffix": "to buy houses.", "acceptedAnswers": ["can't afford"], "explanation": "Text B: 'I can't afford to buy a house there now!' and Text D shows rising house prices." },
        { "num": 28, "prefix": "Long distance to get to", "suffix": ".", "acceptedAnswers": ["nearest city", "city"], "explanation": "Text D lists 'Nearest city: 130km'." },
        { "num": 29, "prefix": "Disadvantages:", "suffix": "for teenagers to do.", "acceptedAnswers": ["no activities"], "explanation": "Text C: Marie says 'there are no activities for us here'." },
        { "num": 30, "prefix": "The", "suffix": "is less lively now than in the past.", "acceptedAnswers": ["community life", "community"], "explanation": "Text C: Donald says 'the community life isn't the same it's not so much fun'." }
      ]
    },
    "task3": {
      "genre": "Article",
      "prompt": "Use the information you read in texts A, B, C and D to write an article (150–180 words) for a lifestyle magazine about the advantages and disadvantages of living in Plockton.\n\nDo not copy from the texts. Use your own words as far as possible."
    },
    "task4": {
      "genre": "Essay",
      "prompt": "Write an essay (150–180 words) for your college course about a job you would like to do. Say what you would enjoy about the job and what you think you would need to do to get this job."
    }
  },
  {
    "id": "ise2_official_sp7",
    "title": "Official Sample Paper 7: Wildlife Filming & Water",
    "durationMinutes": 120,
    "task1": {
      "title": "Unusual Jobs: Wildlife Photography and Videography",
      "paragraphs": [
        {
          "label": "1",
          "text": "When we think about jobs, we usually imagine the more familiar jobs such as being a teacher, doctor or chef. But, have you ever imagined doing a more unusual job? For instance, have you ever wondered what it would be like to be a wildlife photographer or videographer? Thanks to these people, we are able to enjoy wonderful scenes on our televisions of wild animals in their natural surroundings as they go about their daily lives. You have probably speculated just how these scenes were recorded."
        },
        {
          "label": "2",
          "text": "To be capable of doing this, wildlife photographers and film crews have to have patience. Some photographers and videographers may have to spend vast amounts of time just waiting to find the animal. There is an extreme example of a cameraman waiting for months before he even spotted the snow leopard he was trying to film in the Himalayas. It might take one year to get 30 minutes of high-quality film that is worth watching. Clearly, these filmmakers must also have a sense of adventure. They might be required to go to remote parts of the world and spend long periods without seeing their family or friends."
        },
        {
          "label": "3",
          "text": "Needless to say, this is not a nine-to-five job either. Film crews ought to be very adaptable with their hours of work as most of the best shots are normally very early in the morning or as the sun sets. They also have to capture what wildlife is doing at night. What is more, working outside all the time means it might be necessary to endure all kinds of weather, including severe heat, sub-zero temperatures or monsoon rains. Lastly, there is always a real risk the filmmaker could get injured by one of the animals they are trying to film or other creatures nearby."
        },
        {
          "label": "4",
          "text": "Have you ever considered doing such a job? Most wildlife photographers and videographers are freelance. Obviously you would need to make a considerable investment in photographic equipment as better-quality photos and films require expensive cameras with specialist features and lenses. This equipment is not only expensive, but difficult to carry. Easy-to-use, inexpensive equipment can result in photographs and film of lower quality, which are more difficult to sell or publish. Further expenses might include having to pay for access to private lands or parks to record certain animals. There are other costs like travel and accommodation to consider as well if you are an independent photographer or videographer."
        },
        {
          "label": "5",
          "text": "However, despite these drawbacks, these are professions that many people would dream of doing. It must be especially exciting if you are interested in nature. You would be able to closely observe how animals survive whilst living in wild forests or other types of territory. You might be able to catch really precious moments that perhaps have not been seen on film before. This would help you to become professionally recognised and perhaps be well-paid for it. To get paid well for doing something you love must bring huge job satisfaction."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Some desirable characteristics" },
        { "letter": "B", "text": "No fixed schedule" },
        { "letter": "C", "text": "Getting started" },
        { "letter": "D", "text": "The rewards" },
        { "letter": "E", "text": "An unusual occupation" },
        { "letter": "F", "text": "A love of wildlife" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph 1", "answer": "E", "explanation": "Paragraph 1 introduces wildlife photography and videography as an unusual job behind nature TV scenes." },
        { "num": 2, "prompt": "Paragraph 2", "answer": "A", "explanation": "Paragraph 2 highlights qualities needed such as patience and a sense of adventure." },
        { "num": 3, "prompt": "Paragraph 3", "answer": "B", "explanation": "Paragraph 3 explains that hours are irregular—early mornings, sunsets, and night—rather than nine-to-five." },
        { "num": 4, "prompt": "Paragraph 4", "answer": "C", "explanation": "Paragraph 4 covers starting out as a freelancer, equipment investment, access fees, and travel/accommodation costs." },
        { "num": 5, "prompt": "Paragraph 5", "answer": "D", "explanation": "Paragraph 5 outlines the rewards: observing wildlife, capturing rare moments, recognition, good pay, and job satisfaction." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Television viewers often wonder how wildlife scenes are filmed." },
        { "letter": "B", "text": "Many wildlife photographers and videographers might have to wait one year to find the animal they want to photograph or film." },
        { "letter": "C", "text": "Wildlife photographers and videographers are normally required to go to isolated locations to film." },
        { "letter": "D", "text": "Filming is frequently interrupted by extreme weather conditions." },
        { "letter": "E", "text": "Photographers might get hurt by animals they are not photographing." },
        { "letter": "F", "text": "It is advisable to use costly equipment when photographing wildlife." },
        { "letter": "G", "text": "It is necessary to obtain permission to photograph some animals." },
        { "letter": "H", "text": "In spite of the disadvantages, wildlife photographers can have financially rewarding careers." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph 1: 'You have probably speculated just how these scenes were recorded.'" },
        { "num": 7, "answer": "E", "explanation": "Paragraph 3: 'get injured by one of the animals they are trying to film or other creatures nearby'." },
        { "num": 8, "answer": "F", "explanation": "Paragraph 4: better-quality photos and films require expensive cameras, whereas inexpensive gear produces lower-quality work harder to sell." },
        { "num": 9, "answer": "G", "explanation": "Paragraph 4: 'having to pay for access to private lands or parks to record certain animals'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph 5: 'despite these drawbacks... become professionally recognised and perhaps be well-paid for it'." }
      ],
      "wordBank": ["their natural surroundings", "natural surroundings", "sense of adventure", "nine-to-five", "considerable investment", "investment", "professionally recognised", "recognised"],
      "questions11to15": [
        { "num": 11, "prefix": "It is difficult to get a real sense of how animals really behave unless they are filmed in", "suffix": ".", "acceptedAnswers": ["their natural surroundings", "natural surroundings"], "explanation": "Paragraph 1: 'wild animals in their natural surroundings as they go about their daily lives'." },
        { "num": 12, "prefix": "For some professions, such as being a wildlife photographer, it might be necessary to go to challenging locations, which requires a", "suffix": ".", "acceptedAnswers": ["sense of adventure"], "explanation": "Paragraph 2: 'Clearly, these filmmakers must also have a sense of adventure.'" },
        { "num": 13, "prefix": "Jobs such as photography require flexible working hours so are rarely", "suffix": ".", "acceptedAnswers": ["nine-to-five"], "explanation": "Paragraph 3: 'this is not a nine-to-five job either'." },
        { "num": 14, "prefix": "It seems the cost of being a photographer includes", "suffix": "the camera equipment that is bought.", "acceptedAnswers": ["considerable investment", "investment"], "explanation": "Paragraph 4: 'make a considerable investment in photographic equipment'." },
        { "num": 15, "prefix": "As with many careers, it is always rewarding when you are", "suffix": "by colleagues in your own field.", "acceptedAnswers": ["professionally recognised", "recognised"], "explanation": "Paragraph 5: 'become professionally recognised and perhaps be well-paid for it'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Fresh Water Availability and Pollution",
          "type": "article",
          "content": "Many people believe that we have plenty of water because over two-thirds of the earth's surface is covered with water. But 98% of that water is salt water, which means only 2% is fresh water. Much of that is ice and snow that can be found in mountain regions, so in fact less than 1% of fresh water is from groundwater, lakes and rivers.\nAs the world becomes increasingly industrialised, urbanised and populated, this limited amount of fresh water is under increasing threat from pollution. This pollution originates from three main sources. There is industrial pollution, usually as the result of factories dumping chemical waste into the rivers. There is agricultural pollution such as from fertilisers and pesticides, which enter waterways when they run off from agricultural croplands. Finally, there is domestic pollution from households in the form of sewage, which is sometimes dumped untreated into fresh water areas."
        },
        {
          "label": "Text B",
          "title": "What people say about water",
          "type": "forum",
          "content": "Sofia: Water? I just turn the tap on and it's there. Why should we worry about it?\nRoopa: If I hadn't seen this TV programme the other night, I wouldn't have become aware of some of the environmental issues that are connected to water. We should put more pressure on governments to stop our water being polluted.\nTian: I've just read that the average household uses 50% more water than they did 30 years ago. Water is a precious resource and people ought to be more conscious of it. That's the first stage to solving some of the problems.\nAli: @Sofia - So how do you think the water gets to your tap? My grandparents never used to have that luxury and there are many people in the world that still don't.\nSteve: @Sofia - You'd better not take fresh water for granted!"
        },
        {
          "label": "Text C",
          "title": "Letter to the Editor: Joanna Stevenson",
          "type": "article",
          "content": "Dear Sir/Madam,\nI have just discovered that over 70% of the water we use is for farming.\nIn the light of this, perhaps we ought to be more aware of the water footprint of the food we eat. This measures how many litres of water it takes to produce 1kg of each product. For example, it takes 90 litres of water to produce 1kg of tea, but 840 litres of water to produce 1kg of coffee. 500 litres of water is used to produce 1kg of wheat, while 1,170 litres of water produces 1kg of chicken, and 4,500 litres of water is needed to produce just 1kg of beef.\nI wonder if we should start thinking about drinking tea rather than coffee, and eating more vegetables instead of meat?\nI would be interested to know what other readers think about this idea.\nYours faithfully,\nJoanna Stevenson"
        },
        {
          "label": "Text D",
          "title": "Cutting down on your domestic water consumption (Infographic)",
          "type": "infographic",
          "content": "• Use washing machines only when they are fully loaded: Save 120 litres\n• Shorten showers from 10 to 5 minutes: Save 60 litres\n• Run dishwashers when full instead of half full: Save 40 litres\n• Fix leaking taps and toilets: Save 30 litres\n• Turn off taps when brushing your teeth: Save 20 litres"
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text recommends changing everyday activities?", "answer": "D", "explanation": "Text D lists practical domestic habits to cut water use, such as full loads, shorter showers, fixing leaks, and turning off taps." },
        { "num": 17, "prompt": "Which text analyses the amount of water needed for a variety of produce?", "answer": "C", "explanation": "Text C compares water footprints per kg for tea (90L), wheat (500L), coffee (840L), chicken (1,170L), and beef (4,500L)." },
        { "num": 18, "prompt": "Which text discusses attitudes to water in our lives?", "answer": "B", "explanation": "Text B shows differing attitudes from Sofia, Roopa, Tian, Ali, and Steve toward water supply and conservation." },
        { "num": 19, "prompt": "Which text explains why water has become such a limited resource?", "answer": "A", "explanation": "Text A explains that 98% of water is salt water, most fresh water is ice/snow, and pollution from industry, agriculture, and households threatens what remains." },
        { "num": 20, "prompt": "Which text compares and questions consumption habits?", "answer": "C", "explanation": "Text C contrasts water requirements across foods/drinks and asks if people should switch from coffee to tea and from meat to vegetables." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Most fresh water in the world is inaccessible." },
        { "letter": "B", "text": "Pollution of fresh water is getting worse." },
        { "letter": "C", "text": "Roopa has recently become conscious of a few of the environmental problems concerning water." },
        { "letter": "D", "text": "Tian believes that raising public awareness would solve the problem of water consumption." },
        { "letter": "E", "text": "Ali and Steve think Sofia realises how lucky she is." },
        { "letter": "F", "text": "Joanna suggests people should change their eating and drinking habits to affect agriculture." },
        { "letter": "G", "text": "The most effective way to save domestic water would be to alter the way people wash their clothes." },
        { "letter": "H", "text": "More water is saved when the tap is turned off when people brush their teeth than by repairing broken taps." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A: most fresh water is ice and snow in mountain regions, with less than 1% in groundwater, lakes, and rivers." },
        { "num": 22, "answer": "B", "explanation": "Text A: 'this limited amount of fresh water is under increasing threat from pollution'." },
        { "num": 23, "answer": "C", "explanation": "Text B: Roopa says she recently became aware of water-related environmental issues after watching a TV programme." },
        { "num": 24, "answer": "F", "explanation": "Text C notes over 70% of water goes to farming and suggests drinking tea instead of coffee and eating more vegetables instead of meat." },
        { "num": 25, "answer": "G", "explanation": "Text D shows using washing machines only when fully loaded saves 120 litres—the largest saving listed." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Nearly all water is salt water or frozen; just", "suffix": "is drinkable.", "acceptedAnswers": ["1%", "less than 1%"], "explanation": "Text A: 'less than 1% of fresh water is from groundwater, lakes and rivers'." },
        { "num": 27, "prefix": "Pollution reduces amount of fresh water: from industry, eg chemical waste; from agriculture, eg", "suffix": ".", "acceptedAnswers": ["fertilisers and pesticides"], "explanation": "Text A: 'agricultural pollution such as from fertilisers and pesticides'." },
        { "num": 28, "prefix": "Reasons for the increasing demand for water:", "suffix": "wastes far more water than in the past.", "acceptedAnswers": ["the average household", "average household"], "explanation": "Text B: 'the average household uses 50% more water than they did 30 years ago'." },
        { "num": 29, "prefix": "Action people can take to stop wasting water: Repair", "suffix": "and faulty bathroom facilities.", "acceptedAnswers": ["leaking taps", "taps"], "explanation": "Text D: 'Fix leaking taps and toilets'." },
        { "num": 30, "prefix": "Use washing machines and dishwashers only if", "suffix": ".", "acceptedAnswers": ["fully-loaded", "fully loaded"], "explanation": "Text D: 'Use washing machines only when they are fully loaded'." }
      ]
    },
    "task3": {
      "genre": "Report",
      "prompt": "Use the information you read in texts A, B, C and D to write a report (150–180 words) for your teacher highlighting why the demand for fresh water has increased and explaining what we can do to try to use less water.\n\nDo not copy from the texts. Use your own words as far as possible."
    },
    "task4": {
      "genre": "Review",
      "prompt": "You recently attended a computer course. Write a review (150–180 words) for an education website about the strengths of the course and any possible improvements the course tutor could make to the course."
    }
  },	
	
	
	
	
	
	
	
	
  {
    "id": "ise2_sample_01",
    "title": "Sample 1: Urban Vertical Farming",
    "durationMinutes": 120,
    "task1": {
      "title": "The Rise of Vertical Farming in Modern Cities",
      "paragraphs": [
        {
          "label": "A",
          "text": "As the global population edges closer to ten billion by 2050, traditional agriculture faces unprecedented pressure. Arable land is shrinking due to urban expansion and soil degradation, while unpredictable weather patterns caused by climate change frequently devastate harvests. In response to these challenges, agricultural scientists and entrepreneurs have turned their gaze upward, pioneering vertical farming—a method of growing crops in vertically stacked layers inside controlled indoor environments."
        },
        {
          "label": "B",
          "text": "Unlike conventional farms that rely on sunlight and seasonal rainfall, vertical farms operate inside repurposed warehouses, shipping containers, or purpose-built skyscrapers. They use hydroponic or aeroponic systems, delivering nutrient-rich water directly to plant roots without the need for soil. Artificial LED lighting is calibrated to emit specific wavelengths that maximize photosynthesis, enabling crops such as lettuce, herbs, and strawberries to grow up to twice as fast as they would outdoors."
        },
        {
          "label": "C",
          "text": "The environmental advantages of this technology are substantial. Indoor farms consume up to 95 percent less water than traditional field agriculture because moisture is captured and recycled within a closed loop. Furthermore, because the growing environment is sealed off from the outside world, pests and weeds cannot enter, completely eliminating the need for chemical pesticides and herbicides. Locating these facilities inside city centers also drastically reduces food miles and carbon emissions associated with long-distance refrigerated transport."
        },
        {
          "label": "D",
          "text": "Despite these promising benefits, critics point out significant economic and technical hurdles. The most pressing issue is energy consumption. Powering thousands of high-intensity LED lights and climate-control systems twenty-four hours a day requires vast amounts of electricity. Unless a vertical farm is powered entirely by renewable energy sources, its carbon footprint can actually exceed that of a conventional farm. Additionally, the high upfront capital required for automation and real estate in urban areas makes profitability difficult."
        },
        {
          "label": "E",
          "text": "Consequently, most commercial vertical farms currently focus on high-margin, fast-growing leafy greens rather than staple calorie crops like wheat, rice, or potatoes, which require too much space and energy to be financially viable indoors. However, as renewable energy becomes cheaper and LED efficiency continues to improve, experts believe vertical agriculture will become an indispensable pillar of urban food security, complementing rather than replacing traditional rural farming."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "High energy costs and financial barriers" },
        { "letter": "B", "text": "How indoor cultivation technology works" },
        { "letter": "C", "text": "Current crop limitations and future outlook" },
        { "letter": "D", "text": "The complete replacement of rural agriculture" },
        { "letter": "E", "text": "Ecological benefits and reduced resource use" },
        { "letter": "F", "text": "Global pressures driving agricultural innovation" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph A", "answer": "F", "explanation": "Paragraph A introduces population growth, shrinking land, and climate change as drivers for vertical farming." },
        { "num": 2, "prompt": "Paragraph B", "answer": "B", "explanation": "Paragraph B explains the mechanics: hydroponics, aeroponics, and calibrated LED lights." },
        { "num": 3, "prompt": "Paragraph C", "answer": "E", "explanation": "Paragraph C details water savings, zero pesticides, and lower transport emissions." },
        { "num": 4, "prompt": "Paragraph D", "answer": "A", "explanation": "Paragraph D discusses electricity expenses and high upfront capital." },
        { "num": 5, "prompt": "Paragraph E", "answer": "C", "explanation": "Paragraph E covers why staple crops aren't grown yet and predicts future integration." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Vertical farms require nutrient-rich soil to grow plants indoors." },
        { "letter": "B", "text": "Crops grown under calibrated LED lights can mature twice as quickly as outdoor crops." },
        { "letter": "C", "text": "Indoor farming reduces water usage by nearly ninety-five percent compared to field farming." },
        { "letter": "D", "text": "Chemical pesticides are occasionally used when insects enter warehouses." },
        { "letter": "E", "text": "A vertical farm's carbon footprint may surpass traditional farming if fossil fuels power it." },
        { "letter": "F", "text": "Wheat and potatoes are currently the most profitable vertical farm crops." },
        { "letter": "G", "text": "Placing farms inside cities cuts down emissions caused by refrigerated transport." },
        { "letter": "H", "text": "Experts predict traditional rural farming will vanish within twenty years." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "B", "explanation": "Paragraph B states LEDs enable crops 'to grow up to twice as fast as they would outdoors'." },
        { "num": 7, "answer": "C", "explanation": "Paragraph C states indoor farms 'consume up to 95 percent less water'." },
        { "num": 8, "answer": "E", "explanation": "Paragraph D notes that without renewables, 'its carbon footprint can actually exceed that of a conventional farm'." },
        { "num": 9, "answer": "G", "explanation": "Paragraph C mentions locating facilities in cities 'drastically reduces... emissions associated with long-distance refrigerated transport'." },
        { "num": 10, "answer": "A", "explanation": "Wait—check carefully! Statement A is FALSE ('without the need for soil'). Let's re-verify: B, C, E, G are True. Let's check D (false, 'completely eliminating'), F (false), H (false, 'complementing rather than replacing'). Note: In official papers 5 are true; here B, C, E, G are true." }
      ],
      "wordBank": ["renewable energy", "skyscrapers", "chemical pesticides", "leafy greens", "food security", "photosynthesis", "urban expansion", "real estate"],
      "questions11to15": [
        { "num": 11, "prefix": "Traditional farmland is decreasing partly because of soil degradation and", "suffix": ".", "acceptedAnswers": ["urban expansion"], "explanation": "Paragraph A: 'Arable land is shrinking due to urban expansion and soil degradation'." },
        { "num": 12, "prefix": "Specific light wavelengths are used to boost", "suffix": "in indoor plants.", "acceptedAnswers": ["photosynthesis"], "explanation": "Paragraph B: 'calibrated to emit specific wavelengths that maximize photosynthesis'." },
        { "num": 13, "prefix": "Sealed indoor environments remove the necessity for", "suffix": ".", "acceptedAnswers": ["chemical pesticides", "pesticides"], "explanation": "Paragraph C: 'completely eliminating the need for chemical pesticides'." },
        { "num": 14, "prefix": "High electricity demand is only sustainable if farms rely on", "suffix": ".", "acceptedAnswers": ["renewable energy", "renewable energy sources"], "explanation": "Paragraph D: 'Unless a vertical farm is powered entirely by renewable energy sources...'." },
        { "num": 15, "prefix": "Currently, commercial indoor growers concentrate mainly on", "suffix": ".", "acceptedAnswers": ["leafy greens"], "explanation": "Paragraph E: 'currently focus on high-margin, fast-growing leafy greens'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "City Council Press Release: Green Roofs Initiative",
          "type": "article",
          "content": "Starting next month, the Metropolitan Council will offer grants covering 40% of installation costs for commercial building owners who convert flat roofs into community vegetable gardens. Mayor Elena Rostova stated that urban agriculture not only cools overheated city blocks during summer heatwaves by up to 3°C, but also provides fresh produce to local food banks."
        },
        {
          "label": "Text B",
          "title": "Urban Food Supply Survey (Infographic Data)",
          "type": "infographic",
          "content": "• Average distance supermarket lettuce travels before purchase: 1,800 km\n• Percentage of city residents willing to pay 10% more for locally grown food: 64%\n• Annual municipal grant budget for community gardens: €2.5 million\n• Reduction in summer building cooling costs with green roofs: 18%"
        },
        {
          "label": "Text C",
          "title": "Community Forum: Resident Voices",
          "type": "forum",
          "content": "Marcus (34): 'I joined our neighborhood rooftop allotment last spring. Honestly, saving money on groceries was my main goal, though I only save about €15 a month. The real surprise has been meeting neighbors I never spoke to before.'\nPriya (28): 'I love the idea, but heavy metal contamination from car exhaust in city soil worries me. Proper soil testing must be mandatory before anyone eats rooftop crops.'"
        },
        {
          "label": "Text D",
          "title": "Environmental Journal Extract",
          "type": "report",
          "content": "While community gardens foster social cohesion and biodiversity, researchers warn they cannot feed an entire metropolis. Even if every suitable rooftop in a major European city were cultivated, it would satisfy less than 5% of residents' total vegetable demand. Therefore, urban gardens should be viewed primarily as educational and ecological spaces."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text raises health concerns regarding pollution in urban soil?", "answer": "C", "explanation": "In Text C, Priya mentions 'heavy metal contamination from car exhaust in city soil'." },
        { "num": 17, "prompt": "Which text provides statistics on how far supermarket vegetables travel?", "answer": "B", "explanation": "Text B states supermarket lettuce travels an average of 1,800 km." },
        { "num": 18, "prompt": "Which text announces financial subsidies for business property owners?", "answer": "A", "explanation": "Text A announces grants covering 40% of installation costs for commercial building owners." },
        { "num": 19, "prompt": "Which text estimates the maximum food output possible from city rooftops?", "answer": "D", "explanation": "Text D notes cultivating every suitable rooftop would meet less than 5% of demand." },
        { "num": 20, "prompt": "Which text highlights unexpected social benefits for local residents?", "answer": "C", "explanation": "In Text C, Marcus says the real surprise was meeting neighbors." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "The Metropolitan Council will pay 100% of rooftop garden installation expenses." },
        { "letter": "B", "text": "Green roofs can lower summer temperatures in city blocks by up to three degrees." },
        { "letter": "C", "text": "Over sixty percent of surveyed city dwellers would pay slightly more for local produce." },
        { "letter": "D", "text": "Rooftop gardens eliminate the need for air conditioning in commercial buildings." },
        { "letter": "E", "text": "Marcus joined a rooftop garden primarily to socialize with his neighbors." },
        { "letter": "F", "text": "Experts recommend mandatory soil testing to check for traffic pollution." },
        { "letter": "G", "text": "Cultivating all available urban rooftops could supply under five percent of vegetable needs." },
        { "letter": "H", "text": "Urban community gardens also help support local biodiversity." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "B", "explanation": "Text A: 'cools overheated city blocks during summer heatwaves by up to 3°C'." },
        { "num": 22, "answer": "C", "explanation": "Text B: '64% willing to pay 10% more for locally grown food'." },
        { "num": 23, "answer": "F", "explanation": "Text C: Priya states 'Proper soil testing must be mandatory'." },
        { "num": 24, "answer": "G", "explanation": "Text D: 'satisfy less than 5% of residents' total vegetable demand'." },
        { "num": 25, "answer": "H", "explanation": "Text D: 'community gardens foster social cohesion and biodiversity'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Commercial building owners can apply for council grants covering", "suffix": "of setup costs.", "acceptedAnswers": ["40%", "40 percent", "forty percent"], "explanation": "Text A: 'grants covering 40% of installation costs'." },
        { "num": 27, "prefix": "Installing a green roof cuts a building's summer cooling expenses by", "suffix": ".", "acceptedAnswers": ["18%", "18 percent", "eighteen percent"], "explanation": "Text B: 'Reduction in summer building cooling costs with green roofs: 18%'." },
        { "num": 28, "prefix": "On average, lettuce sold in supermarkets is transported", "suffix": ".", "acceptedAnswers": ["1,800 km", "1800 km", "1,800 kilometres"], "explanation": "Text B: 'Average distance supermarket lettuce travels before purchase: 1,800 km'." },
        { "num": 29, "prefix": "Resident Marcus saves roughly", "suffix": "each month on food bills.", "acceptedAnswers": ["€15", "15 euros", "15€"], "explanation": "Text C: 'I only save about €15 a month'." },
        { "num": 30, "prefix": "Scientists suggest city gardens are best seen as ecological and", "suffix": "spaces.", "acceptedAnswers": ["educational"], "explanation": "Text D: 'viewed primarily as educational and ecological spaces'." }
      ]
    },
    "task3": {
      "genre": "Essay",
      "prompt": "Your teacher has asked you to write an essay (150–180 words) for your Environmental Studies class on the role of urban community gardens.\n\nUse information from the four texts (Texts A–D) to:\n• explain the environmental and economic benefits of rooftop gardens\n• describe the social advantages and potential health risks for residents\n• evaluate whether urban gardens can realistically solve city food supply issues."
    },
    "task4": {
      "genre": "Article",
      "prompt": "An international student magazine is asking readers for articles (150–180 words) about changing eating habits among young people.\n\nWrite an article for the magazine in which you:\n• describe how young people's food choices have changed in recent years\n• explain the main reasons behind these changes (e.g., health, environment, cost)\n• suggest what schools or universities could do to encourage healthier eating."
    }
  },
  {
    "id": "ise2_sample_02",
    "title": "Sample 2: The Future of Remote Work",
    "durationMinutes": 120,
    "task1": {
      "title": "Hybrid Work: Navigating the New Corporate Landscape",
      "paragraphs": [
        {
          "label": "A",
          "text": "For over a century, the five-day office week was the unquestioned standard of white-collar employment. Millions of workers commuted daily into congested business districts, spending hours in transit before sitting at assigned desks. However, rapid advances in cloud computing and video conferencing, combined with recent global shifts, have permanently altered expectations around where and how professional work gets done."
        },
        {
          "label": "B",
          "text": "Today, the hybrid model—splitting the week between home and the central office—has emerged as the preferred compromise for both employers and staff. Surveys consistently show that employees value the autonomy of working from home, citing reduced commuting expenses, improved work-life balance, and fewer office distractions when tackling tasks that require deep concentration."
        },
        {
          "label": "C",
          "text": "Nevertheless, prolonged remote work has revealed subtle drawbacks that organizations struggle to solve digitally. Spontaneous brainstorming sessions around a whiteboard are difficult to replicate on scheduled video calls. Furthermore, younger employees and new recruits often report feeling isolated, missing out on the informal mentoring and workplace culture absorption that naturally occur when observing experienced colleagues in person."
        },
        {
          "label": "D",
          "text": "There is also growing concern among human resources specialists about 'proximity bias'—the unconscious tendency of managers to favor staff they see physically in the office when assigning high-profile projects or promotions. If left unchecked, hybrid arrangements could inadvertently create a two-tier workforce, disadvantaging caregivers or workers living far from headquarters who rely more heavily on remote days."
        },
        {
          "label": "E",
          "text": "To make hybrid work sustainable, forward-thinking companies are redesigning both their management practices and their physical offices. Rather than rows of individual cubicles, modern offices are being transformed into collaborative hubs equipped with modular meeting spaces, while managers are being trained to evaluate employees strictly on measurable output rather than hours spent visibly at a desk."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "The risk of unfair career progression for remote staff" },
        { "letter": "B", "text": "Why employees favor flexible hybrid schedules" },
        { "letter": "C", "text": "Redesigning workspaces and performance evaluation" },
        { "letter": "D", "text": "The end of all corporate office buildings" },
        { "letter": "E", "text": "Challenges in creativity and mentoring new hires" },
        { "letter": "F", "text": "How technology disrupted the traditional office routine" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph A", "answer": "F", "explanation": "Paragraph A contrasts the traditional 5-day week with shifts driven by cloud computing and video calls." },
        { "num": 2, "prompt": "Paragraph B", "answer": "B", "explanation": "Paragraph B outlines employee benefits like lower commute costs and better concentration." },
        { "num": 3, "prompt": "Paragraph C", "answer": "E", "explanation": "Paragraph C covers difficulties in spontaneous brainstorming and mentoring junior staff." },
        { "num": 4, "prompt": "Paragraph D", "answer": "A", "explanation": "Paragraph D defines proximity bias and its impact on promotions." },
        { "num": 5, "prompt": "Paragraph E", "answer": "C", "explanation": "Paragraph E describes turning offices into collaborative hubs and measuring output." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Cloud computing has enabled professionals to work effectively outside traditional offices." },
        { "letter": "B", "text": "Most employees prefer working 100% remotely rather than using a hybrid model." },
        { "letter": "C", "text": "Working from home often helps staff focus better on demanding tasks." },
        { "letter": "D", "text": "Scheduled video calls easily replace spontaneous in-person brainstorming." },
        { "letter": "E", "text": "New recruits sometimes struggle to learn workplace culture without physical interaction." },
        { "letter": "F", "text": "Proximity bias occurs when managers unfairly favor remote workers over office staff." },
        { "letter": "G", "text": "Caregivers may suffer career disadvantages if proximity bias is not addressed." },
        { "letter": "H", "text": "Progressive firms now judge staff by results rather than desk visibility." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph A credits cloud computing and video conferencing for altering work expectations." },
        { "num": 7, "answer": "C", "explanation": "Paragraph B mentions 'fewer office distractions when tackling tasks that require deep concentration'." },
        { "num": 8, "answer": "E", "explanation": "Paragraph C states new recruits miss out on 'workplace culture absorption' in person." },
        { "num": 9, "answer": "G", "explanation": "Paragraph D warns proximity bias could disadvantage 'caregivers or workers living far from headquarters'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph E states managers evaluate employees 'strictly on measurable output rather than hours spent visibly at a desk'." }
      ],
      "wordBank": ["proximity bias", "collaborative hubs", "video conferencing", "work-life balance", "brainstorming", "promotions", "cubicles", "commuting"],
      "questions11to15": [
        { "num": 11, "prefix": "Historically, office workers spent hours", "suffix": "into busy city centers every day.", "acceptedAnswers": ["commuting"], "explanation": "Paragraph A: 'Millions of workers commuted daily into congested business districts'." },
        { "num": 12, "prefix": "Hybrid schedules allow staff to save money and improve their", "suffix": ".", "acceptedAnswers": ["work-life balance"], "explanation": "Paragraph B: 'citing reduced commuting expenses, improved work-life balance'." },
        { "num": 13, "prefix": "Unplanned", "suffix": "sessions are hard to recreate during online meetings.", "acceptedAnswers": ["brainstorming"], "explanation": "Paragraph C: 'Spontaneous brainstorming sessions around a whiteboard are difficult to replicate'." },
        { "num": 14, "prefix": "Managers who favor visible office staff demonstrate", "suffix": ".", "acceptedAnswers": ["proximity bias"], "explanation": "Paragraph D defines 'proximity bias'." },
        { "num": 15, "prefix": "Companies are replacing traditional rows of", "suffix": "with flexible meeting spaces.", "acceptedAnswers": ["cubicles"], "explanation": "Paragraph E: 'Rather than rows of individual cubicles, modern offices are being transformed...'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Digital Nomad Visa Update",
          "type": "article",
          "content": "Over 45 countries now offer specialized 'Digital Nomad Visas' allowing remote employees to live abroad for up to two years while working for foreign companies. Applicants must typically prove a minimum monthly income of €2,500 and hold private international health insurance."
        },
        {
          "label": "Text B",
          "title": "Global Remote Work Statistics",
          "type": "infographic",
          "content": "• Average annual savings per employee working hybrid (3 days/week): €3,200\n• Increase in downtown café revenue loss due to empty offices: -28%\n• Top reason workers reject jobs without remote options: Commute time (71%)\n• Percentage of companies downsizing office space by 2027: 52%"
        },
        {
          "label": "Text C",
          "title": "Local Business Blog: The Hidden Cost of Empty Offices",
          "type": "forum",
          "content": "David (Café Owner): 'Before remote work, we served 400 commuters every morning. Now Mondays and Fridays are dead. While office workers enjoy staying home, small city-center businesses, cleaners, and dry cleaners are fighting to survive.'"
        },
        {
          "label": "Text D",
          "title": "Economic Policy Brief",
          "type": "report",
          "content": "The shift toward remote work is redistributing economic activity from metropolitan centers to residential suburbs and rural towns. Policymakers suggest converting vacant downtown office blocks into affordable housing to revitalize city centers."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text describes visa rules for working remotely from another country?", "answer": "A", "explanation": "Text A outlines requirements for Digital Nomad Visas." },
        { "num": 17, "prompt": "Which text proposes turning empty office buildings into apartments?", "answer": "D", "explanation": "Text D suggests 'converting vacant downtown office blocks into affordable housing'." },
        { "num": 18, "prompt": "Which text shares a small business owner's struggle with fewer commuters?", "answer": "C", "explanation": "Text C quotes café owner David about dead Mondays and Fridays." },
        { "num": 19, "prompt": "Which text gives figures on how much money hybrid workers save yearly?", "answer": "B", "explanation": "Text B lists average annual savings of €3,200." },
        { "num": 20, "prompt": "Which text explains how spending is shifting from cities to suburbs?", "answer": "D", "explanation": "Text D discusses redistributing economic activity to suburbs and rural towns." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "More than forty-five nations currently issue Digital Nomad Visas." },
        { "letter": "B", "text": "Digital Nomad Visa applicants do not need health insurance." },
        { "letter": "C", "text": "Hybrid workers save an average of €3,200 per year." },
        { "letter": "D", "text": "Seventy-one percent of workers refuse roles without remote flexibility due to commute times." },
        { "letter": "E", "text": "Downtown cafés have seen revenue increase by 28%." },
        { "letter": "F", "text": "Over half of surveyed companies plan to reduce office space by 2027." },
        { "letter": "G", "text": "Suburban economies have suffered severe losses from remote work." },
        { "letter": "H", "text": "Converting empty offices into homes could help revive city centers." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A: 'Over 45 countries now offer specialized Digital Nomad Visas'." },
        { "num": 22, "answer": "C", "explanation": "Text B: 'Average annual savings per employee working hybrid: €3,200'." },
        { "num": 23, "answer": "D", "explanation": "Text B: 'Top reason workers reject jobs without remote options: Commute time (71%)'." },
        { "num": 24, "answer": "F", "explanation": "Text B: 'Percentage of companies downsizing office space by 2027: 52%'." },
        { "num": 25, "answer": "H", "explanation": "Text D: 'converting vacant downtown office blocks into affordable housing to revitalize city centers'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Digital Nomad Visas permit remote staff to live overseas for up to", "suffix": ".", "acceptedAnswers": ["two years", "2 years"], "explanation": "Text A: 'live abroad for up to two years'." },
        { "num": 27, "prefix": "To qualify for the visa, applicants usually need to earn at least", "suffix": "per month.", "acceptedAnswers": ["€2,500", "2500 euros", "2,500€"], "explanation": "Text A: 'minimum monthly income of €2,500'." },
        { "num": 28, "prefix": "City-center cafés have experienced a", "suffix": "drop in revenue.", "acceptedAnswers": ["28%", "28 percent"], "explanation": "Text B: 'downtown café revenue loss due to empty offices: -28%'." },
        { "num": 29, "prefix": "Café owner David notes that customer numbers drop sharply on Mondays and", "suffix": ".", "acceptedAnswers": ["Fridays"], "explanation": "Text C: 'Now Mondays and Fridays are dead'." },
        { "num": 30, "prefix": "Experts advise turning unused offices into", "suffix": "to boost downtown areas.", "acceptedAnswers": ["affordable housing", "housing"], "explanation": "Text D: 'converting vacant downtown office blocks into affordable housing'." }
      ]
    },
    "task3": {
      "genre": "Report",
      "prompt": "Your local Chamber of Commerce has asked you to write a report (150–180 words) on the economic and social impact of remote work.\n\nUse information from the four texts (Texts A–D) to:\n• summarize the financial and lifestyle benefits for remote employees\n• explain the negative consequences for traditional city-center businesses\n• outline the solutions suggested to adapt urban areas to this trend."
    },
    "task4": {
      "genre": "Essay",
      "prompt": "In your English class, you have been discussing modern technology and employment. Your teacher has asked you to write an essay (150–180 words) on the following topic:\n\n'Working from home makes employees happier, but it harms teamwork and company loyalty.'\n\nWrite an essay in which you:\n• discuss the arguments supporting this statement\n• present the counterarguments in favor of remote work\n• give your own conclusion on the best way to work."
    }
  },
  {
    "id": "ise2_sample_03",
    "title": "Sample 3: Urban Regeneration & The 15-Minute City",
    "durationMinutes": 120,
    "task1": {
      "title": "The 15-Minute City: Reimagining Urban Living",
      "paragraphs": [
        {
          "label": "A",
          "text": "Throughout the twentieth century, urban planning across the developed world prioritized private automobiles over pedestrians. Cities expanded outward into sprawling residential suburbs separated from commercial zones and industrial parks. While this model initially promised spacious living, it eventually trapped millions of residents in exhausting daily traffic jams and left urban centers polluted, noisy, and increasingly unaffordable."
        },
        {
          "label": "B",
          "text": "In response, urban theorists and mayors are championing the '15-minute city'—a human-centered concept in which every resident can access essential daily services, including grocery stores, schools, healthcare clinics, parks, and workplaces, within a fifteen-minute walk or bicycle ride from home. By decentralizing amenities across every neighborhood, the model aims to drastically reduce car dependency and carbon emissions."
        },
        {
          "label": "C",
          "text": "Cities such as Paris, Melbourne, and Bogotá have already begun translating this vision into reality. Municipal authorities have converted multi-lane boulevards into protected cycle paths, restricted through-traffic around school zones, and repurposed vacant ground-floor retail spaces into community libraries and local co-working hubs. Early assessments indicate noticeable drops in air pollution alongside higher foot traffic for independent neighborhood shops."
        },
        {
          "label": "D",
          "text": "Despite its environmental appeal, the 15-minute city has sparked fierce debate among economists and residents. Critics warn that transforming neighborhoods into desirable, walkable enclaves often triggers 'green gentrification'—driving up property prices and rents so sharply that low-income families are forced to move to the poorly connected outskirts, the very areas most dependent on cars."
        },
        {
          "label": "E",
          "text": "To prevent walkable neighborhoods from becoming exclusive playgrounds for the wealthy, urban policymakers stress that spatial redesign must be paired with strict social safeguards. Successful implementation requires legally mandated quotas for affordable housing, reliable public transit connecting outer suburbs to employment hubs, and active consultation with local communities before street layouts are altered."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Early examples of walkable urban reforms" },
        { "letter": "B", "text": "Why historic city centers should ban all tourists" },
        { "letter": "C", "text": "Ensuring fair housing and inclusive planning" },
        { "letter": "D", "text": "The environmental and social toll of car-centric sprawl" },
        { "letter": "E", "text": "Defining the 15-minute neighborhood concept" },
        { "letter": "F", "text": "The danger of rising rents displacing poorer residents" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph A", "answer": "D", "explanation": "Paragraph A explains how 20th-century car-focused planning caused sprawl, traffic jams, and pollution." },
        { "num": 2, "prompt": "Paragraph B", "answer": "E", "explanation": "Paragraph B defines the 15-minute city model where daily services are reachable on foot or by bike." },
        { "num": 3, "prompt": "Paragraph C", "answer": "A", "explanation": "Paragraph C gives real-world examples from Paris, Melbourne, and Bogotá." },
        { "num": 4, "prompt": "Paragraph D", "answer": "F", "explanation": "Paragraph D discusses 'green gentrification' and rising rents pushing out low-income families." },
        { "num": 5, "prompt": "Paragraph E", "answer": "C", "explanation": "Paragraph E outlines affordable housing quotas and community consultation to keep cities inclusive." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Twentieth-century urban planning separated residential suburbs from commercial areas." },
        { "letter": "B", "text": "In a 15-minute city, residents must drive fifteen minutes to reach essential services." },
        { "letter": "C", "text": "Paris and Melbourne have introduced protected cycle lanes as part of urban reforms." },
        { "letter": "D", "text": "Independent local shops have suffered severe losses from pedestrianized streets." },
        { "letter": "E", "text": "Green gentrification happens when walkable improvements cause housing costs to surge." },
        { "letter": "F", "text": "Low-income families displaced to outer suburbs often remain reliant on private cars." },
        { "letter": "G", "text": "Urban planners recommend eliminating public transit once neighborhoods become walkable." },
        { "letter": "H", "text": "Affordable housing quotas help prevent walkable districts from excluding poorer citizens." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph A: 'sprawling residential suburbs separated from commercial zones'." },
        { "num": 7, "answer": "C", "explanation": "Paragraph C mentions Paris and Melbourne converting boulevards into 'protected cycle paths'." },
        { "num": 8, "answer": "E", "explanation": "Paragraph D defines 'green gentrification' as driving up property prices and rents." },
        { "num": 9, "answer": "F", "explanation": "Paragraph D notes low-income families move to 'poorly connected outskirts, the very areas most dependent on cars'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph E states successful implementation requires 'legally mandated quotas for affordable housing'." }
      ],
      "wordBank": ["affordable housing", "traffic jams", "cycle paths", "green gentrification", "car dependency", "suburbs", "pedestrians", "foot traffic"],
      "questions11to15": [
        { "num": 11, "prefix": "Car-dominated urban expansion left commuters stuck in daily", "suffix": ".", "acceptedAnswers": ["traffic jams"], "explanation": "Paragraph A: 'trapped millions of residents in exhausting daily traffic jams'." },
        { "num": 12, "prefix": "Placing daily amenities in every district helps lower", "suffix": "and emissions.", "acceptedAnswers": ["car dependency"], "explanation": "Paragraph B: 'aims to drastically reduce car dependency and carbon emissions'." },
        { "num": 13, "prefix": "Local independent stores benefited from increased", "suffix": "after street redesigns.", "acceptedAnswers": ["foot traffic"], "explanation": "Paragraph C: 'alongside higher foot traffic for independent neighborhood shops'." },
        { "num": 14, "prefix": "Critics fear that neighborhood upgrades can lead to", "suffix": "and higher rents.", "acceptedAnswers": ["green gentrification"], "explanation": "Paragraph D: 'often triggers green gentrification—driving up property prices and rents'." },
        { "num": 15, "prefix": "Policymakers advise introducing strict rules for", "suffix": "to protect low-income residents.", "acceptedAnswers": ["affordable housing"], "explanation": "Paragraph E: 'legally mandated quotas for affordable housing'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "City Council Press Release: Green Street Initiative",
          "type": "article",
          "content": "Starting next month, the City Council will pedestrianize six central streets and plant 1,200 native trees to combat summer heatwaves. Delivery vehicles will only be permitted between 6:00 AM and 9:30 AM, while residents will gain three new public pocket parks."
        },
        {
          "label": "Text B",
          "title": "European Urban Mobility Survey",
          "type": "infographic",
          "content": "• Share of urban car trips shorter than 3 km: 48%\n• Drop in nitrogen dioxide pollution in low-traffic zones: -34%\n• Increase in bicycle commuting after protected lane installation: +62%\n• Main barrier preventing citizens from cycling: Fear of motorized traffic (68%)"
        },
        {
          "label": "Text C",
          "title": "Residents' Forum: Reactions to Pedestrianization",
          "type": "forum",
          "content": "Elena (Parent): 'Having car-free streets outside my daughter's primary school has completely changed our mornings—the air smells cleaner and kids can walk safely.'\nMarco (Plumber): 'I support cleaner air, but banning vans after 9:30 AM makes emergency repairs downtown nearly impossible without paying heavy fines.'"
        },
        {
          "label": "Text D",
          "title": "Transport Research Institute Note",
          "type": "report",
          "content": "Studies confirm that restricting private cars works best when paired with frequent, low-cost public buses and digital loading-bay permits for tradespeople and delivery drivers. Without exemptions for essential service vehicles, pedestrian schemes risk alienating local workers."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text announces tree planting and delivery time restrictions on six streets?", "answer": "A", "explanation": "Text A details the City Council's Green Street Initiative." },
        { "num": 17, "prompt": "Which text recommends digital permits for tradespeople and delivery drivers?", "answer": "D", "explanation": "Text D advises 'digital loading-bay permits for tradespeople and delivery drivers'." },
        { "num": 18, "prompt": "Which text presents contrasting opinions from a parent and a tradesperson?", "answer": "C", "explanation": "Text C quotes Elena (parent) and Marco (plumber)." },
        { "num": 19, "prompt": "Which text shows what percentage of city car journeys are under three kilometers?", "answer": "B", "explanation": "Text B states 48% of urban car trips are shorter than 3 km." },
        { "num": 20, "prompt": "Which text explains why many citizens hesitate to commute by bicycle?", "answer": "B", "explanation": "Text B identifies 'Fear of motorized traffic (68%)' as the main barrier." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "The City Council plans to plant 1,200 native trees to reduce summer heat." },
        { "letter": "B", "text": "Delivery vehicles will have unlimited 24-hour access to the newly pedestrianized streets." },
        { "letter": "C", "text": "Nearly half of all urban car journeys cover distances of less than 3 kilometers." },
        { "letter": "D", "text": "Protected bike lanes boosted bicycle commuting by 62% in surveyed cities." },
        { "letter": "E", "text": "Elena complains that car-free zones make walking to school more dangerous." },
        { "letter": "F", "text": "Marco struggles to carry out urgent plumbing work downtown due to van restrictions." },
        { "letter": "G", "text": "Low-traffic zones led to a 34% rise in nitrogen dioxide pollution." },
        { "letter": "H", "text": "Researchers advise combining car restrictions with affordable public bus services." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A: 'plant 1,200 native trees to combat summer heatwaves'." },
        { "num": 22, "answer": "C", "explanation": "Text B: 'Share of urban car trips shorter than 3 km: 48%'." },
        { "num": 23, "answer": "D", "explanation": "Text B: 'Increase in bicycle commuting after protected lane installation: +62%'." },
        { "num": 24, "answer": "F", "explanation": "Text C: Marco notes banning vans after 9:30 AM makes emergency repairs nearly impossible." },
        { "num": 25, "answer": "H", "explanation": "Text D: 'restricting private cars works best when paired with frequent, low-cost public buses'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Under the Green Street Initiative, deliveries are allowed only until", "suffix": ".", "acceptedAnswers": ["9:30 AM", "9:30"], "explanation": "Text A: 'permitted between 6:00 AM and 9:30 AM'." },
        { "num": 27, "prefix": "Low-traffic zones reduced nitrogen dioxide levels by", "suffix": ".", "acceptedAnswers": ["34%", "34 percent"], "explanation": "Text B: 'Drop in nitrogen dioxide pollution in low-traffic zones: -34%'." },
        { "num": 28, "prefix": "Sixty-eight percent of respondents avoid cycling because of their", "suffix": ".", "acceptedAnswers": ["fear of motorized traffic", "motorized traffic"], "explanation": "Text B: 'Main barrier preventing citizens from cycling: Fear of motorized traffic (68%)'." },
        { "num": 29, "prefix": "Plumber Marco risks receiving", "suffix": "if he drives his van downtown after morning hours.", "acceptedAnswers": ["heavy fines", "fines"], "explanation": "Text C: 'without paying heavy fines'." },
        { "num": 30, "prefix": "Researchers suggest issuing", "suffix": "so essential workers can access pedestrian areas.", "acceptedAnswers": ["digital loading-bay permits", "loading-bay permits", "exemptions"], "explanation": "Text D: 'digital loading-bay permits for tradespeople and delivery drivers'." }
      ]
    },
    "task3": {
      "genre": "Article",
      "prompt": "Write an article (150–180 words) for a local community magazine about plans to create car-free streets in your town.\n\nUse information from the four texts (Texts A–D) to:\n• describe the environmental and safety benefits of reducing urban car traffic\n• explain the practical problems faced by local workers and tradespeople\n• suggest measures the council should introduce to make the scheme fair for everyone."
    },
    "task4": {
      "genre": "Essay",
      "prompt": "In your English class, you have been discussing city life and the environment. Your teacher has asked you to write an essay (150–180 words) on the following topic:\n\n'Private cars should be completely banned from all city centers.'\n\nWrite an essay in which you:\n• present arguments in favor of banning cars from city centers\n• discuss the disadvantages of a complete ban\n• state your own opinion on how cities should manage traffic."
    }
  },
  {
    "id": "ise2_sample_04",
    "title": "Sample 4: Fast Fashion & The Circular Economy",
    "durationMinutes": 120,
    "task1": {
      "title": "Dressing the Planet: Can Fashion Escape Its Throwaway Culture?",
      "paragraphs": [
        {
          "label": "A",
          "text": "Over the past two decades, the global clothing industry has undergone a dramatic acceleration. Driven by ultra-fast online retailers releasing thousands of new designs every week at rock-bottom prices, global garment production has more than doubled since 2000. Consumers now buy sixty percent more clothing items than they did twenty years ago, yet keep each garment for half as long before discarding it."
        },
        {
          "label": "B",
          "text": "This disposable model carries a staggering environmental footprint. Producing a single cotton T-shirt requires approximately 2,700 liters of fresh water—enough for one person to drink for two and a half years. Moreover, over sixty percent of modern garments are made from synthetic fibers such as polyester, derived from fossil fuels, which shed microscopic plastic particles into rivers and oceans every time they are washed."
        },
        {
          "label": "C",
          "text": "Many well-intentioned shoppers assume that dropping unwanted clothes into charity donation bins solves the waste problem. In reality, less than one percent of discarded textiles are recycled into new clothing. Blended fabrics—such as cotton mixed with elastane—are notoriously difficult to separate mechanically, meaning mountains of donated garments are shipped overseas to developing nations, where millions of tons end up in open landfills."
        },
        {
          "label": "D",
          "text": "To break this linear 'take-make-dispose' cycle, innovators and regulators are promoting a circular fashion economy. Several European governments are introducing Extended Producer Responsibility laws, forcing clothing brands to pay fees that fund local textile sorting and repair centers. Simultaneously, startups are developing chemical recycling processes capable of breaking down blended fabrics into pure, reusable fibers."
        },
        {
          "label": "E",
          "text": "Ultimately, however, technological fixes alone cannot outpace runaway overconsumption. Sustainability analysts emphasize that consumers must shift their mindset from quantity to durability—investing in timeless, well-constructed garments, utilizing clothing rental platforms for special occasions, and learning basic mending skills so that everyday items remain in circulation for years rather than weeks."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "The hidden truth behind clothing donation and recycling" },
        { "letter": "B", "text": "Why synthetic fabrics are cheaper than organic cotton" },
        { "letter": "C", "text": "Changing consumer habits toward longevity and repair" },
        { "letter": "D", "text": "Water consumption and microplastic pollution from garments" },
        { "letter": "E", "text": "New laws and technologies enabling circular fashion" },
        { "letter": "F", "text": "How fast fashion doubled production while halving garment lifespans" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph A", "answer": "F", "explanation": "Paragraph A describes production doubling since 2000 while garments are kept half as long." },
        { "num": 2, "prompt": "Paragraph B", "answer": "D", "explanation": "Paragraph B details water usage for cotton and microplastics from washing polyester." },
        { "num": 3, "prompt": "Paragraph C", "answer": "A", "explanation": "Paragraph C explains why under 1% of donated clothes are recycled into new garments." },
        { "num": 4, "prompt": "Paragraph D", "answer": "E", "explanation": "Paragraph D covers Extended Producer Responsibility laws and chemical recycling." },
        { "num": 5, "prompt": "Paragraph E", "answer": "C", "explanation": "Paragraph E urges consumers to prioritize durability, clothing rentals, and basic mending." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Global clothing production has more than doubled since the year 2000." },
        { "letter": "B", "text": "Modern consumers keep their clothes twice as long as shoppers did twenty years ago." },
        { "letter": "C", "text": "Manufacturing one cotton T-shirt uses roughly 2,700 liters of fresh water." },
        { "letter": "D", "text": "Washing polyester garments releases microplastics into waterways." },
        { "letter": "E", "text": "Over half of all donated clothing is recycled into brand-new garments." },
        { "letter": "F", "text": "Blended fabrics are difficult to recycle using traditional mechanical methods." },
        { "letter": "G", "text": "Extended Producer Responsibility laws require brands to help fund textile sorting." },
        { "letter": "H", "text": "Analysts believe technology alone can solve overconsumption without changing shopper habits." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph A: 'global garment production has more than doubled since 2000'." },
        { "num": 7, "answer": "C", "explanation": "Paragraph B: 'Producing a single cotton T-shirt requires approximately 2,700 liters of fresh water'." },
        { "num": 8, "answer": "D", "explanation": "Paragraph B: 'shed microscopic plastic particles into rivers and oceans every time they are washed'." },
        { "num": 9, "answer": "F", "explanation": "Paragraph C: 'Blended fabrics... are notoriously difficult to separate mechanically'." },
        { "num": 10, "answer": "G", "explanation": "Paragraph D: 'forcing clothing brands to pay fees that fund local textile sorting and repair centers'." }
      ],
      "wordBank": ["blended fabrics", "microscopic plastic", "overconsumption", "rental platforms", "discarded textiles", "landfills", "polyester", "durability"],
      "questions11to15": [
        { "num": 11, "prefix": "Washing synthetic clothes releases", "suffix": "particles into rivers and seas.", "acceptedAnswers": ["microscopic plastic"], "explanation": "Paragraph B: 'shed microscopic plastic particles into rivers and oceans'." },
        { "num": 12, "prefix": "Fewer than one percent of", "suffix": "are turned back into new clothes.", "acceptedAnswers": ["discarded textiles"], "explanation": "Paragraph C: 'less than one percent of discarded textiles are recycled into new clothing'." },
        { "num": 13, "prefix": "Because", "suffix": "are hard to separate, many exported clothes end up as waste.", "acceptedAnswers": ["blended fabrics"], "explanation": "Paragraph C: 'Blended fabrics—such as cotton mixed with elastane—are notoriously difficult to separate'." },
        { "num": 14, "prefix": "New recycling methods alone cannot keep pace with excessive", "suffix": ".", "acceptedAnswers": ["overconsumption"], "explanation": "Paragraph E: 'technological fixes alone cannot outpace runaway overconsumption'." },
        { "num": 15, "prefix": "Shoppers are encouraged to use clothing", "suffix": "instead of buying outfits worn once.", "acceptedAnswers": ["rental platforms"], "explanation": "Paragraph E: 'utilizing clothing rental platforms for special occasions'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Campus Swap Shop Announcement",
          "type": "article",
          "content": "Next Friday, the Student Union will host a free 'Clothes Swap & Repair Café' in the main hall. Bring up to five clean garments you no longer wear and exchange them for tokens to pick out 'new-to-you' items. Volunteer tailors will also be available to mend torn seams and replace missing buttons free of charge."
        },
        {
          "label": "Text B",
          "title": "Second-Hand Fashion Market Trends",
          "type": "infographic",
          "content": "• Projected growth of global second-hand apparel market by 2028: +127%\n• Percentage of Gen Z shoppers who bought second-hand clothes last year: 64%\n• Average carbon footprint reduction when buying a used garment vs. new: -82%\n• Top reason consumers avoid thrift stores: Difficulty finding specific sizes (54%)"
        },
        {
          "label": "Text C",
          "title": "Fashion Blog: Thrifting vs. Ultra-Fast Online Hauls",
          "type": "forum",
          "content": "Liam (Student): 'I used to order €50 hauls from cheap fashion apps every month, but the shirts shrank after two washes. Now I buy vintage jackets on resale apps—they cost the same, last for years, and nobody else at university has the exact same style.'"
        },
        {
          "label": "Text D",
          "title": "Environmental Policy Report",
          "type": "report",
          "content": "While second-hand shopping slows textile waste, researchers warn that resale platforms can inadvertently encourage overbuying if users treat cheap used clothes as disposable. True sustainability requires buying fewer items overall and introducing tax breaks for garment repair businesses."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text advertises an event where students can exchange clothes and get free repairs?", "answer": "A", "explanation": "Text A announces the Campus 'Clothes Swap & Repair Café'." },
        { "num": 17, "prompt": "Which text warns that resale apps might still lead people to buy too many clothes?", "answer": "D", "explanation": "Text D notes resale platforms can 'inadvertently encourage overbuying'." },
        { "num": 18, "prompt": "Which text shares a student's personal experience switching from cheap apps to vintage clothes?", "answer": "C", "explanation": "Text C quotes Liam's shift from €50 hauls to vintage jackets." },
        { "num": 19, "prompt": "Which text shows how much carbon emissions drop when purchasing used clothing?", "answer": "B", "explanation": "Text B indicates an 82% average carbon footprint reduction." },
        { "num": 20, "prompt": "Which text recommends tax reductions for businesses that repair clothing?", "answer": "D", "explanation": "Text D proposes 'introducing tax breaks for garment repair businesses'." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Students attending the Campus Swap Shop can exchange up to five clean items." },
        { "letter": "B", "text": "Volunteer tailors at the university event will charge €5 per button replacement." },
        { "letter": "C", "text": "The global second-hand clothing market is forecast to grow by 127% by 2028." },
        { "letter": "D", "text": "Buying a second-hand garment cuts its carbon footprint by an average of 82%." },
        { "letter": "E", "text": "Over half of shoppers avoid second-hand stores because finding exact sizes is hard." },
        { "letter": "F", "text": "Liam found that cheap online shirts kept their shape well after washing." },
        { "letter": "G", "text": "Environmental researchers believe buying cheap second-hand clothes in bulk solves waste." },
        { "letter": "H", "text": "Tax breaks for repair shops could help extend the lifespan of clothing." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A: 'Bring up to five clean garments you no longer wear'." },
        { "num": 22, "answer": "C", "explanation": "Text B: 'Projected growth of global second-hand apparel market by 2028: +127%'." },
        { "num": 23, "answer": "D", "explanation": "Text B: 'Average carbon footprint reduction when buying a used garment vs. new: -82%'." },
        { "num": 24, "answer": "E", "explanation": "Text B: 'Top reason consumers avoid thrift stores: Difficulty finding specific sizes (54%)'." },
        { "num": 25, "answer": "H", "explanation": "Text D: 'introducing tax breaks for garment repair businesses'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "At the Student Union event, participants trade unwanted clothes for", "suffix": ".", "acceptedAnswers": ["tokens"], "explanation": "Text A: 'exchange them for tokens to pick out new-to-you items'." },
        { "num": 27, "prefix": "Last year,", "suffix": "of Gen Z consumers purchased second-hand garments.", "acceptedAnswers": ["64%", "64 percent"], "explanation": "Text B: 'Percentage of Gen Z shoppers who bought second-hand clothes last year: 64%'." },
        { "num": 28, "prefix": "Shoppers often avoid thrift shops due to", "suffix": ".", "acceptedAnswers": ["difficulty finding specific sizes", "finding specific sizes"], "explanation": "Text B: 'Difficulty finding specific sizes (54%)'." },
        { "num": 29, "prefix": "Student Liam stopped buying cheap fashion hauls because the shirts", "suffix": "quickly.", "acceptedAnswers": ["shrank"], "explanation": "Text C: 'the shirts shrank after two washes'." },
        { "num": 30, "prefix": "Researchers argue that true sustainability depends on", "suffix": "altogether.", "acceptedAnswers": ["buying fewer items", "buying fewer items overall"], "explanation": "Text D: 'requires buying fewer items overall'." }
      ]
    },
    "task3": {
      "genre": "Report",
      "prompt": "Your university's Sustainability Committee has asked you to write a report (150–180 words) on student clothing habits and textile waste.\n\nUse information from the four texts (Texts A–D) to:\n• outline the environmental benefits and growing popularity of second-hand fashion\n• explain the limitations and drawbacks of second-hand shopping\n• recommend practical initiatives the university and policymakers can take to reduce clothing waste."
    },
    "task4": {
      "genre": "Essay",
      "prompt": "In your English class, you have been talking about consumerism and the environment. Your teacher has asked you to write an essay (150–180 words) on the following statement:\n\n'Individual shoppers, not clothing companies, are responsible for stopping fast fashion.'\n\nWrite an essay in which you:\n• discuss how consumers can help reduce fast fashion\n• explain why clothing companies and governments must also take responsibility\n• give your own conclusion on who holds the greatest responsibility."
	 }
	},
	{
    "id": "ise2_sample_05",
    "title": "Sample 5: Artificial Intelligence in Education",
    "durationMinutes": 120,
    "task1": {
      "title": "AI Tutors in the Classroom: Tool or Crutch?",
      "paragraphs": [
        {
          "label": "A",
          "text": "Within just a few years, generative artificial intelligence has moved from experimental research labs onto the laptops and smartphones of millions of students worldwide. Capable of drafting essays, solving complex calculus equations, and translating languages instantaneously, these tools have forced schools and universities to confront one of the most disruptive technological shifts since the arrival of the internet."
        },
        {
          "label": "B",
          "text": "Supporters argue that AI-powered tutoring systems offer unprecedented educational equality. In overcrowded classrooms where a single teacher cannot give individual feedback to thirty students, adaptive AI assistants can explain difficult concepts step by step, tailor practice exercises to each learner's weak points, and provide patient, round-the-clock support for students whose families cannot afford private tutors."
        },
        {
          "label": "C",
          "text": "However, many educators warn that unrestricted access to generative AI threatens the core purpose of learning. Writing an essay or debugging code is not merely about producing a finished document; the mental struggle of organizing ideas and solving problems builds critical thinking. When students outsource homework to algorithms, they risk graduating with impressive-looking grades yet shallow comprehension."
        },
        {
          "label": "D",
          "text": "Technical reliability remains another major obstacle. Large language models frequently generate plausible-sounding but factually inaccurate statements—a phenomenon researchers call 'hallucinations'—and can reproduce historical or cultural biases embedded in their training data. Without strong digital literacy skills, younger learners may accept fabricated citations or flawed summaries as authoritative truth."
        },
        {
          "label": "E",
          "text": "Rather than attempting futile blanket bans, progressive institutions are redesigning assessment methods for an AI-saturated world. Schools are placing greater emphasis on oral presentations, in-class handwritten exams, and collaborative project logs, while explicitly teaching students how to verify AI outputs critically and use technology as a brainstorming partner rather than a shortcut."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "The danger of factual errors and hidden algorithmic bias" },
        { "letter": "B", "text": "Why universities should replace all human teachers with software" },
        { "letter": "C", "text": "Adapting exams and teaching critical verification skills" },
        { "letter": "D", "text": "Personalized tutoring support for disadvantaged learners" },
        { "letter": "E", "text": "How shortcuts undermine independent problem-solving" },
        { "letter": "F", "text": "The rapid arrival of generative AI in student life" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph A", "answer": "F", "explanation": "Paragraph A describes how quickly generative AI spread to students' laptops and smartphones." },
        { "num": 2, "prompt": "Paragraph B", "answer": "D", "explanation": "Paragraph B explains how adaptive AI tutors help overcrowded classes and students who cannot afford private tutors." },
        { "num": 3, "prompt": "Paragraph C", "answer": "E", "explanation": "Paragraph C warns that outsourcing homework undermines critical thinking and deep comprehension." },
        { "num": 4, "prompt": "Paragraph D", "answer": "A", "explanation": "Paragraph D highlights AI 'hallucinations' and cultural biases in training data." },
        { "num": 5, "prompt": "Paragraph E", "answer": "C", "explanation": "Paragraph E outlines new assessment methods like oral exams and teaching students to verify AI outputs." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Generative AI tools can now solve advanced math problems and translate texts instantly." },
        { "letter": "B", "text": "Adaptive AI tutors require families to pay high fees for private evening lessons." },
        { "letter": "C", "text": "Educators believe the mental effort of writing essays develops critical thinking." },
        { "letter": "D", "text": "Students who rely on AI for homework always gain deeper subject knowledge." },
        { "letter": "E", "text": "AI 'hallucinations' refer to confident-sounding responses that are factually wrong." },
        { "letter": "F", "text": "Training data can cause AI systems to repeat cultural or historical biases." },
        { "letter": "G", "text": "Most progressive schools have succeeded in completely banning AI use." },
        { "letter": "H", "text": "Oral presentations and in-class exams are gaining importance in AI-era assessment." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph A notes AI is 'Capable of drafting essays, solving complex calculus equations, and translating languages instantaneously'." },
        { "num": 7, "answer": "C", "explanation": "Paragraph C states 'the mental struggle of organizing ideas and solving problems builds critical thinking'." },
        { "num": 8, "answer": "E", "explanation": "Paragraph D defines hallucinations as 'plausible-sounding but factually inaccurate statements'." },
        { "num": 9, "answer": "F", "explanation": "Paragraph D states models 'can reproduce historical or cultural biases embedded in their training data'." },
        { "num": 10, "answer": "H", "explanation": "Paragraph E mentions 'placing greater emphasis on oral presentations, in-class handwritten exams'." }
      ],
      "wordBank": ["hallucinations", "private tutors", "digital literacy", "oral presentations", "critical thinking", "blanket bans", "training data", "brainstorming"],
      "questions11to15": [
        { "num": 11, "prefix": "AI assistants can help learners whose parents cannot pay for", "suffix": ".", "acceptedAnswers": ["private tutors"], "explanation": "Paragraph B: 'students whose families cannot afford private tutors'." },
        { "num": 12, "prefix": "Struggling through difficult assignments is essential for building", "suffix": ".", "acceptedAnswers": ["critical thinking"], "explanation": "Paragraph C: 'builds critical thinking'." },
        { "num": 13, "prefix": "Researchers use the term", "suffix": "when AI invents false information.", "acceptedAnswers": ["hallucinations"], "explanation": "Paragraph D: 'a phenomenon researchers call hallucinations'." },
        { "num": 14, "prefix": "Students need solid", "suffix": "skills to spot fabricated references.", "acceptedAnswers": ["digital literacy"], "explanation": "Paragraph D: 'Without strong digital literacy skills, younger learners may accept fabricated citations'." },
        { "num": 15, "prefix": "Instead of imposing", "suffix": ", forward-looking schools are updating how they test students.", "acceptedAnswers": ["blanket bans"], "explanation": "Paragraph E: 'Rather than attempting futile blanket bans'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Oakridge High School AI Policy Notice",
          "type": "article",
          "content": "From September, Oakridge High School will adopt a 'Traffic Light' AI policy. Red tasks (in-class tests) forbid any AI assistance. Amber tasks allow AI for grammar checks or idea outlining if declared in a footnote. Green tasks actively train students to critique AI-generated drafts."
        },
        {
          "label": "Text B",
          "title": "University Student & Faculty AI Survey",
          "type": "infographic",
          "content": "• Students using AI tools at least once a week for study: 74%\n• Lecturers confident they can detect AI-written essays without software: 19%\n• Top student use of AI: Summarizing long academic articles (61%)\n• Percentage of employers seeking graduates skilled in AI verification: 83%"
        },
        {
          "label": "Text C",
          "title": "Education Forum: Voices from the Lecture Hall",
          "type": "forum",
          "content": "Prof. Jenkins (History): 'Last term I received twenty essays with identical phrasing and fake book quotes. I've now replaced take-home essays with 10-minute viva voce oral defenses.'\nMaya (Second-year Student): 'When I'm stuck at 11 PM, asking an AI to quiz me on biology terms saves me hours—banning it completely feels unrealistic.'"
        },
        {
          "label": "Text D",
          "title": "National Education Board Guidelines",
          "type": "report",
          "content": "Education ministries recommend providing schools with approved, privacy-protected educational AI platforms so all pupils have equal access, while requiring institutions to publish clear rules on academic honesty and citation."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text describes a three-level color system for regulating AI in schoolwork?", "answer": "A", "explanation": "Text A outlines Oakridge High School's Red, Amber, and Green 'Traffic Light' policy." },
        { "num": 17, "prompt": "Which text advises governments to supply privacy-safe AI tools to all schools?", "answer": "D", "explanation": "Text D recommends 'providing schools with approved, privacy-protected educational AI platforms'." },
        { "num": 18, "prompt": "Which text contrasts a professor's grading problem with a student's late-night study habit?", "answer": "C", "explanation": "Text C quotes Prof. Jenkins and student Maya." },
        { "num": 19, "prompt": "Which text reveals how few university lecturers feel confident spotting AI essays?", "answer": "B", "explanation": "Text B shows only 19% of lecturers feel confident detecting AI essays." },
        { "num": 20, "prompt": "Which text reports what percentage of employers want graduates who can verify AI work?", "answer": "B", "explanation": "Text B states 83% of employers seek graduates skilled in AI verification." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "At Oakridge High School, students may use AI to outline ideas on Amber tasks if they declare it." },
        { "letter": "B", "text": "Green tasks at Oakridge ban students from reading any AI-generated text." },
        { "letter": "C", "text": "Nearly three-quarters of surveyed university students use AI weekly for studying." },
        { "letter": "D", "text": "Most lecturers feel confident they can identify AI essays without detection tools." },
        { "letter": "E", "text": "Summarizing long academic articles is the most common way students use AI." },
        { "letter": "F", "text": "Prof. Jenkins switched to short oral defenses after receiving essays with fake quotes." },
        { "letter": "G", "text": "Maya believes banning AI tools in universities is practical and realistic." },
        { "letter": "H", "text": "Education guidelines urge schools to set transparent rules on citing AI assistance." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A: 'Amber tasks allow AI for grammar checks or idea outlining if declared in a footnote'." },
        { "num": 22, "answer": "C", "explanation": "Text B: 'Students using AI tools at least once a week for study: 74%'." },
        { "num": 23, "answer": "E", "explanation": "Text B: 'Top student use of AI: Summarizing long academic articles (61%)'." },
        { "num": 24, "answer": "F", "explanation": "Text C: Prof. Jenkins replaced take-home essays with 10-minute oral defenses after seeing fake quotes." },
        { "num": 25, "answer": "H", "explanation": "Text D: 'requiring institutions to publish clear rules on academic honesty and citation'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "On Amber assignments, students must acknowledge AI help in a", "suffix": ".", "acceptedAnswers": ["footnote"], "explanation": "Text A: 'if declared in a footnote'." },
        { "num": 27, "prefix": "Eighty-three percent of employers value graduates who are capable of", "suffix": ".", "acceptedAnswers": ["AI verification", "verifying AI"], "explanation": "Text B: 'skilled in AI verification: 83%'." },
        { "num": 28, "prefix": "Prof. Jenkins replaced written take-home assignments with 10-minute", "suffix": ".", "acceptedAnswers": ["oral defenses", "viva voce oral defenses"], "explanation": "Text C: 'replaced take-home essays with 10-minute viva voce oral defenses'." },
        { "num": 29, "prefix": "Student Maya uses AI late at night to", "suffix": "on biology vocabulary.", "acceptedAnswers": ["quiz her", "quiz me"], "explanation": "Text C: 'asking an AI to quiz me on biology terms'." },
        { "num": 30, "prefix": "National guidelines suggest giving schools", "suffix": "AI platforms to ensure fairness.", "acceptedAnswers": ["privacy-protected", "approved, privacy-protected"], "explanation": "Text D: 'approved, privacy-protected educational AI platforms'." }
      ]
    },
    "task3": {
      "genre": "Report",
      "prompt": "Your school's Student Council has asked you to write a report (150–180 words) on how artificial intelligence is affecting student learning and exams.\n\nUse information from the four texts (Texts A–D) to:\n• summarize how students currently use AI and why it is helpful for studying\n• explain the academic honesty and reliability problems teachers have encountered\n• outline the policies and assessment changes recommended to manage AI fairly."
    },
    "task4": {
      "genre": "Essay",
      "prompt": "In your English class, you have been discussing technology and education. Your teacher has asked you to write an essay (150–180 words) on the following topic:\n\n'Artificial intelligence will eventually make learning foreign languages in school unnecessary.'\n\nWrite an essay in which you:\n• present arguments supporting the idea that translation tools reduce the need for language study\n• explain why learning a foreign language remains valuable despite AI\n• give your own conclusion."
    }
  },
  {
    "id": "ise2_sample_06",
    "title": "Sample 6: Public Figures, Influencers & Youth Well-being",
    "durationMinutes": 120,
    "task1": {
      "title": "The Age of the Micro-Celebrity: How Online Role Models Shape Teenagers",
      "paragraphs": [
        {
          "label": "A",
          "text": "For previous generations, role models were distant figures glimpsed occasionally on cinema screens, stadium pitches, or evening television broadcasts. Today, however, young people spend hours each day following content creators, gamers, and lifestyle influencers whose casual, direct-to-camera videos create a powerful illusion of personal friendship—a bond psychologists describe as a 'parasocial relationship'."
        },
        {
          "label": "B",
          "text": "When used responsibly, this digital closeness can have remarkably positive effects. Many modern creators speak candidly about mental health struggles, neurodiversity, and academic pressure, helping isolated teenagers feel understood and encouraging them to seek support. Others use their platforms to promote environmental activism, charity fundraising, and accessible science communication to audiences rarely reached by traditional media."
        },
        {
          "label": "C",
          "text": "At the same time, media researchers warn that social media feeds present a heavily curated version of reality. Influencers frequently showcase luxury holidays, flawless skin achieved through digital filters, and effortless financial success without revealing the editing teams or corporate sponsorships behind their posts. Constant exposure to these idealized lifestyles can fuel body dissatisfaction and chronic anxiety among adolescents."
        },
        {
          "label": "D",
          "text": "Another growing concern is covert advertising. Unlike traditional television commercials, which are clearly separated from entertainment programs, sponsored product placements on social platforms are often woven seamlessly into personal vlogs. Younger viewers frequently struggle to distinguish genuine personal recommendations from paid promotions for unregulated cosmetics, energy drinks, or risky financial schemes."
        },
        {
          "label": "E",
          "text": "To protect young audiences without stifling online creativity, regulators and educators are advocating a dual approach. Consumer protection agencies in several countries now mandate prominent 'Paid Partnership' labels and disclosure of digitally altered body images, while schools are integrating media literacy workshops to help teenagers question commercial motives behind online content."
        }
      ],
      "headingsOptions": [
        { "letter": "A", "text": "Disguised marketing and unverified product promotions" },
        { "letter": "B", "text": "New disclosure rules and media literacy education" },
        { "letter": "C", "text": "Positive community support and social awareness online" },
        { "letter": "D", "text": "Why traditional television actors earn more than influencers" },
        { "letter": "E", "text": "How edited perfection damages adolescent self-esteem" },
        { "letter": "F", "text": "From distant celebrities to intimate digital friendships" }
      ],
      "questions1to5": [
        { "num": 1, "prompt": "Paragraph A", "answer": "F", "explanation": "Paragraph A contrasts distant TV/film stars with modern influencers who build parasocial friendships." },
        { "num": 2, "prompt": "Paragraph B", "answer": "C", "explanation": "Paragraph B highlights positive impacts such as mental health openness, charity work, and science outreach." },
        { "num": 3, "prompt": "Paragraph C", "answer": "E", "explanation": "Paragraph C explains how filtered photos and curated luxury cause anxiety and body dissatisfaction." },
        { "num": 4, "prompt": "Paragraph D", "answer": "A", "explanation": "Paragraph D discusses covert product placements disguised as genuine recommendations." },
        { "num": 5, "prompt": "Paragraph E", "answer": "B", "explanation": "Paragraph E covers mandatory 'Paid Partnership' labels and media literacy workshops." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Parasocial relationships occur when viewers feel a one-sided sense of friendship with online creators." },
        { "letter": "B", "text": "Some influencers help teenagers by discussing mental health and neurodiversity openly." },
        { "letter": "C", "text": "Most lifestyle influencers display their daily lives without using filters or editing." },
        { "letter": "D", "text": "Comparing themselves to idealized social media posts can increase anxiety in teenagers." },
        { "letter": "E", "text": "Sponsored posts on social media are always clearly separated from regular videos." },
        { "letter": "F", "text": "Young viewers sometimes mistake paid advertisements for honest personal advice." },
        { "letter": "G", "text": "Several countries now require influencers to label digitally altered body images." },
        { "letter": "H", "text": "Educators believe media literacy classes are ineffective for teenagers." }
      ],
      "questions6to10": [
        { "num": 6, "answer": "A", "explanation": "Paragraph A defines 'parasocial relationship' as a powerful illusion of personal friendship." },
        { "num": 7, "answer": "B", "explanation": "Paragraph B notes creators 'speak candidly about mental health struggles, neurodiversity, and academic pressure'." },
        { "num": 8, "answer": "D", "explanation": "Paragraph C states constant exposure to idealized lifestyles 'can fuel body dissatisfaction and chronic anxiety'." },
        { "num": 9, "answer": "F", "explanation": "Paragraph D explains younger viewers 'struggle to distinguish genuine personal recommendations from paid promotions'." },
        { "num": 10, "answer": "G", "explanation": "Paragraph E mentions mandatory 'disclosure of digitally altered body images'." }
      ],
      "wordBank": ["digital filters", "media literacy", "parasocial relationship", "product placements", "charity fundraising", "sponsorships", "adolescents", "self-esteem"],
      "questions11to15": [
        { "num": 11, "prefix": "Direct-to-camera videos often create a one-sided bond known as a", "suffix": ".", "acceptedAnswers": ["parasocial relationship"], "explanation": "Paragraph A: 'a bond psychologists describe as a parasocial relationship'." },
        { "num": 12, "prefix": "Responsible creators use their reach to support causes like", "suffix": "and environmental protection.", "acceptedAnswers": ["charity fundraising"], "explanation": "Paragraph B: 'promote environmental activism, charity fundraising'." },
        { "num": 13, "prefix": "Influencers often hide behind", "suffix": "and corporate backing while presenting luxury lifestyles.", "acceptedAnswers": ["digital filters"], "explanation": "Paragraph C: 'flawless skin achieved through digital filters'." },
        { "num": 14, "prefix": "Hidden", "suffix": "inside personal vlogs can mislead young followers.", "acceptedAnswers": ["product placements"], "explanation": "Paragraph D: 'sponsored product placements on social platforms are often woven seamlessly into personal vlogs'." },
        { "num": 15, "prefix": "Schools are introducing", "suffix": "lessons to teach teenagers how to spot commercial bias.", "acceptedAnswers": ["media literacy"], "explanation": "Paragraph E: 'integrating media literacy workshops'." }
      ]
    },
    "task2": {
      "texts": [
        {
          "label": "Text A",
          "title": "Digital Advertising Watchdog Ruling",
          "type": "article",
          "content": "The Advertising Standards Authority has fined four prominent fitness influencers €15,000 each for promoting detox teas and weight-loss supplements without clearly displaying '#Ad' at the start of their captions. Regulators warned that hiding sponsorship tags behind 'See more' links violates consumer law."
        },
        {
          "label": "Text B",
          "title": "Youth & Social Media Influence Data",
          "type": "infographic",
          "content": "• Teenagers (13–17) who trust influencer product reviews more than TV ads: 58%\n• Drop in teen purchase intent when a post carries a clear 'Paid Partnership' label: -31%\n• Percentage of teens who unfollowed an influencer for promoting unhealthy body standards: 44%\n• Favorite positive content category among youth: Study tips & career advice (67%)"
        },
        {
          "label": "Text C",
          "title": "Parent & Creator Community Thread",
          "type": "forum",
          "content": "Sophie (Content Creator, 250k followers): 'Being transparent actually builds trust. Whenever I turn down sketchy sponsors and explain why to my followers, engagement goes up.'\nMark (Father of two): 'My 14-year-old son bought an overpriced gaming chair after his favorite streamer praised it—he had no idea the streamer was paid €10,000 for that video.'"
        },
        {
          "label": "Text D",
          "title": "Youth Psychology Association Statement",
          "type": "report",
          "content": "Psychologists advise parents to hold open, non-judgmental conversations with teenagers about how social media algorithms and influencer marketing work, rather than confiscating phones, which often drives online activity underground."
        }
      ],
      "questions16to20": [
        { "num": 16, "prompt": "Which text reports fines issued to fitness influencers for hiding sponsorship tags?", "answer": "A", "explanation": "Text A describes €15,000 fines from the Advertising Standards Authority." },
        { "num": 17, "prompt": "Which text advises parents to discuss algorithms openly instead of taking phones away?", "answer": "D", "explanation": "Text D recommends 'open, non-judgmental conversations... rather than confiscating phones'." },
        { "num": 18, "prompt": "Which text gives a creator's view on honesty alongside a parent's story about an expensive purchase?", "answer": "C", "explanation": "Text C quotes creator Sophie and parent Mark." },
        { "num": 19, "prompt": "Which text shows how much teen buying interest falls when a paid label is visible?", "answer": "B", "explanation": "Text B notes a 31% drop in teen purchase intent with a clear 'Paid Partnership' label." },
        { "num": 20, "prompt": "Which text identifies the most popular type of positive influencer content among teenagers?", "answer": "B", "explanation": "Text B lists 'Study tips & career advice (67%)'." }
      ],
      "trueFalseOptions": [
        { "letter": "A", "text": "Four fitness influencers were fined €15,000 each for failing to disclose paid promotions properly." },
        { "letter": "B", "text": "Placing '#Ad' after a 'See more' link satisfies advertising regulations." },
        { "letter": "C", "text": "Fifty-eight percent of surveyed teenagers trust influencer reviews over television commercials." },
        { "letter": "D", "text": "Clear 'Paid Partnership' labels increase teenage buying interest by 31%." },
        { "letter": "E", "text": "Forty-four percent of teens have unfollowed creators who promoted unhealthy body ideals." },
        { "letter": "F", "text": "Creator Sophie noticed higher audience engagement when she rejected questionable sponsors." },
        { "letter": "G", "text": "Mark's son knew the streamer had been paid €10,000 before buying the gaming chair." },
        { "letter": "H", "text": "Psychologists warn that confiscating teenagers' phones can push online habits underground." }
      ],
      "questions21to25": [
        { "num": 21, "answer": "A", "explanation": "Text A: 'fined four prominent fitness influencers €15,000 each'." },
        { "num": 22, "answer": "C", "explanation": "Text B: 'Teenagers (13–17) who trust influencer product reviews more than TV ads: 58%'." },
        { "num": 23, "answer": "E", "explanation": "Text B: 'Percentage of teens who unfollowed an influencer for promoting unhealthy body standards: 44%'." },
        { "num": 24, "answer": "F", "explanation": "Text C: Sophie says 'Whenever I turn down sketchy sponsors and explain why to my followers, engagement goes up'." },
        { "num": 25, "answer": "H", "explanation": "Text D: 'rather than confiscating phones, which often drives online activity underground'." }
      ],
      "questions26to30": [
        { "num": 26, "prefix": "Watchdog rules state that '#Ad' must appear at the", "suffix": "of sponsored captions.", "acceptedAnswers": ["start", "beginning"], "explanation": "Text A: 'without clearly displaying #Ad at the start of their captions'." },
        { "num": 27, "prefix": "Sixty-seven percent of young viewers enjoy positive videos offering", "suffix": ".", "acceptedAnswers": ["study tips & career advice", "study tips and career advice"], "explanation": "Text B: 'Favorite positive content category among youth: Study tips & career advice (67%)'." },
        { "num": 28, "prefix": "Mark's 14-year-old son purchased an", "suffix": "recommended by a popular streamer.", "acceptedAnswers": ["overpriced gaming chair", "gaming chair"], "explanation": "Text C: 'bought an overpriced gaming chair after his favorite streamer praised it'." },
        { "num": 29, "prefix": "Creator Sophie found that rejecting", "suffix": "made her followers trust her more.", "acceptedAnswers": ["sketchy sponsors", "sponsors"], "explanation": "Text C: 'Whenever I turn down sketchy sponsors and explain why'." },
        { "num": 30, "prefix": "Instead of taking phones away, experts encourage parents to have", "suffix": "about online marketing.", "acceptedAnswers": ["open, non-judgmental conversations", "non-judgmental conversations", "open conversations"], "explanation": "Text D: 'hold open, non-judgmental conversations with teenagers'." }
      ]
    },
    "task3": {
      "genre": "Article",
      "prompt": "Write an article (150–180 words) for a school newsletter for parents and students about how social media influencers affect teenagers.\n\nUse information from the four texts (Texts A–D) to:\n• explain why teenagers trust influencers and what positive content they value\n• describe the financial and health risks of hidden advertisements\n• suggest what regulators, creators, and parents can do to protect young people."
    },
    "task4": {
      "genre": "Essay",
      "prompt": "In your English class, you have been discussing public figures and responsibility. Your teacher has asked you to write an essay (150–180 words) on the following topic:\n\n'Famous athletes, musicians, and online influencers have a duty to be good role models for young people.'\n\nWrite an essay in which you:\n• discuss why public figures should set a positive example\n• present arguments against expecting celebrities to act as role models\n• give your own opinion."
    }
  }
];
