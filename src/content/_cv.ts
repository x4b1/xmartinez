export const info = {
  name:"Xabier Martinez",
  jobDescription: "Software Engineer",
  location: "Basque Country, Spain",
  website: "https://xmartinez.dev",
  email: "xmartinez1702@gmail.com",
  github: "https://github.com/x4b1",
  linkedin: "https://www.linkedin.com/in/xmartinez",
  about: [
    "Software engineer with devops mindset and more than 10 years of experience, mainly working with Go programming language, but doesn't discard the opportunity to work with other technologies.",
    "Big fan of KISS principle, don't reinventing the wheel and automatization lover."
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
        "In charge of the enablement team, allowing new clients join to our platform.",
        "Tasks definitions, helping team to deliver and coordination with product and giving support to other teams of other areas.",
        "Help with infrastructure tasks and help others."
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
        "Build services in GoLang, such as, AuthN/AuthZ, financial services and libs.",
        "Moving forward to IaC and GitOps, Costs reductions.",
        "Improved CI/CD, migrate from Jenkins to GH actions. Standardize deployment, defining widely use workflows and Helm charts.",
        "Help other developers in the day by day.",
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
        "Worked on different backend services in Go, exposing graphql API for frontend.",
        "Internal service communication via gRPC and asynchronously using Pub/Sub.",
        "Integrating with third parties such as Twillio, Google and auth0.",
        "CI/CD using GitHub actions and deploying to kubernetes.",
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
        "Definition and implementation of a service (front and back-end) to handle onboarding of the new customers, with different flows and external integrations.",
        "Worked on developments around financial data, such as, invoice importing from third parties or financial transactions management.",
        "Setup deployments, pubsub queues, and other infrastructure stuff.",
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
        "Created from scratch a new managing tool for sales team.",
        "Build a service to handle automatically rejections from distributors when a customer wants to join.",
        "Move legacy code to a new service cleaning the code and adding tests, also fix many bugs on legacy code.",
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
        "Involved in the development of a massive content importer from different sources, such as, Web (crawling), REST APIs, Zendesk, Salesforce and other third APIs to import contents to the company platform, allowing the client configure it selfs.",
        "Managed projects related to chat-bots, NLP search and ticketing. Talking with clients to analyse the needs and viability.",
        "Developed functionalities for customer adapting company product to each them.",
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
      description: "A tiny Go library to easily publish/subscribe asynchronous messages with outbox pattern, supporting different message stores and brokers.",
      link: "https://github.com/x4b1/messenger"
    },
    {
      title: "Go Coverage Report",
      description: `Command line application that parses golang coverage output and outputs a pretty report, supporting different types of outputs.\n
      Mainly used to publish the report in github PRs checks to avoid paying third party tools.`,
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
