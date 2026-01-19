import CategoryCard from "./categoryCard";
import { CategoriesData, CategoryGradient } from "../../../data/gamesObjects";

export default function CategoryCarousel() {
    return (
        <div className="max-w-325 w-auto box-border px-12.5 py-6.25 ml-auto mr-auto">
            <div className="relative font-['Motiva_Sans',Sans-serif] font-medium ">
                <div id="title" className="flex text-white pr-2.5 pb-2.5 flex-wrap text-center gap-2 text-[20px] font-semibold ">Browse by Category</div>
                <div id="hubCarousel" >
                    <div id="conteiner" className="relative">
                        <div id="track" className="relative">{/* Mapping */}
                            <div className=" w-full flex gap-3 transition-opacity duration-400 "> {/* key */}
                                {/* Mapping */}
                    {/* card */}<CategoryCard categoryInfo={CategoriesData[0]}/> {/* key */}
                                {/* 4 cards */}
                            </div>
                        </div>
                        {/* arrow */}
                        {/* arrow */}
                        {/* thumbs */}
                    </div>

                </div>
            </div>
        </div>
    );
}