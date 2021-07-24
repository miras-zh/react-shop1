import Card from './components/Card';
/* eslint-disable jsx-a11y/alt-text */
import Header from './components/Header';
import Korzina from './components/Korzina';

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
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
