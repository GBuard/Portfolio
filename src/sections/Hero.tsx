import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <div className="flex flex-col items-center">
        <Image src={memojiImage} className="size-[100px]" alt="Memoji on computer"/>
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex">
          <div></div>
          <div>Disponible pour de nouveaux projets</div>
        </div>
        </div>
        <h1>Développeur Front-End exceptionnel</h1>
        <p>Je suis spécialisé dans la transformation de designs en application web performante et optimisée. Parlons de votre prochain projet ensemble.</p>
        <div>
          <button>
            <span>Explorez mes travaux</span>
            <ArrowDown/>
          </button>
          <button>
            <span>👋</span>
            <span>Connectons nous</span>
          </button>
        </div>
      </div>
  </div>
  );
};
