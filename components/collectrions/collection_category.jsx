import React, { useState } from "react";
import { useEffect } from "react";
import blank from "../../components/assets/icons/blank.png";
import { getIcon } from "../functions/functions";
const Collection_category = ({ bgWhite = false }) => {
  useEffect(() => {}, []);

  const [collectionCategoryData, setCollectionCategoryData] = useState([]);

  return (
    <div>
      <div className="testimonials-container ">
        {/* <!-- Today's Drops / Sellers / Buyers --> */}
        <figure className="snip1157">
          <blockquote>
            Laura: Anksčiau man buvo sudėtinga suderinti terapijos sesijų laiką
            su savo darbu. Dabar, dėka GeraPagalba, galiu susisiekti su
            terapeutu bet kur ir bet kada - net per pietų pertrauką ar po darbo.
            Ši paslauga yra tikrai naudinga ir padeda man efektyviau valdyti
            savo laiką. Dėkoju jums!
            <div className="arrow"></div>
          </blockquote>
          <img src={blank.src} alt="sq-sample3" />
        </figure>
        <figure className="snip1157 hover">
          <blockquote>
            Ieva: GeraPagalba man padeda susisiekti su terapeutu, kai prasideda
            panikos priepuoliai. Tai yra neįkainojama paslauga, kuri tapo mano
            kasdienybe. Dėkoju, kad suteikiate galimybę greitai gauti pagalbą,
            kai to labiausiai reikia.
            <div className="arrow"></div>
          </blockquote>
          <img src={blank.src} alt="sq-sample27" />
        </figure>
        <figure className="snip1157">
          <blockquote>
            Andrius: Dėkoju GeraPagalba už galimybę gauti pagalbą iš namų, be
            jokio reikalo važiuoti į terapeuto kabinetą. Ši paslauga sutaupo
            daug laiko ir yra labai patogi. Be to, nereikia nerimauti dėl eismo
            ar parkavimo vietos! Esu labai patenkintas ir rekomenduoju šią
            paslaugą kitiems.
            <div className="arrow"></div>
          </blockquote>
          <img src={blank.src} alt="sq-sample17" />
        </figure>
        {/* <!-- end today's drops / sellers / buyers --> */}
      </div>
    </div>
  );
};

export default Collection_category;
