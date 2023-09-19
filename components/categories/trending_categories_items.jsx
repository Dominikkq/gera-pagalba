import React, { useState } from "react";

import Recently_added_dropdown from "../dropdown/recently_added_dropdown";
import Specialistai from "./specialistai";

const Trending_categories_items = () => {
  const [itemdata, setItemdata] = useState();
  const dispatch = useDispatch();
  const [filterVal, setFilterVal] = useState(0);

  const handleFilter = (category) => {
    if (category !== "all") {
    } else {
      setItemdata("");
    }
  };

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

  return (
    <>
      {/* <!-- Filter --> */}
      <div className="mb-8 flex flex-wrap items-center justify-between">
        <ul className="flex flex-wrap items-center">
          {tranding_category_filter.map(({ id, svg, text }) => {
            if (text === "all") {
              return (
                <li className="my-1 mr-2.5" key={id}>
                  <button
                    className={
                      filterVal === id
                        ? " group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white  capitalize"
                        : "   group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white   capitalize"
                    }
                    onClick={() => {
                      handleFilter(text);
                      setFilterVal(id);
                    }}
                  >
                    {text}
                  </button>
                </li>
              );
            } else {
              return (
                <li className="my-1 mr-2.5" key={id}>
                  <button
                    onClick={() => {
                      handleFilter(text);
                      setFilterVal(id);
                    }}
                  >
                    <div
                      className={
                        filterVal === id
                          ? " group bg-accent border-jacarta-100 font-display flex h-9 items-center rounded-lg border px-4 text-sm font-semibold transition-colors border-transparent text-white  capitalize"
                          : "   group hover:bg-accent border-jacarta-100 font-display text-jacarta-500 flex h-9 items-center rounded-lg border bg-white px-4 text-sm font-semibold transition-colors hover:border-transparent hover:text-white   capitalize"
                      }
                    >
                      <svg
                        className={
                          filterVal === id
                            ? "icon mr-1 h-4 w-4 transition-colors fill-white"
                            : "icon fill-jacarta-700  mr-1 h-4 w-4 transition-colors group-hover:fill-white"
                        }
                      >
                        <use xlinkHref={`/icons.svg#icon-${svg}`}></use>
                      </svg>
                      <span>{text}</span>
                    </div>
                  </button>
                </li>
              );
            }
          })}
        </ul>
        {/* dropdown */}
        <Recently_added_dropdown data={sortText} dropdownFor="recently_added" />
      </div>

      {/* <!-- Grid --> */}
      <Specialistai />
    </>
  );
};

export default Trending_categories_items;
