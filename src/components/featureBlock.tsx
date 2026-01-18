import DiscountLabel from "./carousel/discountLabel";
import { fGames } from "../data/gamesObjects";
import BlockHelper from "../hooks/blockHelper";
import type { DeepGameInfo } from "./carousel/feature/featureCard";

export default function FeatureBlock() {

    const { gamePacks } = BlockHelper(fGames);

    return (
        <div className="max-w-325 w-full box-border px-12.5 py-6.25 ml-auto mr-auto">
            <div id="rowsContainer">
                {gamePacks.map((packs, index) => {
                    return (
                        <div key={index}
                            className="flex flex-row flex-nowrap justify-between gap-3 mb-3">
                                {packs.map((game)=>{
                                    return(
                                        <BlockCard key={game.Name} deepGameInfo={game} />
                                    )
                                })}                                                      
                        </div>)
                })}
            </div>
        </div>
    );
}

type BlockCardProps = ({deepGameInfo:DeepGameInfo});

function BlockCard({deepGameInfo}:BlockCardProps) {

    const {Name, Discount, BeforePrice, AfterPrice, Img } = deepGameInfo;

    const discounts = { Discount, BeforePrice, AfterPrice, CN: "relative" };

    return (
        <a href="" className="relative z-1 w-[25%] block grow-0 [text-decoration:none]">
            <div className="hover:scale-105 relative block z-2 transition-transform duration-200 ease-in-out">
                <img src={Img} alt={Name} className="max-w-full " />
            </div>
            <DiscountLabel {...discounts} />
        </a>
    );
}