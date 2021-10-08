import axios from "axios";
import store from "@/store";

let promise = null;

export const BOOTSTRAP_URL = 'https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products';

export function boot() {
  promise = axios.get(BOOTSTRAP_URL).then(raw => {
    console.log('bootstrap: ', raw);
    return store.dispatch('product/setup', raw).then(() => raw);
  })
}

export function bootPromise() {
  return promise || boot();
}
