import { BigNumber, ethers, utils } from "ethers";
import Data from "../Data.json";
import ABI from "../ABI.json";
import { useSelector, useDispatch } from "react-redux";
import { getTrueName, getCoinPrice } from "../functions/functions";

function ListingNrGenerator() {
  return Math.floor(Math.random() * 10000000000000000 + 1);
}
var currency = "ETH";
export async function CreateListing(
  name,
  sideOne,
  sideTwo,
  validators,
  endingAt,
  category
) {
  var Amount = (
    await getCoinPrice(
      getTrueName(currency),
      parseInt(validators) * Data.Validator_Price
    )
  ).toFixed(6);
  console.log(Amount);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const cont = new ethers.Contract(Data.MarketplaceAddress, ABI, signer);
  console.log("Creating Listing: " + name);
  let transaction = await cont.createListing(
    name,
    sideOne,
    sideTwo,
    validators,
    endingAt,
    category,
    {
      value: BigNumber.from(utils.parseEther(Amount)),
    }
  );
  return await transaction.wait();
}
export async function BidListing(listingId, side, amount) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const cont = new ethers.Contract(Data.MarketplaceAddress, ABI, signer);
  let transaction = await cont.placeBid(listingId, side, {
    value: BigNumber.from(utils.parseEther(amount.toString())),
  });
  return await transaction.wait();
}
