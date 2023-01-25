import { Route, Routes } from 'react-router-dom';
import CartPage from '../../pages/CartPage';
import CategoriesPages from '../../pages/CategoriesPages';
import HomePage from '../../pages/HomePage';
import ProductDescrPage from '../../pages/ProductDescrPage';
import ProductsPage from '../../pages/ProductsPage';
import Layout from '../Layout';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="categories" element={<CategoriesPages />} />
					<Route path="cart" element={<CartPage />} />
					<Route path=":category" element={<ProductsPage />} />
					<Route path="/product/:id" element={<ProductDescrPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
