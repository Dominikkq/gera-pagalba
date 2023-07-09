import React, { useState } from "react";
import Recently_added_dropdown from "../dropdown/recently_added_dropdown";

const Collection_category_filter = (props) => {
  const sortText = [
    {
      id: 1,
      text: "Top įvertinti",
    },
    {
      id: 2,
      text: "Pigiausi viršuje",
    },
    {
      id: 3,
      text: "Brangiausi viršuje",
    },
  ];

  const blockchainText = [
    {
      id: 5,
      text: "Lietuvių",
    },
    {
      id: 6,
      text: "Anglų",
    },
    {
      id: 7,
      text: "Rusų",
    },
  ];

  const categoryText = [
    {
      id: 9,
      text: "Depresija",
    },
    {
      id: 10,
      text: "LGBTQ+ klausimai",
    },
    {
      id: 11,
      text: "Nerimas",
    },
    {
      id: 12,
      text: "Santykių problemos",
    },
    {
      id: 13,
      text: "Stresas",
    },
    {
      id: 14,
      text: "Savigarba",
    },
    {
      id: 15,
      text: "Šeimos problemos",
    },
    {
      id: 16,
      text: "Konfliktų sprendimas",
    },
    {
      id: 17,
      text: "Karjeros klausimai",
    },
    {
      id: 18,
      text: "Asmeninis augimas",
    },
    {
      id: 19,
      text: "Socialinės fobijos",
    },
    {
      id: 20,
      text: "Traumos",
    },
    {
      id: 21,
      text: "Miego problemos",
    },
    {
      id: 22,
      text: "Mokymosi sunkumai",
    },
    {
      id: 23,
      text: "Lytinės problemos",
    },
    {
      id: 24,
      text: "Priklausomybės",
    },
    {
      id: 25,
      text: "Emocinės problemos",
    },
    {
      id: 26,
      text: "Gyvenimo pokyčiai",
    },
    {
      id: 27,
      text: "Sveika gyvensena",
    },
    {
      id: 28,
      text: "Tėvystės klausimai",
    },
  ];

  const saleTypeText = [
    {
      id: 30,
      text: "0-2",
    },
    {
      id: 31,
      text: "2-4",
    },
    {
      id: 32,
      text: "4-5",
    },
    {
      id: 33,
      text: "5",
    },
  ];
  const trukmeList = [
    {
      id: 34,
      text: "15min",
    },
    {
      id: 35,
      text: "30min",
    },
    {
      id: 36,
      text: "45min",
    },
    {
      id: 37,
      text: "60min",
    },
  ];

  return (
    <>
      {/* <!-- Filter --> */}
      <div className="mb-8 flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap items-center">
          {/* <!-- Blockchain --> */}
          <Recently_added_dropdown
            data={blockchainText}
            dropdownFor="kalbos"
            handleLanguageSort={props.handleLanguageSort}
          />

          {/* <!-- Category --> */}
          <Recently_added_dropdown
            data={categoryText}
            dropdownFor="types"
            handleTypeSort={props.handleTypeSort}
          />
          {/* <!-- Price Range --> */}
          <Recently_added_dropdown
            data={saleTypeText}
            dropdownFor="price-range"
            handlePriceSort={props.handlePriceSort}
          />
          {/* <!-- Sale Type --> */}
          <Recently_added_dropdown
            data={saleTypeText}
            dropdownFor="vertinimas"
            handleRatingsSort={props.handleRatingsSort}
          />
          <Recently_added_dropdown
            data={trukmeList}
            dropdownFor="trukme"
            handleLengthSort={props.handleLengthSort}
          />
        </div>

        {/* <!-- Sort --> */}
        <Recently_added_dropdown data={sortText} dropdownFor="recently_added" />
      </div>
    </>
  );
};

export default Collection_category_filter;
