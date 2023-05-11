//import { useState } from "react";
import { useLocation } from "react-router-dom";
//import { toMovie, toPeople } from "../../../routes";
import { Input } from "../styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../features/queryParameters";
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../../../features/queryParametersName";

const SearchEngine = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const query = useQueryParameter(searchQueryParamName);
  const location = useLocation();

  const inputChange = ({ target }) => {
    replaceQueryParameter([
      {
        key: searchQueryParamName,
        value: target.value.trim() !== "" ? target.value : undefined,
      },
      { key: pageQueryParamName, value: 1 },
    ]);
  };

  return (
    <Input
      value={query || ""}
      onChange={inputChange}
      placeholder={`${
        location.pathname.includes("movie")
          ? "Search for movies..."
          : "Search for people..."
      }`}
    />
  );
};

export default SearchEngine;
