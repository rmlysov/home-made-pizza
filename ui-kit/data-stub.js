import { v4 as uuidv4 } from 'uuid';
import {
	meatPizzaImageUrl,
	cheesePizzaImageUrl,
	classPizzaImageUrl,
	calzoneImageUrl,
	fruitDrinkImageUrl,
	gasDrinkImageUrl,
	stillWaterImageUrl,
} from './stub-images';

export const pizzaItems = [
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
	{
		type: 'pizza',
		id: uuidv4(),
		productName: '4 сыра',
		price: 349,
		description: {
			energy: 500,
			protein: 5,
			fat: 20,
			carb: 70,
		},
		image: cheesePizzaImageUrl,
		nutritionalValue: 'Б: 5, Ж: 20, У: 70',
	},
	{
		type: 'pizza',
		id: uuidv4(),
		productName: 'Кальцоне с грибами',
		price: 299,
		description: {
			energy: 400,
			protein: 5,
			fat: 5,
			carb: 60,
		},
		image: calzoneImageUrl,
		nutritionalValue: 'Б: 5, Ж: 5, У: 60',
	},
];

export const drinksItems = [
	{
		type: 'drink',
		id: uuidv4(),
		productName: 'Домашний морс',
		price: 99,
		description: '',
		image: fruitDrinkImageUrl,
		nutritionalValue: 'Б: 0, Ж: 1, У: 5',
	},
	{
		type: 'drink',
		id: uuidv4(),
		productName: 'Газировка',
		price: 99,
		description: '',
		image: gasDrinkImageUrl,
		nutritionalValue: 'Б: 0, Ж: 2, У: 10',
	},
	{
		type: 'drink',
		id: uuidv4(),
		productName: 'Минеральная вода',
		price: 49,
		description: '',
		image: stillWaterImageUrl,
		nutritionalValue: 'Б: 0, Ж: 0, У: 1',
	},
];

export const menuStub = [{ title: 'item1' }, { title: 'item2' }, { title: 'item3' }, { title: 'item4' }];
