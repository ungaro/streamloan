import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
    const { account, library } = useWeb3React();

    const triedToEagerConnect = useEagerConnect();

    const isConnected = typeof account === "string" && !!library;

    return (
        <page>
            <Head>
                <title>next-web3-boilerplate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <nav>
                    <Link href="/">
                        <a>next-web3-boilerplate</a>
                    </Link>

                    <Account triedToEagerConnect={triedToEagerConnect} />
                </nav>
            </header>

            <main>
                <h1>
                    Welcome to{" "}
                    <a href="https://github.com/mirshko/next-web3-boilerplate">
                        next-web3-boilerplate
                    </a>
                </h1>

                {isConnected && (
                    <section>
                        <ETHBalance />

                        <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
                    </section>
                )}
            </main>


            <body>
            <div className="page">
                <div className="main">
                    <div className="header js-header" id="header">
                        <div className="header__center center">
                            <button className="header__burger js-header-burger"><span></span></button>
                            <a className="header__logo" href="#"><img className="header__pic" src="img/logo.svg" alt=""></a>
                            <div className="header__wrap js-header-wrap">
                                <nav className="header__nav"><a className="header__item" href="#">Features</a><a
                                    className="header__item" href="#">Pricing</a><a className="header__item"
                                                                                    href="#">Tours</a>
                                    <div className="header__item js-header-item"><a className="header__head js-header-head"
                                                                                    href="#">Explore
                                        <svg className="icon icon-arrow-down">
                                            <use xlink:href="img/sprite.svg#icon-arrow-down"></use>
                                        </svg>
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
                                    <svg className="icon icon-search">
                                        <use xlink:href="img/sprite.svg#icon-search"></use>
                                    </svg>
                                </button>
                                <div className="header__field"><input className="header__input" type="text"
                                                                      placeholder="Search ..."></div>
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
                <div className="access">
                    <div className="access__center center">
                        <div className="access__view" data-aos data-aos-delay="300">
                            <div className="access__preview"><img className="access__pic" src="img/access-pic-2.png" alt=""/>
                            </div>
                            <div className="access__preview"><img className="access__pic js-parallax" data-scale="1.5"
                                                                  data-orientation="up" src="img/access-pic-1.png" alt=""/>
                            </div>
                            <div className="access__preview"><img className="access__pic js-parallax" data-scale="1.5"
                                                                  data-orientation="down" src="img/main-pic-2.png" alt=""/>
                            </div>
                        </div>
                        <div className="access__wrap" data-aos="animation-scale-y">
                            <div className="access__info">Ready to get started? <br>Sign up with your email</div>
                            <form className="access__form">
                                <div className="access__field"><input className="access__input" type="email"
                                                                      placeholder="Email address">
                                    <div className="access__icon"><img className="access__pic" src="img/sending-mail.svg"
                                                                       alt=""></div>
                                </div>
                                <button className="access__btn btn btn_purple" type="submit">Get Started</button>
                            </form>
                        </div>
                    </div>
                    <div className="access__circles">
                        <div className="access__circle" data-aos data-aos-offset="300"></div>
                        <div className="access__circle" data-aos data-aos-delay="100" data-aos-offset="300"></div>
                        <div className="access__circle" data-aos data-aos-delay="200" data-aos-offset="300"></div>
                    </div>
                    <div className="access__clouds">
                        <div className="access__cloud"><img className="access__pic js-parallax" data-scale="1.5"
                                                            data-orientation="left" src="img/cloud.png" alt=""/></div>
                        <div className="access__cloud"><img className="access__pic js-parallax" data-scale="1.5"
                                                            data-orientation="right" src="img/cloud.png" alt=""/></div>
                    </div>
                    <div className="access__balls">
                        <div className="access__ball"></div>
                        <div className="access__ball"></div>
                        <div className="access__ball"></div>
                        <div className="access__ball"></div>
                        <div className="access__ball js-rellax" data-rellax-speed="-1"></div>
                        <div className="access__ball"></div>
                        <div className="access__ball js-rellax" data-rellax-speed="1"></div>
                    </div>
                </div>
                <div className="layouts">
                    <div className="layouts__center center">
                        <div className="layouts__wrap">
                            <div className="layouts__head" data-aos="animation-scale-y">
                                <div className="layouts__stage stage">Auto Adaptive layouts</div>
                                <h2 className="layouts__title title">Responsive DNA<span className="title__color">.</span>
                                </h2>
                            </div>
                            <div className="layouts__info info" data-aos="animation-scale-y">Easily create truly responsive
                                components while deploying production-ready code.
                            </div>
                            <div className="layouts__list">
                                <div className="layouts__item" data-aos="animation-scale-y">
                                    <div className="layouts__icon"><img className="layouts__pic" src="img/layout-1.svg"
                                                                        alt=""/></div>
                                    <div className="layouts__text">Advanced pinning</div>
                                </div>
                                <div className="layouts__item" data-aos="animation-scale-y">
                                    <div className="layouts__icon"><img className="layouts__pic" src="img/layout-2.svg"
                                                                        alt=""/></div>
                                    <div className="layouts__text">Relative positioning with containers</div>
                                </div>
                                <div className="layouts__item" data-aos="animation-scale-y">
                                    <div className="layouts__icon"><img className="layouts__pic" src="img/layout-3.svg"
                                                                        alt=""/></div>
                                    <div className="layouts__text">Percentage-based geometry</div>
                                </div>
                            </div>
                        </div>
                        <div className="layouts__view" data-aos>
                            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-1.png"
                                                                   alt=""/></div>
                            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-2.png"
                                                                   alt=""/></div>
                            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-3.png"
                                                                   alt=""/></div>
                            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-4.png"
                                                                   alt=""/></div>
                            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-5.png"
                                                                   alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="like">
                    <div className="like__center center">
                        <div className="like__container">
                            <div className="like__wrap">
                                <h2 className="like__title title" data-aos="animation-scale-x">Native-like Prototying<span
                                    className="title__color">.</span></h2>
                                <div className="like__text" data-aos="animation-scale-x" data-aos-delay="150">
                                    <p>With Collab Smart Prototype you create your interactions and animations once and
                                        store as presets in the cloud for future use. </p>
                                    <p>Use the Collab App to test in real-time.</p>
                                </div>
                                <div className="like__btn" data-aos="animation-scale-x" data-aos-delay="300">
                                    <button className="btn btn_purple">See Sample Prototype</button>
                                </div>
                            </div>
                            <div className="like__preview" data-aos><img className="like__pic" src="img/hand-1.png" alt=""/>
                            </div>
                            <div className="like__circle"></div>
                            <div className="like__circles">
                                <div className="like__circle"></div>
                                <div className="like__circle js-rellax" data-rellax-speed="-1"></div>
                                <div className="like__circle js-rellax" data-rellax-speed=".8"></div>
                                <div className="like__circle"></div>
                                <div className="like__circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="plan js-plan">
                    <div className="plan__center center">
                        <div className="plan__head" data-aos="animation-scale-y">
                            <div className="plan__stage stage">Join The Revolution</div>
                            <h2 className="plan__title title">Find the <span className="title__color">Right Plan.</span>
                            </h2>
                            <div className="plan__info info">Flexible pricing options for freelancers and design teams.
                            </div>
                            <label className="switch"><input className="switch__input" type="checkbox" checked><span
                                className="switch__flex"><span className="switch__yearly">Billed Yearly</span><span
                                className="switch__box"></span><span
                                className="switch__monthly">Billed Monthly</span></span></label>
                            <div className="plan__variants"><select className="plan__select js-plan-select">
                                <option>Professional</option>
                                <option>Standard</option>
                                <option>Ultimate</option>
                            </select></div>
                        </div>
                        <div className="plan__body">
                            <div className="plan__item js-plan-item" data-aos="animation-translate-y">
                                <div className="plan__star">
                                    <svg className="icon icon-star">
                                        <use xlink:href="img/sprite.svg#icon-star">
                                    </svg>
                                </div>
                                <div className="plan__category">
                                    <div className="plan__icon"><img className="plan__pic" src="img/smile-1.svg" alt=""/>
                                    </div>
                                    <div className="plan__text">Individual</div>
                                </div>
                                <h3 className="plan__title title title_sm">Professional</h3>
                                <div className="plan__price"><span className="plan__money">$19.99</span> /month</div>
                                <ul className="plan__list">
                                    <li>1 user</li>
                                    <li>2 TB of secure storage</li>
                                    <li>Premium productivity features and simple, secure file sharing</li>
                                </ul>
                                <a className="plan__btn btn btn_white js-popup-open" href="#popup-contact"
                                   data-effect="mfp-zoom-in">Try free for 30 days</a>
                            </div>
                            <div className="plan__item js-plan-item" data-aos="animation-translate-y" data-aos-delay="200">
                                <div className="plan__category">
                                    <div className="plan__icon"><img className="plan__pic" src="img/smile-2.svg" alt=""/>
                                    </div>
                                    <div className="plan__text">Small Team</div>
                                </div>
                                <h3 className="plan__title title title_sm">Standard</h3>
                                <div className="plan__price"><span className="plan__money">$29.99</span> /month</div>
                                <ul className="plan__list">
                                    <li>3+ user</li>
                                    <li>5 TB of secure storage</li>
                                    <li>Premium productivity features and simple, secure file sharing</li>
                                </ul>
                                <a className="plan__btn btn btn_pink js-popup-open" href="#popup-contact"
                                   data-effect="mfp-zoom-in">Try free for 30 days</a>
                            </div>
                            <div className="plan__item js-plan-item" data-aos="animation-translate-y" data-aos-delay="400">
                                <div className="plan__category">
                                    <div className="plan__icon"><img className="plan__pic" src="img/smile-2.svg" alt=""/>
                                    </div>
                                    <div className="plan__text">Large Team</div>
                                </div>
                                <h3 className="plan__title title title_sm">Ultimate</h3>
                                <div className="plan__price"><span className="plan__money">$99.99</span> /month</div>
                                <ul className="plan__list">
                                    <li>10+ user</li>
                                    <li>10 TB of secure storage</li>
                                    <li>Premium productivity features and simple, secure file sharing</li>
                                </ul>
                                <a className="plan__btn btn btn_purple js-popup-open" href="#popup-contact"
                                   data-effect="mfp-zoom-in">Try free for 30 days</a>
                            </div>
                        </div>
                    </div>
                    <div className="plan__circle js-rellax" data-rellax-speed="-1"></div>
                </div>
                <div className="work">
                    <div className="work__center center">
                        <div className="work__head">
                            <div className="work__stage stage">Collaboration Redefined</div>
                            <h2 className="work__title title"><span
                                className="title__color">Get Work<br> Done</span> together</h2>
                        </div>
                        <div className="work__details" data-aos="animation-translate-y" data-aos-duration="800">
                            <div className="work__icon"><img className="work__pic" src="img/balls.svg" alt=""/></div>
                            <div className="work__text">Let your personalized Collab assistant do the heavy lifting while
                                you focus on creating.
                            </div>
                            <a className="work__link" href="#">Find out more</a>
                        </div>
                    </div>
                    <div className="work__hands">
                        <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0"><img
                            className="work__pic js-parallax" data-scale="1.2" data-orientation="down" src="img/hand-2.png"
                            alt=""></div>
                        <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0"><img
                            className="work__pic js-parallax" data-scale="1.3" data-orientation="up" src="img/hand-3.png"
                            alt=""></div>
                    </div>
                    <div className="work__wave"><img className="work__pic" src="img/wave.svg" alt=""></div>
                    <div className="work__preview" data-aos data-aos-duration="600"><img className="work__pic"
                                                                                         src="img/work-pic.png" alt=""/>
                    </div>
                    <div className="work__circles">
                        <div className="work__circle js-rellax" data-rellax-speed="1"></div>
                        <div className="work__circle"></div>
                        <div className="work__circle js-rellax" data-rellax-speed="-1"></div>
                        <div className="work__circle"></div>
                        <div className="work__circle"></div>
                    </div>
                    <div className="work__cursor" data-aos><img className="work__pic" src="img/cursor.png" alt=""/></div>
                </div>
                <div className="teams">
                    <div className="teams__center center">
                        <div className="teams__head" data-aos="animation-scale-y">
                            <div className="teams__stage stage">Team Collaboration Redefined</div>
                            <h2 className="teams__title title">Helping world-class teams design faster together<span
                                className="title__color">.</span></h2>
                        </div>
                        <div className="teams__body">
                            <div className="teams__col" data-aos="animation-scale-y">
                                <h3 className="teams__title title title_sm">What others are&nbsp;saying</h3>
                            </div>
                            <div className="teams__col">
                                <div className="teams__container">
                                    <div className="teams__slider js-teams-slider">
                                        <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="200">
                                            <div className="teams__line" style="background-color: #5956E9;"></div>
                                            <div className="teams__name" style="color: #C75C6F;">UI8</div>
                                            <div className="teams__text">“ Collab is fast. Files are always up to date. <br>It’s
                                                easy to share designs across the organization, so collaboration is easy ”
                                            </div>
                                            <div className="teams__user">
                                                <div className="teams__ava"><img className="teams__pic" src="img/ui8.png"
                                                                                 alt=""></div>
                                                <div className="teams__box">
                                                    <div className="teams__man">Dash</div>
                                                    <div className="teams__login">Founder @UI8</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="teams__slide" data-aos="animation-scale-y" data-aos-delay="400">
                                            <div className="teams__line" style="background-color: #FAB8C4;"></div>
                                            <div className="teams__name" style="color: #5956E9;">Bento</div>
                                            <div className="teams__text">“ Collab is fast. Files are always up to date. <br>It’s
                                                easy to share designs across the organization, so collaboration is easy ”
                                            </div>
                                            <div className="teams__user">
                                                <div className="teams__ava"><img className="teams__pic" src="img/ava-1.png"
                                                                                 alt=""></div>
                                                <div className="teams__box">
                                                    <div className="teams__man">Emily</div>
                                                    <div className="teams__login">Founder @Bento</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="teams__slide">
                                            <div className="teams__line" style="background-color: #5956E9;"></div>
                                            <div className="teams__name" style="color: #C75C6F;">UI8</div>
                                            <div className="teams__text">“ Collab is fast. Files are always up to date. <br>It’s
                                                easy to share designs across the organization, so collaboration is easy ”
                                            </div>
                                            <div className="teams__user">
                                                <div className="teams__ava"><img className="teams__pic" src="img/ui8.png"
                                                                                 alt=""/></div>
                                                <div className="teams__box">
                                                    <div className="teams__man">Dash</div>
                                                    <div className="teams__login">Founder @UI8</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="teams__slide">
                                            <div className="teams__line" style="background-color: #FAB8C4;"></div>
                                            <div className="teams__name" style="color: #5956E9;">Bento</div>
                                            <div className="teams__text">“ Collab is fast. Files are always up to date. <br>It’s
                                                easy to share designs across the organization, so collaboration is easy ”
                                            </div>
                                            <div className="teams__user">
                                                <div className="teams__ava"><img className="teams__pic" src="img/ava-1.png"
                                                                                 alt=""/></div>
                                                <div className="teams__box">
                                                    <div className="teams__man">Emily</div>
                                                    <div className="teams__login">Founder @Bento</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teams__circle js-rellax" data-rellax-speed="1"></div>
                </div>
                <div className="speed">
                    <div className="speed__center center">
                        <div className="speed__wrap">
                            <div className="speed__head" data-aos="animation-scale-y">
                                <div className="speed__stage stage">Collab is fast, super fast.</div>
                                <h2 className="speed__title title">Speed up <br>your <br>workflow<span
                                    className="title__color">.</span></h2>
                                <div className="speed__text">Essentially no lag, no matter the size of the file, even on
                                    mobile devices.
                                </div>
                            </div>
                            <div className="speed__number" data-aos="animation-scale-y"><span>8.1</span>x</div>
                        </div>
                    </div>
                    <div className="speed__line"><img className="speed__pic" src="img/line.svg" alt=""/></div>
                    <div className="speed__preview" data-aos>
                        <div className="speed__graphic"><img className="speed__pic" src="img/graphic.png" alt=""/></div>
                        <div className="speed__plant"><img className="speed__pic js-parallax" data-scale="1.3"
                                                           data-orientation="left" src="img/plant.png" alt=""/></div>
                    </div>
                    <div className="speed__circles">
                        <div className="speed__circle js-rellax" data-rellax-speed="-1"></div>
                        <div className="speed__circle js-rellax" data-rellax-speed="1"></div>
                        <div className="speed__circle"></div>
                    </div>
                </div>
                <div className="package js-package">
                    <div className="package__center center">
                        <div className="package__container">
                            <div className="package__wrap">
                                <div className="package__slider js-package-slider">
                                    <div className="package__slide">
                                        <div className="package__row">
                                            <div className="package__details" data-aos data-aos-duration="600"
                                                 data-aos-delay="400">
                                                <div className="package__category">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/smile-2.svg" alt=""/></div>
                                                    <div className="package__text">Awesome feature</div>
                                                </div>
                                                <h3 className="package__title title title_sm">Ultimate features</h3>
                                                <div className="package__info">It’s easy to share designs across the
                                                    organization, so team collaboration is fast and easy.
                                                </div>
                                                <div className="package__list"><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-1.svg" alt=""/></div>
                                                    <div className="package__text">Awesome website</div>
                                                </a><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-3.svg" alt=""/></div>
                                                    <div className="package__text">Stunning interface</div>
                                                </a></div>
                                                <div className="package__btns">
                                                    <div className="package__arrows">
                                                        <button className="package__arrow js-package-prev">
                                                            <!--  <svg className="icon icon-arrow-prev">
                                                                  <use xlink:href="img/sprite.svg#icon-arrow-prev"></use>
                                                              </svg>-->
                                                        </button>
                                                        <button className="package__arrow js-package-next">
                                                            <!--     <svg className="icon icon-arrow-next">
                                                                <use xlink:href="img/sprite.svg#icon-arrow-next"></use>
                                                            </svg>-->
                                                        </button>
                                                    </div>
                                                    <a className="package__btn btn btn_purple" href="login.html">Get
                                                        Started</a>
                                                </div>
                                            </div>
                                            <div className="package__preview"><img className="package__pic"
                                                                                   src="img/laptop.png" alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="package__slide">
                                        <div className="package__row">
                                            <div className="package__details" data-aos data-aos-duration="600"
                                                 data-aos-delay="400">
                                                <div className="package__category">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/smile-2.svg" alt=""/></div>
                                                    <div className="package__text">Awesome feature</div>
                                                </div>
                                                <h3 className="package__title title title_sm">Standard features</h3>
                                                <div className="package__info">It’s easy to share designs across the
                                                    organization, so team collaboration is fast and easy.
                                                </div>
                                                <div className="package__list"><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-1.svg" alt=""/></div>
                                                    <div className="package__text">Awesome website</div>
                                                </a><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-3.svg" alt=""/></div>
                                                    <div className="package__text">Stunning interface</div>
                                                </a></div>
                                                <div className="package__btns">
                                                    <div className="package__arrows">
                                                        <button className="package__arrow js-package-prev">
                                                            <svg className="icon icon-arrow-prev">
                                                                <use xlink:href="img/sprite.svg#icon-arrow-prev"></use>
                                                            </svg>
                                                        </button>
                                                        <button className="package__arrow js-package-next">
                                                            <svg className="icon icon-arrow-next">
                                                                <use xlink:href="img/sprite.svg#icon-arrow-next"></use>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <a className="package__btn btn btn_purple" href="login.html">Get
                                                        Started</a>
                                                </div>
                                            </div>
                                            <div className="package__preview"><img className="package__pic"
                                                                                   src="img/laptop.png" alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="package__slide">
                                        <div className="package__row">
                                            <div className="package__details" data-aos data-aos-duration="600"
                                                 data-aos-delay="400">
                                                <div className="package__category">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/smile-2.svg" alt=""/></div>
                                                    <div className="package__text">Awesome feature</div>
                                                </div>
                                                <h3 className="package__title title title_sm">Ultimate features</h3>
                                                <div className="package__info">It’s easy to share designs across the
                                                    organization, so team collaboration is fast and easy.
                                                </div>
                                                <div className="package__list"><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-1.svg" alt=""/></div>
                                                    <div className="package__text">Awesome website</div>
                                                </a><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-3.svg" alt=""/></div>
                                                    <div className="package__text">Stunning interface</div>
                                                </a></div>
                                                <div className="package__btns">
                                                    <div className="package__arrows">
                                                        <button className="package__arrow js-package-prev">
                                                            <svg className="icon icon-arrow-prev">
                                                                <use xlink:href="img/sprite.svg#icon-arrow-prev"></use>
                                                            </svg>
                                                        </button>
                                                        <button className="package__arrow js-package-next">
                                                            <svg className="icon icon-arrow-next">
                                                                <use xlink:href="img/sprite.svg#icon-arrow-next"></use>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <a className="package__btn btn btn_purple" href="login.html">Get
                                                        Started</a>
                                                </div>
                                            </div>
                                            <div className="package__preview"><img className="package__pic"
                                                                                   src="img/laptop.png" alt=""/></div>
                                        </div>
                                    </div>
                                    <div className="package__slide">
                                        <div className="package__row">
                                            <div className="package__details" data-aos data-aos-duration="600"
                                                 data-aos-delay="400">
                                                <div className="package__category">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/smile-2.svg" alt=""/></div>
                                                    <div className="package__text">Awesome feature</div>
                                                </div>
                                                <h3 className="package__title title title_sm">Standard features</h3>
                                                <div className="package__info">It’s easy to share designs across the
                                                    organization, so team collaboration is fast and easy.
                                                </div>
                                                <div className="package__list"><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-1.svg" alt=""/></div>
                                                    <div className="package__text">Awesome website</div>
                                                </a><a className="package__link" href="#">
                                                    <div className="package__icon"><img className="package__pic"
                                                                                        src="img/layout-3.svg" alt=""/></div>
                                                    <div className="package__text">Stunning interface</div>
                                                </a></div>
                                                <div className="package__btns">
                                                    <div className="package__arrows">
                                                        <button className="package__arrow js-package-prev">
                                                            <svg className="icon icon-arrow-prev">
                                                                <use xlink:href="img/sprite.svg#icon-arrow-prev"></use>
                                                            </svg>
                                                        </button>
                                                        <button className="package__arrow js-package-next">
                                                            <svg className="icon icon-arrow-next">
                                                                <use xlink:href="img/sprite.svg#icon-arrow-next"></use>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <a className="package__btn btn btn_purple" href="login.html">Get
                                                        Started</a>
                                                </div>
                                            </div>
                                            <div className="package__preview"><img className="package__pic"
                                                                                   src="img/laptop.png" alt=""/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="package__line"><img className="package__pic" src="img/line-1.svg" alt="">
                                </div>
                                <div className="package__circle" data-aos data-aos-duration="600"></div>
                            </div>
                            <div className="package__circles">
                                <div className="package__circle"></div>
                                <div className="package__circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="demo">
                    <div className="demo__center center">
                        <div className="demo__head" data-aos="animation-scale-y">
                            <div className="demo__icon">🔥</div>
                            <div className="demo__info">We offer flexible pricing options for freelancers and design
                                teams.
                            </div>
                        </div>
                        <div className="demo__list">
                            <div className="demo__item" data-aos="animation-translate-y">
                                <h3 className="demo__title title title_sm">Schedule <br>Product <br>Demo</h3>
                                <div className="demo__text">Still not sure? Schedule a demo to see how Collab can help you
                                    get more done.
                                </div>
                                <a className="demo__btn btn btn_purple js-popup-open" href="#popup-contact"
                                   data-effect="mfp-zoom-in">Schedule a Demo</a>
                            </div>
                            <div className="demo__item" data-aos="animation-translate-y" data-aos-delay="200">
                                <h3 className="demo__title title title_sm">Get <br>Started <br>Now</h3>
                                <div className="demo__text">Ready to revolutionize your design workflow? Try Collab for free
                                    for 30 days.
                                </div>
                                <a className="demo__btn btn btn_white js-popup-open" href="#popup-contact"
                                   data-effect="mfp-zoom-in">Try free for 30 days</a>
                            </div>
                        </div>
                    </div>
                    <div className="demo__circle js-rellax" data-rellax-speed="1"></div>
                </div>
                <div className="design">
                    <div className="design__center center">
                        <div className="design__wrap" data-aos="animation-translate-y">
                            <div className="design__stage stage">Design accordlogy</div>
                            <h2 className="design__title title">Enrich your design workflow<span
                                className="title__color">.</span></h2>
                            <div className="design__info info">Design anything from simple icons to fully featured websites
                                and applications.
                            </div>
                        </div>
                        <div className="design__hand" data-aos data-aos-duration="600"><img className="design__pic"
                                                                                            src="img/hand-4.png" alt=""/>
                        </div>
                        <div className="design__bg" data-aos data-aos-delay="400"><img className="design__pic"
                                                                                       src="img/design-pic.png" alt=""/>
                        </div>
                        <div className="design__circles">
                            <div className="design__circle js-rellax" data-rellax-speed="1"></div>
                            <div className="design__circle"></div>
                            <div className="design__circle js-rellax" data-rellax-speed=".5"></div>
                        </div>
                        <div className="design__body"><a className="design__scroll" href="#">
                            <div className="design__icon"><img className="design__pic" src="img/scroll.svg" alt=""/></div>
                            <div className="design__text">Using Collab</div>
                        </a>
                            <div className="design__container">
                                <div className="design__slider js-design-slider">
                                    <div className="design__slide" data-aos="animation-translate-y" data-aos-delay="0">
                                        <div className="design__view">
                                            <div className="design__preview"><img className="design__pic"
                                                                                  src="img/design-pic-1.png" alt=""/></div>
                                        </div>
                                        <div className="design__details">
                                            <div className="design__category">Design</div>
                                            <div className="design__info">Automation Color Picker</div>
                                            <div className="design__text">Use the smart color picker to easily select and
                                                apply colors.
                                            </div>
                                            <a className="design__link" href="login.html">Get started
                                                <svg className="icon icon-arrow-right">
                                                    <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="design__slide" data-aos="animation-translate-y" data-aos-delay="200">
                                        <div className="design__view">
                                            <div className="design__preview"><img className="design__pic"
                                                                                  src="img/design-pic-2.png" alt=""/></div>
                                        </div>
                                        <div className="design__details">
                                            <div className="design__category">Build</div>
                                            <div className="design__info">Component Builder Guide</div>
                                            <div className="design__text">Using the Component Builder with your projects.
                                            </div>
                                            <a className="design__link" href="login.html">Get started
                                                <svg className="icon icon-arrow-right">
                                                    <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="design__slide" data-aos="animation-translate-y" data-aos-delay="400">
                                        <div className="design__view">
                                            <div className="design__preview"><img className="design__pic"
                                                                                  src="img/design-pic-3.png" alt=""/></div>
                                        </div>
                                        <div className="design__details">
                                            <div className="design__category">Ship</div>
                                            <div className="design__info">Cross-platform Deployment</div>
                                            <div className="design__text">Deploy your projects more efficiently for
                                                web &amp; mobile.
                                            </div>
                                            <a className="design__link" href="login.html">Get started
                                                <svg className="icon icon-arrow-right">
                                                    <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="design__slide" data-aos="animation-translate-y">
                                        <div className="design__view">
                                            <div className="design__preview"><img className="design__pic"
                                                                                  src="img/design-pic-1.png" alt=""/></div>
                                        </div>
                                        <div className="design__details">
                                            <div className="design__category">Design</div>
                                            <div className="design__info">Automation Color Picker</div>
                                            <div className="design__text">Use the smart color picker to easily select and
                                                apply colors.
                                            </div>
                                            <a className="design__link" href="login.html">Get started
                                                <svg className="icon icon-arrow-right">
                                                    <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="design__slide" data-aos="animation-translate-y">
                                        <div className="design__view">
                                            <div className="design__preview"><img className="design__pic"
                                                                                  src="img/design-pic-2.png" alt=""/></div>
                                        </div>
                                        <div className="design__details">
                                            <div className="design__category">Build</div>
                                            <div className="design__info">Component Builder Guide</div>
                                            <div className="design__text">Using the Component Builder with your projects.
                                            </div>
                                            <a className="design__link" href="login.html">Get started
                                                <svg className="icon icon-arrow-right">
                                                    <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="details__center center">
                        <div className="details__head" data-aos="animation-scale-y">
                            <h2 className="details__title title">Research & <br>background, summary<span
                                className="title__color">.</span></h2>
                            <div className="details__info info">Collab is fast. Files are always up to date and ready for
                                production
                            </div>
                        </div>
                        <div className="details__row">
                            <div className="details__container">
                                <div className="details__slider js-details-slider">
                                    <div className="details__slide">
                                        <div className="details__counter"><span className="details__number">16</span> m
                                        </div>
                                        <div className="details__text">It’s easy to share designs across the organization,
                                            so collaboration is easy.
                                        </div>
                                        <div className="details__control">
                                            <button className="details__play">Play</button>
                                            <a className="details__link" href="#">Find out more</a></div>
                                    </div>
                                    <div className="details__slide">
                                        <div className="details__counter"><span className="details__number">16</span> m
                                        </div>
                                        <div className="details__text">It’s easy to share designs across the organization,
                                            so collaboration is easy.
                                        </div>
                                        <div className="details__control">
                                            <button className="details__play">Play</button>
                                            <a className="details__link" href="#">Find out more</a></div>
                                    </div>
                                    <div className="details__slide">
                                        <div className="details__counter"><span className="details__number">16</span> m
                                        </div>
                                        <div className="details__text">It’s easy to share designs across the organization,
                                            so collaboration is easy.
                                        </div>
                                        <div className="details__control">
                                            <button className="details__play">Play</button>
                                            <a className="details__link" href="#">Find out more</a></div>
                                    </div>
                                    <div className="details__slide">
                                        <div className="details__counter"><span className="details__number">16</span> m
                                        </div>
                                        <div className="details__text">It’s easy to share designs across the organization,
                                            so collaboration is easy.
                                        </div>
                                        <div className="details__control">
                                            <button className="details__play">Play</button>
                                            <a className="details__link" href="#">Find out more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="details__graphic">
                                <div className="details__mobile"><img className="details__pic" src="img/mobile.svg" alt=""/>
                                    <div className="details__box">
                                        <div className="details__chart" data-aos data-aos-offset="0" data-aos-delay="300"
                                             data-aos-duration="1000"><img className="details__pic" src="img/chart.svg"
                                                                           alt=""/></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="details__hand"><img className="details__pic js-parallax" data-scale="1.2"
                                                            data-orientation="up" src="img/hand-5.png" alt=""/></div>
                        <div className="details__line"><img className="details__pic" src="img/line-2.svg" alt=""/></div>
                        <div className="details__circles">
                            <div className="details__circle"></div>
                            <div className="details__circle js-rellax" data-rellax-speed="-.5"></div>
                        </div>
                    </div>
                </div>
                <div className="tool">
                    <div className="tool__center center">
                        <div className="tool__container">
                            <div className="tool__wrap">
                                <h2 className="tool__title title" data-aos="animation-scale-y">Ready to use the smartest
                                    design tool?</h2>
                                <div className="tool__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer
                                    flexible pricing options for freelancers and design teams.
                                </div>
                                <div className="tool__btn" data-aos="animation-scale-y" data-aos-delay="300"><a
                                    className="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try
                                    free for 30 days</a></div>
                            </div>
                            <div className="tool__cloud"><img className="tool__pic js-parallax" data-scale="1.5"
                                                              data-orientation="right" src="img/cloud.png" alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="roadmap">
                    <div className="roadmap__center center">
                        <div className="roadmap__head">
                            <div className="roadmap__wrap" data-aos="animation-scale-y">
                                <div className="roadmap__stage stage">Roadmap</div>
                                <h2 className="roadmap__title title">All systems are a go<span
                                    className="title__color">.</span></h2>
                                <div className="roadmap__info">Find out where we are on the path to achieving the ultimate
                                    design tool.
                                </div>
                                <select className="roadmap__select">
                                    <option>Current</option>
                                    <option>Current</option>
                                    <option>Current</option>
                                </select>
                            </div>
                            <div className="roadmap__view" data-aos>
                                <div className="roadmap__calendar"><img className="roadmap__pic" src="img/roadmap-pic.png"
                                                                        alt=""/></div>
                                <div className="roadmap__bg"><img className="roadmap__pic js-parallax" data-scale="1.5"
                                                                  data-orientation="left" src="img/roadmap-pic-1.png"
                                                                  alt=""/></div>
                            </div>
                        </div>
                        <div className="roadmap__body">
                            <div className="roadmap__category">Earlier</div>
                            <div className="roadmap__box">
                                <div className="roadmap__top">
                                    <div className="roadmap__col">
                                        <div className="roadmap__desc">
                                            <div className="roadmap__category">Q2</div>
                                            <div className="roadmap__year">2020</div>
                                        </div>
                                    </div>
                                    <div className="roadmap__col">
                                        <div className="roadmap__desc">
                                            <div className="roadmap__category">Q3</div>
                                            <div className="roadmap__year">2020</div>
                                        </div>
                                    </div>
                                    <div className="roadmap__col">
                                        <div className="roadmap__desc">
                                            <div className="roadmap__category">Q4</div>
                                            <div className="roadmap__year">2020</div>
                                        </div>
                                    </div>
                                    <div className="roadmap__col">
                                        <div className="roadmap__desc">
                                            <div className="roadmap__category">Q1</div>
                                            <div className="roadmap__year">2021</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="roadmap__lines">
                                    <div className="roadmap__line">
                                        <div className="roadmap__progress" style="width: 66.66%;" data-aos>Collab
                                            Community
                                        </div>
                                    </div>
                                    <div className="roadmap__line">
                                        <div className="roadmap__progress" style="width: 43%;" data-aos
                                             data-aos-delay="200">Collab Market
                                        </div>
                                    </div>
                                    <div className="roadmap__line">
                                        <div className="roadmap__progress" style="width: 50%;" data-aos
                                             data-aos-delay="400">Collab Cloud
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap__category">Later</div>
                        </div>
                    </div>
                    <div className="roadmap__circles">
                        <div className="roadmap__circle"></div>
                        <div className="roadmap__circle"></div>
                    </div>
                    <div className="roadmap__preview" data-aos data-aos-duration="1000" data-aos-delay="300"><img
                        className="roadmap__pic" src="img/roadmap-pic-2.svg" alt=""></div>
                </div>
                <div className="accord js-accord">
                    <div className="accord__center center">
                        <div className="accord__row">
                            <div className="accord__details">
                                <div className="accord__top" data-aos="animation-scale-y">
                                    <div className="accord__title title title_sm">Technological maturity.</div>
                                    <div className="accord__text">Collab is fast. Files are always up to date and ready for
                                        production.
                                    </div>
                                </div>
                                <ul className="accord__list" data-aos="animation-scale-y" data-aos-delay="200">
                                    <li>Collab Cloud</li>
                                    <li>Collab Design</li>
                                    <li>Collab Share</li>
                                    <li>Collab Code</li>
                                </ul>
                            </div>
                            <div className="accord__wrap">
                                <div className="accord__item js-accord-item active" data-aos="animation-scale-y">
                                    <div className="accord__head js-accord-head">
                                        <div className="accord__icon"><img className="accord__pic" src="img/layout-3.svg"
                                                                           alt=""/></div>
                                        <div className="accord__category">In research</div>
                                    </div>
                                    <div className="accord__body js-accord-body"
                                         style="display: block; background-image: url('img/accord-pic.png');">
                                        <ul className="accord__desc">
                                            <li>3+ user</li>
                                            <li>5 TB of secure storage</li>
                                            <li>Premium productivity features and simple, secure file sharing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                                    <div className="accord__head js-accord-head">
                                        <div className="accord__icon"><img className="accord__pic" src="img/layout-3.svg"
                                                                           alt=""/></div>
                                        <div className="accord__category">Drafted</div>
                                    </div>
                                    <div className="accord__body js-accord-body"
                                         style="background-image: url('img/accord-pic.png');">
                                        <ul className="accord__desc">
                                            <li>3+ user</li>
                                            <li>5 TB of secure storage</li>
                                            <li>Premium productivity features and simple, secure file sharing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                                    <div className="accord__head js-accord-head">
                                        <div className="accord__icon"><img className="accord__pic" src="img/layout-3.svg"
                                                                           alt=""></div>
                                        <div className="accord__category">In development</div>
                                    </div>
                                    <div className="accord__body js-accord-body"
                                         style="background-image: url('img/accord-pic.png');">
                                        <ul className="accord__desc">
                                            <li>3+ user</li>
                                            <li>5 TB of secure storage</li>
                                            <li>Premium productivity features and simple, secure file sharing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                                    <div className="accord__head js-accord-head">
                                        <div className="accord__icon"><img className="accord__pic" src="img/layout-3.svg"
                                                                           alt=""/></div>
                                        <div className="accord__category">Proposed</div>
                                    </div>
                                    <div className="accord__body js-accord-body"
                                         style="background-image: url('img/accord-pic.png');">
                                        <ul className="accord__desc">
                                            <li>3+ user</li>
                                            <li>5 TB of secure storage</li>
                                            <li>Premium productivity features and simple, secure file sharing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="accord__item js-accord-item" data-aos="animation-scale-y">
                                    <div className="accord__head js-accord-head">
                                        <div className="accord__icon"><img className="accord__pic" src="img/layout-3.svg"
                                                                           alt=""/></div>
                                        <div className="accord__category">Completed</div>
                                    </div>
                                    <div className="accord__body js-accord-body"
                                         style="background-image: url('img/accord-pic.png');">
                                        <ul className="accord__desc">
                                            <li>3+ user</li>
                                            <li>5 TB of secure storage</li>
                                            <li>Premium productivity features and simple, secure file sharing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div className="quality">
                    <div className="quality__head">
                        <div className="quality__center center">
                            <div className="quality__top" data-aos="animation-scale-y">
                                <div className="quality__stage stage">Effortless</div>
                                <h2 className="quality__title title">Go from ideation to <br>design and done<span
                                    className="title__color">.</span></h2>
                            </div>
                            <div className="quality__info info" data-aos="animation-scale-y" data-aos-delay="200">Easily
                                create truly responsive components while deploying production-ready code.
                            </div>
                        </div>
                        <div className="quality__line"><img className="quality__pic" src="img/line-3.svg" alt=""/></div>
                        <div className="quality__preview"><img className="quality__pic js-parallax" data-scale="1.2"
                                                               data-orientation="left" src="img/lamp.png" alt=""/></div>
                    </div>
                    <div className="quality__body">
                        <div className="quality__col">
                            <div className="quality__item" data-aos="animation-scale-x-left">
                                <div className="quality__icon"><img className="quality__pic" src="img/camera-big.png"
                                                                    alt=""/></div>
                                <div className="quality__details">
                                    <div className="quality__category">Assets Library</div>
                                    <div className="quality__text">Get access to huge library of ready-made components and
                                        illustrations, free to use on all your projects.
                                    </div>
                                    <a className="quality__link" href="#">Learn more
                                        <svg className="icon icon-arrow-right">
                                            <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="quality__col">
                            <div className="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
                                <div className="quality__icon"><img className="quality__pic" src="img/clock-big.png" alt=""/>
                                </div>
                                <div className="quality__details">
                                    <div className="quality__category">Save Time</div>
                                    <div className="quality__text">Save tons of time by eliminating repetitive day-to-day
                                        tasks and slow load times.
                                    </div>
                                    <a className="quality__link" href="#">Learn more
                                        <svg className="icon icon-arrow-right">
                                            <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="quality__col">
                            <div className="quality__item" data-aos="animation-scale-x-left">
                                <div className="quality__icon"><img className="quality__pic" src="img/cup-big.png" alt=""/>
                                </div>
                                <div className="quality__details">
                                    <div className="quality__category">Relax</div>
                                    <div className="quality__text">Let your personalized Collab assistant do the heavy
                                        lifting while you focus on creating. Say good bye to code 👋
                                    </div>
                                    <a className="quality__link" href="#">Learn more
                                        <svg className="icon icon-arrow-right">
                                            <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="quality__col">
                            <div className="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
                                <div className="quality__icon"><img className="quality__pic" src="img/chatbox-big.png"
                                                                    alt=""/></div>
                                <div className="quality__details">
                                    <div className="quality__category">Support</div>
                                    <div className="quality__text">Got stuck or need any help? Our support team is online
                                        24/7 to help assist you with any issues.
                                    </div>
                                    <a className="quality__link" href="#">Learn more
                                        <svg className="icon icon-arrow-right">
                                            <use xlink:href="img/sprite.svg#icon-arrow-right"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="quality__circles">
                        <div className="quality__circle"></div>
                        <div className="quality__circle"></div>
                    </div>
                </div>
                <div className="showcase">
                    <div className="showcase__center center">
                        <div className="showcase__wrap">
                            <div className="showcase__top" data-aos="animation-scale-y">
                                <div className="showcase__stage stage">Showcase</div>
                                <h2 className="showcase__title title">Created with Collab<span
                                    className="title__color">.</span></h2>
                            </div>
                            <div className="showcase__info info" data-aos="animation-scale-y" data-aos-delay="150">See what
                                designers around the world are building with Collab.
                            </div>
                            <div className="showcase__btn" data-aos="animation-scale-y" data-aos-delay="300">
                                <button className="btn btn_purple">View More Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="showcase__bg"><img className="showcase__pic" src="img/showcase-circle.svg" alt=""/></div>
                    <div className="showcase__circles">
                        <div className="showcase__circle"></div>
                        <div className="showcase__circle"></div>
                    </div>
                    <div className="showcase__list">
                        <div className="showcase__preview"><img className="showcase__pic js-parallax" data-scale="1.3"
                                                                data-orientation="right" src="img/group-1.png" alt=""/></div>
                        <div className="showcase__preview"><img className="showcase__pic js-parallax" data-scale="1.3"
                                                                data-orientation="left" src="img/group-2.png" alt=""/></div>
                    </div>
                </div>
                <div className="offer">
                    <div className="offer__center center">
                        <div className="offer__container">
                            <div className="offer__head">
                                <h2 className="offer__title title" data-aos="animation-scale-y">Ready to use the smartest
                                    design tool?</h2>
                                <div className="offer__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer
                                    flexible pricing options for freelancing and design teams.
                                </div>
                                <div className="offer__btn" data-aos="animation-scale-y" data-aos-delay="300"><a
                                    className="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try
                                    free for 30 days</a></div>
                            </div>
                            <div className="offer__circles">
                                <div className="offer__circle"></div>
                                <div className="offer__circle"></div>
                            </div>
                        </div>
                        <div className="offer__circle"></div>
                    </div>
                    <div className="offer__view" data-aos data-aos-delay="400" data-aos-offset="0">
                        <div className="offer__preview"><img className="offer__pic" src="img/offer-pic-1.png" alt=""/></div>
                        <div className="offer__preview"><img className="offer__pic" src="img/offer-pic-2.png" alt=""/></div>
                        <div className="offer__preview"><img className="offer__pic" src="img/offer-pic-3.png" alt=""/></div>
                        <div className="offer__preview"><img className="offer__pic" src="img/offer-pic-4.png" alt=""/></div>
                        <div className="offer__preview"><img className="offer__pic" src="img/offer-pic-5.png" alt=""/></div>
                    </div>
                </div>
                <div className="footer js-footer">
                    <div className="footer__center center">
                        <div className="footer__row">
                            <div className="footer__col"><a className="footer__logo" href="#"><img className="footer__pic"
                                                                                                   src="img/logo-dark.svg"
                                                                                                   alt=""/></a></div>
                            <div className="footer__col js-footer-col">
                                <div className="footer__category js-footer-category">Company
                                    <svg className="icon icon-arrow-down">
                                        <use xlink:href="img/sprite.svg#icon-arrow-down"></use>
                                    </svg>
                                </div>
                                <div className="footer__menu js-footer-menu"><a className="footer__link" href="#">About
                                    us</a><a className="footer__link" href="#">Jobs</a><a className="footer__link"
                                                                                          href="#">Press</a><a
                                    className="footer__link" href="#">Blog</a></div>
                            </div>
                            <div className="footer__col js-footer-col">
                                <div className="footer__category js-footer-category">Support
                                    <svg className="icon icon-arrow-down">
                                        <use xlink:href="img/sprite.svg#icon-arrow-down"></use>
                                    </svg>
                                </div>
                                <div className="footer__menu js-footer-menu"><a className="footer__link" href="#">Contact
                                    us</a><a className="footer__link" href="#">Cookies</a><a className="footer__link"
                                                                                             href="#">Privacy & terms</a><a
                                    className="footer__link" href="#">Sitemap</a></div>
                            </div>
                            <div className="footer__col js-footer-col">
                                <div className="footer__category js-footer-category">Community
                                    <svg className="icon icon-arrow-down">
                                        <use xlink:href="img/sprite.svg#icon-arrow-down"></use>
                                    </svg>
                                </div>
                                <div className="footer__menu js-footer-menu"><a className="footer__link"
                                                                                href="#">Developers</a><a
                                    className="footer__link" href="#">Designers</a><a className="footer__link"
                                                                                      href="#">Forum</a><a
                                    className="footer__link" href="#">UI8</a></div>
                            </div>
                        </div>
                        <div className="footer__bottom"><a className="footer__company" href="https://ui8.net/"
                                                           target="_blank"><img className="footer__pic" src="img/ui8.svg"
                                                                                alt=""/></a>
                            <div className="footer__copyright">© 2020, UI8 LLC.</div>
                            <a className="footer__scroll js-link-scroll" href="#header">
                                <div className="footer__icon"><img className="footer__pic" src="img/scroll.svg" alt=""/>
                                </div>
                                <div className="footer__text">Back to top</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="popup mfp-hide" id="popup-contact">
                    <div className="popup__wrap">
                        <div className="popup__head"><a className="popup__logo" href="#"><img className="popup__pic"
                                                                                              src="img/logo.svg" alt=""/></a>
                        </div>
                        <div className="popup__body">
                            <div className="popup__title title">Get in touch<span className="title__color">.</span></div>
                            <div className="popup__info">Enter your detail below</div>
                            <form className="popup__form">
                                <div className="popup__field field">
                                    <div className="field__label">Name</div>
                                    <div className="field__wrap">
                                        <div className="field__icon"><img className="field__pic" src="img/user.svg" alt=""/>
                                        </div>
                                        <input className="field__input" type="text" name="name" placeholder="Name">
                                    </div>
                                </div>
                                <div className="popup__field field">
                                    <div className="field__label">Email</div>
                                    <div className="field__wrap">
                                        <div className="field__icon"><img className="field__pic" src="img/sending-mail.svg"
                                                                          alt=""/></div>
                                        <input className="field__input" type="email" name="email"
                                               placeholder="Email address">
                                    </div>
                                </div>
                                <div className="popup__field field field_textarea">
                                    <div className="field__label">Message</div>
                                    <div className="field__wrap">
                                        <div className="field__icon"><img className="field__pic" src="img/message.svg"
                                                                          alt=""/></div>
                                        <textarea className="field__textarea" name="Message"
                                                  placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <button className="popup__btn btn btn_purple" type="submit">Send now</button>
                            </form>
                            <div className="popup__circles">
                                <div className="popup__circle"></div>
                                <div className="popup__circle"></div>
                            </div>
                        </div>
                        <div className="popup__bg">
                            <div className="popup__preview"><img className="popup__pic" src="img/popup-pic-1.png" alt=""/>
                            </div>
                            <div className="popup__preview"><img className="popup__pic" src="img/cursor-1.png" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="js/app.js"></script>
            <script src="js/common.js"></script>
            </body>





            <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
        </page>
);
}

export default Home;
