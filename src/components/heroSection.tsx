
export default function heroSection() {
    return (
        <div className=" z-1 overflow-hidden w-full box-content">
            <video  autoPlay loop muted playsInline preload=""
                    className="-translate-x-2/4 ml-[50%] ">
                <source src="https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/seasonalsales/510eefba7ced02981bca521c/webm_page_bg_english.webm?t=1765401325" 
                        type="video/webm"
                        className=" max-h-150 " />
            </video>
        </div>
    );
}