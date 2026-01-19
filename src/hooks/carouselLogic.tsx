import { useState, useMemo } from "react";

export default function useCarousel<T>(Games: T[], n: number) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const gamePacks = useMemo(() => {
        const packs = [];
        for (let i = 0; i < Games.length; i += n) {
            packs.push(Games.slice(i, i + n));
        }
        return packs;
    }, [Games]);

    const totalPacks = gamePacks.length;

    const nextSlide = () => setCurrentIndex(currentIndex === totalPacks - 1 ? 0 : currentIndex + 1);

    const prevSlide = () => setCurrentIndex(currentIndex === 0 ? totalPacks - 1 : currentIndex - 1);

    const setThumb = (id: number) => setCurrentIndex(id);

    const ids = Array.from({ length: totalPacks }, (_, index) => index);

    return { nextSlide, prevSlide, setThumb, ids, gamePacks, currentIndex };
}