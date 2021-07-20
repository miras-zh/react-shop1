/* eslint-disable jsx-a11y/alt-text */
function App() {
	return (
		<div className="wrapper clear">
			<div className="overlay">
				<div className="drawer">
					<h2>Корзина</h2>
					<div className="item">
						<div className="cartItem d-flex align-center">
							<div
								style={{ backgroundImage: 'url(/image/1.png)' }}
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
								style={{ backgroundImage: 'url(/image/2.png)' }}
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
					<ul className="CartTotal">
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
				</div>
			</div>
			<header className="d-flex justify-between align-center">
				<div className="d-flex align-center">
					<img width={40} height={40} src="/image/logo.png" />
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">best shop of sneakeres</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img width={40} height={40} src="/image/cart.png" />
						<span>1200 kz</span>
					</li>
					<li className="mr-30">
						<img width={40} height={40} src="/image/izbran.png" />
					</li>
					<li>
						<img width={40} height={40} src="/image/user.png" />
					</li>
				</ul>
			</header>
			<div className="content p-40 ">
				<div className="d-flex align-center mb-40 justify-between">
					<h1>Все кроссовки</h1>
					<div className="search-block">
						<img src="/image/search.svg" alt="search" />
						<input type="text" placeholder="Поиск .." />
					</div>
				</div>
				<div className="d-flex">
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
					<div className="card">
						<div className="card-favorite">
							<img src="/image/heart-unlike.svg" alt="unlike" />
						</div>
						<img width={133} height={112} src="/image/2.png" alt="tovar" />
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
					<div className="card">
						<img width={133} height={112} src="/image/3.png" alt="tovar" />
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
					<div className="card">
						<img width={133} height={112} src="/image/4.png" alt="tovar" />
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
				</div>
			</div>
		</div>
	);
}

export default App;
