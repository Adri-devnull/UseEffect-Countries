import styled from 'styled-components';

const StyledCountries = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	@media screen and (min-width: 1024px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		row-gap: 100px;
		cursor: pointer;
	}
`;

export { StyledCountries };
