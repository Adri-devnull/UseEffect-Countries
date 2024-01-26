import styled from 'styled-components';

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 90px;
	background-color: #2b3844;
	color: #fff;
	font-family: 'Nunito Sans', sans-serif;
	padding: 0px 90px;
`;

const StyledTitle = styled.h2`
	font-size: 1.1em;
	font-weight: bold;
`;

export { StyledHeader, StyledTitle };
