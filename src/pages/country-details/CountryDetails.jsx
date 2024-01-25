import { useLocation } from 'react-router-dom';
import {
	StyledBorders,
	StyledCountryDetailsContainer,
	StyledCountryInfo,
	StyledImg
} from './styles';

const CountryDetails = () => {
	const { state: country } = useLocation();

	return (
		<StyledCountryDetailsContainer>
			<div>
				<button>Back</button>
				<div>
					<StyledImg src={country.flags.png} alt={country.flags.alt} />
				</div>

				<StyledCountryInfo>
					<h2>{country.name.common}</h2>
					<span>
						Native Name: <span>{country.name.official}</span>
					</span>
					<span>
						Population: <span>{country.population}</span>
					</span>
					<span>
						Region: <span>{country.region}</span>
					</span>
					<span>
						Sub Region: <span>{country.subregion}</span>
					</span>
					<span>
						Capital: <span>{country.capital}</span>
					</span>
				</StyledCountryInfo>
			</div>
			<div>
				<StyledCountryInfo>
					<span>
						Domain <span>{[...country.tld].join(' ')}</span>
					</span>
					<span>
						Currencies: <span>{[...Object.keys(country.currencies)]}</span>
					</span>
					<span>
						Languages: <span>{[...Object.keys(country.languages)]}</span>
					</span>
				</StyledCountryInfo>
			</div>
			<h3>Border Countries:</h3>
			<div>
				{!country.borders && <p>No borders</p>}
				{country?.borders?.map(border => (
					<StyledBorders key={border}>
						<span>{border}</span>
					</StyledBorders>
				))}
			</div>
		</StyledCountryDetailsContainer>
	);
};

export default CountryDetails;
