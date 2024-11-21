type LocaleString = {
    pl: string;
    en: string;
};

// Define types for your data structures
interface Project {
    title: LocaleString;
    description: LocaleString;
    longDescription: LocaleString;
    tech: string[];
    images: string[];
    features: {
        pl: string[];
        en: string[];
    };
}

interface Education {
    degree: LocaleString;
    school: LocaleString;
    location: LocaleString;
    year: LocaleString;
}

interface Experience {
    role: LocaleString;
    company: string;
    location: LocaleString;
    period: LocaleString;
    details: LocaleString;
}

interface Language {
    name: LocaleString;
    level: string;
    proficiency: number;
}

interface Award {
    title: LocaleString;
    organization: LocaleString;
    year: string;
    description: LocaleString;
}

const portfolio: Project[] = [
    {
        title: {
            pl: "Prynt",
            en: "Prynt"
        },
        description: {
            pl: "Kompleksowy system zarządzania przedsiębiorstwem poligraficznym w modelu SaaS",
            en: "Comprehensive printing company management system in SaaS model"
        },
        longDescription: {
            pl: `Zaawansowany system będący ewolucją wcześniejszych projektów (System Zamówień i System Produkcji), 
                zaprojektowany z myślą o komercyjnym wdrożeniu w firmach poligraficznych. System składa się z 
                zintegrowanych modułów obsługujących: kalkulacje, produkcję, magazyn, zamówienia, bazę klientów, 
                pracę handlowców oraz dane firm. Projekt jest aktywnie rozwijany jako aplikacja SaaS.`,
            en: `Advanced system evolving from previous projects (Order System and Production System), 
                designed for commercial implementation in printing companies. The system consists of 
                integrated modules handling: calculations, production, warehouse, orders, customer database, 
                sales representatives work, and company data. The project is actively developed as a SaaS application.`
        },
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "GraphQL", "Tanstack Query",
            "Node.js", "Express.js", "Apollo", "GraphQL", "MongoDB", "Mongoose", "Docker", "Datadog"],
        images: [
            "./img/project1_1.png",
            "./img/project1_2.png",
            "./img/project1_3.png",
            "./img/project1_4.png",
        ],
        features: {
            pl: [
                "Kompleksowe zarządzanie procesami poligraficznymi",
                "Zintegrowany system kalkulacji zamówień",
                "Zarządzanie stanami magazynowymi",
                "Zarządzanie klientami i handlowcami",
                "System raportowania i analityki"
            ],
            en: [
                "Comprehensive printing process management",
                "Integrated order calculation system",
                "Inventory management",
                "Customer and sales representative management",
                "Reporting and analytics system"
            ]
        }
    },
    {
        title: {
            pl: "System Zamówień",
            en: "Order Management System"
        },
        description: {
            pl: "Dedykowany system zarządzania zamówieniami dla branży poligraficznej",
            en: "Dedicated order management system for the printing industry"
        },
        longDescription: {
            pl: `Specjalistyczne narzędzie zapewniające pełną obsługę procesu zamówień w firmie poligraficznej. 
                System umożliwia kompleksowe zarządzanie zamówieniami wraz z funkcjami dedykowanymi dla branży 
                poligraficznej, takimi jak weryfikacja plików produkcyjnych czy generowanie dokumentacji technologicznej.`,
            en: `Specialized tool providing complete order process management in a printing company. 
                The system enables comprehensive order management with functions dedicated to the printing industry, 
                such as production file verification and technological documentation generation.`
        },
        tech: ["React", "Material-UI", "Node.js", "Express.js", "MongoDB"],
        images: [
            "./img/project2_1.png",
            "./img/project2_2.png",
            "./img/project2_3.png",
            "./img/project2_4.png",
        ],
        features: {
            pl: [
                "Pełny CRUD zamówień",
                "Chat do komunikacji w sprawie weryfikacji plików",
                "Generowanie kart technologicznych/obiegowych",
                "System zarządzania plikami",
                "Integracja z systemem produkcyjnym"
            ],
            en: [
                "Full order CRUD operations",
                "File verification communication chat",
                "Technology/workflow card generation",
                "File management system",
                "Production system integration"
            ]
        }
    },
    {
        title: {
            pl: "System Produkcji",
            en: "Production System"
        },
        description: {
            pl: "System zarządzania procesami produkcyjnymi w firmie poligraficznej",
            en: "Production process management system for printing companies"
        },
        longDescription: {
            pl: `System wspierający zarządzanie procesami produkcyjnymi, zintegrowany z systemem zamówień. 
                Umożliwia śledzenie postępu produkcji w czasie rzeczywistym oraz zarządzanie zadaniami 
                pracowników poprzez intuicyjny interfejs i system kodów QR.`,
            en: `Production process management system integrated with the order system. 
                Enables real-time production progress tracking and employee task management 
                through an intuitive interface and QR code system.`
        },
        tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
        images: [
            "./img/project3_1.png",
            "./img/project3_2.png",
            "./img/project3_3.png",
            "./img/project3_4.png",
        ],
        features: {
            pl: [
                "Zarządzanie zadaniami produkcyjnymi",
                "Monitorowanie postępu prac",
                "System kodów QR do szybkiego rozpoczyania zadań",
                "Generowanie dokumentacji produkcyjnej",
                "Raportowanie nakładów produkcyjnych"
            ],
            en: [
                "Production task management",
                "Work progress monitoring",
                "QR code system for quick task initiation",
                "Production documentation generation",
                "Production volume reporting"
            ]
        }
    },
    {
        title: {
            pl: "ListLeap",
            en: "ListLeap"
        },
        description: {
            pl: "Narzędzie SaaS do cross-platformowej integracji Amazon-eBay",
            en: "SaaS tool for Amazon-eBay cross-platform integration"
        },
        longDescription: {
            pl: `Aplikacja w modelu SaaS umożliwiająca automatyzację procesu wystawiania produktów z Amazon na platformie eBay. 
                System wykorzystuje model subskrypcyjny poprzez integrację z systemem płatności Stripe.`,
            en: `A SaaS application that automates the process of listing Amazon products on eBay. 
                The system implements a subscription model through integration with the Stripe payment system.`
        },
        tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Stripe"],
        images: [
            "./img/project4_1.png",
            "./img/project4_2.png",
            "./img/project4_3.png",
            "./img/project4_4.mp4",
        ],
        features: {
            pl: [
                "Automatyczne wystawianie ofert z Amazon na eBay",
                "System subskrypcji i limitów",
                "Integracja z systemem płatności",
                "Panel zarządzania ofertami"
            ],
            en: [
                "Automatic listing of Amazon products on eBay",
                "Subscription and limits system",
                "Payment system integration",
                "Listing management dashboard"
            ]
        }
    },
    {
        title: {
            pl: "Facebook Lead Hunter",
            en: "Facebook Lead Hunter"
        },
        description: {
            pl: "Wtyczka Chrome do automatyzacji pozyskiwania leadów z Facebooka",
            en: "Chrome extension for automated lead generation from Facebook"
        },
        longDescription: {
            pl: `Rozszerzenie do przeglądarki Chrome automatyzujące proces zbierania danych kontaktowych z grup na Facebooku, 
                ze szczególnym uwzględnieniem grup deweloperskich. Narzędzie wspiera proces pozyskiwania potencjalnych klientów.`,
            en: `Chrome browser extension that automates the process of collecting contact information from Facebook groups, 
                with a particular focus on developer groups. The tool supports the process of potential client acquisition.`
        },
        tech: ["JavaScript", "HTML", "CSS"],
        images: [
            "./img/project5_1.mp4",
            "./img/project5_2.png",
            "./img/project5_3.png",
        ],
        features: {
            pl: [
                "Zbieranie danych z postów i komentarzy",
                "Ekstrakcja danych kontaktowych",
                "Eksport zebranych danych",
                "Automatyczna aktualizacja funkcjonalności"
            ],
            en: [
                "Data collection from posts and comments",
                "Contact information extraction",
                "Data export functionality",
                "Automatic feature updates"
            ]
        }
    },
    {
        title: {
            pl: "Amazon Product Analyzer",
            en: "Amazon Product Analyzer"
        },
        description: {
            pl: "Wtyczka Chrome do analizy produktów na Amazon",
            en: "Chrome extension for Amazon product analysis"
        },
        longDescription: {
            pl: `Rozszerzenie do przeglądarki Chrome służące do automatycznego zbierania i analizy danych o produktach 
                na platformie Amazon. Narzędzie wspiera proces analizy rynku i badania konkurencji.`,
            en: `Chrome browser extension for automatic collection and analysis of product data on the Amazon platform. 
                The tool supports market analysis and competitor research processes.`
        },
        tech: ["JavaScript", "HTML", "CSS"],
        images: [
            "./img/project6_1.png",
            "./img/project6_2.mp4",
        ],
        features: {
            pl: [
                "Analiza dostępności produktów",
                "Śledzenie wariantów produktów",
                "Zbieranie danych o cenach",
                "Eksport danych do analizy"
            ],
            en: [
                "Product availability analysis",
                "Product variant tracking",
                "Price data collection",
                "Data export for analysis"
            ]
        }
    }
];

