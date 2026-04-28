/* =====================================================================
   AAIR QUESTIONS DATABASE - LITE VERSION (FREE)
   30 questions — 10 per domain
===================================================================== */

const databaseDomande = [
{

        question: "Which term describes the 'invisible' digital workers who label data, often in low-wage conditions, to train AI?",
        options: ["Data Scientists", "Ghost Work / Microwork", "Robotic Process Automation", "Database Administrators"],
        answer: 1,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Ethical AI governance also considers the labor conditions of those who perform data labeling and sanitization, often referred to as 'Ghost Work'."
    },

{

        question: "What is the main objective of 'Data Minification' in AI projects?",
        options: ["Using the smallest possible font for data reports", "Reducing the volume of personal data processed to only what is strictly necessary", "Compressing files into .zip format", "Deleting old emails"],
        answer: 1,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Data minimization is a key privacy principle: only collect and process the data needed for the specific AI task."
    },

{

        question: "In which ML paradigm does an agent learn through rewards and penalties by interacting with its environment?",
        options: ["Reinforcement learning", "Supervised learning", "Unsupervised learning", "Semi-supervised learning"],
        answer: 0,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Reinforcement Learning (RL) trains intelligent agents through rewards for correct actions and penalties for incorrect ones—similar to teaching a dog a trick with treats."
    },

{

        question: "Which principle of 'Privacy by Design' ensures that personal data is automatically protected in any given IT system or business practice?",
        options: ["Privacy as the Default Setting", "Visibility and Transparency", "Respect for User Privacy", "Full Functionality (Positive-Sum)"],
        answer: 0,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Privacy as the Default means that the maximum privacy protections are applied automatically without requiring user action."
    },

{

        question: "Under the NIST AI RMF, the 'Measure' function is used to:",
        options: ["Count the number of developers", "Quantify AI risks, impacts, and performance using qualitative and quantitative metrics", "Measure the physical size of the data center", "Calculate the total cost of the AI software"],
        answer: 1,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Measure focuses on providing the data needed to make decisions about risk—using benchmarks, tests, and monitoring."
    },

{

        question: "Which of the following describes 'Model Governance'?",
        options: ["The speed of the GPU", "The framework for managing the development, deployment, and monitoring of AI models throughout their lifecycle", "The process of hiring data scientists", "A law that bans AI"],
        answer: 1,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Model governance ensures that every AI model follows a standardized process for risk assessment, approval, and continuous monitoring."
    },

{

        question: "Which concept refers to the 'Human-centric' approach in AI?",
        options: ["Replacing all humans with AI", "Ensuring AI systems are designed to support human autonomy and well-being", "Making AI look like a human", "Training AI only on human biology"],
        answer: 1,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Human-centric AI places the benefit of the human user and society at the center of the development process."
    },

{

        question: "What does the term 'Algorithm Accountability' refer to?",
        options: ["The speed at which an algorithm runs", "The requirement for organizations to be responsible for the outcomes of their automated decisions", "The total cost of developing an algorithm", "The number of lines of code in a model"],
        answer: 1,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Accountability means there must be a 'Human in the Loop' or a person answerable for the AI's mistakes, legally and ethically."
    },

{

        question: "What is 'Neural Architecture Search'?",
        options: ["An automated approach to creating the optimal neural network for a given problem", "A manual method for designing optimal neural networks", "A debugging technique for existing neural networks", "An algorithm to optimize hyperparameters during training"],
        answer: 0,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Neural Architecture Search is an automated approach to creating the optimal neural network for a given problem. Despite being labeled as 'AI creating AI,' it still relies on human input and oversight."
    },

{

        question: "What is the primary purpose of 'Data Lineage' in an audit?",
        options: ["To trace the lifecycle of data from its origin to its final use in the AI model", "To count the number of rows in a database", "To identify the physical location of the data center", "To speed up data processing"],
        answer: 0,
        domain: "Domain 1: AI Risk Governance and Framework Integration",
        explanation: "Lineage proves the 'Provenance'. It allows the auditor to verify that the data used for training was not tampered with and was ethically sourced."
    },

{

        question: "A company deploys GenAI for chatbots. What is the MOST significant operational risk?",
        options: ["Increased latency", "Hallucinations providing incorrect information", "Higher energy consumption", "Font style inconsistencies"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "For GenAI/LLMs, hallucinations (generating plausible but false info) pose a major risk to accuracy, reputation, and trustworthiness."
    },

{

        question: "What is the primary purpose of 'Data Sanitization' in AI security?",
        options: ["Deleting all data after one use", "Removing malicious inputs or sensitive info from training sets", "Increasing the brightness of image data", "Compressing files to save disk space"],
        answer: 1, // B
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "Sanitization ensures that training data is free from poisons, malicious triggers, or unauthorized sensitive information (PII)."
    },

{

        question: "What is 'Model Inversion' as a security threat?",
        options: ["Turning the model off and on again", "An attack that attempts to reconstruct the training data by analyzing the model's outputs", "A bug that makes the model output text backwards", "A loss of power to the AI server"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "Model inversion is a privacy breach where sensitive training data is reverse-engineered through the model's public API."
    },

{

        question: "What is the purpose of 'Guardrails' in Generative AI?",
        options: ["To physical protect the data center", "To enforce safety and policy boundaries on model inputs and outputs", "To increase the training speed", "To allow the model to hallucinate more"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "Guardrails (like NeMo Guardrails) act as a middleware filter to ensure the AI does not generate toxic content, reveal PII, or discuss prohibited topics."
    },

{

        question: "Which attack involves querying a model many times to figure out the exact parameters or weights?",
        options: ["Model Extraction", "Phishing", "SQL Injection", "Denial of Service"],
        answer: 0,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "Model extraction is an attack where the goal is to steal the 'intellectual property' of the model by reconstructing it through API queries."
    },

{

        question: "What is the risk of 'Model Poisoning' during Federated Learning?",
        options: ["Servers exchanging viruses", "A participant sending malicious updates to corrupt the global model without revealing their private data", "The model becoming too large to download", "Internet connection interruptions"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "In Federated Learning, the central server doesn't see the raw data. This allows a malicious participant to inject 'poison' into the model weights during the local training step."
    },

{

        question: "Which of the following is the MOST significant risk when an AI system is used for critical medical diagnoses without human oversight?",
        options: ["Increased operational costs", "Negative impact on safety and fundamental rights", "Model overfitting", "Legacy system incompatibility"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "Critical systems (like medical AI) fall under high-risk categories. The primary concern is the potential for physical harm or violation of safety and fundamental rights (Health, Safety, Fundamental Rights)."
    },

{

        question: "What is 'Over-reliance' (or Over-trust) in AI?",
        options: ["Using AI for everything even when it's inefficient", "Accepting AI outputs without verification, leading to errors when the model 'hallucinates'", "The AI model using too many resources", "Buying too many AI licenses"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "Over-reliance occurs when users assume the AI is always correct, neglecting their own expertise and failing to check for inaccuracies."
    },

{

        question: "Which of the following is a key component of 'AI Incident Response'?",
        options: ["Buying more GPUs", "Predetermined playbooks for handling AI-specific failures (e.g., toxic output or data leakage)", "Changing the company logo", "Ignoring the error if it only happens once"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "Playbooks should address specific AI failure modes, such as prompt injection, model drift, or the generation of harmful content."
    },

{

        question: "What is 'Model Collapse' in the context of Large Language Models?",
        options: ["The server crashing under heavy load", "Degradation caused by models training on data previously generated by other AI models", "The model becoming too large for the GPU", "A sudden drop in the company's stock price"],
        answer: 1,
        domain: "Domain 2: AI Life Cycle Risk Management",
        explanation: "As AI content floods the internet, new models training on that 'synthetic' data lose the richness of human language and start failing."
    },

{

        question: "What is meant by 'In-context Learning'?",
        options: ["Studying in a library", "A model’s ability (such as GPT) to learn a task solely from instructions provided in the prompt", "A corporate training course", "Real-time database updating"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "In-context learning allows LLMs to perform new tasks without weight updates (fine-tuning), which changes how we audit model capabilities and safety."
    },

{

        question: "Automation Bias is best described as:",
        options: ["AI being biased against humans", "Humans over-relying on AI outputs and ignoring their own judgment", "AI preferring one server over another", "The model training too fast"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "Automation Bias is a cognitive bias where humans stop checking the AI's work because they assume the algorithm is always correct, a major risk in human-in-the-loop systems."
    },

{

        question: "Which is the BEST control to mitigate bias in AI models?",
        options: ["Increasing model complexity", "Using diverse and representative training data", "Removing documentation", "Eliminating testing"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "Bias often stems from training data. Ensuring the data is representative and diverse is the primary technical control to ensure fairness and equity."
    },

{

        question: "What is the primary advantage of using 'Synthetic Data'?",
        options: ["It is always more accurate than real data", "It protects privacy and avoids using sensitive real-world data", "It always costs more", "It requires no disk space"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "Synthetic data allows for model training when real data is protected by privacy (e.g., medical data) or is insufficient."
    },

{

        question: "What is the difference between 'threat intelligence' and 'vulnerability management' in the AI context?",
        options: ["They are the same thing", "Threat intelligence identifies emerging external threats; vulnerability management identifies and remediates internal weaknesses in AI systems", "Threat intelligence is proactive; vulnerability management is retrospective", "Vulnerability management only concerns hardware"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "Threat intelligence monitors the landscape of emerging external threats (new attacks, adversarial techniques). Vulnerability management identifies, prioritizes, and remediates internal weaknesses in AI systems."
    },

{

        question: "In the context of the AI Act, what is meant by 'Real-world testing'?",
        options: ["Tests performed by ordinary people on the street", "Testing AI systems in real operational conditions outside laboratories under specific safeguards", "Tests performed only on physical hardware and not virtualized environments", "Tests that last more than one year"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "The EU AI Act allows for 'testing in real-world conditions' for high-risk systems to ensure they behave safely in complex, non-simulated environments before full market deployment."
    },

{

        question: "What is the function of the 'Validation Set'?",
        options: ["Selling the model to clients", "Evaluating the model during training to tune hyperparameters and prevent overfitting", "Storing company historical data", "Cleaning data from errors"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "While the training set is used to learn, the validation set provides an unbiased evaluation of a model fit on the training dataset while tuning model hyperparameters."
    },

{

        question: "What is meant by 'Over-parameterization'?",
        options: ["A model that has too much data", "A model with far more parameters than necessary for the task", "An error in the source code", "An excessively expensive license"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "Over-parameterization occurs when a model's capacity (parameters) significantly exceeds the complexity of the task, which can lead to overfitting or inefficient resource use."
    },

{

        question: "What is 'Overfitting' in machine learning?",
        options: ["When the model is too large for the server", "When a model learns the training data too well, including noise, failing to generalize to new data", "When the model takes too long to respond", "When too many users access the model at once"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "Overfitting is a major risk: the model looks perfect during testing but fails in the real world because it simply 'memorized' the answers instead of learning the logic."
    },

{

        question: "What is the primary risk of using 'Synthetic Data' for training AI models?",
        options: ["High storage costs", "Potential for 'Model Collapse' or amplification of existing biases", "It is illegal under GDPR", "It requires too much electricity"],
        answer: 1,
        domain: "Domain 3: AI Risk Program Management",
        explanation: "If models are trained exclusively on synthetic data produced by other AI, they can suffer from 'model collapse' where they lose diversity and accuracy."
    }
];
