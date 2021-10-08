import axios from "axios";

export function getProducts({ commit }) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";

    axios.get(url).then(response => {
        commit("setProducts", response.data);
        // console.log('products: ', response.data);
    }).catch(err => {
        console.log(err);
    });
}

export function productDetails({ commit }, id) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";

    axios.get(url, { params: {id: id} }).then(response => {
        commit("setProduct", response.data[0]);
    }).catch(err => {
        console.log(err);
    });
}

export function addCart({ commit, getters }, payload) {
    let cart = getters.cart;
    let data = payload.product;
    data["quantity"] = payload.quantity;
    cart.push(data);
    commit("setCart", cart);
}

export function addProduct({ commit, getters }, payload) {
    let products = getters.products;
    products.push(payload.product);
    commit("setProducts", products);
}

export function removeCart({ commit, getters }, id) {
    let cart = [];
    let cartLength = getters.cart.length;
    if (id) {
        for (let i = 0; i < cartLength; i++) {
            const element = getters.cart[i];
            if (element.id !== id) {
                cart.push(element);
            }
        }
    }

    commit("setCart", cart);
}

export function setup({ commit }, raw) {
    commit('setProducts', raw);
}


