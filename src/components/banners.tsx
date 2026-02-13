import giftBanner from '../assets/banner_giftcard.png'

export default function Banners() {
    return (
        <div className="flex gap-12.5 max-w-325 ml-auto mr-auto w-screen py-6.25 px-12.5 box-border overflow-hidden ">
            <a className="transition-transform duration-150 ease-in-out hover:-translate-y-0.75 " href=""><img src={giftBanner} alt="Gift card banner" className='w-148' /></a>
            <a className="transition-transform duration-150 ease-in-out hover:-translate-y-0.75 " href=""><img src={giftBanner} alt="Gift card banner" className='w-148' /></a>
        </div>
    )
}