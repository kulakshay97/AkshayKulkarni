const websiteData = {
    hero: {
        greeting: "Hello, I'm",
        name: "Akshay Kulkarni",
        tagline: "Leading intelligent automation with RPA, Gen AI, and Agentic AI to build smarter digital systems",
        btnPrimary: { text: "View Work", link: "#projects" },
        btnSecondary: { text: "Get in Touch", link: "#contact" },
        profileImage: "assets/profile.png"
    },
    about: {
        title: "About Me",
        bio: `I’m an AI & Automation Lead with over 7 years of experience building enterprise automation and intelligent systems, with the last two years focused on Agentic AI and generative AI solutions. My journey began with hands on RPA development using UiPath and gradually evolved into leading teams, architecting automation platforms, and designing AI driven workflows that operate at enterprise scale.

Over the years, I have worked on building scalable automation solutions, integrating AI capabilities with enterprise systems, and delivering intelligent workflows that improve operational efficiency and reduce manual effort. I enjoy solving complex business problems through practical AI applications and collaborating closely with stakeholders to turn automation opportunities into measurable business outcomes.

<br><br>Outside of work, I am passionate about finance with a deep interest in understanding market behavior. I enjoy reading about current affairs, global trends, and technological shifts that influence how businesses and economies evolve. These interests keep me curious and help me stay grounded with a broader perspective on the world.

I am always exploring new ideas, experimenting with tools, and learning concepts that help me stay ahead in the rapidly changing AI and automation landscape. Whether it is building agents, improving workflows, or discussing new possibilities, I enjoy being part of innovation that moves organizations forward.`,
        stats: [
            { value: "7+", label: "Years Experience" },
            { value: "10+", label: "Enterprise Clients" },
            { value: "15+", label: "Certifications" }
        ]
    },
    skills: [
        {
            category: "Agentic AI & Generative AI",
            icon: "fa-solid fa-brain",
            color: "#d946ef", // Fuchsia 500
            items: [
                "Multi-Agent Architecture, Agent Orchestration, Human-in-the-Loop Design, LLM Integration (Google-ADK, LangChain, LangGraph, CrewAI)",
                "Workflow Automation & Orchestration, Intelligent Process Automation (UiPath Maestro, UiPath Agent Builder, n8n)",
                "Multi-Agent Protocols, Context Passing, Tool Chaining (MCP, ACP, A2A)",
                "Conversational AI, Prompt engineering, Retrieval Augmented Generation (RAG), Agentic RAG, Structured Output Design"
            ]
        },
        {
            category: "Automation & RPA",
            icon: "fa-solid fa-robot",
            color: "#f97316", // Orange 500
            items: [
                "UiPath Platform: Studio, Orchestrator, AI Center, Action Center, Insights, UiPath SDK",
                "Intelligent Document Processing: Document Understanding, OCR-based Extraction, CV Automation",
                "Enterprise Automation Design: Queue-based Processing using RE-Framework, Exception Handling, Workflow Optimization, Performance Tuning, Scalable Bot Architecture",
                "Additional Automation Tools: Power Automate"
            ]
        },
        {
            category: "Programming & Scripting",
            icon: "fa-solid fa-code",
            color: "#3b82f6", // Blue 500
            items: [
                "Core Languages: Python, VB.NET, PowerShell",
                "API & Integration Development: REST API Design & Integration, Webhook Handling, Event-driven Architecture"
            ]
        }
    ],
    projects: [
        {
            title: "Autonomous Multi-Agent Healthcare Ecosystem (with ACP & MCP)",
            description: "Designed and implemented a scalable, distributed multi-agent system to automate healthcare and insurance workflows. Orchestrated specialized agents using CrewAI (for RAG-based policy analysis) and Smolagents (for live web-search medical assistance).Utilized Microservice Agent Architecture, Agent Communication Protocol (ACP) to wrap agents into independent servers, decoupling logic from deployment and enabling seamless agent discovery, Built a Hierarchical Router Agent to autonomously classify user queries and dispatch them to the appropriate specialist agent (Sequential vs. Parallel execution).Integrated Model Context Protocol (MCP) to expose local proprietary data (Doctor Directory) to LLMs securely, bridging the gap between static datasets and active agent tools.",
            tags: ["Python", "CrewAI", "Smolagents", "ACP-SDK", "FastMCP", "OpenAI GPT-4", "Agentic AI"],
            image: "assets/projects/healthcare_agent.png"
        },
        {
            title: "Gen AI Enhanced Automation Architecture",
            description: "Architected scalable automation solutions combining traditional RPA with Gen AI to enable smarter decision making, contextual exception handling, and improved user experience across enterprise processes. Designed end to end workflows that used AI models for intent detection, content interpretation, and dynamic routing. Introduced reusable design patterns that simplified integration of AI services into existing automation frameworks.These solutions helped business teams handle complex scenarios with greater accuracy and delivered a more intuitive interaction journey for end users.",
            tags: ["Gen AI", "Automation Architecture", "Agentic AI", "RAG"],
            image: "assets/projects/gen_ai_automation.png"

        },
        {
            title: "Inventory Manager Agent",
            description: "Designed and developed an AI driven agent that compares external reports with internal records, validates barcode scans in real time, identifies mismatches, and escalates exceptions to human reviewers when required. Automated the purchase order receiving process across multiple locations, improving accuracy and reducing manual workload. Added intelligent rules for data reconciliation, threshold based alerts, and guided exception insights that helped business teams resolve issues faster. Strengthened end to end process reliability and enabled more consistent inventory operations at scale.",
            tags: ["Python", "UiPath SDK", "Agentic AI", "RAG"],
            image: "assets/projects/Inventory_Manager_Agent.png"

        },
        {
            title: "Expense Tracker Agent",
            description: "Developed an automation agent using n8n to capture, categorize, and track expenses from multiple sources. The workflow extracts transaction details from emails or uploaded receipts, applies rule based categorization, and logs entries into a centralized expense sheet or database. Added validation checks, duplicate detection, and configurable category rules to improve accuracy. The agent also generates summaries, monthly breakdowns, and spending insights, allowing users to maintain financial clarity with very little manual effort. This solution helped streamline personal finance management and provided a scalable foundation for future expense analytics.",
            tags: ["n8n", "Agentic AI", "RAG"],
            image: "assets/projects/finance_tracker.png"

        },
        {
            title: "Reusable Automation Framework",
            description: "Developed reusable UiPath components and automation frameworks, including email orchestration using Microsoft Office 365 and secure credential handling with CyberArk Password Decryption. These plug and play modules improved code consistency, reduced development effort, and accelerated bot deployment timelines by nearly 20 percent across multiple enterprise automations. Also introduced standardized configuration models, robust exception handling patterns, and modular workflow templates that helped teams scale automations faster while maintaining quality and governance.",
            tags: ["UiPath", "Framework Design", "Efficiency"],
            image: "assets/projects/ReusableComponents_Image.png"

        },
        {
            title: "Document Understanding Workflow",
            description: "Trained and deployed a machine learning based document extraction model to capture key fields from high volume business documents using UiPath Document Understanding. The solution boosted processing speed, accuracy, and consistency for downstream workflows, significantly reducing manual verification. Implemented continuous learning, data quality controls, and validation logic that strengthened model reliability over time. This automation improved end to end throughput and delivered more predictable, scalable document processing for business operations.",
            tags: ["UiPath", "Document Understanding", "Machine Learning"],
            image: "assets/projects/doc_processing.png"

        },
        {
            title: "Inventory Receiving Automation",
            description: "Built an automation workflow that streamlines inventory receiving for more than 100 retail and service centers. Integrated the solution with the client’s internal inventory system, to validate invoices, match scanned items with expected quantities, and ensure smooth order processing. Added logic for quantity checks, mismatch alerts, and exception routing to reduce manual interventions. Improved accuracy across locations, shortened receiving cycles, and provided clearer visibility into inventory status for operations teams.",
            tags: ["RPA", "UiPath", "Business Process Optimization"],
            image: "assets/projects/InvReceiving_Image.png"

        },
        {
            title: "Ticket Reconciliation and Validation Automation",
            description: "Built an automated workflow that reconciles travel tickets and related financial entries across multiple internal and external applications. The solution validates records, highlights inconsistent data and automates adjustments wherever possible. Exceptions are routed for human review to ensure accuracy in travel accounting and reduce manual reconciliation effort. This workflow improved end to end transparency, minimized processing delays, and delivered reliable financial reporting.",
            tags: ["RPA", "UiPath", "Business Process Optimization"],
            image: "assets/projects/TicketReconciliation.png"

        },
        {
            title: "Signature Recognition and Digital Signing Automation",
            description: "Built a solution that identifies signature block locations in PDF documents by analyzing borrower and co borrower information. Integrated the workflow with DocuSign APIs to automatically apply required signatures, improving turnaround time and eliminating manual effort. Added logic to detect missing fields, validate signer roles, and handle multiple signature sequences. The solution improved document accuracy, reduced processing delays, and delivered a smoother experience for both internal teams and end users.",
            tags: ["RPA", "UiPath", "Business Process Optimization"],
            image: "assets/projects/Signature_Image.png"

        }

    ],
    experience: [
        {
            date: "04/2023 – Present",
            role: "Technical Lead",
            company: "Accelirate Softech Pvt Ltd",
            description: `<ul>
                <li>Led the strategy, architecture, and delivery of 10+ enterprise-scale Agentic AI and automation solutions using UiPath and LLM-based frameworks, enabling autonomous workflows and intelligent decision-making across business functions.</li>
                <li>Designed and deployed multi-agent AI systems leveraging LLMs, orchestration frameworks, and UiPath platform capabilities, reducing end-to-end process cycle times by up to 60% with human-in-the-loop governance and continuous learning pipelines.</li>
                <li>Led and mentored a cross-functional team of 6+ developers and business analysts, establishing solution standards, code review practices, and structured knowledge-sharing programs that reduced onboarding time by 30%.</li>
                <li>Owned the automation and AI roadmap by driving process discovery, pipeline prioritization, technology evaluation, and stakeholder engagement, contributing to 60% reduction in manual operational effort across delivered solutions.</li>
            </ul>`
        },
        {
            date: "02/2021 – 03/2023",
            role: "Sr. Automation Engineer",
            company: "Accelirate Softech Pvt Ltd",
            description: `<ul>
                <li>Built 8+ automation solutions using advanced UiPath capabilities including Document Understanding and AI Center, enabling accurate processing of unstructured documents at scale and reducing manual document handling by 50%.</li>
                <li>Applied foundational ML and AI concepts to real-world automation use cases, bridging the gap between data science outputs and production-grade RPA workflows across 3+ client engagements.</li>
                <li>Automated complex end-to-end workflows integrating Oracle/MySQL databases, web applications, Python-based ML models, Excel, email, and OCR-based PDF processing with saving 200+ hours of manual effort monthly.</li>
                <li>Maintained full technical ownership of project delivery across 5+ projects, ensuring solutions adhered to RPA best practices across development, testing, and production deployment.</li>
            </ul>`
        },
        {
            date: "08/2018 – 01/2021",
            role: "Software Engineer",
            company: "Capgemini",
            description: `<ul>
                <li>Contributed to the full project lifecycle across 10+ automation projects from requirements gathering, development, testing, UAT, and production deployment to ensure on-time, quality delivery.</li>
                <li>Built UiPath automations combining API integration and desktop automation, improving process efficiency by 45% and reducing manual intervention across business operations.</li>
                <li>Worked extensively with RE-Framework, enabling robust exception handling, queue configuration, and transactional processing for workflows handling 500+ transactions per day.</li>
            </ul>`
        }
    ],
    education: [
        {
            date: "2014 - 2018",
            degree: "Bachelor of Engineering, Electrical, Electronics and Communications Engineering",
            school: "Pimpri Chinchwad College Of Engineering",
            description: "Pimpri Chinchwad Education Trust'S."
        },
        {
            date: "2012 - 2014",
            degree: "Higher Secondary Education, Science",
            school: "Bhartiya Jain Sanghatana, Wagholi, Pune",
            description: ""
        }
    ],
    contact: {
        title: "Get In Touch",
        subtitle: "Let's Talk",
        text: "Interested in discussing RPA, Gen AI, or Agentic AI solutions? Feel free to reach out!",
        email: "akshaykulkarni616@gmail.com",
        location: "Pune, Maharashtra, India",
        socials: [
            { icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/akshay616" },
            { icon: "fa-solid fa-envelope", link: "mailto:akshaykulkarni616@gmail.com" }
        ]
    },
    certifications: {
        title: "Certifications",
        items: [
            { name: "UiPath Automation Developer Professional", issuer: "UiPath", icon: "fa-solid fa-robot", color: "#FA4616" },
            { name: "UiPath Agentic Automation Associate", issuer: "UiPath", icon: "fa-solid fa-robot", color: "#FA4616" },
            { name: "UiPath Specialized AI Professional", issuer: "UiPath", icon: "fa-solid fa-brain", color: "#FA4616" },
            { name: "Generative AI Fundamentals", issuer: "Google Cloud", icon: "fa-brands fa-google", color: "#4285F4" },
            { name: "Build Real World AI Applications with Gemini and Imagen", issuer: "Google Cloud", icon: "fa-solid fa-cloud", color: "#34A853" },
            { name: "Machine Learning with Python", issuer: "IBM", icon: "fa-solid fa-brain", color: "#054ADA" },
            { name: "Python for Data Science & AI", issuer: "IBM", icon: "fa-brands fa-python", color: "#3776AB" },
            { name: "AI for Everyone", issuer: "DeepLearning.AI", icon: "fa-solid fa-graduation-cap", color: "#FFCA28" },
            { name: "Generative AI for Everyone", issuer: "DeepLearning.AI", icon: "fa-solid fa-chalkboard-user", color: "#FFCA28" },
            { name: "Agentic AI", issuer: "DeepLearning.AI", icon: "fa-solid fa-network-wired", color: "#FFCA28" },
            { name: "Evaluating AI Agents", issuer: "DeepLearning.AI", icon: "fa-solid fa-magnifying-glass-chart", color: "#FFCA28" },
            { name: "Safe and Reliable AI via Guardrails", issuer: "DeepLearning.AI", icon: "fa-solid fa-shield-halved", color: "#FFCA28" }
        ]
    }
};
