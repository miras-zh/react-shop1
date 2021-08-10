/* eslint-disable jsx-a11y/alt-text */
function Korzina({ onClickClose, items = [], onRemove }) {
  // eslint-disable-next-line no-unused-vars
  var summa = 0;
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-40">
          Корзина
          <img
            className="btnRemoveCart cu-p"
            src="/image/btn_cart_remove.svg"
            alt=""
            onClick={onClickClose}
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="item">
              {items.map((itm) => (
                <div className="cartItem d-flex align-center">
                  <div
                    style={{ backgroundImage: `url(${itm.url})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="ml-15 mr-15">
                    <p className="mb-5">{itm.title}</p>
                    <b>{itm.price}</b>
                  </div>
                  <img
                    className="btnRemoveCart"
                    src="/image/btn_cart_remove.svg"
                    alt=""
                    onClick={() => onRemove(itm.id)}
                  />
                </div>
              ))}
            </div>
            <div className="CartTotalBlock">
              <ul className="">
                <li className="d-flex">
                  <span>Итого: </span>
                  <div></div>
                  <b>{summa}</b>
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
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" src="/image/empty-cart.png" />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте товар для выполнения заказа</p>
            <button className="greenButton">
              <img src="/image/arrow.svg" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Korzina;
