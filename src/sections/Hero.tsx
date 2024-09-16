import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";

export const HeroSection = () => {
    return (
        <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
            <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{
                    backgroundImage: `url(${grainImage.src})`,
                }}
            ></div>
            <div className="size-[620px] hero-ring"></div>
            <div className="size-[820px] hero-ring"></div>
            <div className="size-[1020px] hero-ring"></div>
            <div className="size-[1220px] hero-ring"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className=" size-[800px] animate-spin [animation-duration:30s]">
                    <div className=" inline-flex animate-spin [animation-duration:5s]">
                        <StarIcon className="size-28 text-emerald-300" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-col items-center">
                    <Image
                        src={memojiImage}
                        className="size-[100px]"
                        alt="Memoji on computer"
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <div className="bg-green-500 size-2.5 rounded-full"></div>
                        <div className="text-sm font-medium">
                            Disponible pour de nouveaux projets
                        </div>
                    </div>
                </div>
                <div className="max-w-lg mx-auto">
                    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
                        Développeur Front-End exceptionnel
                    </h1>
                    <p className="mt-4 text-center text-white/60 md:text-lg">
                        Je suis spécialisé dans la programmation Front-End, mon
                        objectif est de devenir un des meilleurs. Parlons de
                        votre prochain projet ensemble.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                    <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                        <span className="font-semibold">
                            Explorez mes travaux
                        </span>
                        <ArrowDown className="size-4" />
                    </button>
                    <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                        <span>👋</span>
                        <span className="font-semibold">Connectons nous</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
