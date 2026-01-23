import { ThemeToggle } from "../component/ThemeToggle"
import { StarBackground } from "../component/StarBackground"
import { Navbar } from "../component/Navbar"

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

            {/* Footer */}

        </div>
    )
}