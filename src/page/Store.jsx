import Card from "../components/Card/Card";

function Store({
  items,
  searchValue,
  setSearchValue,
  onChangeInput,
  onFavoriteItem,
  onAddCart,
}) {
  return (
    <div>
      <div className="d-flex align-center mb-40 justify-between">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
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
          .filter((itm) =>
            itm.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((val, index) => (
            <Card
              key={index}
              id={val.id}
              title={val.name}
              price={val.price}
              url={val.url}
              onClick={(obj) => onAddCart(obj)}
              onFavorite={(obj) => {
                onFavoriteItem(obj);
              }}
              {...val}
            />
          ))}
      </div>
    </div>
  );
}

export default Store;
