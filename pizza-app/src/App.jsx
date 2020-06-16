import React, { useMemo, useState, useCallback, useReducer, memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Banner, Basket, AddressForm, Catalog, DeliverySection, Footer, Header, Modal } from 'ui-kit';
import { StyledAppContainer } from './app.styles';
import { AboutUsSection } from './about-us-section/about-us-section.component';
import { pizzaItems, drinksItems, menuItems } from './data-stub';
import { HashLink } from './hash-link/hash-link.component';

const initialState = { basket: [] };

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD': {
			const sameItem = state.basket.find((item) => item.title === action.payload.title);
			if (sameItem === undefined) {
				return {
					basket: [...state.basket, action.payload],
				};
			}
			const newBasket = state.basket.map((item) => {
				if (item.title === action.payload.title) {
					return {
						...item,
						count: sameItem.count + 1,
					};
				}
				return item;
			});
			return {
				basket: newBasket,
			};
		}

		case 'DELETE': {
			const removingItem = state.basket.find((item) => item.title === action.payload.title);
			const removingIndex = state.basket.findIndex((item) => item === removingItem);
			const newBasket = [...state.basket];
			newBasket.splice(removingIndex, 1);

			return {
				basket: newBasket,
			};
		}

		case 'REMOVE': {
			const removingItem = state.basket.find((item) => item.title === action.payload.title);
			const newBasket = state.basket.map((item) => {
				if (item === removingItem && item.count > 1) {
					return {
						...item,
						count: item.count - 1,
					};
				}
				return item;
			});
			return {
				basket: newBasket,
			};
		}
		case 'CLEAR': {
			return { basket: [] };
		}
		default: {
			return state;
		}
	}
};

function App() {
	const [basketState, dispatch] = useReducer(reducer, initialState);
	const [isOrderSent, setIsOrderSent] = useState(false);
	const handleResetIsOrderSent = () => setIsOrderSent(false);
	const handleAddToBasket = (payload) => () =>
		dispatch({
			type: 'ADD',
			payload,
		});

	const handleDeleteFromBasket = (payload) => () =>
		dispatch({
			type: 'DELETE',
			payload,
		});

	const handleRemoveFromBasket = (payload) => () =>
		dispatch({
			type: 'REMOVE',
			payload,
		});

	const handleClearBasket = () =>
		dispatch({
			type: 'CLEAR',
		});

	const handleOrderSubmit = (event) => {
		event.preventDefault();
		handleModalClose();
		handleClearBasket();
		setIsOrderSent(true);
	};

	const basketCount = useMemo(() => basketState.basket.reduce((acc, elem) => acc + elem.count, 0), [
		basketState.basket,
	]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleModalOpen = useCallback(() => setIsModalOpen(true), []);
	const handleModalClose = useCallback(() => setIsModalOpen(false), []);
	const renderLinkWrapper = useCallback(
		(children, anchor, color) => (
			<HashLink to={anchor} color={color}>
				{children}
			</HashLink>
		),
		[]
	);
	return (
		<Router>
			<StyledAppContainer>
				<Header
					menuItems={menuItems}
					basketCount={basketCount}
					onModalOpen={handleModalOpen}
					renderLinkWrapper={renderLinkWrapper}
					menuColor="#17181A"
				/>
				<Banner />
				<Catalog
					heading="Пицца"
					items={pizzaItems}
					id="pizza"
					onAddToBasket={handleAddToBasket}
					onDeleteFromBasket={handleDeleteFromBasket}
					basketState={basketState}
				/>
				<Catalog
					heading="Напитки"
					items={drinksItems}
					id="drinks"
					onAddToBasket={handleAddToBasket}
					onDeleteFromBasket={handleDeleteFromBasket}
					basketState={basketState}
				/>
				<DeliverySection id="delivery" />
				<AboutUsSection id="about-us" />
			</StyledAppContainer>
			<Footer menuItems={menuItems} renderLinkWrapper={renderLinkWrapper} menuColor="#ffffff" />
			<Modal isOpen={isModalOpen} onClose={handleModalClose}>
				<Basket
					basketState={basketState}
					onClose={handleModalClose}
					onAddToBasket={handleAddToBasket}
					onDeleteFromBasket={handleDeleteFromBasket}
					onRemoveFromBasket={handleRemoveFromBasket}
					onClearBasket={handleClearBasket}
					onResetIsOrderSent={handleResetIsOrderSent}
					isOrderSent={isOrderSent}
				>
					<AddressForm onSubmit={handleOrderSubmit} />
				</Basket>
			</Modal>
		</Router>
	);
}

export default memo(App);
