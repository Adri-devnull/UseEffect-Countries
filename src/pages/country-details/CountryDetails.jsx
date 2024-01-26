import { useLocation, useNavigate } from 'react-router-dom';
import {
	StyledBorders,
	StyledBordersContainer,
	StyledButton,
	StyledContainerDesktop,
	StyledCountryDetailsContainer,
	StyledCountryInfo,
	StyledImg,
	StyledInfoDesktop,
	StyledTitleBorders
} from './styles';

const CountryDetails = () => {
	const { state: country } = useLocation();
	const navigate = useNavigate();
	return (
		<StyledCountryDetailsContainer>
			<StyledButton onClick={() => navigate('/')}>Back</StyledButton>
			<StyledContainerDesktop>
				<div>
					<div>
						<StyledImg src={country.flags.png} alt={country.flags.alt} />
					</div>
				</div>
				<div>
					<StyledInfoDesktop>
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
						<StyledCountryInfo>
							<span>
								Domain <span>{[...country.tld].join(' ')}</span>
							</span>
							<span>
								Currencies: <span>{[...Object.keys(country.currencies)]}</span>
							</span>
							<span>
								Languages:{' '}
								<span>{[...Object.keys(country.languages)].join(', ')}</span>
							</span>
						</StyledCountryInfo>
					</StyledInfoDesktop>
					<div>
						<StyledTitleBorders>Border Countries:</StyledTitleBorders>
						<StyledBordersContainer>
							{!country.borders && <p>No borders</p>}
							{country?.borders?.map(border => (
								<StyledBorders key={border}>
									<span>{border}</span>
								</StyledBorders>
							))}
						</StyledBordersContainer>
					</div>
				</div>
			</StyledContainerDesktop>
		</StyledCountryDetailsContainer>
	);
};

export default CountryDetails;
