import Link from "next/link";
import React, { useEffect } from "react";

import heroImage from "../assets/icons/main.png";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="relative py-20 md:pt-32">
        <picture className="pointer-events-none absolute inset-0 -z-10 ">
          <Image
            style={{ width: "100%" }}
            src="/images/gradient.jpg"
            alt="gradient"
            layout="fill"
          />
        </picture>

        <div className="h-full px-6 xl:px-20">
          <div className="grid h-full items-center gap-4 lg:grid-cols-12">
            <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-20 xl:col-span-5 xl:pl-[15%] xl:pr-[20%]">
              <div className="mb-10 w-full sm:flex sm:space-x-4">
                <div
                  className="mb-4 flex-1 rounded-2lg p-4  "
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "#99E35F",
                      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      opacity: "0.4",
                      position: "absolute",
                      inset: "0",
                      borderRadius: "20px",
                      zIndex: "-1",
                    }}
                  />
                  <span
                    className="block font-display text-3xl"
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "36px",
                      lineHeight: "44px",
                      color: "#1E1E1E",
                      textAlign: "center",
                    }}
                  >
                    100+
                  </span>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "10px",
                      textAlign: "left",
                    }}
                  >
                    Patenkintų Klientų
                  </span>
                </div>

                <div
                  className="mb-4 flex-1 rounded-2lg p-4"
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "#99E35F",
                      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      opacity: "0.75",
                      position: "absolute",
                      inset: "0",
                      borderRadius: "20px",
                      zIndex: "-1",
                    }}
                  />
                  <span
                    className="block font-display text-3xl"
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "36px",
                      lineHeight: "44px",
                      color: "#1E1E1E",
                      textAlign: "center",
                    }}
                  >
                    50+
                  </span>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "10px",
                      textAlign: "left",
                    }}
                  >
                    Patenkintų Terapeutų
                  </span>
                </div>
                <div
                  className="mb-4 flex-1 rounded-2lg p-4 text-center "
                  style={{
                    position: "relative",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      background: "#99E35F",
                      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      opacity: "1",
                      position: "absolute",
                      inset: "0",
                      borderRadius: "20px",
                      zIndex: "-1",
                    }}
                  />
                  <span
                    className="block font-display text-3xl "
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "36px",
                      lineHeight: "44px",
                      color: "#1E1E1E",
                    }}
                  >
                    4.5+
                  </span>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "20px",
                      lineHeight: "35px",
                    }}
                  >
                    Įvertinimas
                  </span>
                </div>
              </div>
              <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700  md:text-left lg:text-5xl xl:text-6xl">
                Gauk psichologo pagalbą neišejęs iš namų
              </h1>
              <p className="mb-8 text-center text-lg  md:text-left">
                Konsultacijos internetu - patikima ir efektyvi psichologo
                pagalba
              </p>
              <div className="flex space-x-5">
                <Link href="/registracija">
                  <a className="w-36 rounded-full bg-brand2 py-3 px-8 text-center font-semibold text-white transition-all hover:bg-brand">
                    Prisijūnk
                  </a>
                </Link>
              </div>
            </div>

            {/* <!-- Hero images --> */}
            <div className="relative col-span-6 xl:col-span-6 xl:col-start-7">
              <Image
                src={heroImage.src}
                alt="item 1"
                width={800}
                height={700}
                quality={100}
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

export default Hero;
