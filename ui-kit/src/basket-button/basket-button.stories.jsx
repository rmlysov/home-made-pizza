import React from 'react';
import { BasketButton } from './basket-button.component';

export default { title: 'Basket Button' };

export const defaultBasketButton = () => <BasketButton />;
export const basketButtonWithCount = () => <BasketButton count={4} />;
