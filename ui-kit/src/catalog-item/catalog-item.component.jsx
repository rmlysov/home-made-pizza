import React, { memo } from 'react';
import {
	StyledCatalogItem,
	StyledCatalogItemImage,
	StyledCatalogInfoBlock,
	StyledCatalogItemDescriptionRow,
	StyledCatalogItemTitle,
	StyledCatalogItemInfo,
	StyledCatalogItemPrice,
	StyledCatalogItemCartButton,
	StyledImageWrapper,
	StyledCatalogInfoRow,
} from './catalog-item.styles';

const cutString = (value, searchingLetter) => {
	if (value === undefined) {
		return undefined;
	}
	const startIndex = value.indexOf(searchingLetter);
	const cutValueFromTheBeginning = value.substring(startIndex + 3, value.length);
	const indexOfComma = cutValueFromTheBeginning.indexOf(',');
	const result = cutValueFromTheBeginning.substring(
		0,
		indexOfComma > 0 ? indexOfComma : cutValueFromTheBeginning.length
	);
	return result;
};

const CatalogItemComponent = ({ item, index, onAddToCart = () => null, accordingItemInState }) => {
	const protein = cutString(item.nutritionalValue, 'Б');
	const fat = cutString(item.nutritionalValue, 'Ж');
	const carb = cutString(item.nutritionalValue, 'У');

	return (
		<StyledCatalogItem id="product-item">
			<StyledImageWrapper>
				<StyledCatalogItemImage src={item.image} />
			</StyledImageWrapper>
			<StyledCatalogItemDescriptionRow>
				<StyledCatalogItemTitle id="product-name">{item.productName}</StyledCatalogItemTitle>
				<StyledCatalogItemInfo id="product-info-icon">
					<>
						i
						<StyledCatalogInfoBlock index={index} id="product-info-block">
							<StyledCatalogInfoRow>
								<p>Пищевая ценность на 100г:</p>
								<p>
									{'белки: '}
									<b>{protein}</b>
									г,
								</p>
								<p>
									{'жиры: '}
									<b>{fat}</b>
									г,
								</p>
								<p>
									{'углеводы: '}
									<b>{carb}</b>
									г,
								</p>
							</StyledCatalogInfoRow>
						</StyledCatalogInfoBlock>
					</>
				</StyledCatalogItemInfo>
			</StyledCatalogItemDescriptionRow>
			<StyledCatalogItemDescriptionRow>
				<StyledCatalogItemPrice id="product-price">{`${item.price} ₽`}</StyledCatalogItemPrice>
				<StyledCatalogItemCartButton onClick={onAddToCart(item)} id="product-cart-button">
					{accordingItemInState !== undefined && accordingItemInState.count > 0
						? `В корзине: ${accordingItemInState.count}`
						: 'В корзину'}
				</StyledCatalogItemCartButton>
			</StyledCatalogItemDescriptionRow>
		</StyledCatalogItem>
	);
};

export const CatalogItem = memo(CatalogItemComponent);
