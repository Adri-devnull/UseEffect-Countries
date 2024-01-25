import styled from 'styled-components';

const StyledCountryDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 30px;
`;

const StyledImg = styled.img`
	border-radius: 10px;
`;

const StyledCountryInfo = styled.div`
	display: flex;
	flex-direction: column;
	color: #fff;
	gap: 10px;
`;

const StyledBorders = styled.div`
	display: flex;
	background-color: red;
`;
export {
	StyledBorders,
	StyledCountryDetailsContainer,
	StyledCountryInfo,
	StyledImg
};
