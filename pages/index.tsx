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
                            <nav className="header__nav"><a className="header__item" href="#">Features</a><a
                                className="header__item" href="#">Pricing</a><a className="header__item"
                                                                                href="#">Tours</a>
                                <div className="header__item js-header-item"><a className="header__head js-header-head"
                                                                                href="#">Explore
                                </a>
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
                                                    </a><a className="header__box" href="#">
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
                        <h1 className="main__title title title_big" data-aos><span className="title__box"><span
                            className="title__text">Create  </span></span><span className="title__box"><span
                            className="title__text"><span className="title__line">Like</span></span></span><span
                            className="title__box"><span className="title__text"> Never</span></span><span
                            className="title__box"><span className="title__text">Before<span
                            className="title__color">.</span></span></span></h1>
                        <div className="main__info info" data-aos="animation-scale-y" data-aos-delay="400">Create,
                            build, collaborate and ship products faster. Good bye code! 👋
                        </div>
                        <div className="main__control" data-aos="animation-scale-y" data-aos-delay="550"><a
                            className="main__btn btn btn_purple" href="login.html">Get Started</a><a
                            className="main__link" href="#">
                            <div className="main__icon"><img className="main__pic" src="img/play.svg" alt=""/></div>
                            <div className="main__text">See It In Action!</div>
                        </a></div>
                        <div className="main__scroll" data-aos="animation-scale-y" data-aos-delay="650"><a
                            className="main__link" href="#">
                            <div className="main__icon"><img className="main__pic" src="img/scroll.svg" alt=""/></div>
                            <div className="main__text">Scroll to explore</div>
                        </a></div>
                    </div>
                    <div className="main__view" data-aos>
                        <div className="main__preview"><img className="main__pic js-parallax" data-scale="1.5"
                                                            data-orientation="down" src="img/main-pic-1.png" alt=""/>
                        </div>
                        <div className="main__preview"><img className="main__pic js-parallax" data-scale="1.5"
                                                            data-orientation="up" src="img/main-pic-2.png" alt=""/></div>
                        <div className="main__preview"><img className="main__pic" src="img/mouse.png" alt=""/></div>
                        <div className="main__preview"><img className="main__pic" src="img/main-pic-3.png" alt=""/></div>
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
            <div className="features js-features">
                <div className="features__center center">
                    <div className="features__head" data-aos="animation-scale-y">
                        <div className="features__stage stage">Features</div>
                        <div className="features__box">
                            <h2 className="features__title title">The world’s most powerful design tool.</h2>
                            <div className="features__info info">Simultaneously design, code and collaborate with your
                                team all from one place.
                            </div>
                        </div>
                    </div>
                    <div className="features__body">
                        <div className="features__container">
                            <div className="features__slider js-features-slider">
                                <div className="features__slide" data-aos="animation-scale-y">
                                    <div className="features__details">
                                        <div className="features__preview"><img className="features__pic"
                                                                                src="img/camera.png" alt=""/></div>
                                        <div className="features__category">Import Photos & Videos</div>
                                        <div className="features__text">Simply drag and drop photos and videos into your
                                            workspace to automatically add them to your Collab Cloud library.
                                        </div>
                                        <a className="features__link" href="#">Find out more</a>
                                    </div>
                                </div>
                                <div className="features__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                    <div className="features__details">
                                        <div className="features__preview"><img className="features__pic"
                                                                                src="img/calendar.png" alt=""/></div>
                                        <div className="features__category">Calendar API Built-In</div>
                                        <div className="features__text">Kickstart your design process for a wide variety
                                            of apps such as calendar, analytics, virtual assistant, file manager.
                                        </div>
                                        <a className="features__link" href="#">Find out more</a>
                                    </div>
                                </div>
                                <div className="features__slide">
                                    <div className="features__details">
                                        <div className="features__preview"><img className="features__pic"
                                                                                src="img/camera.png" alt=""/></div>
                                        <div className="features__category">Import Photos & Videos</div>
                                        <div className="features__text">Simply drag and drop photos and videos into your
                                            workspace to automatically add them to your Collab Cloud library.
                                        </div>
                                        <a className="features__link" href="#">Find out more</a>
                                    </div>
                                </div>
                                <div className="features__slide">
                                    <div className="features__details">
                                        <div className="features__preview"><img className="features__pic"
                                                                                src="img/calendar.png" alt=""/></div>
                                        <div className="features__category">Calendar API Built-In</div>
                                        <div className="features__text">Kickstart your design process for a wide variety
                                            of apps such as calendar, analytics, virtual assistant, file manager.
                                        </div>
                                        <a className="features__link" href="#">Find out more</a>
                                    </div>
                                </div>
                                <div className="features__slide">
                                    <div className="features__details">
                                        <div className="features__preview"><img className="features__pic"
                                                                                src="img/camera.png" alt=""/></div>
                                        <div className="features__category">Import Photos & Videos</div>
                                        <div className="features__text">Simply drag and drop photos and videos into your
                                            workspace to automatically add them to your Collab Cloud library.
                                        </div>
                                        <a className="features__link" href="#">Find out more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features__status js-features-status"></div>
                    </div>
                </div>
                <div className="features__circle js-rellax" data-rellax-speed="-.7"></div>
                <div className="features__bg" data-aos data-aos-duration="1000"><img className="features__pic"
                                                                                     src="img/features-pic-1.svg"
                                                                                     alt=""/></div>
            </div>
            <div className="partners">
                <div className="partners__center center">
                    <div className="partners__head" data-aos="animation-scale-y">
                        <div className="partners__stage stage">Clients</div>
                        <div className="partners__details">
                            <h2 className="partners__title title">More than 68,219 designers use Collab.</h2>
                            <div className="partners__info info">Design anything from simple icons to fully featured
                                websites and applications.
                            </div>
                        </div>
                    </div>
                    <div className="partners__list">
                        <div className="partners__item" data-aos><img className="partners__pic" src="img/waves.svg"
                                                                      alt=""/></div>
                        <div className="partners__item" data-aos data-aos-delay="150"><img className="partners__pic"
                                                                                           src="img/goldlines.svg"
                                                                                           alt=""/></div>
                        <div className="partners__item" data-aos data-aos-delay="300"><img className="partners__pic"
                                                                                           src="img/oliver.svg" alt=""/>
                        </div>
                        <div className="partners__item" data-aos data-aos-delay="450"><img className="partners__pic"
                                                                                           src="img/duotrip.svg" alt=""/>
                        </div>
                        <div className="partners__item" data-aos><img className="partners__pic" src="img/rota-show.svg"
                                                                      alt=""/></div>
                        <div className="partners__item" data-aos data-aos-delay="150"><img className="partners__pic"
                                                                                           src="img/travelers.svg"
                                                                                           alt=""/></div>
                        <div className="partners__item" data-aos data-aos-delay="300"><img className="partners__pic"
                                                                                           src="img/velocity-9.svg"
                                                                                           alt=""/></div>
                        <div className="partners__item" data-aos data-aos-delay="450"><img className="partners__pic"
                                                                                           src="img/foxds.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="partners__preview" data-aos data-aos-duration="1000"><img className="partners__pic"
                                                                                          src="img/partners-pic.svg"
                                                                                          alt=""/></div>
                <div className="partners__circle js-rellax" data-rellax-speed=".6"></div>
            </div>

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