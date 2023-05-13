import Moralis from "moralis-v1";
import { UnixTime, add12HoursToTimestamp, getBlockNumber } from "./functions";
export async function getTopListings() {
  const query = new Moralis.Query("Bids");
  const pipeline = [
    {
      match: {
        $expr: {
          $gt: ["$endingAt", UnixTime()],
        },
      },
    },
    {
      sortByCount: "$listingNr",
    },
    {
      limit: 4,
    },
    {
      lookup: {
        from: "Bids",
        localField: "_id",
        foreignField: "listingNr",
        as: "bids_data",
      },
    },
    {
      lookup: {
        from: "Listings",
        localField: "_id",
        foreignField: "listingNr",
        as: "listing_data",
      },
    },
    {
      group: {
        objectId: "$_id",
        listing: { $first: "$listing_data" },
        amount: { $first: "$bids_data.amount_decimal" },
      },
    },
  ];

  const result = await query.aggregate(pipeline, { useMasterKey: true });
  return result;
}

export async function getListingsCount() {
  const query = new Moralis.Query("Listings");
  const pipeline = [
    {
      count: "total",
    },
  ];
  const result = await query.aggregate(pipeline, { useMasterKey: true });
  console.log(result[0]);
  return result[0];
}
export async function getListing(listing) {
  const query = new Moralis.Query("Listings");
  query.equalTo("listingNr_decimal", listing);
  return JSON.parse(JSON.stringify(await query.find()))[0];
}
export async function getExpired() {
  const query = new Moralis.Query("Listings");
  const pipeline = [
    {
      match: {
        endingAt_decimal: {
          $lt: new Date().valueOf(),
        },
      },
    },

    {
      limit: 10,
    },
  ];
  const result = await query.aggregate(pipeline, { useMasterKey: true });
  console.log(result[0]);
  return result[0];
}
