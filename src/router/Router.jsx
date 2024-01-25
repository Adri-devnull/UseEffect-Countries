import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';
import Layout from '../layouts/Layout';
import CountryDetails from '../pages/country-details/CountryDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
				<Route path='/country' element={<CountryDetails />} />
			</Route>
		</Routes>
	);
};

export default Router;
