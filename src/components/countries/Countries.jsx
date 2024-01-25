import Country from '../country/Country';
import { StyledCountries } from './styles';

const Countries = ({ data }) => {
	return (
		<StyledCountries>
			{data.map(country => (
				<Country key={country.name.common} data={country} />
			))}
		</StyledCountries>
	);
};

export default Countries;
