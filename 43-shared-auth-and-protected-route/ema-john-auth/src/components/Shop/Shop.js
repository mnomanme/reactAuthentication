import React, { Fragment, useEffect, useState } from 'react';
import fakeData from '../../resources/fakeData';
import { Container } from 'react-bootstrap';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../resources/utilities/databaseManager';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Shop = () => {
	// console.log(fakeData);
	return (
		<div>
			<Container>
				<ShopData></ShopData>
			</Container>
		</div>
	);
};

// get shop data from fakedata
const ShopData = () => {
	const firstTen = fakeData.slice(50, 55);
	// console.log(firstTen);
	const [products] = useState(firstTen);

	const [cart, setCart] = useState([]);

	// load produdct data
	useEffect(() => {
		const saveCart = getDatabaseCart();
		const productKeys = Object.keys(saveCart);

		const previousCart = productKeys.map((existingKeys) => {
			const product = fakeData.find((pd) => {
				return pd.key === existingKeys;
			});
			product.quantity = saveCart[existingKeys];
			return product;
		});

		console.log(previousCart);
		setCart(previousCart);
	}, []);

	// add product handle
	const handleAddProduct = (pd) => {
		// console.log('add product', pd);
		const productToAdded = pd.key;
		const sameItemProducts = cart.find((item) => item.key === productToAdded);

		let count = 1;
		let newCart;

		if (sameItemProducts) {
			count = sameItemProducts.quantity + 1;
			sameItemProducts.quantity = count;
			const others = cart.filter((pd) => pd.key !== productToAdded);
			newCart = [...others, sameItemProducts];
		} else {
			pd.quantity = 1;
			newCart = [...cart, pd];
		}
		setCart(newCart);
		addToDatabaseCart(pd.key, count);

		/*products quantity & length*/
		// const count = sameItemProducts.length;
		// const newCart = [...cart, pd];
		// setCart(newCart);
		// const sameItemProducts = newCart.filter((item) => item.key === pd.key);
		// const count = sameItemProducts.length;
		// addToDatabaseCart(pd.key, count);
	};

	return (
		<div className="shopContainer">
			<section className="productContainer">
				<h3>Total Product: {products.length}</h3>
				{products.map((pd) => {
					const { key } = pd;
					return (
						<Fragment key={key}>
							<Product product={pd} handleAddProduct={handleAddProduct} showAddToCart={true} />;
						</Fragment>
					);
				})}
			</section>

			<section className="cartContainer">
				<Cart cart={cart}>
					<Link to="/review">
						<Button variant="outline-info" size="md">
							Review your Order
						</Button>
					</Link>
				</Cart>
			</section>
		</div>
	);
};

export default Shop;
