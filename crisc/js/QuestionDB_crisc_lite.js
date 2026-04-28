/* =====================================================================
   CRISC QUESTIONS DATABASE - LITE VERSION (FREE)
   32 questions — 8 per domain
===================================================================== */

const databaseDomande = [
{

        question: "According to the CRISC manual, who is ULTIMATELY accountable for risk in an information system that supports a critical business process?",
        options: ["The IT director", "The risk management department", "The system users", "Senior management"],
        answer: 3,
        domain: "Domain 1: Governance",
        explanation: "Senior management is responsible for the acceptance and mitigation of all risk. The IT director manages IT systems on behalf of business owners, and the risk management department reports on risk levels but does not own it."
    },

{

        question: "According to CRISC, what is the PRIMARY purpose of 'quantitative risk analysis'?",
        options: ["To replace qualitative risk assessments entirely", "To evaluate and assess risk using measurable data to get closer to ground-truth rather than relying solely on compliance-driven checklists", "To satisfy regulatory requirements for risk documentation", "To simplify risk communication to non-technical stakeholders"],
        answer: 1,
        domain: "Domain 1: Governance",
        explanation: "Quantitative risk analysis (e.g., the FAIR model) helps evaluate and assess risk using measurable data to get closer to ground-truth, enabling better risk-based decisions compared to compliance-driven checklists and purely qualitative methods."
    },

{

        question: "When using a Cloud Service Provider (CSP), which legal concept dictates that an organization must still protect its data regardless of where it is stored?",
        options: ["Strict Liability", "Due Diligence and Due Care", "Sovereign Immunity", "Caveat Emptor"],
        answer: 1, // B
        domain: "Domain 1: Governance",
        explanation: "Due care and due diligence require that management takes reasonable steps to protect assets (like data), even when those assets are managed by a third party."
    },

    // --- DOMAIN 2: IT RISK ASSESSMENT (THIRD-PARTY RISK) ---,

{

        question: "Which of the following BEST describes the distinction between governance and management in the CRISC framework?",
        options: ["Governance and management are interchangeable terms", "Management sets strategic vision; governance executes operational plans", "Governance is performed by IT; management is performed by business units", "Governance evaluates, directs, and monitors; management plans, builds, runs, and monitors to align with governance-defined objectives"],
        answer: 3,
        domain: "Domain 1: Governance",
        explanation: "The CRISC manual distinguishes that management activities focus on planning, building, running, and monitoring, while governance evaluates, directs, and monitors. A well-managed enterprise that lacks proper governance develops plans that don't create value."
    },

{

        question: "Which of the following is the BEST indicator of an effective risk management culture?",
        options: ["Zero security incidents reported in the last year", "Personnel at all levels feel empowered to report potential risks", "The organization has the highest budget for security in the industry", "All risk policies are signed by the Board"],
        answer: 1, // B
        domain: "Domain 1: Governance",
        explanation: "Transparency and the lack of fear in reporting are the hallmarks of a healthy risk culture. Zero incidents often suggest under-reporting."
    },

{

        question: "The CRISC manual identifies 'professional ethics' as a risk management concern. What is the PRIMARY ethics-related risk for enterprises?",
        options: ["Risk that competitors may steal trade secrets", "Risk of regulatory penalties for noncompliance", "Risk of reputational damage from public statements", "Risk that employees with poor ethical standards or poor ethical management processes may engage in fraud, theft, or misuse"],
        answer: 3,
        domain: "Domain 1: Governance",
        explanation: "Ethics affects risk through employees who may engage in fraud or theft (poor ethics) and through organizations that have poor management processes to identify errors, misuse, or fraud—both creating significant risk."
    },

{

        question: "Which of the following BEST describes a 'risk framework' according to CRISC?",
        options: ["A structured approach that provides principles, processes, and guidelines for managing risk consistently across an enterprise", "A mandatory regulatory requirement", "A technical security standard specific to IT systems", "A financial model for calculating risk-adjusted returns"],
        answer: 0,
        domain: "Domain 1: Governance",
        explanation: "A risk framework provides a structured approach including principles, processes, and guidelines that help organizations manage risk consistently across all enterprise functions."
    },

{

        question: "Who is responsible for 'Approving' the Business Continuity Plan?",
        options: ["The IT Manager", "Senior Management/Board", "The Janitor", "The Customer"],
        answer: 1, // B
        domain: "Domain 1: Governance",
        explanation: "Strategic plans that impact the company's survival must be approved at the top."
    },

{

        question: "Which of the following is a 'Social Engineering' attack?",
        options: ["A SQL injection on a website", "A 'vishing' call trying to get a user's password over the phone", "A DDoS attack", "A router failure"],
        answer: 1, // B
        domain: "Domain 2: Risk Assessment",
        explanation: "Vishing (Voice Phishing) targets the human vulnerability through psychological manipulation."
    },

    // --- CONTINUING MIXED 71-100 ---,

{

        question: "What should a risk practitioner do FIRST when a new risk is identified?",
        options: ["Implement a control immediately", "Record the risk in the risk register", "Transfer the risk to insurance", "Ignore it if it seems small"],
        answer: 1, // B
        domain: "Domain 2: Risk Assessment",
        explanation: "The Risk Register is the formal tracking tool. Documentation must occur before treatment decisions are made."
    },

{

        question: "What is the first step in the IT risk assessment process?",
        options: ["Identify vulnerabilities", "Identify assets and their value", "Determine the likelihood of a threat", "Select risk response options"],
        answer: 1, // B
        domain: "Domain 2: Risk Assessment",
        explanation: "You cannot assess risk if you don't know what you are protecting. Identifying assets and their criticality/value is the foundational step."
    },

{

        question: "What is the primary risk of 'Ransomware'?",
        options: [
            "Slow internet speed.",
            "Loss of access to critical data and potential data exfiltration.",
            "The computer screen turning off.",
            "Having to buy a new mouse."
        ],
        answer: 1, // B
        domain: "Domain 2: Risk Assessment",
        explanation: "Ransomware encrypts data to deny access, and increasingly involves 'double extortion' where data is also stolen."
    },

{

        question: "What is the PRIMARY advantage of 'quantitative risk analysis' over qualitative methods per CRISC?",
        options: ["It provides measurable, data-driven risk values (often financial) that enable more objective comparisons and better support resource allocation decisions", "It is always faster to complete than qualitative methods", "It eliminates subjectivity completely", "It requires less expertise to perform than qualitative analysis"],
        answer: 0,
        domain: "Domain 2: Risk Assessment",
        explanation: "Quantitative risk analysis provides measurable, data-driven risk values (often financial) that enable more objective comparisons and better support resource allocation and cost-benefit analysis decisions."
    },

{

        question: "What is the main purpose of 'Privacy Impact Assessment' (PIA)?",
        options: ["To calculate the cost of a data breach", "To identify and reduce the privacy risks of a new project or system", "To hide data from the government", "To improve the speed of the website"],
        answer: 1, // B
        domain: "Domain 2: Risk Assessment",
        explanation: "A PIA ensures that privacy is built into the system by design (Privacy by Design)."
    },

    // --- CONTINUING MIXED 121-150 ---,

{

        question: "According to the CRISC manual, what is the PRIMARY purpose of a 'risk assessment'?",
        options: ["To satisfy regulatory reporting requirements", "To assign blame for risk events to specific individuals", "To select and implement security controls for all identified risks", "To analyze and evaluate identified risks to generate a risk score/rating that enables risk-based decision-making"],
        answer: 3,
        domain: "Domain 2: Risk Assessment",
        explanation: "A risk assessment analyzes and evaluates identified risk scenarios and events to generate a risk score/rating, enabling management to prioritize risk treatment and make informed risk-based decisions."
    },

{

        question: "Which of the following is a 'Qualitative' risk assessment output?",
        options: [
            "An ALE of $50,000.",
            "A risk rating of 'High' on a 5x5 heat map.",
            "A recovery cost of $10,000 per hour.",
            "An insurance premium of $5,000."
        ],
        answer: 1, // B
        domain: "Domain 2: Risk Assessment",
        explanation: "Qualitative assessments use descriptive labels rather than precise monetary values."
    },

{

        question: "What is the FIRST thing an organization should do after a major data breach is contained?",
        options: ["Fire the CISO", "Conduct a post-incident review to identify lessons learned", "Buy more insurance", "Delete all the logs"],
        answer: 1, // B
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "Learning what went wrong is critical to preventing the same thing from happening again."
    },

{

        question: "Which of the following is a Key Performance Indicator (KPI) for Incident Response?",
        options: ["The number of threats in the industry", "Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR)", "The cost of the firewall", "The number of pages in the incident response plan"],
        answer: 1, // B
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "MTTD and MTTR measure how fast and effective the response team is."    },

{

        question: "Which of the following is the most important factor in risk communication?",
        options: ["Using complex technical terms", "Ensuring the information is timely, accurate, and tailored to the audience", "Sending emails to everyone in the company every day", "Only reporting risk when a breach happens"],
        answer: 1, // B
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "Effective communication ensures that decision-makers have the right information at the right time in a format they understand."
    },

{

        question: "According to CRISC, what does 'risk and control self-assessment (RCSA)' primarily accomplish?",
        options: ["It replaces independent audits of control effectiveness", "It engages business units in identifying and assessing their own risks and control effectiveness, promoting risk ownership and providing risk practitioners with valuable operational insights", "It documents risks for external regulatory review", "It eliminates the need for formal risk assessments"],
        answer: 1,
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "RCSA engages business units in identifying and assessing their own risks and control effectiveness, promoting risk ownership and accountability while providing risk practitioners with valuable operational risk insights."
    },

{

        question: "A risk practitioner notices that many 'Low' risks have remained on the risk register for over a year without action. What is the BEST recommendation?",
        options: ["Delete all low-level risks to save space", "Re-evaluate the risks to ensure they are still low and align with the current risk appetite", "Force the IT manager to fix all of them immediately", "Upgrade them all to 'Medium' to get attention"],
        answer: 1, // B
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "Risks should be periodically reviewed because the threat landscape or business context may have changed, potentially increasing the risk level."
    },

    // --- DOMAIN 4: INFORMATION TECHNOLOGY AND SECURITY ---,

{

        question: "Which tool is BEST for managing and correlating security alerts from across the enterprise?",
        options: [
            "An Excel spreadsheet.",
            "A Security Information and Event Management (SIEM) system.",
            "An antivirus program.",
            "A hardware firewall."
        ],
        answer: 1, // B
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "SIEMs collect and analyze logs from many sources to identify complex attack patterns."
    },

{

        question: "According to CRISC, what is 'risk mitigation'?",
        options: ["The implementation of controls to reduce the likelihood and/or impact of a risk to within the enterprise's defined risk appetite", "The complete elimination of a risk through removal of the asset", "The formal documentation of accepted risks in the risk register", "The transfer of financial consequences to a third party"],
        answer: 0,
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "Risk mitigation involves implementing controls (safeguards or countermeasures) to reduce the likelihood and/or impact of a risk event to within the enterprise's defined risk appetite without eliminating the underlying activity."
    },

{

        question: "According to CRISC, what is the PRIMARY purpose of 'risk-based reporting'?",
        options: ["To focus reporting on the most significant risks and control issues that require stakeholder attention and decision-making, prioritizing information by materiality", "To document all risk events for regulatory compliance", "To report all identified risks regardless of significance", "To provide technical control details to all employees"],
        answer: 0,
        domain: "Domain 3: Risk Response and Reporting",
        explanation: "Risk-based reporting focuses on the most significant risks and control issues that require stakeholder attention and decisions, prioritizing by materiality rather than reporting everything uniformly regardless of significance."
    },

{

        question: "What is the PRIMARY purpose of 'Configuration Management' for security?",
        options: [
            "To make sure every computer looks the same.",
            "To ensure that systems are hardened and maintained in a known, secure state over time.",
            "To reduce the cost of buying new hardware.",
            "To track the physical location of every monitor."
        ],
        answer: 1, // B
        domain: "Domain 4: Technology and Security",
        explanation: "Configuration management prevents 'configuration drift', where systems become less secure over time due to ad-hoc changes."
    },

{

        question: "What is the 'Principle of Least Privilege'?",
        options: ["Giving everyone admin access to save time", "Ensuring users have only the minimum access necessary to perform their job functions", "Only managers are allowed to use the internet", "Passwords must be at least 20 characters long"],
        answer: 1, // B
        domain: "Domain 4: Technology and Security",
        explanation: "Least privilege limits the potential damage an account can do if it is compromised."
    },

{

        question: "According to the CRISC manual, what is 'portfolio and project management' in the context of IT risk?",
        options: ["A financial reporting process for IT investments", "A structured approach to managing collections of IT projects and investments that balances risk, value, and resources to ensure alignment with strategic objectives", "A technical methodology for software development", "A compliance framework for IT project governance"],
        answer: 1,
        domain: "Domain 4: Technology and Security",
        explanation: "Portfolio and project management balances risk, value, and resources across IT projects and investments, ensuring alignment with strategic objectives and that individual projects are assessed and managed from a risk perspective."
    },

{

        question: "Which of the following is an example of 'Data Classification'?",
        options: [
            "Alphabetizing files in a folder.",
            "Labeling data as 'Public', 'Internal', or 'Confidential' to determine security controls.",
            "Deleting data that is more than 3 years old.",
            "Moving data from a hard drive to a USB stick."
        ],
        answer: 1, // B
        domain: "Domain 4: Technology and Security",
        explanation: "Classification tells you how much protection a specific piece of data needs."
    },

{

        question: "What does 'RTO' (Recovery Time Objective) help determine?",
        options: [
            "How much data we can lose.",
            "How much time we have to recover the service before the impact becomes unacceptable.",
            "The cost of the backup tapes.",
            "The number of security guards needed."
        ],
        answer: 1, // B
        domain: "Domain 4: Technology and Security",
        explanation: "RTO = Time. RPO = Data Loss."
    },

{

        question: "Which of the following is the BEST way to mitigate the risk of a SQL injection attack?",
        options: [
            "Buying a faster database.",
            "Implementing input validation and prepared statements in the application code.",
            "Changing the database password every day.",
            "Restricting physical access to the server room."
        ],
        answer: 1, // B
        domain: "Domain 4: Technology and Security",
        explanation: "SQL injection is a code-level vulnerability; fixing the code to handle input safely is the best mitigation."
    },

{

        question: "Which of the following is a 'Logical' access control?",
        options: ["A biometric fingerprint scanner on a door", "Multi-factor authentication (MFA) for system login", "A security guard at the gate", "A locked server cabinet"],
        answer: 1, // B
        domain: "Domain 4: Technology and Security",
        explanation: "Logical controls are implemented through software and data (passwords, MFA, permissions)."
    },

{

        question: "What is the PRIMARY objective of a 'Business Continuity Plan' (BCP)?",
        options: [
            "To prevent all incidents.",
            "To provide a framework for the organization to continue its critical operations during a disruption.",
            "To increase the speed of the IT network.",
            "To reduce the cost of IT hardware."
        ],
        answer: 1, // B
        domain: "Domain 4: Technology and Security",
        explanation: "BCP is about survival and service continuity during a crisis."
    }
];
