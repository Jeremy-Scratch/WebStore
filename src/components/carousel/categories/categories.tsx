import CategoryCard from "./categoryCard";
import { CategoriesData, CategoryGradient } from "../../../data/gamesObjects";
import useCarousel from "../../../hooks/carouselLogic";

export default function CategoryCarousel() {
    const { gamePacks, currentIndex } = useCarousel(CategoriesData, 5);

    return (
        <div className="max-w-325 w-auto box-border px-12.5 py-6.25 ml-auto mr-auto">
            <div className="relative font-['Motiva_Sans',Sans-serif] font-medium ">
                <div id="title" className="flex text-white pr-2.5 pb-2.5 flex-wrap text-center gap-2 text-[20px] font-semibold ">Browse by Category</div>
                <div id="hubCarousel" >
                    <div id="conteiner" className="relative">
                        <div id="track" className="relative">{gamePacks.map((categories, index) => {
                            const isActive = index === currentIndex;
                            return (
                                <div key={index}
                                    aria-hidden={!isActive}
                                    className={`w-full flex gap-3 opacity-0 absolute transition-opacity duration-400 ${isActive ? "opacity-100 relative" : ""}`}>
                                        {categories.map((category, index) => {
                                        category.CN = CategoryGradient[index];
                                        return (
                                            <CategoryCard key={index} categoryInfo={category} />
                                        );
                                    })}
                                </div>
                            );
                        })}
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