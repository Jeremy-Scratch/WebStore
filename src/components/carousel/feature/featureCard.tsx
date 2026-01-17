import DiscountLabel from "../discountLabel"

export interface DeepGameInfo {
    Name: string;
    Discount: number;
    BeforePrice: number;
    AfterPrice: number;
    VideoUrl?: string;
    Img: string;
}

type featureCardProps = { deepGameInfo: DeepGameInfo };

export default function Card({ deepGameInfo }: featureCardProps) {

    const { Name, Discount, BeforePrice, AfterPrice, VideoUrl, Img } = deepGameInfo;

    const price = { Discount, BeforePrice, AfterPrice, CN:"relative" }
    
    return (
        <a href="" className="relative z-1 block grow-0 shrink ">
            <div className="group block relative max-w-full z-2 transition-transform ease-in-out duration-200 hover:scale-105">
                <img src={Img} alt={Name} className="max-w-full relative transition-opacity duration-300 group-hover:opacity-0" />
                <video autoPlay playsInline loop preload='' className="absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] object-cover aspect-video z-3 w-full h-auto opacity-0 bg-black transition-opacity duration-600 hover:opacity-100">
                    <source src={VideoUrl} type="video/webm"/>
                </video>
            </div>
            <DiscountLabel {...price} />
        </a>
    );
}