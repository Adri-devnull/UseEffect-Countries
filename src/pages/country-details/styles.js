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
	padding-bottom: 30px;
`;

const StyledBorders = styled.div`
	display: flex;
	padding: 5px 20px;
	background-color: #2b3844;
`;

const StyledTitleBorders = styled.h3`
	color: #fff;
	font-weight: 100;
`;

const StyledBordersContainer = styled.div`
	padding-bottom: 30px;
	display: flex;
	gap: 10px;
	color: #fff;
`;
export {
	StyledBorders,
	StyledBordersContainer,
	StyledCountryDetailsContainer,
	StyledCountryInfo,
	StyledImg,
	StyledTitleBorders
};
