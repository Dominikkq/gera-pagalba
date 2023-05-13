import { BigNumber, ethers, utils } from "ethers";
import Data from "../Data.json";
import ABI from "../ABI.json";
import { useSelector, useDispatch } from "react-redux";
import { getTrueName, getCoinPrice } from "./functions";
import { GlobalProvider_ETH } from "./functions";
export async function Bid(listingId, side, amount) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const cont = new ethers.Contract(Data.MarketplaceAddress, ABI, signer);
  let transaction = await cont.ListingBid(listingId, side, {
    value: BigNumber.from(utils.parseEther(amount.toString())),
  });
  return await transaction.wait();
}
export async function Validate(listing, selectedSide) {
  console.log("Validating: " + listing + " " + selectedSide);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const cont = new ethers.Contract(Data.MarketplaceAddress, ABI, signer);
  let transaction = await cont.validate(listing, selectedSide);
  return await transaction.wait();
}
export async function ValidatorBalance(validator) {
  const cont = new ethers.Contract(
    Data.MarketplaceAddress,
    ABI,
    GlobalProvider_ETH
  );
  return await cont.getValidatorBalance(validator);
}
