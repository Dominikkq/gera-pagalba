import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bidsModalHide } from "../../redux/counterSlice";
import { Confirm_checkout } from "../metamask/Metamask";
import Data from "../Data.json";
import { GetUserData } from "../functions/functions";
import user_data from "../../data/user_data";

const BidsModal = () => {
  const { profileEditModal } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [User, setUser] = useState([]);
  async function Setup() {
    var response = await GetUserData();
    console.log(response);
    if (response) {
      setSelectedOptions(response.helpOptions);
      setLanguageOptions(response.languageOptions);
      setUser(response);
      setPrices(response.rates);
    }
  }

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);

  useEffect(() => {
    Setup();
  }, []);

  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsBinaryString(file);
    reader.onload = () => {
      const base64Image = btoa(reader.result);
      setImage(`data:${file.type};base64,${base64Image}`);
    };
  };

  const LanguageOptions = ["Anglų", "Rusų", "Lietuvių"];

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

  const handleOptionSelect = (event, option) => {
    event.stopPropagation();
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleLanguageSelect = (event, option) => {
    event.stopPropagation();
    if (languageOptions.includes(option)) {
      setLanguageOptions(languageOptions.filter((o) => o !== option));
    } else {
      setLanguageOptions([...languageOptions, option]);
    }
  };
  const isOptionSelected = (option) => {
    return selectedOptions?.includes(option);
  };
  const isLanguageSelected = (option) => {
    return languageOptions?.includes(option);
  };
  const [prices, setPrices] = useState({
    15: 0,
    30: 0,
    45: 0,
    60: 0,
  });

  const handlePriceChange = (event, duration) => {
    const value = event.target.value;
    setPrices({ ...prices, [duration]: value });
  };
  return (
    <div>
      <div
        className={profileEditModal ? "modal fade show block" : "modal fade"}
      >
        <div className="modal-dialog max-w-2xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="placeBidLabel">
                Proflio Redagavimas
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(bidsModalHide())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-6 w-6 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
                </svg>
              </button>
            </div>

            {/* <!-- Body --> */}
            <div className="modal-body p-6 pb-0">
              <div style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                <div alt="personal">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="mr-4">
                        {image && (
                          <img
                            style={{
                              width: "124px",
                              borderRadius: "50%",
                              margin: "auto",
                            }}
                            src={image}
                            alt="Uploaded image"
                          />
                        )}
                        <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                          <input
                            style={{ minWidth: "300px" }}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                          15 min kaina (eur)
                        </span>
                        <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                          <input
                            style={{ minWidth: "20px" }}
                            placeholder={prices && prices[15]}
                            id="price_15"
                            onChange={(event) => handlePriceChange(event, 15)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4">
                        <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                          Vardas
                        </span>
                        <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                          <input
                            style={{ minWidth: "300px" }}
                            placeholder={User.name}
                            id="new_name"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                          30 min kaina (eur)
                        </span>
                        <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                          <input
                            style={{ minWidth: "20px" }}
                            placeholder={prices && prices[30]}
                            id="price_30"
                            onChange={(event) => handlePriceChange(event, 30)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4">
                        <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                          Pavardė
                        </span>
                        <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                          <input
                            style={{ minWidth: "300px" }}
                            placeholder={User.lastname}
                            id="new_lastname"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                          45 min kaina (eur)
                        </span>
                        <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                          <input
                            style={{ minWidth: "20px" }}
                            placeholder={prices && prices[45]}
                            id="price_45"
                            onChange={(event) => handlePriceChange(event, 45)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4">
                      <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                        Aprašymas
                      </span>
                      <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                        <input
                          style={{ minWidth: "300px" }}
                          placeholder={User.description}
                          id="new_description"
                        />
                      </div>
                    </div>
                    <div>
                      <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                        60 min kaina (eur)
                      </span>
                      <div className="relative mb-2 flex items-center overflow-hidden rounded-lg">
                        <input
                          style={{ minWidth: "20px" }}
                          placeholder={prices && prices[60]}
                          id="price_60"
                          onChange={(event) => handlePriceChange(event, 60)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                    Kalbos
                  </span>
                  <div className="mb-2">
                    {LanguageOptions.map((option) => (
                      <label
                        key={option}
                        className={`checkbox-label ${
                          isLanguageSelected(option) ? "selected" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-jacarta-700"
                          checked={isOptionSelected(option)}
                          onChange={(event) =>
                            handleLanguageSelect(event, option)
                          }
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
                  <div className="mb-2">
                    {options.map((option) => (
                      <label
                        key={option}
                        className={`checkbox-label ${
                          isOptionSelected(option) ? "selected" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-jacarta-700"
                          checked={isOptionSelected(option)}
                          onChange={(event) =>
                            handleOptionSelect(event, option)
                          }
                        />
                        <span className="ml-2 text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <br></br>
              {/* <!-- end body --> */}
              <p
                style={{ color: "#EF4444", textAlign: "center" }}
                id="edit_error"
              ></p>
              <div className="modal-footer">
                <div className="flex items-center justify-center space-x-4">
                  <Confirm_checkout
                    purpose="edit"
                    selectedOptions={selectedOptions}
                    newImage={image}
                    email={User.email}
                    languages={languageOptions}
                    rates={prices}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidsModal;
