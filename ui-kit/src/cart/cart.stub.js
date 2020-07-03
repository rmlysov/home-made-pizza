import { v4 as uuidv4 } from 'uuid';
import { classPizzaImageUrl, meatPizzaImageUrl } from './stub-images/images';

export const cartStub = {
	cart: [
		{
			id: uuidv4(),
			type: 'pizza',
			productName: 'Мясная',
			price: 349,
			description: {
				energy: 550,
				protein: 10,
				fat: 10,
				carb: 80,
			},
			image: meatPizzaImageUrl,
			nutritionalValue: 'Б: 10, Ж: 10, У: 80',
		},
		{
			type: 'pizza',
			id: uuidv4(),
			productName: 'Фирменная',
			price: 399,
			description: {
				energy: 600,
				protein: 15,
				fat: 10,
				carb: 90,
			},
			image: classPizzaImageUrl,
			nutritionalValue: 'Б: 15, Ж: 10, У: 90',
		},
	],
};
