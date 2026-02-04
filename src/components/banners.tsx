import giftBanner from '../assets/gift_card_banner_desktop_english.webp'
import awardBanner from '../assets/steam_award_banner_desktop_english.webp'

export default function Banners() {
    return (
        <div className="flex gap-12.5 max-w-325 ml-auto mr-auto w-screen py-6.25 px-12.5 box-border overflow-hidden ">
            <a className="transition-transform duration-150 ease-in-out hover:-translate-y-0.75 " href=""><img src={giftBanner} alt="Gift card banner" /></a>
            <a className="transition-transform duration-150 ease-in-out hover:-translate-y-0.75 " href=""><img src={awardBanner} alt="Awards" /></a>
        </div>
    )
}