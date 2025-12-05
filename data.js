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
        bio: "I’m an Automation, Gen AI and Agentic AI enthusiast with over 6 years in the IT industry, specializing in RPA using UiPath (UiSAI, UiAAA, UiADP certified). I started with hands-on bot development and grew into roles where I lead teams, design automation architectures, and scale AI driven workflows across operations. I enjoy solving complex process challenges, working closely with business teams, and exploring emerging AI technologies that can create meaningful impact.<br><br>Outside of work, I’m passionate about finance with strong interest in stocks, mutual funds, and understanding market behavior. I enjoy reading about current affairs, global trends, and developments that shape the world. These interests keep me curious, informed, and continuously learning.",
        stats: [
            { value: "7+", label: "Years Experience" },
            { value: "10+", label: "Enterprise Clients" },
            { value: "15+", label: "Certifications" }
        ]
    },
    skills: [
        { name: "RPA (UiPath)", icon: "fa-solid fa-robot", color: "#FA4616" },
        { name: "Generative AI", icon: "fa-solid fa-brain", color: "#4285F4" },
        { name: "Agentic AI", icon: "fa-solid fa-network-wired", color: "#9C27B0" },
        { name: "Machine Learning", icon: "fa-solid fa-cogs", color: "#F4B400" },
        { name: "Data Science", icon: "fa-solid fa-chart-line", color: "#0F9D58" },
        { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
        { name: "Conversational AI", icon: "fa-solid fa-comments", color: "#009688" },
        { name: "RAG", icon: "fa-solid fa-book-open", color: "#FF5722" },
        { name: "NLP", icon: "fa-solid fa-language", color: "#673AB7" },
        { name: "OCR", icon: "fa-solid fa-eye", color: "#795548" },
        { name: "n8n", icon: "fa-solid fa-bolt", color: "#EA4B71" },
        { name: "Prompt Engineering", icon: "fa-solid fa-terminal", color: "#607D8B" },
        { name: "Project Management", icon: "fa-solid fa-list-check", color: "#2196F3" },
        { name: "Leadership", icon: "fa-solid fa-users", color: "#E91E63" }
    ],
    projects: [
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
            date: "April 2024 - Present",
            role: "Automation Technical Lead",
            company: "Accelirate Inc.",
            description: `<ul>
                <li>Leading strategy and scaling automation.</li>
                <li>Architecting Agentic AI pipelines and shaping how Gen AI augments enterprise processes.</li>
                <li>Driving end to end solution design across RPA, AI, and integration platforms, ensuring automation initiatives align with business goals and enterprise architecture standards.</li>
                <li>Mentoring developers and guiding teams on best practices, reusable frameworks, and scalable design principles to accelerate delivery across multiple workstreams.</li>
                <li>Partnering with clients to identify automation opportunities, evaluate feasibility, and define transformation roadmaps that maximize ROI.</li>
            </ul>`
        },
        {
            date: "Feb 2021 - March 2024",
            role: "Sr. RPA Developer",
            company: "Accelirate Inc.",
            description: `<ul>
                <li>Built end to end automations using UiPath, focusing on reliability, modularity, and long term maintainability.</li>
                <li>Integrated AI and ML models for classification, prediction, and document understanding to improve decision quality within workflows.</li>
                <li>Developed reusable components, orchestrations, and framework level utilities that accelerated delivery across multiple client projects.</li>
                <li>Implemented API integrations, data validations, and exception handling patterns to strengthen workflow accuracy and resiliency.</li>
            </ul>`
        },
        {
            date: "Jan 2019 - Feb 2021",
            role: "RPA Developer",
            company: "Capgemini",
            description: `<ul>
                <li>Built automation workflows using UiPath for high volume, rules based business processes and ensured smooth handover into production.</li>
                <li>Implemented strong exception handling, logging, and audit controls to maintain reliability and meet enterprise data privacy expectations.</li>
                <li>Conducted unit testing, integrated testing, and production validation to ensure stable and consistent bot performance.</li>
                <li>Provided hypercare support and optimization recommendations to improve speed, accuracy, and long term maintainability.</li>
            </ul>`
        },
        {
            date: "Sept 2018 - Dec 2018",
            role: "Full-stack Developer",
            company: "Capgemini",
            description: `<ul>
                <li>Worked on web application development using front end and back end technologies, contributing to feature design, coding, testing, and deployment activities.</li>
                <li>Assisted in debugging, performance tuning, and release management to maintain stable and scalable applications.</li>
                <li>Gained foundational experience in software engineering that later supported a smooth transition into automation and AI driven workflows.</li>
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
    }
};
