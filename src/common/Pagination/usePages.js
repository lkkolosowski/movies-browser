import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { goToPage } from "../../features/moviesListSlice";
import { useReplaceQueryParameter } from "../../features/queryParameters";
import { pageQueryParamName } from "../../features/queryParametersName";

export const usePages = (page) => {
  const dispatch = useDispatch();
  const replaceQueryParameter = useReplaceQueryParameter();

  useEffect(() => {
    if (page === "") {
      return;
    }

    replaceQueryParameter([
      {
        key: pageQueryParamName,
        value: page,
      },
    ]);
    dispatch(goToPage(page));
  }, [dispatch, page, replaceQueryParameter]);
};
