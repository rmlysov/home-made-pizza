import styled from 'styled-components';
import { logoImageUrl } from './images';

export const StyledHeaderLogo = styled.div`
	background-image: url(${logoImageUrl});
	width: 140px;
	height: 120px;
`;

export const StyledHeader = styled.div`
	height: 120px;
	padding: 0 20px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
`;
