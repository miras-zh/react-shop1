/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Card.module.scss";

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    isAdded ? setIsAdded(false) : setIsAdded(true);
  };

  React.useEffect(() => {
    console.log("change");
  }, [isAdded]);

  return (
    <div className={style.card}>
      <div className="styles.card-favorite" onClick={props.onFavorite}>
        <img src="/image/heart-unlike.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.url} alt="tovar" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <img
          className={style.plus}
          width={11}
          height={11}
          src={!isAdded ? "/image/plus.svg" : "/image/set.svg"}
          alt="Plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
