import DiscountLabel from "./carousel/discountLabel";
import { fGames } from "../services/gamesObjects";
import BlockHelper from "../hooks/blockHelper";

export default function FeatureBlock() {

    const {gamePacks} = BlockHelper(fGames);
    
    return (
        <div className="max-w-325 w-full box-border px-12.5 py-6.25 ml-auto mr-auto">
            <div id="rowsContainer">
                {/* MAPPING 4 ROW */}
                <div className="flex flex-row flex-nowrap justify-between gap-3 mb-3">
                    {/* MAPPING 4 CARDS */}
                    <BlockCard/>

                </div>
            </div>
        </div>
    );
}

function BlockCard() {
    const discounts = { Discount: 75, BeforePrice: 29.99, AfterPrice: 7.49, CN: "relative" };
    return (
        <a href="" className="relative z-1 w-[25%] block grow-0 [text-decoration:none]">
            <div className="hover:scale-105 relative block z-2 transition-transform duration-200 ease-in-out">
                <img src="" alt="" className="max-w-full " />
            </div>
            <DiscountLabel {...discounts} />
        </a>
    );
}