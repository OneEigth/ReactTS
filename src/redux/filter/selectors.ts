import { RootState } from '../../../../../Users/User/Downloads/react-pizza-v2-master/src/redux/store';

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;
