import img from "/src/assets/anime.webp";

export default function CategoryCard(){
    return (
        <a className="group w-[19%] relative max-w-75 rounded-[10px] overflow-hidden h-55.25 shrink-0 decoration-0 " href="">
            <img className="w-full block transition-all duration-200 group-hover:scale-105 group-hover:brightness-[1.1]" src={img} alt="" />
            <div id="gradient" className="absolute top-0 h-full w-full transition-opacity duration-200 ease-in-out group-hover:opacity-50"></div>
            <div id="label" className="absolute bottom-12.5 text-center w-[90%] p-4 transition-all duration-200 ease-in-out group-hover:bottom-1.5 ">
                <span className="block w-fit m-auto text-[16px] leading-4.75 font-bold text-black bg-white uppercase py-1.5 px-3 rounded-sm tracking-[0.01ch] ">category</span>
            </div>
        </a>
    )
}