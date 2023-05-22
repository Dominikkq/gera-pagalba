import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";
import Image from "next/image";
const Error_page = () => {
  return (
    <div>
      <Meta title="404 || GeraPagalba" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- 404 --> */}
        <section
          className=" relative py-16 md:py-24"
          style={{ height: "100vh" }}
        >
          <picture className="pointer-events-none absolute inset-0 -z-10 ">
            <Image
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
              layout="fill"
            />
          </picture>
          <div className="container">
            <div className="mx-auto max-w-lg text-center">
              <Image
                src="/images/404.png"
                alt=""
                className="mb-16 inline-block"
                width={300}
                quality={100}
                height={150}
              />
              <h1 className="text-jacarta-700 font-display mb-6 text-4xl  md:text-6xl">
                Puslapis Nerastas!
              </h1>

              <Link href="/">
                <a className="bg-accent inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
                  Pagrindinis
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- end 404 --> */}
      </div>
    </div>
  );
};

export default Error_page;
