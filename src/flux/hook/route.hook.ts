import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useResultListSelector = () => {
  const resultList = useSelector((state: RootState) => state.route.resultList);

  return resultList;
};
