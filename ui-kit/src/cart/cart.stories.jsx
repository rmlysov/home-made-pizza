import React from 'react';
import { Cart } from './cart.component';

export default {
	title: 'Cart',
};

export const defaultBasket = () => (
	<div style={{ display: 'flex' }}>
		<Cart />
	</div>
);
