import footerLogo from '../assets/Triangle_revolution.png';
import facebookIcon from '../assets/ico_facebook.png';
import twitterIcon from '../assets/ico_twitter.png';
import bskyIcon from '../assets/ico_bsky.png';

export default function Footer() {

    return (
        <>
            <div className="w-full pt-4 pb-15 bg-bgfooter text-colorFooter">
                <div className="block pt-4 w-235 m-auto">
                    <div className=" h-2 border-t border-rulecolor border-solid "></div>
                    <div className='flex pt-0.5 float-left'><img className='h-6.25' src={footerLogo} />Web Store</div>
                    <div className='pt-0.5 float-right'><img className='h-8' src={footerLogo} /></div>
                    <div className='text-xs leading-4 ml-3 text-textFooter clear-both text-left'>
                        <div>© 2026 Web Store Corporation.  All rights reserved.  All trademarks are property of their respective owners in the US and other countries.</div>
                        <div>VAT included in all prices where applicable. &nbsp;
                            <a className=" text-colorFooter" href="">Privicy Policy</a>
                            &nbsp;
                            <span aria-hidden="true">|</span>
                            &nbsp;
                            <a className=" text-colorFooter" href="">Legal</a>
                            &nbsp;
                            <span>|</span>
                            &nbsp;
                            <a className=" text-colorFooter" href="">Accessibility</a>
                            &nbsp;
                            <span>|</span>
                            &nbsp;
                            <a className=" text-colorFooter" href="">Subscriber Agreement</a>
                            &nbsp;
                            <span>|</span>
                            &nbsp;
                            <a className=" text-colorFooter" href="">Refunds</a>
                            &nbsp;
                            <span>|</span>
                            &nbsp;
                            <a className=" text-colorFooter" href="">Cookies</a>
                            &nbsp;
                        </div>
                    </div>
                    <br />
                    <div className=" h-2 border-t border-rulecolor border-solid "></div>
                    <div className='flex flex-row flex-wrap justify-evenly mt-2 text-xs'>
                        <a href="">About</a>
                        <span aria-hidden="true">|</span>
                        <a href="">Jobs</a>
                        <span aria-hidden="true">|</span>
                        <a href="">Works</a>
                        <span aria-hidden="true">|</span>
                        <a href="">Distribution</a>
                        <span aria-hidden="true">|</span>
                        <a href="">Support</a>
                        <span aria-hidden="true">|</span>
                        <a href="">Gift Cards</a>
                        <span aria-hidden="true">|</span>
                        <a href="https://www.facebook.com/"><img src= {facebookIcon} /></a>
                        <span aria-hidden="true">|</span>
                        <a href="https://x.com/"><img src= {twitterIcon} /></a>
                        <span aria-hidden="true">|</span>
                        <a href="https://bsky.app/"><img src= {bskyIcon} /></a>
                    </div>
                    <div className='h-15'></div>
                </div>
            </div>
            <div className='h-10'></div>
        </>
    );
}