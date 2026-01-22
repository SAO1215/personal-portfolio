import { useState, useEffect } from "react";

export const StarBackground = () => {
    // State that stores the generated stars
    const [stars, setStars] = useState([]);

    const [meteors, setMeteors] = useState([]);

    // Run once when the component mounts
    useEffect(() => {
        // Initial generation of stars and meteors
        generateStars();
        generateMeteors();

        // Regenerate stars when the window is resized
        const handleResize = () => {
            generateStars();
        };

        // Attach resize event listener
        window.addEventListener("resize", handleResize);

        // Cleanup resize listener on unmount
        return () => window.removeEventListener("resize", handleResize);

    }, []);


    // Generate stars based on the window size
    const generateStars = () => {
        // Calculate number of stars using screen area
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        // Create each star with random visual properties
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i, // Unique identifier for React rendering
                size: Math.random() * 3 + 1, // Size between 1px and 4px
                x: Math.random() * 100, // Horizontal position (percentage)
                y: Math.random() * 100, // Vertical position (percentage)
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2, // Animation duration between 2s and 6s
            });
        }

        // Update state with the generated stars
        setStars(newStars);
    };

    // Generate meteors based on the window size
    const generateMeteors = () => {
        // Calculate number of meteors using screen area
        const numberOfMeteors = 4

        const newMeteors = [];

        // Generate each meteor with randomized visual and animation properties
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i, // Unique identifier for React rendering
                size: Math.random() * 2 + 1, // Size between 1px and 3px
                x: Math.random() * 100, // Horizontal position (percentage)
                y: Math.random() * 20, // Initial vertical position near the top
                opacity: Math.random() * 15, // Random opacity intensity
                animationDuration: Math.random() * 3 + 3, // Animation duration between 3s and 6s
            });
        }

        // Update state with the generated meteors
        setMeteors(newMeteors);
    };



    return (
        {/* Full-screen decorative background */ },
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                {/* Individual star element */ },
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + "px",
                        height: meteor.size * 2 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};