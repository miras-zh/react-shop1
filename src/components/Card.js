function Card() {
	return (
		<div className="card">
			<img width={133} height={112} src="/image/1.png" alt="tovar" />
			<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>15 000 Тенге</b>
				</div>
				<button className="button">
					<img width={11} height={11} src="/image/plus.svg" alt="Plus" />
				</button>
			</div>
		</div>
	);
}

export default Card;
