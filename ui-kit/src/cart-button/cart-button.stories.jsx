import React from 'react';
import { BasketButton } from './cart-button.component';

export default { title: 'Basket Button' };

export const defaultBasketButton = () => <BasketButton />;
export const basketButtonWithCount = () => <BasketButton count={4} />;
