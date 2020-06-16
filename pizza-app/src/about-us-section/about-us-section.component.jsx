import React, { memo } from 'react';
import { AboutUs, AboutUsOrderButton } from 'ui-kit';
import { HashLink } from '../hash-link/hash-link.component';

const AboutUsSectionComponent = ({ id }) => (
	<AboutUs id={id}>
		<HashLink to="pizza">
			<AboutUsOrderButton />
		</HashLink>
	</AboutUs>
);

export const AboutUsSection = memo(AboutUsSectionComponent);
