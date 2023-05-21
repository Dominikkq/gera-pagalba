import React, { useState, useEffect } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { useRouter, router } from "next/router";
import { useDispatch } from "react-redux";
import Meta from "../../components/Meta";
import { GetUserData } from "../../components/functions/functions";
import { Confirm_checkout } from "../../components/metamask/Metamask";
import blank from "../../components/assets/icons/blank.png";

const Create = () => {
  const [User, setUser] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);
  const [image, setImage] = useState(null);
  const [prices, setPrices] = useState({
    15: 0,
    30: 0,
    45: 0,
    60: 0,
  });
  const [weekendHoursVisible, setWeekendHoursVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  async function Setup() {
    var response = await GetUserData();
    if (response) {
      setSelectedOptions(response.helpOptions);
      setLanguageOptions(response.languageOptions);
      setUser(response);
      setPrices(response.rates);
    } else {
      router.push("/");
    }
  }

  useEffect(() => {
    Setup();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsBinaryString(file);
    reader.onload = () => {
      const base64Image = btoa(reader.result);
      setImage(`data:${file.type};base64,${base64Image}`);
    };
  };

  const handleOptionSelect = (event, option) => {
    event.stopPropagation();
    if (selectedOptions?.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      addItemOptions(option);
    }
  };

  const handleLanguageSelect = (event, option) => {
    event.stopPropagation();
    if (languageOptions && languageOptions.includes(option)) {
      setLanguageOptions(languageOptions.filter((o) => o !== option));
    } else {
      addItemLanguages(option);
    }
  };

  const options = [
    "Depresija",
    "LGBTQ+ klausimai",
    "Nerimas",
    "Santykių problemos",
    "Stresas",
    "Savigarba",
    "Šeimos problemos",
    "Konfliktų sprendimas",
    "Karjeros klausimai",
    "Asmeninis augimas",
    "Socialinės fobijos",
    "Traumos",
    "Miego problemos",
    "Mokymosi sunkumai",
    "Lytinių problemų sprendimas",
    "Priklausomybės",
    "Emocinės problemos",
    "Gyvenimo pokyčiai",
    "Laikymasis sveikos gyvensenos",
    "Tėvystės klausimai",
  ];

  const handlePriceChange = (event, duration) => {
    const value = event.target.value;
    setPrices({ ...prices, [duration]: value });
  };

  const toggleWeekendHours = () => {
    setWeekendHoursVisible(!weekendHoursVisible);
  };

  const addItemOptions = (item) => {
    setSelectedOptions((prevArray) =>
      prevArray ? [...prevArray, item] : [item]
    );
  };

  const addItemLanguages = (item) => {
    setLanguageOptions((prevArray) =>
      prevArray ? [...prevArray, item] : [item]
    );
  };

  const LanguageOptions = ["Anglų", "Rusų", "Lietuvių"];

  const isOptionSelected = (option) => {
    return selectedOptions ? selectedOptions.includes(option) : false;
  };

  const isLanguageSelected = (option) => {
    return languageOptions?.includes(option);
  };

  const setActiveTabHandler = (tab) => {
    setActiveTab(tab);
  };

  const PersonalInformation = () => {
    return (
      <>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-gray-700 text-sm mb-1 block">
            Vardas
          </span>
          <div className="bg-white rounded-md shadow-sm">
            <input
              style={{ maxWidth: "300px" }}
              className="w-full min-w-0 py-2 px-3 bg-transparent border-none rounded-md focus:outline-none"
              placeholder={User.name}
              id="new_name"
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-gray-700 text-sm mb-1 block">
            Pavardė
          </span>
          <div className="bg-white  rounded-md shadow-sm">
            <input
              style={{ maxWidth: "300px" }}
              className="w-full min-w-0 py-2 px-3 bg-transparent border-none rounded-md focus:outline-none"
              placeholder={User.lastname}
              id="new_lastname"
            />
          </div>
        </div>
      </>
    );
  };

  const WorkInformation = () => {
    return (
      <>
        <div className="col-span-1 sm:col-span-2">
          {["15", "30", "45", "60"].map((time, index) => (
            <div key={time} className="col-span-1">
              <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                {index === 0
                  ? `${time} min kaina (eur) = 0 neaktyvus`
                  : `min kaina (eur)`}
              </span>
              <div>
                <input
                  type="number"
                  min="0"
                  className="w-16 py-2 px-3 bg-white  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder={prices && prices[parseInt(time)]}
                  id={`price_${time}`}
                  onChange={(event) => handlePriceChange(event, parseInt(time))}
                />
              </div>
            </div>
          ))}
          <span className="font-medium text-gray-700 text-sm mb-1 block">
            Darbo valandos
          </span>
          <div className="flex items-center">
            <input
              type="number"
              min="0"
              max="23"
              className="w-16 py-2 px-3 bg-white  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue="9"
              id="workdays_from"
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              min="0"
              max="23"
              className="w-16 py-2 px-3 bg-white  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              defaultValue="17"
              id="workdays_to"
            />
          </div>
        </div>
        <div
          className="col-span-1 sm:col-span-2"
          style={{ paddingTop: "1rem" }}
        >
          <label
            className="font-medium text-gray-700 text-sm"
            htmlFor="weekends_checkbox"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-700 mr-2"
              id="weekends_checkbox"
              checked={weekendHoursVisible}
              onChange={toggleWeekendHours}
            />
            Savaitgaliai
          </label>
        </div>
        {weekendHoursVisible && (
          <div
            className="col-span-1 sm:col-span-2"
            style={{ paddingTop: "1rem" }}
          >
            <span className="font-medium text-gray-700 text-sm mb-1 block">
              Savaitgalio darbo valandos
            </span>

            <div className="flex items-center">
              <input
                type="number"
                min="0"
                max="23"
                className="w-16 py-2 px-3 bg-white  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                defaultValue="9"
                id="weekends_from"
              />
              <span className="mx-2">-</span>
              <input
                type="number"
                min="0"
                max="23"
                className="w-16 py-2 px-3 bg-white  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                defaultValue="17"
                id="weekends_to"
              />
            </div>
          </div>
        )}
        <div className="mt-6">
          <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
            Kalbos
          </span>
          <div className="mb-2 flex flex-wrap">
            {LanguageOptions.map((option) => (
              <label
                key={option}
                className={`checkbox-label mr-4 ${
                  isLanguageSelected(option) ? "selected" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-jacarta-700"
                  checked={isOptionSelected(option)}
                  onChange={(event) => handleLanguageSelect(event, option)}
                />
                <span className="ml-2 text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
            Galiu padėti su
          </span>
          <div className="mb-2 flex flex-wrap">
            {options.map((option) => (
              <label
                key={option}
                className={`checkbox-label mr-4 ${
                  isOptionSelected(option) ? "selected" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-jacarta-700"
                  checked={isOptionSelected(option)}
                  onChange={(event) => handleOptionSelect(event, option)}
                />
                <span className="ml-2 text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </>
    );
  };

  const PaymentInformation = () => {
    return (
      <>
        <div className="col-span-1 sm:col-span-2" style={{ width: "20rem" }}>
          <span className="font-medium text-gray-700 text-sm mb-1 block">
            Banko sąskaita
          </span>
          <div className="bg-white  rounded-md shadow-sm">
            <input
              className="w-full min-w-0 py-2 px-3 bg-transparent border-none rounded-md focus:outline-none"
              placeholder="Banko adresas"
              id="bank_address"
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <section className="relative py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col items-center pb-8">
            <h1 className="font-display text-jacarta-700 text-4xl font-medium dark:text-white">
              Nustatymai
            </h1>
          </div>
          {/* Settings Section */}
          <div className="flex justify-between">
            {/* Sidebar */}
            <div className="sidebar pr-8">
              <ul className="settings-list" style={{ width: "10rem" }}>
                <li
                  style={{ cursor: "pointer" }}
                  className={`settings-list-item ${
                    activeTab === "personal" ? "active" : ""
                  }`}
                  onClick={() => setActiveTabHandler("personal")}
                >
                  Asmeninė Informacija
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  className={`settings-list-item ${
                    activeTab === "work" ? "active" : ""
                  }`}
                  onClick={() => setActiveTabHandler("work")}
                >
                  Darbo Informacija
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  className={`settings-list-item ${
                    activeTab === "payment" ? "active" : ""
                  }`}
                  onClick={() => setActiveTabHandler("payment")}
                >
                  Mokėjimai
                </li>
              </ul>
            </div>
            {/* Content */}
            <div className="content" style={{ marginRight: "auto" }}>
              {activeTab === "personal" && <PersonalInformation />}
              {activeTab === "work" && <WorkInformation />}
              {activeTab === "payment" && <PaymentInformation />}
              <p
                style={{
                  color: "#EF4444",
                  textAlign: "left",
                  fontWeight: "500",
                }}
                id="edit_error"
              ></p>
            </div>
          </div>
          <div className="modal-footer">
            <div className="flex items-center justify-center space-x-4">
              <Confirm_checkout
                purpose="edit"
                selectedOptions={selectedOptions}
                newImage={image}
                email={User.email}
                languages={languageOptions}
                rates={prices}
                weekendsHour={weekendHoursVisible}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
