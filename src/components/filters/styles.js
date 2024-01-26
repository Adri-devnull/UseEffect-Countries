import styled from 'styled-components';

const StyledFilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
	margin-bottom: 50px;
	width: 91%;

	@media screen and (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledInput = styled.input`
	border-radius: 5px;
	background-color: #445560;
	box-shadow: 0px 2px 9px 0px #0000000d;
	padding: 15px 30px;
	width: 100%;
	border: none;
	border: 1px solid transparent;
	&::placeholder {
		color: #fff;
	}
	&:focus {
		outline: none;
		border: 1px solid #fff;
		color: #fff;
		font-weight: bold;
	}

	@media screen and (min-width: 1024px) {
		width: 480px;
	}
`;

const StyledSelect = styled.select`
	border-radius: 5px;
	background-color: #445560;
	box-shadow: 0px 2px 9px 0px #0000000d;
	padding: 15px 30px;
	border: none;
	color: #fff;
`;
export { StyledFilterContainer, StyledInput, StyledSelect };
