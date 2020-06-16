import React, { memo } from 'react';
import {
	StyledCatalogItem,
	StyledCatalogItemImage,
	StyledCatalogInfoBlock,
	StyledCatalogItemDescriptionRow,
	StyledCatalogItemTitle,
	StyledCatalogItemInfo,
	StyledCatalogItemPrice,
	StyledCatalogItemBasketButton,
	StyledImageWrapper,
	StyledCatalogInfoRow,
} from './catalog-item.styles';

const CatalogItemComponent = ({ item, index, onAddToBasket = () => null, accordingItemInState }) => {
	return (
		<StyledCatalogItem>
			<StyledImageWrapper>
				<StyledCatalogItemImage src={item.image} />
			</StyledImageWrapper>
			<StyledCatalogItemDescriptionRow>
				<StyledCatalogItemTitle>{item.title}</StyledCatalogItemTitle>
				<StyledCatalogItemInfo>
					<>
						i
						<StyledCatalogInfoBlock index={index}>
							<StyledCatalogInfoRow>
								<p>
									{'Энергетическая ценность: '}
									<b>{item.description.energy}</b>
									ккал
								</p>
								<p>Пищевая ценность на 100г:</p>
								<p>
									{'белки: '}
									<b>{item.description.protein}</b>
									г,
								</p>
								<p>
									{'жиры: '}
									<b>{item.description.fat}</b>
									г,
								</p>
								<p>
									{'углеводы: '}
									<b>{item.description.carb}</b>
									г,
								</p>
							</StyledCatalogInfoRow>
						</StyledCatalogInfoBlock>
					</>
				</StyledCatalogItemInfo>
			</StyledCatalogItemDescriptionRow>
			<StyledCatalogItemDescriptionRow>
				<StyledCatalogItemPrice>{`${item.price} ₽`}</StyledCatalogItemPrice>
				<StyledCatalogItemBasketButton onClick={onAddToBasket(item)}>
					{accordingItemInState !== undefined && accordingItemInState.count > 0
						? `В корзине: ${accordingItemInState.count}`
						: 'В корзину'}
				</StyledCatalogItemBasketButton>
			</StyledCatalogItemDescriptionRow>
		</StyledCatalogItem>
	);
};

export const CatalogItem = memo(CatalogItemComponent);
