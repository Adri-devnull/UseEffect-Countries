import { useEffect, useState } from 'react';
import { REGIONS } from '../../constants/regions';
import Countries from '../countries/Countries';
import Filters from '../filters/Filters';
import { StyledMain } from './styles';

const Main = () => {
	const [countries, setCountries] = useState([]);
	const [searchByName, setSearchByName] = useState('');
	const [searchByRegion, setSearchByRegion] = useState(0);

	let filteredCountries = filterByName(countries, searchByName);
	filteredCountries = filterByRegion(filteredCountries, searchByRegion);

	useEffect(() => {
		fetchCountries(setCountries);
	}, []);

	return (
		<StyledMain>
			<Filters
				action={value => setSearchByName(value)}
				filterRegion={value => setSearchByRegion(value)}
			/>
			<Countries data={filteredCountries} />
		</StyledMain>
	);
};

const fetchCountries = async setCountries => {
	const response = await fetch('https://restcountries.com/v3.1/all');
	const data = await response.json();
	setCountries(data);
};

const filterByName = (countries, value) => {
	const filteredCountries = countries.filter(country =>
		country.name.common.toLowerCase().includes(value.toLowerCase())
	);
	return filteredCountries;
};

const filterByRegion = (filteredCountries, value) => {
	const formatedValue = Number(value);
	if (formatedValue === 0) {
		return [...filteredCountries];
	}
	const filteredRegionCountries = filteredCountries.filter(
		country => country.region === REGIONS[formatedValue]
	);

	return filteredRegionCountries;
};

export default Main;
