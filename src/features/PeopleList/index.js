import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  goToPage,
  selectPeople,
  selectPage,
  selectStatus,
  selectTotalPages,
  selectTotalResults,
  setQuery,
} from "../peopleListSlice";
import { MainWrapper } from "../../common/MainWrapper";
import { Pagination } from "../../common/Pagination";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
import { NoResults } from "../../common/NoResults";
import { Title } from "../../common/Title";
import { List, Item } from "./styled";
import { useQueryParameter } from "../queryParameters";
import { PersonListTile } from "../../common/PersonTile";
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../queryParametersName";

const PeopleList = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const popularPeople = useSelector(selectPeople);
  const pageNumber = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);

  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(pageQueryParamName);

  useEffect(() => {
    dispatch(setQuery(query
      ? { query: query }
      : { query: "" }));
    dispatch(goToPage(page
      ? { page: page }
      : { page: 1 }));
  }, [query, page, dispatch]);

  return (
    status === "loading" ?
    <Loader /> :
    status === "error" ?
    <Error /> :
    <>
      {pageNumber > totalPages ?
      <Error /> : totalResults === 0 ?
      <NoResults /> :
      <MainWrapper
        content={
          <>
            <Title
              title={
                query
                  ? `Search results for "${query}" (${totalResults})`
                  : `Popular People`
              }
            ></Title>
            <List>
              {popularPeople.map((person) => (
                <Item key={person.id}>
                  <PersonListTile
                    id={person.id}
                    poster={person.profile_path}
                    name={person.name}
                  />
                </Item>
              ))}
            </List>
            <Pagination pageNumber={pageNumber} totalPages={totalPages} />
          </>
        }
      />
      }
    </>
  );
};

export default PeopleList;
