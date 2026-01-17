import { useMemo } from "react";

export default function BlockHelper<T>(Games: T[]) {

    const gamePacks = useMemo(() => {
        const packs = [];
        for (let i = 0; i < Games.length; i += 4) {
            packs.push(Games.slice(i, i + 4));
        }
        return packs;
    }, [Games]);

    return { gamePacks };
}