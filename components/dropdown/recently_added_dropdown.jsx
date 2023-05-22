import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import {
  updatetrendingCategorySorText,
  updateTrendingCategoryItemByInput,
} from "../../redux/counterSlice";
import { useDispatch } from "react-redux";
import {
  updateRenkingData,
  updateRenkingDataByPostdate,
} from "../../redux/counterSlice";
import Image from "next/image";
import globe from "../../components/assets/icons/globe.png";
import categories from "../../components/assets/icons/categories.png";
import star from "../../components/assets/icons/star.png";
import clock from "../../components/assets/icons/clock.png";
import price from "../../components/assets/icons/price.png";

const Recently_added_dropdown = ({
  data,
  dropdownFor,
  handleLanguageSort,
  handleTypeSort,
  handleRatingsSort,
  handleLengthSort,
  handlePriceSort,
}) => {
  const dispatch = useDispatch();
  const [currencyValFrom, setCurrencyValFrom] = useState("");
  const [currencyValTo, setCurrencyValTo] = useState("");
  const [sortActive, setsortActive] = useState([]);
  const [sortFilterText, setSortFilterText] = useState("");
  const [renkingCategoriesdropdownShow, setRenkingCategoriesDropdownShow] =
    useState(false);
  const [blockChaindropdownShow, setBlockChainDropdownShow] = useState(false);
  const [itemDateDropdown, setItemDateDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [dropdownSale, setDropdownSale] = useState(false);
  // Event handler to toggle the selected state of the item with the given ID
  const toggleSortActive = (id) => {
    if (sortActive.includes(id)) {
      // Item is already selected, so remove it from the array
      setsortActive(sortActive.filter((item) => item !== id));
    } else {
      // Item is not selected, so add it to the array
      setsortActive([...sortActive, id]);
    }
  };

  const handleRenkingCategoriesDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".rankingCategoriesDropdown")) {
        if (renkingCategoriesdropdownShow) {
          setRenkingCategoriesDropdownShow(false);
        } else {
          setRenkingCategoriesDropdownShow(true);
        }
      } else {
        setRenkingCategoriesDropdownShow(false);
      }
    });
  };
  const handleBlockChainDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".blockchainDropdown")) {
        if (blockChaindropdownShow) {
          setBlockChainDropdownShow(false);
        } else {
          setBlockChainDropdownShow(true);
        }
      } else {
        setBlockChainDropdownShow(false);
      }
    });
  };

  const handleItemDateDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".itemDateDropdown")) {
        if (itemDateDropdown) {
          setItemDateDropdown(false);
        } else {
          setItemDateDropdown(true);
        }
      } else {
        setItemDateDropdown(false);
      }
    });
  };

  const handleCategoryDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".category-dropdown")) {
        if (categoryDropdown) {
          setCategoryDropdown(false);
        } else {
          setCategoryDropdown(true);
        }
      } else {
        setCategoryDropdown(false);
      }
    });
  };

  const handleSaleDropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".dropdown-sale")) {
        if (dropdownSale) {
          setDropdownSale(false);
        } else {
          setDropdownSale(true);
        }
      } else {
        setDropdownSale(false);
      }
    });
  };
  const handleSale2Dropdown = () => {
    window.addEventListener("click", (w) => {
      if (w.target.closest(".dropdown-sale2")) {
        if (dropdownSale) {
          setDropdownSale(false);
        } else {
          setDropdownSale(true);
        }
      } else {
        setDropdownSale(false);
      }
    });
  };

  useEffect(() => {
    dispatch(updatetrendingCategorySorText(sortFilterText));
  }, [sortFilterText, dispatch]);

  const inputData = [
    {
      id: 1,
      text: "Verified Only",
    },
    {
      id: 2,
      text: "NFSW Only",
    },
    {
      id: 3,
      text: "Show Lazy Minted",
    },
  ];

  const handleInput = (e, text) => {
    if (e.target.checked) {
      dispatch(updateTrendingCategoryItemByInput(text));
    } else {
      dispatch(updateTrendingCategoryItemByInput(""));
    }
  };

  const handleCurrencyValTo = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setCurrencyValTo(0);
    } else {
      setCurrencyValTo(value);
    }
  };
  const handleCurrencyValFrom = (e) => {
    const value = e.target.value;
    if (value < 0) {
      setCurrencyValFrom(0);
    } else {
      setCurrencyValFrom(value);
    }
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClickOutside = () => {
    setIsDropdownOpen(false);
  };
  if (dropdownFor === "recently_added") {
    return (
      <div>
        {/* dropdown */}
        <div className="dropdown relative my-1 cursor-pointer">
          <Tippy
            animation="fade"
            arrow={false}
            trigger="click"
            interactive="true"
            placement="bottom"
            className="tooltip-container"
            content={
              <div
                className="dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-500"
                aria-labelledby="categoriesSort"
              >
                <span className="font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold">
                  Rūšiuoti
                </span>
                {data.map((item) => {
                  const { id, text } = item;
                  return (
                    <button
                      key={id}
                      className="dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                      onClick={() => {
                        setsortActive(id);

                        setSortFilterText(text);
                      }}
                    >
                      {text}
                      {sortActive === id && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="fill-accent mb-[3px] h-4 w-4"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                        </svg>
                      )}
                    </button>
                  );
                })}
                {/*
                <span className="font-display text-jacarta-300 block px-5 py-2 text-sm font-semibold">
                  Options
                </span>
                {inputData.map(({ id, text }) => {
                  return (
                    <div
                      key={id}
                      className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                    >
                      <span className="flex items-center justify-between">
                        <span>{text}</span>
                        <input
                          type="checkbox"
                          name="check"
                          className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-jacarta-400 bg-jacarta-100 relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none shadow-none after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:transition-all checked:bg-none checked:after:left-3.5 checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
                          onChange={(e) => handleInput(e, text)}
                        />
                      </span>
                    </div>
                  );
                })}
                 */}
              </div>
            }
          >
            <div className="dropdown-toggle border-jacarta-100 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm">
              <span className="font-display">Top įvertinti</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-jacarta-500 h-4 w-4 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
              </svg>
            </div>
          </Tippy>
        </div>
      </div>
    );
  } else if (dropdownFor === "kalbos") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle blockchainDropdown  border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-brand "
          onClick={handleBlockChainDropdown}
        >
          <Image src={globe.src} width={16} height={16} />
          <span style={{ paddingLeft: "5px" }}>Kalbos</span>
        </button>

        <div
          className={
            blockChaindropdownShow
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              const isSelected = sortActive.includes(id);

              return (
                <li key={id} onClick={() => toggleSortActive(id)}>
                  <button
                    onClick={() => {
                      handleLanguageSort(text);
                    }}
                    className={`dropdown-item font-bold font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white`}
                  >
                    <span>{text}</span>
                    {isSelected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else if (dropdownFor === "types") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle category-dropdown  border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-brand "
          onClick={handleCategoryDropdown}
        >
          <Image width={16} height={16} src={categories.src} />

          <span style={{ paddingLeft: "5px" }}>Žymekliai</span>
        </button>

        <div
          className={
            categoryDropdown
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[300px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[300px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0"
          }
          onClick={(e) => e.stopPropagation()} // Stop the click event from propagating
        >
          <ul className="flex flex-col flex-wrap w-full">
            {data.map(({ id, text }) => {
              const isSelected = sortActive.includes(id);

              return (
                <li key={id} onClick={() => toggleSortActive(id)}>
                  <button
                    onClick={() => {
                      handleTypeSort(text);
                    }}
                    className={`dropdown-item font-bold font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white`}
                  >
                    <span>{text}</span>
                    {isSelected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else if (dropdownFor === "rankingCategories") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle rankingCategoriesDropdown dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-accent hover:bg-accent border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white dark:text-white"
          onClick={handleRenkingCategoriesDropdown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 dark:fill-jacarta-100 mr-1 h-4 w-4 transition-colors group-hover:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z"></path>
          </svg>
          <span>all Category</span>
        </button>

        <div
          className={
            renkingCategoriesdropdownShow
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0 hidden"
          }
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              return (
                <li key={id} onClick={() => setsortActive(id)}>
                  <button
                    className="dropdown-item font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
                    onClick={() => dispatch(updateRenkingData(text))}
                  >
                    <span className="text-jacarta-700 dark:text-white">
                      {text}
                    </span>
                    {sortActive === id && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else if (dropdownFor === "vertinimas") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle dropdown-sale  border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-brand "
          onClick={handleSaleDropdown}
        >
          <Image width={16} height={16} src={star.src} />

          <span style={{ paddingLeft: "5px" }}>Vertinimas</span>
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className={
            dropdownSale
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0"
          }
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              const isSelected = sortActive.includes(id);
              return (
                <li key={id} onClick={() => toggleSortActive(id)}>
                  <button
                    onClick={() => {
                      handleRatingsSort(text);
                    }}
                    className={`dropdown-item font-bold font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white`}
                  >
                    <span>{text}</span>
                    {isSelected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="dark:border-jacarta-600 border-jacarta-100 -ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t px-7 pt-4">
            <button
              type="button"
              onClick={() => {
                setDropdownSale(false);
              }}
              className="text-accent flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold transition-all "
            >
              Atšaukti
            </button>
            <button
              type="button"
              className="bg-accent flex-1 rounded-full py-2 px-6 text-center text-sm font-semibold text-white transition-all"
            >
              Pritaikyti
            </button>
          </div>
        </div>
      </div>
    );
  } else if (dropdownFor === "trukme") {
    return (
      <div className="my-1 mr-2.5 relative">
        <button
          className="group dropdown-toggle dropdown-sale2  border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-brand "
          onClick={handleSale2Dropdown}
        >
          <Image width={16} height={16} src={clock.src} />

          <span style={{ paddingLeft: "5px" }}>Trukmė</span>
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className={
            dropdownSale
              ? "dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl absolute top-full right-0"
          }
        >
          <ul className="flex flex-col flex-wrap">
            {data.map(({ id, text }) => {
              const isSelected = sortActive.includes(id);

              return (
                <li key={id} onClick={() => toggleSortActive(id)}>
                  <button
                    onClick={() => {
                      handleLengthSort(text);
                    }}
                    className={`dropdown-item font-bold font-display dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white`}
                  >
                    <span>{text}</span>
                    {isSelected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="dark:border-jacarta-600 border-jacarta-100 -ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t px-7 pt-4">
            <button
              type="button"
              onClick={() => {
                setDropdownSale(false);
              }}
              className="text-accent flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold transition-all "
            >
              Atšaukti
            </button>
            <button
              type="button"
              className="bg-accent flex-1 rounded-full py-2 px-6 text-center text-sm font-semibold text-white transition-all"
            >
              Pritaikyti
            </button>
          </div>
        </div>
      </div>
    );
  } else if (dropdownFor === "price-range") {
    return (
      <div className="my-1 mr-2.5">
        <Tippy
          animation="fade"
          arrow={false}
          trigger="click"
          interactive="true"
          placement="bottom"
          className="tooltip-container"
          visible={isDropdownOpen}
          onClickOutside={handleClickOutside}
          content={
            <div
              className={`dropdown-menu dark:bg-jacarta-800 z-10 min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl `}
              aria-labelledby="priceRangeFilter"
            >
              {/* <!-- From / To --> */}
              <div className="flex items-center space-x-3 px-5 pb-2">
                <input
                  type="number"
                  placeholder="Nuo"
                  value={currencyValFrom}
                  onChange={handleCurrencyValFrom}
                  className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                />
                <input
                  type="number"
                  placeholder="Iki"
                  value={currencyValTo}
                  onChange={handleCurrencyValTo}
                  className="text-jacarta-700 placeholder-jacarta-500 focus:ring-accent border-jacarta-100 w-full max-w-[7.5rem] rounded-lg border py-[0.6875rem] px-4 dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                />
              </div>

              <div className="dark:border-jacarta-600 border-jacarta-100 -ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t px-7 pt-4">
                <button
                  type="button"
                  className="text-accent flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold transition-all "
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Atšaukti
                </button>
                <button
                  type="button"
                  onClick={handlePriceSort}
                  className="bg-accent flex-1 rounded-full py-2 px-6 text-center text-sm font-semibold text-white transition-all"
                >
                  Pritaikyti
                </button>
              </div>
            </div>
          }
        >
          <button
            className="group dropdown-toggle  border-jacarta-100 font-display text-jacarta-700 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-brand "
            id="priceRangeFilter"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
            onClick={() => {
              setIsDropdownOpen(true);
            }}
          >
            <Image width={16} height={16} src={price.src} />

            <span style={{ paddingLeft: "5px" }}>Kaina</span>
          </button>
        </Tippy>
      </div>
    );
  } else if (dropdownFor === "last7Days-ranks") {
    return (
      <div className="dropdown relative my-1 cursor-pointer">
        <button
          className="dark:bg-jacarta-700 itemDateDropdown dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white"
          onClick={handleItemDateDropdown}
        >
          <span className="font-display">Last 7 Days</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-500 h-4 w-4 dark:fill-white"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
          </svg>
        </button>

        <div
          className={
            itemDateDropdown
              ? "dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl show absolute top-full right-0"
              : "dropdown-menu dark:bg-jacarta-800 z-10 whitespace-nowrap rounded-xl max-w-xs w-[13rem] bg-white py-4 px-2 text-left shadow-xl hidden absolute top-full right-0"
          }
        >
          {data.map(({ id, text }) => {
            return (
              <button
                key={id}
                onClick={() => {
                  setsortActive(id);
                  dispatch(updateRenkingDataByPostdate(text));
                }}
                className="dropdown-item font-display text-jacarta-700 dark:hover:bg-jacarta-600 hover:bg-jacarta-50 flex w-full items-center justify-between rounded-xl px-5 py-2 text-left text-sm transition-colors dark:text-white"
              >
                {text}
                {sortActive === id && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-accent mb-[3px] h-4 w-4"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Recently_added_dropdown;
