import React, { memo } from 'react';
import { Heading } from '../heading/heading.component';
import { CatalogItem } from '../catalog-item/catalog-item.component';
import { StyledCatalogWrapper, StyledCatalogContainer } from './catalog.styles';

const CatalogComponent = ({ heading, items, id, onAddToBasket, onDeleteFromBasket, basketState = { basket: [] } }) => (
	<StyledCatalogContainer id={id}>
		<Heading>{heading}</Heading>
		<StyledCatalogWrapper>
			{items.map((item, index) => {
				const accordingItemInState = basketState.basket.find((stateItem) => item.title === stateItem.title);
				return (
					<CatalogItem
						item={item}
						index={index}
						onAddToBasket={onAddToBasket}
						onDeleteFromBasket={onDeleteFromBasket}
						accordingItemInState={accordingItemInState}
						key={item.title}
					/>
				);
			})}
		</StyledCatalogWrapper>
	</StyledCatalogContainer>
);

export const Catalog = memo(CatalogComponent);
