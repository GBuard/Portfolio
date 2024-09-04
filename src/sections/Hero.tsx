import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <Image src={memojiImage} alt="Memoji on computer"/>
        <div>
          <div></div>
          <div>Disponible pour de nouveaux projets</div>
        </div>
        <h1>Développeur Front-End exceptionnel</h1>
        <p>Je suis spécialisé dans la transformation de designs en application web performante et optimisée. Parlons de votre prochain projet ensemble.</p>
        <div>
          <button></button>
        </div>
      </div>
  </div>
  );
};
