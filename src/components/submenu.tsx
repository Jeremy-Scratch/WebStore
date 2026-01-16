
export default function Submenu() {
    return (
        <div id="subMenu" className="flex w-full font-medium place-content-around backdrop-blur-md sticky top-0 z-50">
            <div className="flex h-11.5 static flex-nowrap">
                <div className="flex items-center place-content-around">
                    <SButton Title="Browse" />
                    <SButton Title="Recommendations" />
                    <SButton Title="Categories" />
                    <SButton Title="Ways to Play" />
                    <SButton Title="Special Sections" />

                </div>
                <div className="flex w-[602.15px] ml-4 place-content-end">
                    <form className="flex flex-row min-w-120 place-content-around items-center" action="">
                        <div className="flex">
                            <input
                                type="search"
                                placeholder="Search the store"
                                className="place-self-right font-['Motiva_Sans',Arial,sans-serif] text-white bg-gray-600/40 rounded-l-xs border-white/24 border divide-solid w-111.5 h-8.5 px-2.5
                                         placeholder-white placeholder:text-[13px] placeholder:italic focus:border focus:divide-solid focus:border-storeblue focus:outline-0 focus:bg-[#242931]
                                           hover:border hover:divice-solid hover:border-[rgba(26,160,255,.39)] " />
                        </div>
                        <button className="flex transition-all ease-out duration-200 hover:bg-searchhover bg-storeblue w-8.5 h-8.5 justify-center text-white border-none rounded-r-[1px] cursor-pointer">
                            <svg className="w-4.5 transform scale-100 transition-all duration-200 ease-out hover:scale-120 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" >
                                <path fill="currentColor" d="M13.8296 12.0786C14.8347 10.6321 15.2623 8.86133 15.0284 7.11496C14.7945 5.36859 13.9159 3.77313 12.5656 2.64269C11.2153 1.51224 9.49114 0.928708 7.73254 1.00696C5.97394 1.08522 4.30831 1.8196 3.06357 3.06552C1.81882 4.31144 1.08514 5.97864 1.00696 7.7389C0.928776 9.49916 1.51176 11.2249 2.64114 12.5765C3.77052 13.9281 5.36446 14.8075 7.10919 15.0417C8.85391 15.2758 10.623 14.8477 12.0682 13.8417L15.2185 17L15.3997 16.8187L16.8188 15.3982L17 15.2168L13.8296 12.0786ZM8.04222 12.5824C7.14643 12.5824 6.27075 12.3165 5.52593 11.8183C4.7811 11.3202 4.20058 10.6122 3.85777 9.78376C3.51497 8.95538 3.42528 8.04384 3.60004 7.16443C3.7748 6.28502 4.20616 5.47723 4.83958 4.84321C5.47301 4.20919 6.28004 3.77742 7.15862 3.60249C8.0372 3.42757 8.94787 3.51734 9.77548 3.86047C10.6031 4.2036 11.3104 4.78467 11.8081 5.5302C12.3058 6.27573 12.5714 7.15223 12.5714 8.04887C12.5714 9.25123 12.0943 10.4043 11.2449 11.2545C10.3955 12.1047 9.24344 12.5824 8.04222 12.5824V12.5824Z"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

interface TitleProps { Title: string; }


function SButton({ Title }: TitleProps) {
    return (
        <button className="not-italic whitespace-nowrap flex flex-row border-none text-[13px] font-medium font-[Motiva_Sans,Sans-Serif] px-2.5 text-white cursor-pointer transition-all duration-200 ease-out bg-transparent gap-1.25 group">
            <div>{Title}</div>
            <svg className="w-3.5 transition-trabsform duration-200 ease-in-out group-hover:translate-y-0.5"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 12 12"
                 fill="none" >
                <path fill="currentColor" d="M5.81026 6.36084L8.50899 3.66211L9.6875 4.84062L5.81026 8.71786L1.93302 4.84062L3.11153 3.66211L5.81026 6.36084Z"></path>
            </svg>
        </button>
    );
}