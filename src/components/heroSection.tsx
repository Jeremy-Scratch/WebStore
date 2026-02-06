import heroImg from '../assets/heroblock.png'

export default function heroSection() {
    return (
        <div className=" z-1 overflow-hidden w-full box-content">

            <img src={heroImg} alt="" className="-translate-x-2/4 ml-[50%]  max-h-150 " />

        </div>
    );
}