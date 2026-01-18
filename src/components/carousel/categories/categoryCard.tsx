

export default function CategoryCard(){
    return (
        <a className="w-[19%] relative max-w-75 rounded-[10px] overflow-hidden h-55.25 shrink-0 decoration-0 " href="">
            <img className="w-full block transition-all duration-200 " src="" alt="" />
            <div id="gradient"></div>
            <div id="label" className="absolute bottom-12.5 text-center w-[90%] p-4 transition-transform duration-200 ease-in-out">
                <span className="block w-fit m-auto text-[16px] leading-4.75 font-bold text-black bg-white uppercase py-1.5 px-3 rounded-s tracking-[0.01ch] ">category</span>
            </div>
        </a>
    )
}