/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import MblNavbar from "./mblNavbar";
import { useSelector, useDispatch } from "react-redux";
import { GetUserData } from "./functions/functions";
import { openMblMenu } from "../redux/counterSlice";
import { useRouter } from "next/router";
import { Logout } from "./functions/functions";
import login from "../components/assets/icons/login.png";
import register from "../components/assets/icons/register.png";
import Image from "next/image";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scroll, setScroll] = useState(false);
  const [home3, setHome3] = useState(false);

  const { mblMenu } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [User, setUser] = useState([]);
  const handleSticky = function () {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const [navItemValue, setNavItemValue] = useState(1);
  const [navText, setnavText] = useState("");
  const router = useRouter();
  const pid = router.asPath;
  const [profileShow, setProfileShow] = useState(false);

  // const router = useRouter();
  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href !== router.asPath) {
      router.push(href).then(() => {
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    setTheme("light");
    const fetchData = async () => {
      const response = await GetUserData();
      if (response) {
        setUser(response);
      }
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);

    if (pid === "/home/home_3") {
      setHome3(true);
    } else {
      setHome3(false);
    }

    const value = localStorage.getItem("navItemValue");
    setNavItemValue(value);

    if (router.asPath == "/") {
      setnavText("home");
    } else if (router.asPath == "/terapeutams") {
      setnavText("terapeutams");
    } else if (router.asPath == "/prisijungimas") {
      setnavText("prisijungimas");
    } else if (router.asPath == "/registracija") {
      setnavText("registracija");
    }
  }, [pid]);

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  return (
    <div>
      <header
        className={
          scroll && home3
            ? "js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors js-page-header--is-sticky"
            : home3
            ? "js-page-header page-header--transparent fixed top-0 z-20 w-full bg-white/[.15] backdrop-blur transition-colors"
            : scroll
            ? "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky"
            : "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors"
        }
      >
        <div className="flex items-center px-6 py-6 xl:px-56 ">
          <Link href="/">
            <a className="shrink-0">
              <Image
                width={200}
                height={28}
                quality={100}
                src="/images/logo.png"
                alt="Logo || GeraPagalba"
                className="max-h-7 h-auto"
              />
            </a>
          </Link>

          {/* <!-- Menu / Actions --> */}
          <MblNavbar
            navItemValue={navItemValue}
            navText={navText}
            User={User}
          />

          {/* <!-- Mobile Menu Actions --> */}
          <div className="ml-auto flex lg:hidden">
            {/* <!-- Profile --> */}
            {User.name == undefined ? (
              <>
                <div className="js-nav-dropdown group-dropdown relative">
                  <button
                    className="dropdown-toggle border-jacarta-100 focus:bg-accent group hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent "
                    onClick={() => setProfileShow((prevState) => !prevState)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className=" h-4 w-4 transition-colors  group-focus:fill-white fill-brand2"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
                    </svg>
                  </button>

                  <div
                    style={{
                      border: "solid 2px #6CB960",
                      marginRight: "1rem",
                      marginTop: "0.5rem",
                    }}
                    className={
                      profileShow
                        ? "dropdown-menu  group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100"
                        : "dropdown-menu  group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0"
                    }
                    onMouseEnter={() => setProfileShow(true)}
                    onMouseLeave={() => setProfileShow(false)}
                  >
                    <Link href={`/registracija`} passHref>
                      <a
                        className="hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-3 transition-colors"
                        onClick={handleLinkClick}
                      >
                        <Image
                          style={{}}
                          width={22}
                          height={22}
                          src={login.src}
                        />
                        <span className="font-display text-jacarta-700 mt-1 text-sm-md ">
                          Registracija
                        </span>
                      </a>
                    </Link>
                    <Link href={`/prisijungimas/`} passHref>
                      <a
                        className="hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-3 transition-colors"
                        onClick={handleLinkClick}
                      >
                        <Image
                          style={{}}
                          width={22}
                          height={22}
                          src={register.src}
                        />
                        <span className="font-display text-jacarta-700 mt-1 text-sm-md ">
                          Prisijungimas
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="js-nav-dropdown group-dropdown relative">
                <button
                  className="dropdown-toggle border-jacarta-100 focus:bg-accent group hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent "
                  onMouseEnter={() => setProfileShow(true)}
                  onMouseLeave={() => setProfileShow(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-brand2"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
                  </svg>
                </button>

                <div
                  className={
                    profileShow
                      ? "dropdown-menu  group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100"
                      : "dropdown-menu  group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0"
                  }
                  onMouseEnter={() => setProfileShow(true)}
                  onMouseLeave={() => setProfileShow(false)}
                >
                  <Link href={`/user/${User.userId}`} passHref>
                    <a
                      className=" hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                      onClick={handleLinkClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-jacarta-700 h-4 w-4 transition-colors "
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm ">
                        Mano Profilis
                      </span>
                    </a>
                  </Link>
                  <Link href={`/nustatymai/`} passHref>
                    <a
                      className=" hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                      onClick={handleLinkClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 482.568 482.568"
                        width="24"
                        height="24"
                        className="fill-jacarta-700 h-4 w-4 transition-colors "
                      >
                        <path d="M116.993,203.218c13.4-1.8,26.8,2.8,36.3,12.3l24,24l22.7-22.6l-32.8-32.7c-5.1-5.1-5.1-13.4,0-18.5s13.4-5.1,18.5,0    l32.8,32.8l22.7-22.6l-24.1-24.1c-9.5-9.5-14.1-23-12.3-36.3c4-30.4-5.7-62.2-29-85.6c-23.8-23.8-56.4-33.4-87.3-28.8    c-4.9,0.7-6.9,6.8-3.4,10.3l30.9,30.9c14.7,14.7,14.7,38.5,0,53.1l-19,19c-14.7,14.7-38.5,14.7-53.1,0l-31-30.9    c-3.5-3.5-9.5-1.5-10.3,3.4c-4.6,30.9,5,63.5,28.8,87.3C54.793,197.518,86.593,207.218,116.993,203.218z" />
                        <path d="M309.193,243.918l-22.7,22.6l134.8,134.8c5.1,5.1,5.1,13.4,0,18.5s-13.4,5.1-18.5,0l-134.8-134.8l-22.7,22.6l138.9,138.9    c17.6,17.6,46.1,17.5,63.7-0.1s17.6-46.1,0.1-63.7L309.193,243.918z" />
                        <path d="M361.293,153.918h59.9l59.9-119.7l-29.9-29.9l-119.8,59.8v59.9l-162.8,162.3l-29.3-29.2l-118,118    c-24.6,24.6-24.6,64.4,0,89s64.4,24.6,89,0l118-118l-29.9-29.9L361.293,153.918z" />
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm ">
                        Nustatymai
                      </span>
                    </a>
                  </Link>

                  <button onClick={Logout}>
                    <a className=" hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-jacarta-700 h-4 w-4 transition-colors "
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"></path>
                      </svg>
                      <span className="font-display text-jacarta-700 mt-1 text-sm ">
                        Atsijungti
                      </span>
                    </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* <Wallet_modal /> */}
    </div>
  );
};

export default Navbar;
