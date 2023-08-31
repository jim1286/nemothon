import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useResultListSelector = () => {
  const resultList = useSelector((state: RootState) => state.route.resultList);

  return resultList;
};

export const useMoneyRangeListSelector = () => {
  const moneyRange = useSelector((state: RootState) => state.route.moneyRange);

  return moneyRange;
};

export const useClickedInfoSelector = () => {
  const info = useSelector((state: RootState) => state.route.info);

  return info;
};