// Translated skills categories
const skills = {
    categories: {
        pl: {
            "Frontend": ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Material-UI"],
            "Backend": ["Node.js", "Express.js", "Apollo", "GraphQL", "REST API", "MongoDB", "Mongoose", "SQL", "PHP"],
            "DevOps": ["AWS (EC2)", "Docker", "Nginx", "Git"],
            "Narzędzia": ["Jira", "Postman", "VS Code"]
        },
        en: {
            "Frontend": ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "Material-UI"],
            "Backend": ["Node.js", "Express.js", "Apollo", "GraphQL", "REST API", "MongoDB", "Mongoose", "SQL", "PHP"],
            "DevOps": ["AWS (EC2)", "Docker", "Nginx", "Git"],
            "Tools": ["Jira", "Postman", "VS Code"]
        }
    }
};
// Translated education data
const education: Education[] = [
    {
        degree: {
            pl: "Informatyka Stosowana",
            en: "Applied Computer Science"
        },
        school: {
            pl: "Wyższa Szkoła Ekonomii i Informatyki w Krakowie",
            en: "College of Economics and Computer Science in Kraków"
        },
        location: {
            pl: "Kraków, Małopolskie",
            en: "Kraków, Lesser Poland"
        },
        year: {
            pl: "2024 - Obecnie",
            en: "2024 - Present"
        }
    },
    {
        degree: {
            pl: "Technik Programista",
            en: "IT Programming Technician"
        },
        school: {
            pl: "Zespół Szkół im. Ojca Świętego Jana Pawła II w Niepołomicach",
            en: "Father John Paul II School Complex in Niepołomice"
        },
        location: {
            pl: "Niepołomice, Małopolskie",
            en: "Niepołomice, Lesser Poland"
        },
        year: {
            pl: "2019 - 2024",
            en: "2019 - 2024"
        }
    }
];

