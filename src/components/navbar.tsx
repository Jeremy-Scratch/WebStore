import steamLogo from '../assets/logo_steam.svg';
import downloadSteam from '../assets/btn_header_installsteam_download.png';

export default function Navbar() {

    return (
            <div className="flex px-4 h-26 m-0 bg-header min-w-dvw place-content-around">
                <div className="flex font-motiva font-medium">
                    <div className='pt-7.5 me-10 cursor-pointer'>
                        <img src={steamLogo} alt="steamLogo" className="h-11 w-44" />
                    </div>
                    <div className='flex text-base leading-4 float-left cursor-pointer uppercase antialiased [text-shadow:1px_1px_1px_rgba(0,0,0,0.5)] '>
                        <a className="relative pt-11.25 px-1.75 pb-1.75 text-storeblue
                                            after:content-['']
                                            after:absolute
                                            after:block
                                            after:h-[2.5px]                                                                             
                                            after:rounded-[3px]
                                            after:mt-0.5
                                            after:w-14
                                            after:bg-storeblue                                            
                                            ">STORE</a>

                        <a className=' pt-11.25 px-1.75 pb-1.75 text-menu hover:text-white'>COMMUNITY</a>
                        <a className=' pt-11.25 px-1.75 pb-1.75 text-menu hover:text-white'>ABOUT</a>
                        <a className=' pt-11.25 px-1.75 pb-1.75 text-menu hover:text-white'>SUPPORT</a>

                    </div>

                </div>
                <div className='text-[11px] flex h-6 text-login leading-6 align-top pt-1.5 font-["MotivaSans",sans-serif] font-normal' >
                    <a href="" className='relative inline-block h-5.25 mr-1'>
                        <div className='text-install  pl-8.75 pr-2.25 bg-no-repeat bg-installBG transition-all duration-250 cursor-pointer
                                        hover:bg-[#6c9018]
                                        hover:text-white'
                            style={{ backgroundPosition: '10px 5px', backgroundImage: `url(${downloadSteam})` }}>
                            Install Steam
                        </div></a>
                    <a className='text-login px-1 hover:text-white' href="">login</a> | 
                    <div> <span className='text-login px-1 align-top cursor-pointer hover:text-white '>language</span></div>
                </div>
            </div>
    );
}