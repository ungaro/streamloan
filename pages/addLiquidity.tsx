import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import sprite from "/public/img/sprite.svg";




const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
    const { account, library } = useWeb3React();

    const triedToEagerConnect = useEagerConnect();

    const isConnected = typeof account === "string" && !!library;

    return (
        <div>


            <main>

                <Account triedToEagerConnect={triedToEagerConnect} />

                {isConnected && (
                    <section>
                        <ETHBalance />

                        <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
                    </section>
                )}



            <div className="main">
                <div className="header js-header" id="header">
                    <div className="header__center center">
                        <button className="header__burger js-header-burger"><span></span></button>
                        <a className="header__logo" href="#"><img className="header__pic" src="img/logo.svg" alt=""/></a>
                        <div className="header__wrap js-header-wrap">
                            <nav className="header__nav"><a className="header__item" href="/">Features</a><a
                                className="header__item" href="/addLiquidity">Add Liquidity</a><a className="header__item"
                                                                                                  href="/borrow">Borrow</a>
                                <div className="header__item js-header-item">
                                    <div className="header__body js-header-body">
                                        <div className="header__center center">
                                            <div className="header__row">
                                                <div className="header__col">
                                                    <div className="header__category">Features</div>
                                                    <div className="header__menu"><a className="header__box" href="#">
                                                        <div className="header__preview"><img className="header__pic"
                                                                                              src="img/cup.png" alt=""/>
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Collab Assistant</div>
                                                            <div className="header__text">Smart automation system</div>
                                                        </div>
                                                    </a><a className="header__box" href="#">
                                                        <div className="header__preview"><img className="header__pic"
                                                                                              src="img/camera.png"
                                                                                              alt=""/></div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Advanced Importer</div>
                                                            <div className="header__text">Work with various media
                                                                formats
                                                            </div>
                                                        </div>
                                                        <div className="header__preview"><img className="header__pic"
                                                                                              src="img/calendar.png"
                                                                                              alt=""/></div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Product Management</div>
                                                            <div className="header__text">Workspace reimagined</div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div className="header__col">
                                                    <div className="header__category">Features</div>
                                                    <div className="header__menu"><a className="header__box" href="#">
                                                        <div className="header__preview"><img className="header__pic"
                                                                                              src="img/chatbox.png"
                                                                                              alt=""/></div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Support</div>
                                                            <div className="header__text">24/7 Live Support</div>
                                                        </div>
                                                    </a><a className="header__box" href="#">
                                                        <div className="header__preview"><img className="header__pic"
                                                                                              src="img/fill.png" alt=""/>
                                                        </div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Color Picker</div>
                                                            <div className="header__text">Advanced color picker</div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                                <div className="header__col">
                                                    <div className="header__category">Company</div>
                                                    <div className="header__menu"><a className="header__box" href="#">
                                                        <div className="header__preview"><img className="header__pic"
                                                                                              src="img/clock.png"
                                                                                              alt=""/></div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Collab Team</div>
                                                            <div className="header__text">See who’s behind the magic
                                                            </div>
                                                        </div>
                                                    </a><a className="header__box" href="#">
                                                        <div className="header__preview"><img className="header__pic"
                                                                                              src="img/bell-flat.png"
                                                                                              alt=""/></div>
                                                        <div className="header__deetails">
                                                            <div className="header__info">Collab Design</div>
                                                            <div className="header__text">What we’re working on</div>
                                                        </div>
                                                    </a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="header__photo"><img className="header__pic" src="img/menu-pic.png" alt=""/>
                            </div>
                        </div>
                        <div className="header__search js-header-search">
                            <button className="header__open js-header-open">

                            </button>
                            <div className="header__field"><input className="header__input" type="text"
                                                                  placeholder="Search ..."/></div>
                        </div>
                        <a className="header__btn btn btn_pink" href="login.html">Get Started</a>
                    </div>
                    <div className="header__bg js-header-bg"></div>
                </div>
                <div className="main__center center">
                    <div className="main__wrap">

                        <div className="StyledBox-sc-13pk1d4-0 jOBnEd">
                            <div className="StyledGrid-sc-1wofa1l-0 SUFKc"><span
                                >FRAX/USDC<span> BOOST</span></span>
                                <div className="StyledBox-sc-13pk1d4-0 gJTIRJ"><img width="26" height="26"
                                                                                    src="/static/media/frax.6ed06f08.svg"
                                                                                    alt="tokenIcon"/>
                                    <div className="StyledBox__StyledBoxGap-sc-13pk1d4-1 hzCveV"></div>
                                    <img width="26" height="26" src="/static/media/usdc.f08e02b1.svg" alt="tokenIcon"/>
                                </div>
                                <div className="StyledBox-sc-13pk1d4-0 wsmJZ">
                                    <div className="StyledBox-sc-13pk1d4-0 kZIrnQ"
                                         ><span
                                        className="StyledText-sc-1sadyjn-0 cAaqMk"
                                      >Ethereum</span></div>
                                </div>
                                <span>$10,095.49</span>
                                <div className="StyledBox-sc-13pk1d4-0 dfOloZ"><span>3.87%</span>
                                    <button type="button" className="StyledButtonKind-sc-1vhfpnt-0 ioxRVT"
                                           >Connect wallet
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="main__view" data-aos>


                        <div className="main__preview"><img className="main__pic js-parallax" src="img/main-pic-3.png" alt=""/></div>
                    </div>
                    <div className="main__circles">
                        <div className="main__circle"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="2"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="1"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="2"></div>
                        <div className="main__circle js-rellax" data-rellax-speed=".3"></div>
                        <div className="main__circle"></div>
                        <div className="main__circle js-rellax" data-rellax-speed="1"></div>
                    </div>
                </div>
            </div>
                <script src="/js/app.js"></script>
                <script src="/js/common.js"></script>
            </main>


            <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
        main {
          text-align: center;
        }
      `}</style>
        </div>
    );
}

export default Home;