import React, { useState } from "react";
import { useEffect } from "react";
import blank from "../../components/assets/icons/blank.png";
import Image from "next/image";

const Collection_category = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="testimonials-container ">
        {/* <!-- Today's Drops / Sellers / Buyers --> */}
        <figure className="snip1157">
          <blockquote
            style={{
              background: "#5ab49f",
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
              color: "white",
            }}
          >
            Laura: Anksčiau man buvo sudėtinga suderinti terapijos sesijų laiką
            su savo darbu. Dabar, dėka GeraPagalba, galiu susisiekti su
            terapeutu bet kur ir bet kada - net per pietų pertrauką ar po darbo.
            Ši paslauga yra tikrai naudinga ir padeda man efektyviau valdyti
            savo laiką. Dėkoju jums!
            <div className="arrow"></div>
          </blockquote>
          <br></br>
          <Image
            width={74}
            quality={100}
            height={74}
            src={blank.src}
            alt="sq-sample3"
          />
        </figure>
        <figure className="snip1157 hover">
          <blockquote
            style={{
              background: "#5ab49f",
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Ieva: GeraPagalba man padeda susisiekti su terapeutu, kai prasideda
            panikos priepuoliai. Tai yra neįkainojama paslauga, kuri tapo mano
            kasdienybe. Dėkoju, kad suteikiate galimybę greitai gauti pagalbą,
            kai to labiausiai reikia.
            <div className="arrow"></div>
          </blockquote>
          <br></br>
          <Image
            width={74}
            quality={100}
            height={74}
            src={blank.src}
            alt="sq-sample27"
          />
        </figure>
        <figure className="snip1157">
          <blockquote
            style={{
              background: "#5ab49f",
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Andrius: Dėkoju GeraPagalba už galimybę gauti pagalbą iš namų, be
            jokio reikalo važiuoti į terapeuto kabinetą. Ši paslauga sutaupo
            daug laiko ir yra labai patogi. Be to, nereikia nerimauti dėl eismo
            ar parkavimo vietos! Esu labai patenkintas ir rekomenduoju tai
            kitiems.
            <div className="arrow"></div>
          </blockquote>
          <br></br>
          <Image
            width={74}
            quality={100}
            height={74}
            src={blank.src}
            alt="sq-sample17"
          />
        </figure>
        {/* <!-- end today's drops / sellers / buyers --> */}
      </div>
    </div>
  );
};

export default Collection_category;
