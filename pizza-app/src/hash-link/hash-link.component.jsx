import React, { memo } from 'react';
import { StyledLink } from './hash-link.styles';

const HashLinkComponent = ({ to, children, color }) => (
	<StyledLink to={`#${to}`} color={color}>
		{children}
	</StyledLink>
);

export const HashLink = memo(HashLinkComponent);
