import arrowIcon from '../..arrow_left.svg'

interface ArrowStuff { action : ()=> void; }

export default function LeftArrow({action}:ArrowStuff) {
    return (
        <div id="leftArrow"
            onClick={action}
            className='box-content w-5.75 h-9 py-9 px-2.75 absolute cursor-pointer z-3 -left-12.5 top-[calc(50%-54px)] translate-y-[calc(-50%+37px)]
                                            transition-transform ease-in-out duration-150
                                            hover:scale-105'>
            <div style={{ backgroundImage: `url(${arrowIcon})` }} className='w-5.75 h-9 bg-no-repeat'></div>
        </div>
    )
}