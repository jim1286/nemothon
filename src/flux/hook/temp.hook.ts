import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useTempSelector = () => {
  const temp = useSelector((state: RootState) => state.temp);

  return temp;
};
