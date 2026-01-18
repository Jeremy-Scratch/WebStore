import HeroCard from "./HeroCard";
import LeftArrow from "../leftArrow";
import RightArrow from "../rightArrow";
import Thumbs from "../thumbs";
import { Games } from "../../../data/gamesObjects";
import useCarousel from "../../../hooks/carouselLogic";

export default function heroCarousel() {

    const {gamePacks,nextSlide,prevSlide,setThumb, ids, currentIndex} = useCarousel(Games);

    return (
        <div className="relative z-1 py-6.25 max-w-325 box-border px-12.5 ml-auto mr-auto w-auto flex">
            <div id="viewPort" className="relative">
                <div id="track" className="relative  flex m-0" >
                    {gamePacks.map((pack, index) => {
                        const isActive = index === currentIndex;

                        return (
                            <div key={index}
                                aria-hidden={!isActive}
                                className={`flex min-w-full justify-center opacity-0 transition-opacity duration-400 absolute top-0 left-0 w-auto gap-4
                                ${isActive ? "opacity-100 relative " : "pointer-events-none"}`}>
                                {pack.map((game) => (
                                    <HeroCard key={game.Title} gameInfo={game} />
                                ))}
                            </div>)
                    })}
                </div>
                <Thumbs ids={ids} setThumb={setThumb} currentIndex={currentIndex} />
                <LeftArrow action={prevSlide} />
                <RightArrow action={nextSlide} />
            </div>
        </div>
    );
}