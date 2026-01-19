import CategoryCard from "./categoryCard";
import { CategoriesData, CategoryGradient} from "../../../data/gamesObjects";
import useCarousel from "../../../hooks/carouselLogic";

export default function CategoryCarousel() {
    const { gamePacks } = useCarousel(CategoriesData, 5);

    return (
        <div className="max-w-325 w-auto box-border px-12.5 py-6.25 ml-auto mr-auto">
            <div className="relative font-['Motiva_Sans',Sans-serif] font-medium ">
                <div id="title" className="flex text-white pr-2.5 pb-2.5 flex-wrap text-center gap-2 text-[20px] font-semibold ">Browse by Category</div>
                <div id="hubCarousel" >
                    <div id="conteiner" className="relative">
                        <div id="track" className="relative">{gamePacks.map((category, index) => {
                            return (
                                <div key={index} className=" w-full flex gap-3 transition-opacity duration-400 ">{category.map((cate,index) => {
                                     cate.CN = CategoryGradient[index];
                                    return (
                                        <CategoryCard key={index} categoryInfo={cate}/>
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