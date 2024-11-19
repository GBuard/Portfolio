import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
    return (
        <div className="relative z-0">
            <Header />
            <section id="home">
                <HeroSection />
            </section>
            <section id="projects">
                <ProjectsSection />
            </section>
            <section id="tape">
                <TapeSection />
            </section>
            <section id="testimonials">
                <TestimonialsSection />
            </section>
            <section id="about">
                <AboutSection />
            </section>
            <section id="contact">
                <ContactSection />
            </section>
            <Footer />
        </div>
    );
}
