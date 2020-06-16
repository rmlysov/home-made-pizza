import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const StyledAboutUsWrapper = styled.div`
	padding: 0 20px;
	margin-bottom: 120px;
`;

export const StyledAboutUsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const StyledAboutUsTextDescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledAboutUsText = styled.p`
	width: 1038px;
	font-size: 24px;
	line-height: 36px;
	margin: 0;
`;

export const StyledAboutUsButton = styled(Link)`
	background-color: #9b5900;
	border-radius: 20px;
	width: 388px;
	height: 94px;
	color: #ffffff;
	font-size: 36px;
	line-height: 94px;
	text-align: center;
	text-transform: uppercase;
	border: none;
	margin: 79px auto 0;
	cursor: pointer;
	text-decoration: none;
`;
