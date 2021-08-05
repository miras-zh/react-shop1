/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import style from './Card.module.scss';

function Card(props) {
	return (
		<div className={style.card}>
			<div className='styles.card-favorite' onClick={props.onFavorite}>
				<img src='/image/heart-unlike.svg' alt='unliked'/>
			</div>
			<img width={133} height={112} src={props.url} alt="tovar" />
			<h5>{props.title}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>{props.price}</b>
				</div>
				{/* <button className="button" onClick={btnclickPlus}> */}
				<button className="button" onClick={props.onClick}>
					<img width={11} height={11} src="/image/plus.svg" alt="Plus" />
				</button>
			</div>
		</div>
	);
}

export default Card;
