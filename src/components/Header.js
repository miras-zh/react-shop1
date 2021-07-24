/* eslint-disable jsx-a11y/alt-text */
function Header() {
	return (
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
	);
}

export default Header;
