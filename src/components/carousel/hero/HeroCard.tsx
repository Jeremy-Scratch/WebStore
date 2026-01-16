import DiscountLabel from "../discountLabel";

export interface GameInfo {

    ImgUrl: string;
    BgUrl: string;
    VideoUrl: string;
    Title: string;
    ReviewSumary: string;
    ReviewStat: number;
    Genres: Array<string>;
    Discount: number;
    BeforePrice: number;
    AfterPrice: number;
}

type heroCardProps = { gameInfo: GameInfo };

export default function HeroCard({ gameInfo }: heroCardProps) {

    const { ImgUrl, BgUrl, VideoUrl, Title, ReviewSumary, ReviewStat, Genres, Discount, BeforePrice, AfterPrice } = gameInfo;
    const discountData = { Discount, BeforePrice, AfterPrice };

    return (
        <div id="HeroCard" className=" group w-[28vw] overflow-hidden max-h-112.5 max-w-93.5 relative text-[12px] [box-shadow:0_0_25px_black]">
            <a href=""></a>
            <img className="max-h-112.5 block max-w-full" src={ImgUrl} />
            <div id="hoverScreenshots" className="absolute m-0 top-full right-0 w-full h-[46.5%] opacity-0 pointer-events-none bg-black  transition-all duration-500 group-hover:opacity-100 group-hover:top-0">
                <div className={`h-full bg-[url(${BgUrl})]`} >
                    <video autoPlay loop preload='' className="w-full" >
                        <source src={VideoUrl} type="video/webm" />
                    </video>
                </div>
            </div>

            <div id="heroData" className="absolute top-full right-0 left-0 h-[54%] font-normal text-white font-[Motiva_Sans,Sans-Serif] opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:top-[46.5%]">
                <div id="heroDataContent" className="p-[6%] text-left">
                    <div id="heroName" className="font-[Motiva_Sans,Sans-Serif] font-bold leading-[1.2em] text-[2em] mb-1.25">{Title}</div>
                    <div id="stat" className="whitespace-nowrap overflow-hidden overflow-ellipsis leading-[1.7em] relative z-2 inline-block py-px px-1.25 rounded-[3px]">
                        <span className="text-[#66C0F4]">{ReviewSumary}</span><span>&nbsp;({ReviewStat})</span>
                    </div>
                    <div id="heroTags" className="flex flex-wrap">
                        {Genres.map((id, i: number) => (<HeroTags key={id} Genre={Genres[i]} />
                        ))}

                    </div>
                </div>
                <div id="AddToCart" className="absolute z-2 left-0 bottom-[10%] transition-all duration-500 pl-[6%]">
                    <button className="font-[Motiva_Sans,Arial,Helvetica,sans-serif] rounded-xs border-none p-px inline-block cursor-pointer text-[#d2efa9] bg-transparent no-underline text-shadow-[1px_1px_0px_rgba(0,0,0,0.3)]">
                        <span className="px-3.75 text-[15px] leading-7.5 block [background:linear-gradient(to_right,#75b022_5%,#588a1b_95%)] hover:[background:linear-gradient(to_right,#8ed629_5%,#6aa621_95%)] ">Add to Cart</span>
                    </button>
                </div>
            </div>
            <DiscountLabel {...discountData} />
        </div>
    );
}

interface Tags { Genre: string; }

function HeroTags({ Genre }: Tags) {
    return (
        <div className="text-[1em] text-white/80 text-center bg-[rgba(20,28,65,0.55)] py-0.75 px-1.25 mr-1.25 mt-1.25 rounded-[3px]">{Genre}</div>
    );
}