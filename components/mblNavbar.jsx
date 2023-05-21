import React, { useEffect, useState } from "react";
import Link from "next/link";
import { closeMblMenu } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { GetUserData } from "./functions/functions";
import { Logout } from "./functions/functions";
const MblNavbar = ({ User, navItemValue, navText }) => {
  const { mblMenu } = useSelector((state) => state.counter);
  const { UserFullName, UserEmail, UserToken } = useSelector(
    (state) => state.create
  );
  const dispatch = useDispatch();
  const [profileShow, setProfileShow] = useState(false);
  const router = useRouter();

  const handleItemDropdown = (e) => {
    const target = e.target.closest("li");

    if (!target.classList.contains("show")) {
      target.classList.add("show");
    } else {
      target.classList.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        dispatch(closeMblMenu());
      }
    });

    if (router.asPath === "/") {
      localStorage.setItem("navItemValue", 1);
    }
    if (router.asPath === "/home/home_2") {
      localStorage.setItem("navItemValue", 2);
    }
    if (router.asPath === "/home/home_3") {
      localStorage.setItem("navItemValue", 3);
    }
    if (router.asPath === "/home/home_4") {
      localStorage.setItem("navItemValue", 4);
    }
    if (router.asPath === "/home/home_5") {
      localStorage.setItem("navItemValue", 5);
    }
    if (router.asPath === "/home/home_6") {
      localStorage.setItem("navItemValue", 6);
    }
    if (router.asPath.includes("item")) {
      localStorage.setItem("navItemValue", 7);
    }
    if (router.asPath.includes("collection/avatar")) {
      localStorage.setItem("navItemValue", 9);
    }
    if (router.asPath === "/collection/explore_collection") {
      localStorage.setItem("navItemValue", 8);
    }
    if (router.asPath.includes("activity")) {
      localStorage.setItem("navItemValue", 10);
    }
    if (router.asPath.includes("ranking")) {
      localStorage.setItem("navItemValue", 11);
    }
    if (router.asPath.includes("user")) {
      localStorage.setItem("navItemValue", 12);
    }
    if (router.asPath.includes("profile")) {
      localStorage.setItem("navItemValue", 13);
    }
    if (router.asPath.includes("about")) {
      localStorage.setItem("navItemValue", 14);
    }
    if (router.asPath.includes("contact")) {
      localStorage.setItem("navItemValue", 15);
    }
    if (router.asPath.includes("wallet")) {
      localStorage.setItem("navItemValue", 16);
    }
    if (router.asPath.includes("404")) {
      localStorage.setItem("navItemValue", 18);
    }
    if (router.asPath.includes("tarms")) {
      localStorage.setItem("navItemValue", 19);
    }
    if (router.asPath.includes("help_center")) {
      localStorage.setItem("navItemValue", 20);
    }
    if (router.asPath.includes("partners")) {
      localStorage.setItem("navItemValue", 23);
    }
    if (router.asPath.includes("blog")) {
      localStorage.setItem("navItemValue", 24);
    }
    if (router.asPath.includes("single_post")) {
      localStorage.setItem("navItemValue", 25);
    }
    if (router.asPath.includes("newsletter")) {
      localStorage.setItem("navItemValue", 26);
    }
    if (router.asPath.includes("prisijungimas")) {
      localStorage.setItem("navItemValue", 60);
    }
    if (router.asPath.includes("registracija")) {
      localStorage.setItem("navItemValue", 61);
    }
    if (router.asPath.includes("nustatymai")) {
      localStorage.setItem("navItemValue", 88);
    }
    if (router.asPath.includes("pagrindinis")) {
      localStorage.setItem("navItemValue", 99);
    }
  }, [dispatch, navItemValue, router, User]);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href !== router.asPath) {
      router.push(href).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div
      className={
        mblMenu
          ? "js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent nav-menu--is-open"
          : "js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent"
      }
    >
      {/* <!-- Mobile Logo / Menu Close --> */}
      <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
        {/* <!-- Mobile Logo --> */}

        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              width={200}
              height={28}
              quality={100}
              className="max-h-7 dark:hidden"
              alt="Logo || GeraPagalba"
            />
          </a>
        </Link>

        {/* <!-- Mobile Menu Close --> */}
        <button
          className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent"
          onClick={() => dispatch(closeMblMenu())}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
          </svg>
        </button>
      </div>

      {/* <!-- Primary Nav --> */}
      <nav className="navbar w-full">
        <ul className="flex flex-col lg:flex-row">
          <li className="js-nav-dropdown group relative">
            <Link href="/">
              <a
                className={
                  "dropdown-toggle text-jacarta-700 font-display hover:text-brand focus:text-brand flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
                }
              >
                <span className={navText === "home" ? "text-brand" : ""}>
                  Pagrindinis
                </span>

                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                  </svg>
                </i>
              </a>
            </Link>
          </li>

          <li className="js-nav-dropdown nav-item dropdown group relative">
            <Link href="/terapeutams">
              <a
                className={
                  "dropdown-toggle text-jacarta-700 font-display hover:text-brand focus:text-brand flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
                }
              >
                <span className={navText === "terapeutams" ? "text-brand" : ""}>
                  Terapeutams
                </span>

                <i className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="h-4 w-4 dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                  </svg>
                </i>
              </a>
            </Link>
          </li>

          {User.name == undefined ? (
            <>
              <Link href="/prisijungimas">
                <a
                  onClick={() => {
                    dispatch(closeMblMenu());
                    localStorage.setItem("navItemValue", 60);
                  }}
                >
                  <button
                    className={
                      "dropdown-toggle text-jacarta-700 font-display hover:text-brand focus:text-brand flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5 w-full"
                    }
                  >
                    <span
                      className={
                        navText === "prisijungimas" ? "text-brand" : ""
                      }
                    >
                      Prisijungti
                    </span>
                  </button>
                </a>
              </Link>
              <Link href="/registracija">
                <a
                  onClick={() => {
                    dispatch(closeMblMenu());
                    localStorage.setItem("navItemValue", 61);
                  }}
                >
                  <button
                    style={{ backgroundColor: "#00E573", borderRadius: "20px" }}
                    className={
                      router.asPath === "/home/home_3"
                        ? "font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:text-white text-jacarta-700 dark:text-white lg:px-5"
                        : "text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5"
                    }
                  >
                    <span
                      style={{ color: "white" }}
                      className={navText === "create" ? "text-white" : ""}
                    >
                      Registruotis
                    </span>
                  </button>
                </a>
              </Link>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>

      {/* <!-- Actions --> */}
      <div className="ml-8 hidden lg:flex xl:ml-12">
        {console.log(User.name)}
        {User.name && (
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
                  ? "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100"
                  : "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0"
              }
              onMouseEnter={() => setProfileShow(true)}
              onMouseLeave={() => setProfileShow(false)}
            >
              <Link href={`/user/${User.userId}`} passHref>
                <a
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                  onClick={handleLinkClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    Mano Profilis
                  </span>
                </a>
              </Link>
              <Link href={`/nustatymai/`} passHref>
                <a
                  className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                  onClick={handleLinkClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 482.568 482.568"
                    width="24"
                    height="24"
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path d="M116.993,203.218c13.4-1.8,26.8,2.8,36.3,12.3l24,24l22.7-22.6l-32.8-32.7c-5.1-5.1-5.1-13.4,0-18.5s13.4-5.1,18.5,0    l32.8,32.8l22.7-22.6l-24.1-24.1c-9.5-9.5-14.1-23-12.3-36.3c4-30.4-5.7-62.2-29-85.6c-23.8-23.8-56.4-33.4-87.3-28.8    c-4.9,0.7-6.9,6.8-3.4,10.3l30.9,30.9c14.7,14.7,14.7,38.5,0,53.1l-19,19c-14.7,14.7-38.5,14.7-53.1,0l-31-30.9    c-3.5-3.5-9.5-1.5-10.3,3.4c-4.6,30.9,5,63.5,28.8,87.3C54.793,197.518,86.593,207.218,116.993,203.218z" />
                    <path d="M309.193,243.918l-22.7,22.6l134.8,134.8c5.1,5.1,5.1,13.4,0,18.5s-13.4,5.1-18.5,0l-134.8-134.8l-22.7,22.6l138.9,138.9    c17.6,17.6,46.1,17.5,63.7-0.1s17.6-46.1,0.1-63.7L309.193,243.918z" />
                    <path d="M361.293,153.918h59.9l59.9-119.7l-29.9-29.9l-119.8,59.8v59.9l-162.8,162.3l-29.3-29.2l-118,118    c-24.6,24.6-24.6,64.4,0,89s64.4,24.6,89,0l118-118l-29.9-29.9L361.293,153.918z" />
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    Nustatymai
                  </span>
                </a>
              </Link>

              <button onClick={Logout}>
                <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"></path>
                  </svg>
                  <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                    Atsijungti
                  </span>
                </a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MblNavbar;
