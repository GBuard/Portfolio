import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";

const portfolioProjects = [
    {
        company: "Acme Corp",
        year: "2022",
        title: "Dark Saas Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/4k7IdSLxh6w",
        image: darkSaasLandingPage,
    },
    {
        company: "Innovative Co",
        year: "2021",
        title: "Light Saas Landing Page",
        results: [
            { title: "Boosted sales by 20%" },
            { title: "Expanded customer reach by 35%" },
            { title: "Increased brand awareness by 15%" },
        ],
        link: "https://youtu.be/7hi5zwO75yc",
        image: lightSaasLandingPage,
    },
    {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
            { title: "Enhanced user experience by 40%" },
            { title: "Improved site speed by 50%" },
            { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/Z7I5uSRHMHg",
        image: aiStartupLandingPage,
    },
];

export const ProjectsSection = () => {
    return (
        <div>
            <div className="container">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
                        Real-world Results
                    </p>
                </div>
                <h2 className="font-serif text-3xl text-center mt-6">
                    Featured Projects
                </h2>
                <p className="text-center text-white/60 mt-4">
                    Regardez comment j&apos;ai transformé des concepts en
                    expériences numériques attractives.
                </p>
                <div className="flex flex-col mt-10">
                    {portfolioProjects.map((project) => (
                        <div key={project.title}>
                            <div>
                                <span>{project.company}</span>
                                <span>{project.year}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <hr />
                            <ul>
                                {project.results.map((result, index) => (
                                    <li key={index}>{result.title}</li>
                                ))}
                            </ul>
                            <a href={project.link}>
                                <button>Voir le site</button>
                            </a>
                            <Image src={project.image} alt={project.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
