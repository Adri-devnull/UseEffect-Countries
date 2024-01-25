import styled from 'styled-components';

const StyledCountry = styled.div`
	display: flex;
	flex-direction: column;
	width: 260px;
	background-color: #445560;
	border-radius: 10px;
`;

const StyledImg = styled.img`
	border-radius: 10px 10px 0px 0px;
`;

const StyledCountryInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 20px 40px 20px;
	color: #fff;
	gap: 10px;
`;

const StyledSpansContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const StyledName = styled.h2`
	font-size: 1.1em;
	font-weight: bold;
`;

const StyledSpanInfo = styled.span`
	font-size: 0.8em;
`;

const StyledSpanInfoBold = styled.span`
	font-weight: bold;
`;

export {
	StyledCountry,
	StyledCountryInfo,
	StyledImg,
	StyledName,
	StyledSpanInfo,
	StyledSpanInfoBold,
	StyledSpansContainer
};
