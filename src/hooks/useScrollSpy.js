import {
    useEffect,
    useState,
} from "react";

export default function useScrollSpy(
    sectionIds
) {

    const [activeSection,
        setActiveSection] =
        useState(sectionIds[0]);

    useEffect(() => {

        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                setActiveSection(
                                    entry.target.id
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.5,
                }

            );

        sectionIds.forEach(
            (id) => {

                const section =
                    document.getElementById(
                        id
                    );

                if (section) {
                    observer.observe(
                        section
                    );
                }

            }
        );

        return () => {

            sectionIds.forEach(
                (id) => {

                    const section =
                        document.getElementById(
                            id
                        );

                    if (section) {
                        observer.unobserve(
                            section
                        );
                    }

                }
            );

        };

    }, [sectionIds]);

    return activeSection;
}