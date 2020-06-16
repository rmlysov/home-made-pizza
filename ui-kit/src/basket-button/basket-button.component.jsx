import React, { memo } from 'react';
import { StyledBasket, StyledBasketCounter, StyledLabel } from './basket-button.styles';

const BasketButtonComponent = ({ count, onModalOpen }) => (
	<StyledBasket onClick={onModalOpen}>
		<StyledLabel>Корзина</StyledLabel>
		<StyledBasketCounter>
			<span>{count}</span>
		</StyledBasketCounter>
	</StyledBasket>
);

export const BasketButton = memo(BasketButtonComponent);
