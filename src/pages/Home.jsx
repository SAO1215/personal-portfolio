import { ThemeToggle } from "../component/ThemeToggle"
import { StarBackground } from "../component/StarBackground"
import { Navbar } from "../component/Navbar"
import { HeroSection } from "../component/HeroSection"
import { AboutSection } from "../component/AboutSection"
import { SkillsSection } from "../component/SkillsSection"


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />
            
            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
            </main>

            {/* Footer */}

        </div>
    )
}