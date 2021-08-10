import Card from "../components/Card/Card";

function Favorites({ items, onFavorite }) {
  return (
    <div>
      <h2>Мои закладки</h2>
      <div className="d-flex flex-wrap">
        {items.map((val, index) => (
          <Card
            key={index}
            id={val.id}
            title={val.name}
            price={val.price}
            url={val.url}
            checkFavorite={true}
            onFavorite={onFavorite}
            {...val}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
