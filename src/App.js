/* eslint-disable no-unused-vars */
import React from "react";
import Card from "./components/Card/Card";
/* eslint-disable jsx-a11y/alt-text */
import Header from "./components/Header";
import Korzina from "./components/Korzina";

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
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://610ce13a66dd8f0017b76f02.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setItems(res);
      });
  }, []);

  const onAddCart = (obj) => {
    console.log("isADDED", obj.isAdded);
    !obj.isAdded
      ? setCartItems((prev) => [...prev, obj])
      : console.log("remove");
  };

  const onChangeInput = (event) => {
    console.log("input", event.target.value);
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
        />
      ) : null}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <div className="content p-40 ">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block">
            <img src="/image/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => {
                  setSearchValue("");
                }}
                className="clear cu-p"
                src="/image/btn_cart_remove.svg"
                alt="clear"
              />
            )}
            <input
              type="text"
              placeholder="Поиск .."
              onChange={onChangeInput}
              value={searchValue}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((itm) => itm.name.includes(searchValue))
            .map((val, index) => (
              <Card
                key={index}
                title={val.name}
                price={val.price}
                url={val.url}
                onClick={(obj) => onAddCart(obj)}
                onFavorite={() => {
                  console.log("favorite click");
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
