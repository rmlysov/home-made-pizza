import React, { memo } from 'react';
import { StyledMenuItem, StyledMenuList } from './main-menu.styles';

const MainMenuComponent = ({ menu, color, renderLinkWrapper }) => {
	return (
		<StyledMenuList>
			{menu.map((item) => {
				const MenuItem = <StyledMenuItem color={color}>{item.title}</StyledMenuItem>;

				return renderLinkWrapper !== undefined ? (
					renderLinkWrapper(MenuItem, item.anchor)
				) : (
					<StyledMenuItem color={color}>{item.title}</StyledMenuItem>
				);
			})}
		</StyledMenuList>
	);
};

export const MainMenu = memo(MainMenuComponent);
