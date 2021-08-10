/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import Card from "./components/Card/Card";
/* eslint-disable jsx-a11y/alt-text */
import Header from "./components/Header";
import Korzina from "./components/Korzina";
import Store from "./page/Store";
import Favorites from "./page/Favorites";
import { Route, Link } from "react-router-dom";

const arr = [];
/*
{
    name: "Мужские кроссовки Nike Blazer Mid Suede",
    price: "15 000 T",
    url: "/image/1.png",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "14 000 T",
    url: "/image/2.png",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "18 000 T",
    url: "/image/3.png",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: "20 500 T",
    url: "/image/4.png",
  },
*/
function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItems, setFavoriteItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    // fetch("https://610ce13a66dd8f0017b76f02.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setItems(res);
    //   });

    axios
      .get("https://610ce13a66dd8f0017b76f02.mockapi.io/items")
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });

    axios
      .get("https://610ce13a66dd8f0017b76f02.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    //favorite
    axios
      .get("https://610ce13a66dd8f0017b76f02.mockapi.io/favorite")
      .then((res) => {
        setFavoriteItems(res.data);
        console.log("favorite items pre>", res.data);
      });
  }, []);

  const onAddCart = (obj) => {
    axios.post("https://610ce13a66dd8f0017b76f02.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveToCart = (id) => {
    console.log("id>", id);
    axios.delete(`https://610ce13a66dd8f0017b76f02.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onFavoriteCheck = async (obj) => {
    console.log("click favorite+:", obj);
    if (
      // eslint-disable-next-line eqeqeq
      favoriteItems.find((item) => item.id == obj.id)
    ) {
      axios.delete(
        `https://610ce13a66dd8f0017b76f02.mockapi.io/favorite/${obj.id}`
      );
      setFavoriteItems((prev) =>
        prev.filter((itm) => {
          itm.id !== obj.id;
        })
      );
    } else {
      const { data } = await axios.post(
        "https://610ce13a66dd8f0017b76f02.mockapi.io/favorite",
        obj
      );
      setFavoriteItems((prev) => [...prev, data]);
    }
  };

  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Korzina
          items={cartItems}
          onClickClose={() => {
            setCartOpened(false);
          }}
          onRemove={onRemoveToCart}
        />
      ) : null}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <div className="content p-40 ">
        <Route path="/" exact>
          <Store
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeInput={onChangeInput}
            onFavoriteItem={onFavoriteCheck}
            onAddCart={onAddCart}
          ></Store>
        </Route>
        <Route path="/favorite" exact>
          <Favorites
            items={favoriteItems}
            onFavorite={onFavoriteCheck}
          ></Favorites>
        </Route>
      </div>
    </div>
  );
}

export default App;
