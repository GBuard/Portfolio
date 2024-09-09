import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="Memoji on computer"/>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
          <div className="bg-green-500 size-2.5 rounded-full"></div>
          <div className="text-sm font-medium">Disponible pour de nouveaux projets</div>
        </div>
        </div>
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">Développeur Front-End exceptionnel</h1>
        <p className="mt-4 text-center text-white/60">Je suis spécialisé dans la transformation de designs en application web performante et optimisée. Parlons de votre prochain projet ensemble.</p>
        <div className="flex flex-col items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explorez mes travaux</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white ">
            <span>👋</span>
            <span>Connectons nous</span>
          </button>
        </div>
      </div>
  </div>
  );
};
