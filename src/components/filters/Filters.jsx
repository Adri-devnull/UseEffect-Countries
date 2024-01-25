import { StyledFilterContainer, StyledInput, StyledSelect } from './styles';

const Filters = ({ action, filterRegion }) => {
	return (
		<StyledFilterContainer>
			<div>
				<img src='' alt='' />
				<StyledInput
					type='text'
					placeholder='Search for a country...'
					onChange={event => {
						action(event.target.value);
					}}
				/>
			</div>
			<div>
				<StyledSelect
					name=''
					id=''
					onChange={event => {
						filterRegion(event.target.value);
					}}
				>
					<option value='0'>Filter By Region</option>
					<option value='1'>Africa</option>
					<option value='2'>America</option>
					<option value='3'>Asia</option>
					<option value='4'>Europe</option>
					<option value='5'>Oceania</option>
				</StyledSelect>
			</div>
		</StyledFilterContainer>
	);
};

export default Filters;
