import React, { useEffect, useState } from "react";

import Specialistai from "./specialistai";
import SpecialistuFiltras from "../collectrions/Filtras";

const SpecialistuSekcija = () => {
  const [doctors, setDoctors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [types, setTypes] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [length, setLength] = useState([]);

  const axios = require("axios");
  async function GetDoctors(sortBy) {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/sortedDoctors/`,
        {
          params: {
            sortBy,
            order: "desc",
          },
        }
      );
      console.log(response.data);
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetDoctors();
  }, []);
  function handleTypeSort(type) {
    let newTypes;
    if (types.includes(type)) {
      newTypes = types.filter((item) => item !== type);
    } else {
      newTypes = [...types, type];
    }
    setTypes(newTypes);

    const sortBy = {
      languageOptions: languages,
      helpOptions: newTypes,
      appointmentLength: length,
      price: [0, 100],
    };
    GetDoctors(sortBy);
  }
  function handleLanguageSort(type) {
    let newLanguages;
    if (languages.includes(type)) {
      newLanguages = languages.filter((item) => item !== type);
    } else {
      newLanguages = [...languages, type];
    }
    setLanguages(newLanguages);

    const sortBy = {
      languageOptions: newLanguages,
      helpOptions: types,
      appointmentLength: length,
      price: [0, 100],
    };
    GetDoctors(sortBy);
  }
  function handleRatingsSort(type) {
    let newRatings;
    if (ratings.includes(type)) {
      newRatings = ratings.filter((item) => item !== type);
    } else {
      newRatings = [...ratings, type];
    }
    setRatings(newRatings);

    const sortBy = {
      ratings: newRatings,
      languageOptions: languages,
      helpOptions: types,
      appointmentLength: length,
      price: [0, 100],
    };

    GetDoctors(sortBy);
  }
  function handleLengthSort(type) {
    setLength(type.toString().replace("min", "").replace("h", ""));
    const sortBy = {
      ratings: ratings,
      languageOptions: languages,
      helpOptions: types,
      appointmentLength: type.toString().replace("min", "").replace("h", ""),
      price: [0, 100],
    };

    GetDoctors(sortBy);
  }
  function handlePriceSort(fromPrice, toPrice) {
    const sortBy = {
      ratings: ratings,
      languageOptions: languages,
      helpOptions: types,
      appointmentLength: length,
      price: [parseInt(fromPrice), parseInt(toPrice)],
    };

    GetDoctors(sortBy);
  }

  return (
    <div>
      {/* <!-- Filter --> */}
      <SpecialistuFiltras
        handleLanguageSort={handleLanguageSort}
        handleTypeSort={handleTypeSort}
        handlePriceSort={handlePriceSort}
        handleRatingsSort={handleRatingsSort}
        handleLengthSort={handleLengthSort}
      />
      <Specialistai doctors={doctors} />
    </div>
  );
};

export default SpecialistuSekcija;
