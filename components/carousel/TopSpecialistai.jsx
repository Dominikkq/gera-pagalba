import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "tippy.js/dist/tippy.css";
import Data from "../Data.json";
import "@fontsource/montserrat";
import Card from "../Card/Card";

const TopSpecialistai = () => {
  const [doctors, setDoctors] = useState([]);

  async function GetDoctors() {
    try {
      const axios = require("axios");
      const response = await axios.get(`${process.env.API_URL}/doctors/`);
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetDoctors();
  }, []);

  function getColorClass(option) {
    const optionColors = {
      Depresija: "bg-red-500",
      "LGBTQ+ klausimai": "bg-blue-500",
      Nerimas: "bg-green-500",
      "Santykių problemos": "bg-yellow-500",
      Stresas: "bg-purple-500",
      Savigarba: "bg-indigo-500",
      "Šeimos problemos": "bg-pink-500",
      "Konfliktų sprendimas": "bg-orange-500",
      "Karjeros klausimai": "bg-teal-500",
      "Asmeninis augimas": "bg-cyan-500",
      "Socialinės fobijos": "bg-lime-500",
      Traumos: "bg-amber-500",
      "Miego problemos": "bg-rose-500",
      "Mokymosi sunkumai": "bg-fuchsia-500",
      "Lytinės problemos": "bg-violet-500",
      Priklausomybės: "bg-sky-500",
      "Emocinės problemos": "bg-emerald-500",
      "Gyvenimo pokyčiai": "bg-blue-gray-500",
      "Sveika gyvensena": "bg-cool-gray-500",
      "Tėvystės klausimai": "bg-warm-gray-500",
    };

    return optionColors[option] || "bg-gray-500";
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className=" card-slider-4-columns !py-5"
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.userId}>
            <Card doctor={doctor} getColorClass={getColorClass} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopSpecialistai;
