/* eslint-disable jsx-a11y/alt-text */
function App() {
	return (
		<div className="wrapper">
			<header className="d-flex justify-between">
				<div className="d-flex align-center">
					<img width={40} height={40} src="/image/logo.png" />
					<div className="headerInfo">
						<h3>React Sneakers</h3>
						<p>best shop of sneakeres</p>
					</div>
				</div>
				<ul className="headerRight">
					<li>
						<img width={40} height={40} src="/image/cart.png" />
						<span>1200 kz</span>
					</li>
					<li>
						<img width={40} height={40} src="/image/izbran.png" />
					</li>
					<li>
						<img width={40} height={40} src="/image/user.png" />
					</li>
				</ul>
			</header>
			<div className="content">
				<h1>All Sneakers</h1>
			</div>
		</div>
	);
}

export default App;
