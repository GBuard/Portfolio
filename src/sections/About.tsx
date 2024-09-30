import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
    {
        title: "JavaScript",
        iconType: JavascriptIcon,
    },
    {
        title: "React",
        iconType: ReactIcon,
    },
    {
        title: "CSS3",
        iconType: CssIcon,
    },
    {
        title: "HTML5",
        iconType: HTMLIcon,
    },
    {
        title: "Github",
        iconType: GithubIcon,
    },
    {
        title: "Chrome",
        iconType: ChromeIcon,
    },
];

const hobbies = [
    {
        title: "Astronomie",
        emoji: "🌌",
    },
    {
        title: "Géopolitique",
        emoji: "🌍",
    },
    {
        title: "Ecologie",
        emoji: "🌱",
    },
    {
        title: "Sciences",
        emoji: "🧬",
    },
    {
        title: "Batterie",
        emoji: "🥁",
    },
    {
        title: "Jeux vidéo",
        emoji: "🎮",
    },
    {
        title: "Cinéma",
        emoji: "🎬",
    },
];

export const AboutSection = () => {
    return (
        <div className="py-20">
            <div className="container">
                <SectionHeader
                    eyebrow="À propos"
                    title="Un aperçu de mon monde"
                    description="Découvrez mon parcours, mes compétences et mes inspirations."
                />
                <div className="mt-20">
                    <Card className="h-[320px]">
                        <CardHeader
                            title="Mes lectures"
                            description="Découvrez les livres qui ont façonné mon point
                                de vue."
                        />
                        <div className="w-40 mx-auto mt-8">
                            <Image src={bookImage} alt="Book cover" />
                        </div>
                    </Card>
                    <Card className="h-[320px] p+0">
                        <CardHeader
                            title="Mes outils de développement"
                            description="Découvrez les technologies et outils que
                                j&rsquo;utilise pour créer des expériences
                                digitales uniques."
                            className="px-6 pt-6"
                        />
                        <ToolboxItems items={toolboxItems} className="mt-6" />
                        <ToolboxItems items={toolboxItems} className="mt-6" />
                    </Card>
                    <Card>
                        <CardHeader
                            title="Au delà du code"
                            description="Découvrez mes passions et mes inspirations en
                                dehors"
                        />
                        <div>
                            {hobbies.map((hobby) => (
                                <div key={hobby.title}>
                                    <span>{hobby.title}</span>
                                    <span>{hobby.emoji}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <Image src={mapImage} alt="Map" />
                        <Image src={smileMemoji} alt="Memoji Souriant" />
                    </Card>
                </div>
            </div>
        </div>
    );
};
