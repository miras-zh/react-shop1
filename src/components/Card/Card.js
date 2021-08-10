/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Card.module.scss";

function Card({
  id,
  title,
  price,
  url,
  onClick,
  onFavorite,
  checkFavorite = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(checkFavorite);

  const onClickPlus = () => {
    console.log("pre status", isAdded);

    isAdded ? setIsAdded(false) : setIsAdded(true);
    console.log("check status", isAdded);
    onClick({ id, title, price, url, isAdded });
  };

  const onFavioriteAdd = () => {
    console.log("favorite>", isFavorite);
    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
    onFavorite({ id, title, price, url, isFavorite });
  };

  React.useEffect(() => {}, [isAdded]);

  return (
    <div className={style.card}>
      <div className={style.cardfavorite} onClick={onFavorite}>
        <img
          className={style.favorite}
          src={isFavorite ? "/image/heart-like.svg" : "/image/heart-unlike.svg"}
          alt="unliked"
          onClick={onFavioriteAdd}
        />
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
