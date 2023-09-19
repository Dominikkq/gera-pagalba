import React from "react";

import HeadLine from "../components/headLine";
import Meta from "../components/Meta";
import Hero from "../components/hero/hero";
import Footer from "../components/Footer/Footer";

import Faq from "../components/Faq/Faq";
import Process from "../components/Process/Process";
import Info from "../components/info/Info";

import SpecialistuSekcija from "../components/categories/SpecialistuSekcija";
import TopSpecialistuSekcija from "../components/collectrions/TopSpecialistuSekcija";
const Index = () => {
  return (
    <>
      <Meta title="GeraPagalba" />
      <Hero />

      <TopSpecialistuSekcija />
      <Process />
      <div>
        {/* <!-- Trending Categories --> */}
        <section className="py-24">
          <div className="container">
            <HeadLine
              text="Specialistai"
              classes="mb-8 text-center font-display text-3xl text-jacarta-700 "
            />
            <SpecialistuSekcija />
          </div>
        </section>
        {/* <!-- end trending categories --> */}
      </div>

      <Info />

      <Faq />
      <img
        style={{ opacity: 0.5, position: "absolute" }}
        src="/images/gradient.jpg"
        alt="gradient"
        layout="fill"
      />
      <Footer />
    </>
  );
};

export default Index;
