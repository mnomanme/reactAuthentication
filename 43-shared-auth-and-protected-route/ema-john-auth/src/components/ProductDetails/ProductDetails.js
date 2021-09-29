import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../resources/fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
	const { productKey } = useParams();
	const product = fakeData.find((pd) => pd.key === productKey);
	// console.log(product);

	return (
		<Container>
			<h2>Your Product Details</h2>
			<Product showAddToCart={false} product={product} />
		</Container>
	);
};

export default ProductDetails;
