export const info = {
  name:"Xabier Martinez",
  jobDescription: "Software Engineer",
  location: "Basque Country, Spain",
  website: "https://xmartinez.dev",
  email: "xmartinez1702@gmail.com",
  github: "https://github.com/x4b1",
  linkedin: "https://www.linkedin.com/in/xmartinez",
  about: [
    "Software engineer with a DevOps mindset and 10+ years of experience, specializing in Go programming but open to exploring other technologies. Adept at backend development, infrastructure automation, and CI/CD improvements. Passionate about the KISS principle and avoiding unnecessary reinvention."
  ],
  languages: ["Spanish", "English", "Basque"],
  experience: [
    {
      company: "Bankable",
      url: "https://www.bnkbl.com/",
      title: "Tech Lead",
      startDate: "Oct 2023",
      endDate: "Present",
      description: [
        "Leading the Enablement team to streamline the onboarding process for new companies on the platform.",
        "Defining tasks, guiding the team, and ensuring seamless coordination with product and other teams.",
        "Refactoring and modernizing legacy code to improve maintainability and performance."
      ],
      tags: ["Go", "Node.js", "PostgreSQL", "K8S", "AWS", "GPC", "Helm", "Terraform"]
    },
    {
      company: "Bankable (prev. Arex Markets)",
      url: "https://www.bnkbl.com/",
      title: "Platform Engineer",
      startDate: "Jul 2021",
      endDate: "Oct 2023",
      description: [
        "Developed core services in Go, including AuthN/AuthZ and financial transaction management.",
        "Drove Infrastructure as Code (IaC) and GitOps adoption, leading to improved operational efficiency.",
        "Optimized CI/CD pipelines by migrating from Jenkins to GitHub Actions, standardizing deployments with Helm charts.",
        "Provided technical mentorship and support to developers, improving team productivity."
      ],
      tags: ["Go", "Node.js", "PostgreSQL", "K8S", "AWS", "GPC", "Helm", "Terraform"]
    },
    {
      company: "Paack",
      url: "https://paack.co/",
      title: "Backend Developer",
      startDate: "Jul 2020",
      endDate: "Jul 2021",
      description: [
        "Built and maintained backend services in Go, exposing GraphQL APIs for frontend integration.",
        "Implemented gRPC-based inter-service communication and event-driven architecture using Pub/Sub.",
        "Integrated third-party services (Twilio, Auth0) to enhance platform capabilities.",
        "Automated deployments with GitHub Actions and Kubernetes.",
      ],
      tags: ["Go", "GCP", "GraphQL", "PostgreSQL", "RabbitMQ"]
    },
    {
      company: "Arex Markets",
      url: "https://www.arex.io/",
      title: "Software Developer",
      startDate: "Nov 2018",
      endDate: "Jul 2020",
      description: [
        "Designed and implemented a full-stack onboarding service with external integrations.",
        "Developed financial data services, including invoice importing and transaction management.",
        "Managed deployments, message queues, and infrastructure components."
      ],
      tags: ["Go", "Node.js", "TypeScript", "Vue.js", "PostgreSQL", "Docker", "AWS", "GPC"]
    },
    {
      company: "Holaluz",
      url: "https://www.holaluz.com/",
      title: "Backend Engineer",
      startDate: "Feb 2018",
      endDate: "Nov 2018",
      description: [
        "Designed and implemented a custom internal tool to optimize sales team workflows, improving efficiency and reducing manual work.",
        "Developed an automated system to manage distributor onboarding rejections, ensuring a smoother and more efficient process.",
        "Revamped legacy codebases by refactoring and enhancing test coverage, leading to better maintainability and reduced technical debt.",
      ],
      tags: ["PHP", "Symfony", "Laravel", "Vue.js", "Angular", "PostgreSQL", "MySQL", "AWS"]
    },
    {
      company: "Inbenta",
      url: "https://www.inbenta.com/en/",
      title: "Software Developer",
      startDate: "Feb 2016",
      endDate: "Feb 2018",
      description: [
        "Engineered a large-scale content importer integrating web crawling, REST APIs, and third-party services (Zendesk, Salesforce).",
        "Led chatbot and NLP-based search projects, collaborating with clients to refine solutions.",
        "Customized company products to meet specific client needs."
      ],
      tags: ["PHP", "Vue.js", "jQuery", "MySQL"]
    },
    {
      company: "Arin Innovation",
      url: "https://www.arin-innovation.com/en/",
      title: "Software Developer",
      startDate: "Oct 2014",
      endDate: "Feb 2016",
      description: [
        "Talk with clients to get the requirements and develop.",
        "First I was contracted for one year, when it finished they proposed me to extend the contract.",
      ],
      tags: ["Oracle", "Oracle JD Edwards", "Oracle DB", "PS/SQL", "Oracle BI publisher"]
    },
  ],
  projects: [
    {
      title: "Messenger",
      description: "A tiny Go library to easily publish/subscribe asynchronous messages using the outbox pattern, supporting different message stores and brokers.",
      link: "https://github.com/x4b1/messenger"
    },
    {
      title: "Go Coverage Report",
      description: `A command-line tool that parses Go coverage output and generates a detailed report, supporting multiple output formats. Mainly used for publishing reports in GitHub PR checks as an alternative to third-party tools.`,
      link: "https://github.com/x4b1/go-coverage-report"
    }
  ],
  education: [
    {
      title: "Computer Science Engineering",
      place: "University of the Basque Country",
      startDate: "Sep 2011",
      endDate: "Jul 2015",
    }
  ],
}
