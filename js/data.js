const portfolioData = {
    education: [
        {
            degree: "BCA IOP (H) R AIML",
            institution: "Galgotias University",
            years: "2023 - 2027",
            description: "Specialized in Artificial Intelligence and Machine Learning with focus on Deep Learning and Natural Language Processing. Conducted research on transformer architectures and their applications.",
            achievements: [
                "Led a team of 5 in developing an AI-powered travel platform"
            ],
            location: "Uttar Pradesh, IN",
            gpa: "4.0/4.0",
            thesis: ""
        }
        
    ],
    
    projects: [
        {
            title: "Google's Gemini with Kotlin Simple App",
            description: "How to integrate Google's Gemini into your Android application using Kotlin in this comprehensive step-by-step guide!",
            image: "img/gemini.jpg",
            demo: "https://github.com/therohitjagan/GeminiAI_DEMO",
            github: "https://github.com/therohitjagan/GeminiAI_DEMO",
            technologies: ["Kotlin", "Android","Gemini API"],
            featured: false,
            metrics: {
                users: "10K+",
                transactions: "50K+",
                uptime: "99.9%"
            },
            category: "AI/ML"
        },
        {
            title: "Image to Color Palette Generator",
            description: "Developed an image to color palette generator website. Features include upload image feature, extract colours from image, give 8 color code ",
            image: "img/imagetocolor.jpg",
            demo: "https://image-to-color.netlify.app/",
            github: "https://github.com/therohitjagan/image-to-color",
            technologies: ["HTML", "CSS", "JS", "Boostrap", "Fontawesome"],
            featured: true,
            metrics: {
                users: "5K+",
                messages: "1M+",
                accuracy: "95%"
            },
            category: "Frontend"
        },
        {
            title: "Infinitytoolspace: Web based useful tools",
            description: "Created an easy-to-use platform for everyone to access robust tools for productivity and problem-solving.",
            image: "img/infinitytoolspace.jpg",
            demo: "https://infinitytoolspace.vercel.app/",
            github: "https://github.com/therohitjagan/Infinitytoolspace",
            technologies: ["HTML", "Tailwind CSS", "JS", "Boostrap", "Fontawesome"],
            featured: true,
            metrics: {
                lighthouse: "98/100",
                loadTime: "< 2s",
                users: "1K+"
            },
            category: "Frontend"
        },
        {
            title: "Toolify: The ultimate tool app ",
            description: "The multi-functional Android app built with Java, offering tools like a calculator, loan calculator, TTS, STT and much more.",
            image: "img/toolify.png",
            demo: "https://github.com/therohitjagan/Toolify",
            github: "https://github.com/therohitjagan/Toolify",
            technologies: ["Android", "Java"],
            featured: true,
            metrics: {
                lighthouse: "98/100",
                loadTime: "< 2s",
                users: "1K+"
            },
            category: "Backend"
        }
    ],
    
    skills: [
        {
            title: "Frontend Development",
            description: "Building responsive and interactive web applications with modern frameworks and tools",
            category: "Frontend",
            proficiency: 80,
            tools: ["HTML", "CSS", "JS", "Boostrap", "Tailwind CSS"],
            experience: "2+ years",
            projects: 30,
            specialization: ["Performance Optimization", "Animation", "State Management"]
        },
        {
            title: "Backend Development",
            description: "A proficient in Python, Java, Kotlin, and C++, with database (MySQL, Firebase).",
            category: "Backend",
            proficiency: 85,
            tools: ["Python", "Java", "MySQL", "Kotlin", "C++","Firebase"],
            experience: "2+ years",
            projects: 25,
            specialization: ["Microservices", "Database Design", "API Development"]
        },
        {
            title: "Clouds",
            description: "Building scalable and reliable cloud solutions using AWS, Heroku, Google Cloud, Digital Ocean, and CloudFlare.",
            category: "DevOps",
            proficiency: 70,
            tools: ["AWS", "Heroku", "Google Cloud", "Digital Ocean", "CloudFlare"],
            experience: "1+ years",
            projects: 20,
            specialization: ["Container Orchestration", "Infrastructure as Code", "Monitoring"]
        },
        {
            title: "Other",
            description: "Creative designer and developer proficient in Git, Figma, Canva, Android Studio, AI APIs, and Unity game development.",
            category: "AI/ML",
            proficiency: 75,
            tools: ["GIT", "Figma", "Android Studio", "OpenAI API", "Gemini API","Unity","Google Play Console","Canva"],
            experience: "2+ years",
            projects: 15,
            specialization: ["NLP", "Computer Vision", "Recommendation Systems"]
        }
    ],

    blogs: [
        {
            title: "The Future of Web Development: 2025 and Beyond",
            excerpt: "Exploring upcoming trends in web development including WebAssembly, Edge Computing, and AI-driven development...",
            date: "2025-01-15",
            readTime: "5 min",
            link: "#",
            category: "Web Development",
            tags: ["WebAssembly", "Edge Computing", "AI"],
            author: {
                name: "John Doe",
                role: "Senior Developer",
                image: "/images/author.jpg"
            }
        },
        {
            title: "Advanced React Patterns and Best Practices",
            excerpt: "Deep dive into advanced React patterns, performance optimization techniques, and architectural decisions...",
            date: "2024-12-20",
            readTime: "8 min",
            link: "#",
            category: "React",
            tags: ["React", "JavaScript", "Performance"],
            author: {
                name: "John Doe",
                role: "Senior Developer",
                image: "/images/author.jpg"
            }
        }
    ]
};

export default portfolioData;