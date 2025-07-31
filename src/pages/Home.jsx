import { ThemeToggle } from "../compenents/ThemeToggle";
import { StartBackground } from "../compenents/StartBackground";
import { Navbar } from "../compenents/Navbar";
import { HeroSection } from "../compenents/HeroSection";
import { AboutSection } from "../compenents/AboutSection";
import { SkillsSection } from "../compenents/SkillsSection";
import { ProjectsSection } from "../compenents/ProjectsSection";
import { ContactSection } from "../compenents/ContactSection";
import { Footer } from "../compenents/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StartBackground />

            {/* Navbar */}
            <Navbar />
            {/* Main content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <Footer />

        </div>
    );
};