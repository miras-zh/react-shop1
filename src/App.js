/* eslint-disable no-unused-vars */
import Card from './components/Card/Card';
/* eslint-disable jsx-a11y/alt-text */
import Header from './components/Header';
import Korzina from './components/Korzina';

const arr = [
	{
		name: 'Мужские кроссовки Nike Blazer Mid Suede',
		price: '15 000 T',
		url: '/image/1.png',
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: '14 000 T',
		url: '/image/2.png',
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '18 000 T',
		url: '/image/3.png',
	},
	{
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '20 500 T',
		url: '/image/4.png',
	},
];

function App() {
	return (
		<div className="wrapper clear">
			<Korzina />
			<Header />
			<div className="content p-40 ">
				<div className="d-flex align-center mb-40 justify-between">
					<h1>Все кроссовки</h1>
					<div className="search-block">
						<img src="/image/search.svg" alt="search" />
						<input type="text" placeholder="Поиск .." />
					</div>
				</div>
				<div className="d-flex">
					{arr.map((val) => (
						<Card
							title={val.name}
							price={val.price}
							url={val.url}
							onClick={() => {
								console.log('', val);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
