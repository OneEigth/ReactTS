import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, SearchProductParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  'products/fetchProductsStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Product[]>(`https://65b0cfb2d16d31d11bdd4e24.mockapi.io/products`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 4,
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });
    return data;
  },
);
