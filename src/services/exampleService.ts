import axios from 'axios';
import { Product } from "../models/product";


// Define the base URL for the API (we can mock if needed)
const baseURL = "http://localhost:5173/mock/";

const apiClient = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout after 10,000 ms
  responseType: 'json', // default
  responseEncoding: 'utf8', // default
});

export default {
  async getProducts() : Promise<Array<Product>> {
    // Make a GET request to the endpoint
    const response = await apiClient.get('products.json');

    // Check if the response is successful and return the data
    if (response.status === 200) return response.data;
    else throw new Error("Failed to fetch products");
  },

  // Some other methods involving products
};
