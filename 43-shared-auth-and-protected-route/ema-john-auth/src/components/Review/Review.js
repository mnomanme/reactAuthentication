import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../resources/fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../resources/utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from '../../resources/images/giphy.gif';

const Review = () => {
	const [reviewCart, setReviewCart] = useState([]);

	const [orderPlaced, setOrderPlaced] = useState(false);

	const history = useHistory();

	// place order button handle
	const handleProceedCheckout = () => {
		history.push('/shipment');
	};

	// remove product review item
	const handleRemoveProduct = (productKey) => {
		// console.log('review removed', productKey);
		const newCart = reviewCart.filter((pd) => {
			return pd.key !== productKey;
		});
		setReviewCart(newCart);
		removeFromDatabaseCart(productKey);
	};

	useEffect(() => {
		// cart
		const storeCart = getDatabaseCart();
		const productKeys = Object.keys(storeCart);
		// const productsCount = productKeys.map((pdKey) => storeCart[pdKey]);
		const productsCount = productKeys.map((pdKey) => {
			const products = fakeData.find((data) => data.key === pdKey);
			products.quantity = storeCart[pdKey];

			return products;
		});
		setReviewCart(productsCount);
		// console.log(productsCount);
	}, []);

	// customer placeorder done happy image
	let customerServiceDone;

	if (orderPlaced) {
		customerServiceDone = <img src={happyImage} alt="Order is being Placed" />;
	}

	return (
		<Container className="d-flex">
			<section className="productContainer">
				<h2>Order Items: {reviewCart.length}</h2>
				{reviewCart.map((pd) => {
					const { key } = pd;
					return <ReviewItems key={key} reviewProduct={pd} handleRemoveProduct={handleRemoveProduct} />;
				})}
				{/* order placed done */}
				{customerServiceDone}
			</section>
			<section className="cartContainer">
				<Cart cart={reviewCart}>
					<Link to="/shipment">
						<Button onClick={handleProceedCheckout} variant="outline-info" size="md">
							Proceed Checkout
						</Button>
					</Link>
				</Cart>
			</section>
		</Container>
	);
};

export default Review;
