import React, { memo, useMemo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Heading } from '../heading/heading.component';
import {
	StyledBasketWrapper,
	StyledBasketList,
	StyledBasketItem,
	StyledControlsWrapper,
	StyledBasketItemTitle,
	StyledBasketIncreaseButton,
	StyledBasketDecreaseButton,
	StyledBasketItemPrice,
	StyledDeleteButton,
	StyledBasketCheck,
	StyledBasketError,
	StyledBasketEmptyMessage,
} from './basket.styles';
import { basketStub } from './basket.stub';

const BasketComponent = ({
	basketState = basketStub,
	onAddToBasket = () => null,
	onDeleteFromBasket = () => null,
	onRemoveFromBasket = () => null,
	children,
	onResetIsOrderSent,
	isOrderSent,
}) => {
	const basketCheck = useMemo(() => basketState.basket.reduce((acc, elem) => acc + elem.price * elem.count, 0), [
		basketState,
	]);
	const totalPizzasAndDrinks = useMemo(
		() =>
			basketState.basket.reduce(
				(acc, elem) => {
					const accIndex = elem.type === 'pizza' ? 0 : 1;
					acc[accIndex] += elem.count;
					return acc;
				},
				[0, 0]
			),
		[basketState]
	);
	useEffect(() => {
		return () => {
			onResetIsOrderSent();
		};
	});

	return (
		<StyledBasketWrapper>
			<Heading>Корзина</Heading>
			{basketState.basket.length > 0 ? (
				<>
					<StyledBasketList>
						{basketState.basket.map((item) => (
							<StyledBasketItem key={uuidv4()}>
								<StyledBasketItemTitle>{item.title}</StyledBasketItemTitle>
								<StyledControlsWrapper>
									<StyledBasketDecreaseButton onClick={onRemoveFromBasket(item)} />
									{item.count}
									<StyledBasketIncreaseButton onClick={onAddToBasket(item)} />
								</StyledControlsWrapper>
								<StyledBasketItemPrice>{`${item.price} ₽`}</StyledBasketItemPrice>
								<StyledDeleteButton onClick={onDeleteFromBasket(item)} />
							</StyledBasketItem>
						))}
					</StyledBasketList>
					{(totalPizzasAndDrinks[0] > 5 || totalPizzasAndDrinks[1] > 4) && (
						<StyledBasketError>
							К сожалению, за один раз мы не сможем доставить больше 5 пицц и больше 4 напитков
						</StyledBasketError>
					)}
					<StyledBasketCheck>
						{'Сумма заказа: '}
						<b>{`${basketCheck} ₽`}</b>
					</StyledBasketCheck>
					{children}
				</>
			) : isOrderSent ? (
				<StyledBasketEmptyMessage>Заказ отправлен, спасибо!</StyledBasketEmptyMessage>
			) : (
				<StyledBasketEmptyMessage>Корзина пуста</StyledBasketEmptyMessage>
			)}
		</StyledBasketWrapper>
	);
};

export const Basket = memo(BasketComponent);
