function Korzina(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-40">
          Корзина
          <img
            className="btnRemoveCart cu-p"
            src="/image/btn_cart_remove.svg"
            alt=""
            onClick={props.onClickClose}
          />
        </h2>
        <div className="item">
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/image/1.png)" }}
              className="cartItemImg"
            ></div>
            <div className="ml-15 mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>15 000 Тенге</b>
            </div>
            <img
              className="btnRemoveCart"
              src="/image/btn_cart_remove.svg"
              alt=""
            />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/image/2.png)" }}
              className="cartItemImg"
            ></div>
            <div className="ml-15 mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>20 000 Тенге</b>
            </div>
            <img
              className="btnRemoveCart"
              src="/image/btn_cart_remove.svg"
              alt=""
            />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/image/2.png)" }}
              className="cartItemImg"
            ></div>
            <div className="ml-15 mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>20 000 Тенге</b>
            </div>
            <img
              className="btnRemoveCart"
              src="/image/btn_cart_remove.svg"
              alt=""
            />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/image/2.png)" }}
              className="cartItemImg"
            ></div>
            <div className="ml-15 mr-15">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>20 000 Тенге</b>
            </div>
            <img
              className="btnRemoveCart"
              src="/image/btn_cart_remove.svg"
              alt=""
            />
          </div>
        </div>
        <div className="CartTotalBlock">
          <ul className="">
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 тенге </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 тенге</b>
            </li>
          </ul>
          <button className="cartBtnGreen">
            Оформить заказ <img src="/image/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Korzina;
