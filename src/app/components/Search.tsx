import React, { useMemo } from "react";
import { GlobalContext, useGlobalReducer } from "../context/globalContext";
import Home from "./Home";
import Transaction from "./Transaction";
import Wallet from "./Wallet";
import Block from "./Block";

export const allPages = {
  home: "home",
  transaction: "transaction",
  wallet: "wallet",
  block: "block",
};

export default function Search() {
  return (
    <div className="mt-20">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-4xl text-center">
        Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.
      </h1>
      <div className="w-[500px] m-auto mt-8">
        <SearchInput />
      </div>
    </div>
  );
}

function SearchInput() {
  const globalState = useGlobalReducer();
  const steps = useMemo(() => {
    switch (globalState.state.steps) {
      case allPages.home:
        return <Home />;
      case allPages.transaction:
        return <Transaction />;
      case allPages.wallet:
        return <Wallet />;
      case allPages.block:
        return <Block />;
      default:
        return <Home />;
    }
  }, [globalState.state.steps]);

  return (
    <div>
      <form>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
