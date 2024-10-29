import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Cards";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
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
        left: "5%",
        top: "5%",
    },
    {
        title: "Géopolitique",
        emoji: "🌍",
        left: "50%",
        top: "5%",
    },
    {
        title: "Ecologie",
        emoji: "🌱",
        left: "10%",
        top: "35%",
    },
    {
        title: "Sciences",
        emoji: "🧬",
        left: "35%",
        top: "40%",
    },
    {
        title: "Batterie",
        emoji: "🥁",
        left: "70%",
        top: "45%",
    },
    {
        title: "Jeux vidéo",
        emoji: "🎮",
        left: "5%",
        top: "65%",
    },
    {
        title: "Cinéma",
        emoji: "🎬",
        left: "45%",
        top: "70%",
    },
];

export const AboutSection = () => {
    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    eyebrow="À propos"
                    title="Un aperçu de mon monde"
                    description="Découvrez mon parcours, mes compétences et mes inspirations."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[340px] md:col-span-2 lg:col-span-1">
                            <CardHeader
                                title="Mes lectures"
                                description="Découvrez les livres qui ont façonné mon point
                                de vue."
                            />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <Image src={bookImage} alt="Book cover" />
                            </div>
                        </Card>
                        <Card className="h-[340px] md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="Mes outils de développement"
                                description="Découvrez les technologies et outils que
                                 j&rsquo;utilise pour créer des expériences
                                digitales uniques."
                                className=""
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className=""
                                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className="mt-4"
                                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
                            />
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="Au delà du code"
                                description="Découvrez mes passions et mes inspirations en
                                dehors"
                                className="px-6 py-6"
                            />
                            <div className="relative flex-1">
                                {hobbies.map((hobby) => (
                                    <div
                                        key={hobby.title}
                                        className="inline-flex items-center 
                                    gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400
                                    rounded-full py-1.5 absolute"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                    >
                                        <span className="font-medium text-gray-950">
                                            {hobby.title}
                                        </span>
                                        <span>{hobby.emoji}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                            <Image
                                src={mapImage}
                                alt="Map"
                                className="h-full w-full object-cover object-left-top"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                                <div className="absolute inset-0 rounded-full from-emerald-300 to-sky-400 -z-10"></div>
                                <Image
                                    src={smileMemoji}
                                    alt="Memoji Souriant"
                                    className="size-20"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
