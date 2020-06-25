import React, { useMemo, useState, useCallback, useReducer, memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Banner, Cart, AddressForm, Catalog, DeliverySection, Footer, Header, Modal } from 'ui-kit';
import { StyledAppContainer } from './app.styles';
import { AboutUsSection } from './about-us-section/about-us-section.component';
import { pizzaItems, drinksItems, menuItems } from './data-stub';
import { HashLink } from './hash-link/hash-link.component';

const initialState = { cart: [] };

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD': {
			const sameItem = state.cart.find((item) => item.title === action.payload.title);
			if (sameItem === undefined) {
				return {
					cart: [...state.cart, action.payload],
				};
			}
			const newCart = state.cart.map((item) => {
				if (item.title === action.payload.title) {
					return {
						...item,
						count: sameItem.count + 1,
					};
				}
				return item;
			});
			return {
				cart: newCart,
			};
		}

		case 'DELETE': {
			const removingItem = state.cart.find((item) => item.title === action.payload.title);
			const removingIndex = state.cart.findIndex((item) => item === removingItem);
			const newCart = [...state.cart];
			newCart.splice(removingIndex, 1);

			return {
				cart: newCart,
			};
		}

		case 'REMOVE': {
			const removingItem = state.cart.find((item) => item.title === action.payload.title);
			const newCart = state.cart.map((item) => {
				if (item === removingItem && item.count > 1) {
					return {
						...item,
						count: item.count - 1,
					};
				}
				return item;
			});
			return {
				cart: newCart,
			};
		}
		case 'CLEAR': {
			return { cart: [] };
		}
		default: {
			return state;
		}
	}
};

export const App = () => {
	const [cartState, dispatch] = useReducer(reducer, initialState);
	const [isOrderSent, setIsOrderSent] = useState(false);
	const handleResetIsOrderSent = () => setIsOrderSent(false);
	const handleAddToCart = (payload) => () =>
		dispatch({
			type: 'ADD',
			payload,
		});

	const handleDeleteFromCart = (payload) => () =>
		dispatch({
			type: 'DELETE',
			payload,
		});

	const handleRemoveFromCart = (payload) => () =>
		dispatch({
			type: 'REMOVE',
			payload,
		});

	const handleClearCart = () =>
		dispatch({
			type: 'CLEAR',
		});

	const handleOrderSubmit = (event) => {
		event.preventDefault();
		handleModalClose();
		handleClearCart();
		setIsOrderSent(true);
	};

	const cartCount = useMemo(() => cartState.cart.reduce((acc, elem) => acc + elem.count, 0), [cartState.cart]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleModalOpen = useCallback(() => setIsModalOpen(true), []);
	const handleModalClose = useCallback(() => setIsModalOpen(false), []);
	const renderLinkWrapper = useCallback(
		(children, anchor, idPrefix, idKey) => (
			<HashLink to={anchor} id={`${idPrefix}-menu-item`} key={idKey}>
				{children}
			</HashLink>
		),
		[]
	);
	const totalPizzasAndDrinks = useMemo(
		() =>
			cartState.cart.reduce(
				(acc, elem) => {
					const accIndex = elem.type === 'pizza' ? 0 : 1;
					acc[accIndex] += elem.count;
					return acc;
				},
				[0, 0]
			),
		[cartState]
	);

	const isError = useMemo(() => totalPizzasAndDrinks[0] > 5 || totalPizzasAndDrinks[1] > 4, [totalPizzasAndDrinks]);
	return (
		<Router>
			<StyledAppContainer>
				<Header
					menuItems={menuItems}
					cartCount={cartCount}
					onModalOpen={handleModalOpen}
					renderLinkWrapper={renderLinkWrapper}
					menuColor="#17181A"
				/>
				<Banner />
				<Catalog
					heading="Пицца"
					items={pizzaItems}
					id="pizza"
					onAddToCart={handleAddToCart}
					onDeleteFromCart={handleDeleteFromCart}
					cartState={cartState}
				/>
				<Catalog
					heading="Напитки"
					items={drinksItems}
					id="drinks"
					onAddToCart={handleAddToCart}
					onDeleteFromCart={handleDeleteFromCart}
					cartState={cartState}
				/>
				<DeliverySection id="delivery" />
				<AboutUsSection id="about-us" />
			</StyledAppContainer>
			<Footer menuItems={menuItems} renderLinkWrapper={renderLinkWrapper} menuColor="#ffffff" />
			<Modal isOpen={isModalOpen} onClose={handleModalClose}>
				<Cart
					cartState={cartState}
					onClose={handleModalClose}
					onAddToCart={handleAddToCart}
					onDeleteFromCart={handleDeleteFromCart}
					onRemoveFromCart={handleRemoveFromCart}
					onClearCart={handleClearCart}
					onResetIsOrderSent={handleResetIsOrderSent}
					isOrderSent={isOrderSent}
					isError={isError}
				>
					<AddressForm onSubmit={handleOrderSubmit} isError={isError} />
				</Cart>
			</Modal>
		</Router>
	);
};

export default memo(App);
