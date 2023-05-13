/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import MblNavbar from "./mblNavbar";
import { useSelector, useDispatch } from "react-redux";
import { openMblMenu } from "../redux/counterSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [scroll, setScroll] = useState(false);
  const [home3, setHome3] = useState(false);

  const { mblMenu } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleSticky = function () {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const router = useRouter();
  const pid = router.asPath;

  // const router = useRouter();

  useEffect(() => {
    if (pid === "/home/home_3") {
      setHome3(true);
    } else {
      setHome3(false);
    }
  }, [pid]);

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  if (mblMenu) {
    return (
      <div>
        <header
          className={
            scroll
              ? "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors js-page-header--is-sticky h-full"
              : "js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors h-full"
          }
        >
          {pid === "/platform_status" ? (
            <div className="container">
              <div className="flex items-center py-[1.5625rem] lg:py-[1.8125rem]">
                {/* <!-- Logo --> */}
                <Link href="/">
                  <a className="shrink-0 lg:mr-14">
                    <img
                      src="/images/logo.png"
                      className="max-h-7 dark:hidden"
                      alt="Xhibiter | NFT Marketplace"
                    />
                    <img
                      src="/images/logo_white.png"
                      className="hidden max-h-7 dark:block"
                      alt="Xhibiter | NFT Marketplace"
                    />
                  </a>
                </Link>

                <span className="font-display mt-1 hidden text-lg font-semibold lg:inline-block">
                  Status
                </span>

                <Link href="#">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all">
                    <span className="hidden lg:block">
                      Subscribe to Updates
                    </span>
                    <span className="lg:hidden">Subscribe</span>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center px-6 py-6 xl:px-24 ">
              {/* <!-- Logo --> */}

              <Link href="/">
                <a className="shrink-0 block dark:hidden">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="max-h-7 h-auto"
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="shrink-0 hidden dark:block">
                  <img
                    src="/images/logo_white.png"
                    className="max-h-7 h-auto"
                    alt="Xhibiter | NFT Marketplace"
                  />
                </a>
              </Link>

              {/* <!-- Menu / Actions --> */}
              <MblNavbar theme={handleTheme} />

              {/* <!-- Mobile Menu Actions --> */}
              <div className="ml-auto flex lg:hidden">
                {/* <!-- Profile --> */}
                <Link href="/">
                  <a
                    className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                    aria-label="profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                    </svg>
                  </a>
                </Link>

                {/* <!-- Mobile Menu Toggle --> */}
                <button
                  className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                  aria-label="open mobile menu"
                  onClick={() => dispatch(openMblMenu())}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </header>
      </div>
    );
  } else {
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
          {pid === "/platform_status" ? (
            <div className="container">
              <div className="flex items-center py-[1.5625rem] lg:py-[1.8125rem]">
                {/* <!-- Logo --> */}
                <Link href="/">
                  <a className="shrink-0 lg:mr-14">
                    <img
                      src="/images/logo.png"
                      className="max-h-7 dark:hidden"
                      alt="Xhibiter | NFT Marketplace"
                    />
                    <img
                      src="/images/logo_white.png"
                      className="hidden max-h-7 dark:block"
                      alt="Xhibiter | NFT Marketplace"
                    />
                  </a>
                </Link>

                <span className="font-display mt-1 hidden text-lg font-semibold lg:inline-block">
                  Status
                </span>

                <Link href="#">
                  <a className="bg-accent shadow-accent-volume hover:bg-accent-dark ml-auto inline-block rounded-full py-2.5 px-8 text-center text-sm font-semibold text-white transition-all">
                    <span className="hidden lg:block">
                      Subscribe to Updates
                    </span>
                    <span className="lg:hidden">Subscribe</span>
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center px-6 py-6 xl:px-56 ">
              {/* <!-- Logo --> */}
              {home3 ? (
                <Link href="/">
                  <a className="shrink-0">
                    {/* <img src="/images/logo.png" alt="" className="max-h-7 h-auto dark:hidden" /> */}

                    <img
                      src="/images/logo_white.png"
                      className="max-h-7 h-auto"
                      alt="Xhibiter | NFT Marketplace"
                    />
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a className="shrink-0">
                    <img
                      src="/images/logo.png"
                      alt=""
                      className="max-h-7 h-auto dark:hidden"
                    />
                  </a>
                </Link>
              )}

              {/* <!-- Menu / Actions --> */}
              <MblNavbar theme={handleTheme} />

              {/* <!-- Mobile Menu Actions --> */}
              <div className="ml-auto flex lg:hidden">
                {/* <!-- Profile --> */}
                <Link href="/profile/user_avatar">
                  <a
                    className="border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                    aria-label="profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* <Wallet_modal /> */}
      </div>
    );
  }
};

export default Navbar;
