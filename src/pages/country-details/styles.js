import styled from 'styled-components';

const StyledCountryDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 30px;
	@media screen and (min-width: 1024px) {
		padding: 100px;
	}
`;

const StyledImg = styled.img`
	border-radius: 10px;
	@media screen and (min-width: 1024px) {
		width: 550px;
		height: 350px;
	}
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
	border-radius: 2px;
	background-color: #2b3844;
	box-shadow: 0px 0px 4px 1px rgba(17, 21, 23, 0.25);
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

const StyledButton = styled.button`
	border-radius: 2px;
	background: #2b3844;
	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
	border: none;
	padding: 10px 35px;
	color: #fff;
	margin: 40px 0px;
	position: relative;
	&::before {
		content: '';
		background-image: url('assets/images/arrow-back.png');
		background-repeat: no-repeat;
		width: 25px;
		height: 25px;
		position: absolute;
		top: 50%;
		left: 5px;
		transform: translateY(-50%);
	}
	@media screen and (min-width: 1024px) {
		cursor: pointer;
	}
`;

const StyledContainerDesktop = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}
`;

const StyledInfoDesktop = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: center;
		gap: 200px;
	}
`;

export {
	StyledBorders,
	StyledBordersContainer,
	StyledButton,
	StyledContainerDesktop,
	StyledCountryDetailsContainer,
	StyledCountryInfo,
	StyledImg,
	StyledInfoDesktop,
	StyledTitleBorders
};
