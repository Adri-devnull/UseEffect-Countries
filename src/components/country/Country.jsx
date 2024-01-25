import { useNavigate } from 'react-router-dom';
import {
	StyledCountry,
	StyledCountryInfo,
	StyledImg,
	StyledName,
	StyledSpanInfo,
	StyledSpanInfoBold,
	StyledSpansContainer
} from './styles';

const Country = ({ data }) => {
	const navigate = useNavigate();
	return (
		<StyledCountry
			onClick={() =>
				navigate(`/country`, {
					state: data
				})
			}
		>
			<div>
				<StyledImg src={data.flags.png} alt='' />
			</div>
			<StyledCountryInfo>
				<StyledName>{data.name.common}</StyledName>
				<StyledSpansContainer>
					<StyledSpanInfo>
						<StyledSpanInfoBold>Population:</StyledSpanInfoBold>{' '}
						{data.population}
					</StyledSpanInfo>
					<StyledSpanInfo>
						<StyledSpanInfoBold>Region:</StyledSpanInfoBold> {data.region}
					</StyledSpanInfo>
					<StyledSpanInfo>
						<StyledSpanInfoBold>Capital:</StyledSpanInfoBold> {data.capital}
					</StyledSpanInfo>
				</StyledSpansContainer>
			</StyledCountryInfo>
		</StyledCountry>
	);
};

export default Country;
