import React from "react";
import HeadLine from "../headLine";
import Image from "next/image";
import TopSpecialistai from "../carousel/TopSpecialistai";

const TopSpecialistuSekcija = ({ bgWhite = false }) => {
  return (
    <div>
      <section className="py-24 relative">
        {bgWhite && (
          <picture className="pointer-events-none absolute inset-0 -z-10 ">
            <Image
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full"
              layout="fill"
            />
          </picture>
        )}
        <div className="container">
          <HeadLine
            text="Top Specialistai"
            classes="font-display text-jacarta-700 mb-8 text-center text-3xl "
          />
          <div className="relative">
            <TopSpecialistai />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSpecialistuSekcija;
