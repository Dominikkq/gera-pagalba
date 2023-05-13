import Link from "next/link";
import React, { useEffect } from "react";

import { useState } from "react";
import heroImage from "../assets/icons/main.png";
import Data from "../Data.json";
const Hero_5 = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            style={{ width: "100%" }}
            src="/images/gradient.jpg"
            alt="gradient"
            className="h-full"
          />
        </picture>
        <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <img
            src="/images/gradient_dark.jpg"
            alt="gradient dark"
            className="h-full"
          />
        </picture>

        <div className="h-full px-6 xl:px-20">
          <div className="grid h-full items-center gap-4 lg:grid-cols-12">
            <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-5 xl:pl-[20%] xl:pr-[10%]">
              <div className="mb-10 w-full sm:flex sm:space-x-4">
                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span className="block font-display text-3xl text-[#8DD059]">
                    100+
                  </span>
                  <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                    Patenkintų Klientų
                  </span>
                </div>
                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span className="block font-display text-3xl text-[#737EF2]">
                    50+
                  </span>
                  <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                    Patenkintų Terapeutų
                  </span>
                </div>
                <div className="mb-4 flex-1 rounded-2lg bg-white p-4 text-center dark:bg-white/[.15]">
                  <span className="block font-display text-3xl text-[#F35BC7]">
                    4.5+
                  </span>
                  <span className="block font-display text-sm text-jacarta-500 dark:text-white">
                    Įvertinimas
                  </span>
                </div>
              </div>
              <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-5xl xl:text-6xl">
                Gauk psichologo pagalbą neišejęs iš namų
              </h1>
              <p className="mb-8 text-center text-lg dark:text-jacarta-200 md:text-left">
                Konsultacijos internetu - patikima ir efektyvi psichologo
                pagalba
              </p>
              <div className="flex space-x-5">
                <Link href="/registracija">
                  <a className="w-36 rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                    Prisijunk
                  </a>
                </Link>
              </div>
            </div>

            {/* <!-- Hero images --> */}
            <div className="relative col-span-6 xl:col-span-6 xl:col-start-7">
              <img
                src={heroImage.src}
                alt="item 1"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero_5;