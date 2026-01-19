import Card from './featureCard';
import LeftArrow from '../leftArrow';
import RightArrow from '../rightArrow';
import Thumbs from '../thumbs';
import { deepGames } from '../../../data/gamesObjects';
import useCarousel from '../../../hooks/carouselLogic';

export default function FeatureCarousel() {

    const {gamePacks,nextSlide,prevSlide,setThumb, ids, currentIndex} = useCarousel(deepGames,3);

    return (
        <div className="max-w-325 w-auto relative z-1 box-border px-12.5 py-6.25 ml-auto mr-auto">
            <div className="relative rounded-[3px] bg-[rgba(22,41,79,0.7)] ">
                <div className='relative box-content'>
                    <TitleGrid />
                    <div id="carouselContainer" className="relative p-4 ">
                        <div id="carouselTrack" className="relative">
                            {gamePacks.map((pack, index) => {
                                const isActive = index === currentIndex;

                                return (
                                    <div key={index}
                                        aria-hidden={!isActive}
                                        id="cardFeature"
                                        className={`min-w-full w-auto flex gap-3 opacity-0 transition-opacity duration-400 absolute top-0 left-0 right-0
                                        ${isActive ? "opacity-100 relative " : "pointer-events-none"}`}>
                                        {pack.map((game) => (                                            
                                            <Card key={game.Name} deepGameInfo={game}  />
                                        ))}
                                    </div>)
                            })}
                        </div>
                        <Thumbs ids={ids} setThumb={setThumb} currentIndex={currentIndex} />
                        <LeftArrow action={prevSlide} />
                        <RightArrow action={nextSlide} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TitleGrid() {
    return (
        <div id="titleGrid" className="relative box-content pt-6 pb-2.5 pl-4 pr-4 z-1 grid grid-cols-[1fr_auto] grid-rows-[auto] [grid-template-areas:'title_button'_'subtitle_button'] overflow-hidden">
            <div id="titleSection" className="[grid-area:title] text-left m-0 text-white font-[Motiva_Sans,Sans-Serif] text-[26px] font-semibold leading-none text-shadow-[1px,1px,8px_rgba(14,27,55,0.75)] flex">Featured Deep Discounts</div>
            <div id="subtitleSection" className="[grid-area:subtitle] text-left text-white/70 text-[19px] font-normal text-shadow-[1px,1px,2px_rbga(0,0,0,0.25)] flex]">Especially Great Deals on Some of the All-Time Greats</div>
            <div id="buttonSection" className="[grid-area:button] justify-self-end self-center font-semibold text-[14px] ">
                <a href="" className="bg-[#cccccc] py-1.5 px-3 border-none rounded-xs cursor-pointer hover:bg-white ">
                    <span className="text-[16px] box-content leading-5 px-3.75" >See All</span>
                </a>
            </div>
        </div>
    );
}
