/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Card.module.scss";

function Card({ title, price, url, onClick, onFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    console.log("pre status", isAdded);

    isAdded ? setIsAdded(false) : setIsAdded(true);
    console.log("check status", isAdded);
    onClick({ title, price, url, isAdded });
  };

  React.useEffect(() => {}, [isAdded]);

  return (
    <div className={style.card}>
      <div className="styles.card-favorite" onClick={onFavorite}>
        <img src="/image/heart-unlike.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={url} alt="tovar" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img
          className={style.plus}
          width={11}
          height={11}
          src={isAdded ? "/image/set.svg" : "/image/plus.svg"}
          alt="Plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
