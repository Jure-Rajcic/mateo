import { defineStore } from "pinia";
import exampleService from "../services/exampleService";
import { Product } from "../models/product";

export const useExampleStore = defineStore("useExampleStore", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchData(): Promise<Array<Product>> {
      // check if we have data in store
      if (this.products.length) return this.products;

      // if not fetch data
      try {
        // preform api call
        const products = await exampleService.getProducts();
        return products;
      } catch (e) {
        //throw new error which global error handler will catch based of type of erro we can handel differently:
        // repeat request
        // tell to try again after bla bla time
        // console.error(e);
        throw new Error("Failed to fetch data");
      }
    },
  },
});
