import Link from "next/link";
import React, { useState } from "react";
import News_item from "../../components/blog/news_item";
import { news_data } from "../../data/news_data";
import Meta from "../../components/Meta";
import { useEffect } from "react";

import Moralis from "moralis-v1";
import HeadLine from "../../components/headLine";
import { ConnectedUser, truncate } from "../../components/functions/functions";
import { getExpired } from "../../components/functions/moralis_functions";
import { useSelector, useDispatch } from "react-redux";
import { validationModalShow } from "../../redux/counterSlice";

import { ValidatorBalance } from "../../components/functions/validator_functions";
import { ethers } from "ethers";
const Blog = () => {
  const [loadMoreBtn, setLoadMoreBtn] = useState(true);
  const [data, setdata] = useState(news_data.slice(0, 6));
  const dispatch = useDispatch();
  const [Listings, setListings] = useState([]);
  const [_ValidatorBalance, setValidatorBalance] = useState(0);
  const [ValidatorStatus, setValidatorStatus] = useState(false);
  const handleLoadMore = () => {
    setdata(news_data);
    setLoadMoreBtn(false);
  };

  async function GetListings() {
    var Listings = await Moralis.Cloud.run("ExpiredListings");

    var ListingsList = [];
    for (var i = 0; i < Listings.length; i++) {
      ListingsList.push({
        image: "none",
        id: Listings[i].listingNr,
        category: "art",
        title: Listings[i].question,

        verified: true,
        addDate: Listings[i].block,
        sortPrice: 8.49,
        sideOne: Listings[i].sideOne,
        sideTwo: Listings[i].sideTwo,
        endsAt: Listings[i].endingAt,
      });
    }
    setListings(ListingsList.slice(0, 8));
  }
  async function GetValidatorBalance() {
    try {
      setValidatorBalance(
        ethers.utils.formatEther(await ValidatorBalance(await ConnectedUser()))
      );
      setValidatorStatus(true);
    } catch (e) {
      console.log("Not Validator");
    }
  }
  useEffect(() => {
    GetListings();
    GetValidatorBalance();
    //getExpired();
  }, []);

  return (
    <section className="py-24">
      <div className="container">
        {ValidatorStatus ? (
          <>
            <HeadLine
              image="https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/26a1.png"
              text="Validator Console"
              classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white"
            />
            <p className="mb-8 text-right font-display text-3xl text-jacarta-700 dark:text-white">
              Balance: {_ValidatorBalance}
            </p>
            <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
              {Listings.map((item) => {
                const { id, image, title, payout, bidCount, sideOne, sideTwo } =
                  item;
                const itemLink = image
                  .split("/")
                  .slice(-1)
                  .toString()
                  .replace(".jpg", "")
                  .replace(".gif", "");
                return (
                  <article key={id}>
                    <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                      <div className="flex items-center justify-between">
                        <Link href={`/item/${itemLink}`}>
                          <a>
                            <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                              {title}
                            </span>
                            <br></br>
                            <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                              +{payout}
                            </span>
                          </a>
                        </Link>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <button
                          className="text-accent font-display text-sm font-semibold border-solid border-2 border-indigo-60 p-3 rounded-md w-1/2 mr-1 "
                          onClick={() =>
                            dispatch(
                              validationModalShow({
                                id: id,
                                title: title,
                                bidCount: bidCount,
                                sideOne: sideOne,
                                sideTwo: sideTwo,
                                selectedSide: 1,
                              })
                            )
                          }
                        >
                          <div className="centras">
                            <div className="text">{truncate(sideOne, 12)}</div>
                            <div className="text-tooltip">{sideOne}</div>
                          </div>
                        </button>
                        <button
                          className="text-accent font-display text-sm font-semibold border-solid border-2 border-indigo-60 p-3 rounded-md w-1/2 "
                          onClick={() =>
                            dispatch(
                              validationModalShow({
                                id: id,
                                title: title,
                                sideOne: sideOne,
                                sideTwo: sideTwo,
                                selectedSide: 2,
                              })
                            )
                          }
                        >
                          <div className="centras">
                            <div className="text">{truncate(sideTwo, 12)}</div>
                            <div className="text-tooltip">{sideTwo}</div>
                          </div>
                        </button>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <button
                          className="text-accent font-display text-sm font-semibold"
                          onClick={() => dispatch(createModalShow())}
                        >
                          Buy now
                        </button>
                        <Link href={`/item/${itemLink}`}>
                          <a className="group flex items-center">
                            <svg className="icon icon-history group-hover:fill-accent dark:fill-jacarta-200 fill-jacarta-500 mr-1 mb-[3px] h-4 w-4">
                              <use xlinkHref="/icons.svg#icon-history"></use>
                            </svg>
                            <span className="group-hover:text-accent font-display dark:text-jacarta-200 text-sm font-semibold">
                              View History
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        ) : (
          <HeadLine
            text="Not a validator"
            classes="mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white"
          />
        )}
      </div>
    </section>
  );
};

export default Blog;