// Translated experience data
const experience: Experience[] = [
    {
        role: {
            pl: "Freelance Software Engineer",
            en: "Freelance Software Engineer"
        },
        company: "Fiverr.com",
        location: {
            pl: "Globalnie",
            en: "Global"
        },
        period: {
            pl: "2021 - Obecnie",
            en: "2021 - Present"
        },
        details: {
            pl: `49 ukończonych projektów z 34 recenzjami.
            Rating 5.0/5.0 i 100% wskaźnik zadowolenia klientów.
            Specjalizacja w tworzeniu rozszerzeń Chrome (30+ projektów).
            Rozwój wtyczek do scrapingu danych (Facebook, Amazon, Indeed), aplikacji SaaS i systemów automatyzacji.`,
            en: `49 completed projects with 34 reviews.
            5.0/5.0 rating and 100% client satisfaction rate.
            Specialization in Chrome extension development (30+ projects).
            Development of data scraping plugins (Facebook, Amazon, Indeed), SaaS applications, and automation systems.`
        }
    },
    {
        role: {
            pl: "Fullstack Software Engineer",
            en: "Fullstack Software Engineer"
        },
        company: "Patendruk Sp. z o.o",
        location: {
            pl: "Kraków, Małopolskie",
            en: "Kraków, Lesser Poland"
        },
        period: {
            pl: "2023 - 2024",
            en: "2023 - 2024"
        },
        details: {
            pl: `Zaprojektowanie i wdrożenie systemu zarządzania zamówieniami od podstaw.
            Technologie: React.js, MUI, Node.js, Express.js, MongoDB`,
            en: `Design and implementation of order management system from scratch.
            Technologies: React.js, MUI, Node.js, Express.js, MongoDB`
        }
    },
    {
        role: {
            pl: "Fullstack Software Engineer",
            en: "Fullstack Software Engineer"
        },
        company: "Unidruk",
        location: {
            pl: "Kraków, Małopolskie",
            en: "Kraków, Lesser Poland"
        },
        period: {
            pl: "2022 - 2023",
            en: "2022 - 2023"
        },
        details: {
            pl: `Stworzenie systemu zarządzania produkcją dla pracowników firmy.
            Implementacja modułów śledzenia efektywności pracowników.
            Technologie: PHP, SQL, JavaScript, HTML, CSS.`,
            en: `Created production management system for company employees.
            Implementation of employee efficiency tracking modules.
            Technologies: PHP, SQL, JavaScript, HTML, CSS.`
        }
    }
];

// Translated languages data
const languages: Language[] = [
    {
        name: {
            pl: "Polski",
            en: "Polish"
        },
        level: "C2",
        proficiency: 100
    },
    {
        name: {
            pl: "Angielski",
            en: "English"
        },
        level: "B2",
        proficiency: 67
    },
    {
        name: {
            pl: "Włoski",
            en: "Italian"
        },
        level: "B1",
        proficiency: 50
    }
];

const awards: Award[] = [
    {
        title: {
            pl: "I miejsce w hackatonie tworzenia gier komputerowych (Unity, C#)",
            en: "1st place in game development hackathon (Unity, C#)"
        },
        organization: {
            pl: "Wyższa Szkoła Ekonomii i Informatyki w Krakowie",
            en: "College of Economics and Computer Science in Kraków"
        },
        year: "2023",
        description: {
            pl: "",
            en: ""
        }
    }
];

export {
    experience,
    education,
    skills,
    portfolio,
    languages,
    awards,
};

export type {
    Project
}