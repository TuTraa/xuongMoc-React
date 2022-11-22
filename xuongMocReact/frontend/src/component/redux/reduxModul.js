const initial = {
  products: [
    // {
    //     id:1,
    //     name:"Giường châu âu",
    //     price:1000,
    //     priceText:'8.999.000 VND',
    //     oldprice:1200,
    //     url:'../img/sp-1.png',
    //     title:'trắng sữa cực đep'
    // },
  ],
  userLogin: {
    id: "id",
    name: "name",
    isLogin: false,
  },
  userProduct: [
    {
      id: 0,
      product: [],
    },
  ],
  counter: 0,
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case "product":
      let cart = state.products;
      let product = action.product;
      let prod = cart.find((x) => x.id == product.id);
      if (prod) {
        prod.quantity++;
      } else {
        product.quantity = 1;
        cart.push(product);
      }
      return {
        ...state,
        products: [...cart],
      };
    case "minusQuantity":
      let cart2 = state.products;
      let product2 = action.product;
      let prod2 = cart2.find((x) => x.id == product2.id);
      if (prod2.quantity > 0) {
        prod2.quantity--;
      }
      return {
        ...state,
        products: [...cart2],
      };
    case "deleteprod":
      let newcart = state.products.filter((x) => x.id != action.id);

      return {
        ...state,
        products: [...newcart],
      };
    case "userLogin":
      return {
        ...state,
        userLogin: {
          id: action.id,
          name: action.name,
          isLogin: !state.userLogin.isLogin,
        },
      };
    case "userProduct":
      let haved = state.userProduct.find((x) => x.id == action.id);
      if (haved) {
        for (let i = 0; i < action.products.length; i++) {
          let haveProduct = true;
          for (let j = 0; j < haved.product.length; j++) {
            if (action.products[i].id == haved.product[j].id) {
              haved.product[j].quantity += action.products[i].quantity;
              haveProduct = false;
              continue;
            }
          }
          if (haveProduct) {
            haved.product.push(action.products[i]);
          }
        }
      } else {
        state.userProduct.push({
          id: action.id,
          product: [...action.products],
        });
      }
      return {
        ...state,
        userProduct: [...state.userProduct],
        products: [],
      };

    default:
      console.log("defalt");
      return state;
  }
};
export const updateProducts = (obj) => {
  return {
    type: "product",
    product: obj,
  };
};
export const updateProductsMinus = (obj) => {
  return {
    type: "minusQuantity",
    product: obj,
  };
};
export const deleteProd = (id) => {
  return {
    type: "deleteprod",
    id: id,
  };
};
export const userLoginFn = (id, name) => {
  console.log(id, name);
  return {
    type: "userLogin",
    id: id,
    name: name,
  };
};
export const userProductFn = (id, obj) => {
  alert("Đặt hàng thành công . Các sản phẩm đã mua có ở trong profile");
  return {
    type: "userProduct",
    id: id,
    products: obj,
  };
};
