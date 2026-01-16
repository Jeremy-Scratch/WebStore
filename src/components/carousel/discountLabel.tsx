interface DiscountInfo {
    Discount: number;
    BeforePrice: number;
    AfterPrice: number;
    CN?: string;
}

export default function DiscountLabel({ Discount, BeforePrice, AfterPrice,CN }: DiscountInfo) {

    return (
        <div id="discountLabel" className={` ${CN} absolute bottom-0 right-0 transition-all duration-600 ease-in-out group-hover:bottom-[6%] bg-none justify-end flex leading-4`}>
            <div className="flex items-center font-bold text-black bg-discount text-[16px] px-1.5 font-[Motiva Sans] font-[sans-serif]">-{Discount}%</div>
            <div className="flex items-center flex-row shrink justify-end p-2 gap-1 overflow-hidden bg-discountBG">
                <div className="text-beforePrice text-[11px] whitespace-nowrap relative leading-3 w-fit 
                                    before:content-['']
                                    before:absolute
                                    before:left-0
                                    before:right-0
                                    before:top-[43%]
                                    before:border-b-[1.5px]
                                    before:border-[#738895]
                                    before:divide-solid
                                    before:-skew-y-8
                                    before:">${BeforePrice}</div>
                <div className="text-white text-[14px] pl-0">${AfterPrice} USD</div>
            </div>
        </div>
    );
}