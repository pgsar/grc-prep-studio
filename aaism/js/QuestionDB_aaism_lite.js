/* =====================================================================
   AAISM QUESTIONS DATABASE - LITE VERSION (FREE)
   30 questions — 10 per domain
===================================================================== */

const databaseDomande = [
{

        question: "What is 'Model Registration'?",
        options: ["To give the model a name", "Maintaining an inventory of all AI models, including their version, owner, and intended use", "Registering the model at a local post office", "To sell the model on a public website"],
        answer: 1, // B
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "Inventory management (registration) is foundational for tracking and governing AI assets."
    },

{

        question: "Who should be responsible for 'Accepting' the residual risk of an AI system?",
        options: ["The Lead Developer", "The Business Asset Owner", "The External Auditor", "The AI vendor"],
        answer: 1, // B
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "Accountability for accepting risk rests with the business leader who benefits from the AI."
    },

{

        question: "Which data type does NOT have a predefined structure or format according to AAISM?",
        options: ["Structured data", "Relational database data", "Schema-validated data", "Unstructured data"],
        answer: 3,
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "Unstructured data does not have a predefined structure or format, often coming from file shares, Office files, audio and video files, social media posts, and websites."
    },

{

        question: "Which of the following is a key element of 'AI Strategy' alignment?",
        options: ["Ensuring AI initiatives directly support the organization's business objectives and risk appetite", "Using as many AI tools as possible regardless of cost", "Replacing the entire IT department with AI bots", "Keeping AI projects secret from the legal department"],
        answer: 0, // A
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "Strategic alignment ensures that AI investments generate value while staying within the defined risk boundaries of the enterprise."
    },

{

        question: "What is 'Model Stewardship'?",
        options: ["The management and care of an AI model throughout its entire lifecycle", "The process of selling a model", "The AI managing itself", "Cleaning the server where the model is stored"],
        answer: 0, // A
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "Stewardship involves ongoing monitoring, maintenance, and eventual decommissioning."
    },

{

        question: "Which statement about the environmental impact of AI is CORRECT according to AAISM?",
        options: ["AI data centers consume less energy than traditional IT centers", "AI solutions reduce water consumption in data centers", "The environmental impact of AI is negligible", "A ChatGPT request consumes approximately 10 times the electricity of a Google search"],
        answer: 3,
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "According to the IEA data cited in the manual, a ChatGPT request consumes approximately 10 times the electricity of one Google search, highlighting AI significant energy impact."
    },

{

        question: "Which document defines the 'Ethics and Values' of an organization's AI Program?",
        options: ["The technical manual", "The AI Charter or AI Ethics Policy", "The budget sheet", "The employee directory"],
        answer: 1, // B
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "The Charter sets the high-level moral boundaries and objectives for AI usage."
    },

{

        question: "According to the AAISM manual, what is the PRIMARY reason governing bodies should define a clear AI strategy?",
        options: ["Staff will use available AI tools whether or not a policy exists, incurring associated risk", "To reduce procurement costs for AI vendors", "To avoid legal obligations under the EU AI Act", "To satisfy internal audit requirements"],
        answer: 0,
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "The manual states that staff will use AI tools regardless of policy existence, making it essential for governing bodies to set clear boundaries for AI use."
    },

{

        question: "What is the recommended minimum frequency for reviewing the AI inventory according to AAISM?",
        options: ["Monthly", "Quarterly", "Every three years", "At least annually"],
        answer: 3,
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "The AAISM manual states that the AI inventory should be updated at least annually to maintain an accurate account of AI solutions in use."
    },

{

        question: "Which approach BEST helps an organization assess AI readiness according to AAISM?",
        options: ["Using a structured readiness questionnaire to evaluate governance processes, structures, and skills", "Immediately deploying AI solutions and adjusting based on results", "Conducting a vendor assessment of available AI products", "Relying solely on the IT department's self-assessment"],
        answer: 0,
        domain: "Domain 1: AI Governance and Program Management",
        explanation: "The AAISM manual recommends using a structured AI governance questionnaire to evaluate current readiness across governance processes, structures, and decision-making capabilities."
    },

{

        question: "An attacker modifies the training dataset to include 'backdoors' that cause the model to misbehave only when a specific trigger is present. This is an example of:",
        options: [
            "Prompt Injection",
            "Model Inversion",
            "Data Poisoning",
            "Evasion Attack"
        ],
        answer: 2, // C
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Data poisoning involves compromising the training data to influence the model's behavior."
    },

    // --- DOMAIN 3: AI TECHNOLOGIES AND CONTROLS ---,

{

        question: "What is the PRIMARY concern with AI integration risk in legacy systems according to AAISM?",
        options: ["Incompatibilities between AI solutions and legacy systems can create security vulnerabilities, data integrity issues, and operational disruptions", "Legacy systems always outperform AI-enhanced systems", "Legacy systems automatically become obsolete when AI is introduced", "AI integration with legacy systems eliminates all existing security controls"],
        answer: 0,
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Integration risk from legacy systems involves incompatibilities that can create security vulnerabilities, data integrity issues, and operational disruptions when AI solutions are integrated into older infrastructure."
    },

{

        question: "What is 'Model Inversion' primarily a risk to?",
        options: ["Data Availability", "Data Privacy and Confidentiality", "Hardware Integrity", "Marketing Strategy"],
        answer: 1, // B
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Model inversion allows attackers to reconstruct sensitive training data by observing the model's responses."
    },

    // --- DOMAIN 3: AI TECHNOLOGIES AND CONTROLS ---,

{

        question: "What is a 'Supply Chain Risk' in the AI context?",
        options: ["Running out of office supplies", "Vulnerabilities introduced by third-party datasets, pre-trained models, or software libraries", "The delivery truck being late", "A decrease in the price of computer chips"],
        answer: 1, // B
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "If you use a model from an untrusted source, it may contain hidden backdoors or biased data."
    },

{

        question: "What is the main opportunity of using 'Synthetic Data' in AI development?",
        options: ["It is always 100% accurate compared to real data", "It reduces privacy risks by using artificially generated data instead of real personal information", "It eliminates the need for any developers", "It makes the model run without electricity"],
        answer: 1, // B
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Synthetic data allows training without exposing real sensitive data, mitigating privacy and compliance risks."
    },

{

        question: "What is the PRIMARY consideration when assessing AI vendor risk during initial onboarding per AAISM?",
        options: ["The vendor's geographical location and office size", "The vendor's marketing and branding materials", "Alignment of AI strategies and values, adherence to ethical considerations, and data security and privacy protection", "The vendor's share price and financial stability"],
        answer: 2,
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Vendor assessment should consider alignment of AI strategies and values, adherence to ethical considerations (transparency and explainability), and data security and privacy protection."
    },

{

        question: "What is 'Model Inversion' in the context of privacy risk?",
        options: ["Turning the model upside down", "An attack where the adversary uses the model's responses to reconstruct sensitive training data", "Deleting the model's memory", "A way to make the model run faster"],
        answer: 1, // B
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Model inversion allows an attacker to 'reverse engineer' the data points used during training, potentially exposing PII."
    },

{

        question: "Which of the following is a 'Legal' risk of AI?",
        options: ["A server overheating", "Intellectual property or copyright infringement from training on protected works", "The AI system using a different language", "The developer working from home"],
        answer: 1, // B
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Using scraped data for training can lead to significant lawsuits (e.g., New York Times vs. OpenAI)."
    },

{

        question: "Which risk is MOST associated with using 'Unvetted' Open Source models from public repositories?",
        options: ["The model will be too expensive", "The model might contain hidden 'backdoors' or malicious triggers", "The model will only work on a Mac", "The model will have a funny name"],
        answer: 1, // B
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Supply chain security is critical; pre-trained weights can be 'poisoned' or contain malicious code before they are downloaded."
    },

{

        question: "In AI Risk Management, 'Likelihood' refers to:",
        options: ["How much the AI likes the user", "The probability that a specific threat will exploit a vulnerability", "The physical weight of the AI server", "The amount of money the AI will make"],
        answer: 1, // B
        domain: "Domain 2: AI Risk and Opportunity Management",
        explanation: "Risk is defined as the combination of Likelihood and Impact."
    },

{

        question: "What is the PRIMARY benefit of 'Using AI With Security and Monitoring Tools' per AAISM?",
        options: ["AI can replace all human security analysts", "AI-powered security tools can process vast amounts of security data at speed and scale, detecting threats and anomalies that human analysts might miss", "AI security tools eliminate the need for security policies", "AI security monitoring is only effective for AI-specific threats"],
        answer: 1,
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "AI-powered security tools can process vast amounts of security data at speed and scale, detecting threats, anomalies, and patterns that human analysts might miss, enhancing overall security monitoring capability."
    },

{

        question: "Which of the following describes 'Black Box' AI?",
        options: ["An AI system whose internal logic and decision-making process are not easily understandable by humans", "An AI that only works in the dark", "A type of virus that turns the screen black", "A model that is stored in a black box"],
        answer: 0, // A
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "Opacity is a major challenge for accountability and trust in complex models like deep neural networks."
    },

{

        question: "What is the MAIN security risk associated with AI systems that lack adequate explainability according to AAISM?",
        options: ["Inability to detect, audit, or challenge AI decisions creates accountability gaps, increases the risk of undetected bias, and complicates regulatory compliance", "Unexplainable AI systems always cost more to operate", "Unexplainable AI systems automatically violate all data protection laws", "Lack of explainability only affects the user interface design"],
        answer: 0,
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "When AI decisions cannot be explained or audited, accountability gaps emerge, bias may go undetected, regulatory compliance becomes difficult, and trust in the AI system is undermined."
    },

{

        question: "In a Neural Network, what is the role of an 'Activation Function'?",
        options: [
            "To turn off the computer when the model is finished",
            "To determine whether a neuron should be activated based on its input",
            "To encrypt the data before it enters the network",
            "To sound an alarm if the model makes a mistake"
        ],
        answer: 1, // B
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "Activation functions (like ReLU or Sigmoid) introduce non-linearity, allowing the network to learn complex patterns."
    },

{

        question: "Which of the following is a technical control for protecting the 'Weights' of a proprietary AI model?",
        options: ["Increasing the font size of the code", "Changing the name of the file", "Running the model on a public website without a firewall", "Encryption at rest and strict Access Control (IAM)"],
        answer: 3, // D
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "Model weights represent the 'intelligence' of the AI. Protecting them via encryption and IAM is essential to prevent IP theft."
    },

{

        question: "Which of the following is an example of an AI-specific 'Safety' control?",
        options: ["Using a complex password for the laptop", "Automatic 'Emergency Stop' or 'Kill Switch' mechanisms for autonomous systems", "Hiring a security guard for the office", "Updating the antivirus on the company's email server"],
        answer: 1, // B
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "Safety controls in AI focus on preventing physical or operational harm, such as a kill switch for an AI-driven robot."
    },

    // --- CONTINUAZIONE FINO A 50 ---,

{

        question: "In the context of the AI Life Cycle, 'Data Preparation' includes which of the following?",
        options: ["Cleaning, labeling, and normalizing the data to be used for training", "Buying new hard drives", "Printing out the data on paper", "Deleting all the data to save space"],
        answer: 0, // A
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "Preparation is the most time-consuming phase, ensuring the data is of high quality for the model to learn correctly."
    },

{

        question: "Which type of AI architecture is primarily responsible for the success of modern Large Language Models?",
        options: ["Recurrent Neural Networks (RNN)", "Support Vector Machines (SVM)", "Transformer Architecture", "Decision Forests"],
        answer: 2, // C
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "The Transformer architecture (using self-attention) is the foundation of almost all modern LLMs."
    },

{

        question: "Which approach does AAISM recommend for adapting existing cybersecurity programs for AI?",
        options: ["Adapt current cyberprograms and create new AI-centric security practices before investing in AI strategies, using previous risk assessments as a foundation", "Replace all existing programs with AI-specific alternatives", "Wait until AI-specific regulations are finalized before adapting programs", "Focus exclusively on technical controls without adjusting governance policies"],
        answer: 0,
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "AAISM recommends adapting current cyberprograms and creating new AI-centric security practices before investing in AI strategies, using previous risk assessments to inform controls for AI-related threats."
    },

{

        question: "What is 'Explainable AI' (XAI)?",
        options: ["An AI that explains how to cook", "Techniques that make the internal logic and outputs of AI models understandable to humans", "An AI that can speak 100 languages", "A type of marketing for AI software"],
        answer: 1, // B
        domain: "Domain 3: AI Technologies and Controls",
        explanation: "XAI is essential for trust, especially in high-stakes fields like medicine or finance."
    }
];
