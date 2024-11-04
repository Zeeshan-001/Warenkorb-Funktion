import './App.css';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
	const [CartIsShown, setCartIsShown] = useState(false);

	const ShowCartHandler = () => {
		setCartIsShown(true);
	};
	const HideCartHandler = () => {
		setCartIsShown(false);
	};

	return (
		<CartProvider>
			{CartIsShown && <Cart onHide={HideCartHandler} />}
			<Header onShow={ShowCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
