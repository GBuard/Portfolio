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

export const AboutSection = () => {
    return (
        <div className="pb-96">
            <SectionHeader
                eyebrow="À propos"
                title="Un aperçu de mon monde"
                description="Découvrez mon parcours, mes compétences et mes inspirations."
            />
            <div>
                <Card>
                    <div>
                        <StarIcon />
                        <h3>Mes lectures</h3>
                        <p>
                            Découvrez les livres qui ont façonné mon point de
                            vue.
                        </p>
                    </div>
                    <Image src={bookImage} alt="Book cover" />
                </Card>
                <Card>
                    <div>
                        <StarIcon />
                        <h3>Mes outils de développement</h3>
                        <p>
                            Découvrez les technologies et outils que
                            j&rsquo;utilise pour créer des expériences digitales
                            uniques.
                        </p>
                    </div>
                    <div>
                        {toolboxItems.map((item) => (
                            <div key={item.title}>
                                <TechIcon component={item.iconType} />
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </Card>
                <Card></Card>
            </div>
        </div>
    );
};
