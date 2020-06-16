import React, { memo } from 'react';
import { StyledHeaderLogo, StyledHeader } from './header.styles';
import { MainMenu } from '../main-menu/main-menu.component';
import { Phone } from '../phone/phone.component';
import { BasketButton } from '../basket-button/basket-button.component';

const HeaderComponent = ({ menuItems, basketCount, onModalOpen, renderLinkWrapper, menuColor }) => (
	<StyledHeader>
		<StyledHeaderLogo />
		<MainMenu menu={menuItems} renderLinkWrapper={renderLinkWrapper} color={menuColor} />
		<Phone phone="8-800-555-35-35" />
		<BasketButton count={basketCount} onModalOpen={onModalOpen} />
	</StyledHeader>
);

export const Header = memo(HeaderComponent);
