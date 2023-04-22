import { Route, Routes } from 'react-router-dom';

import { Layout } from '~components/Layout';
import { AboutPage } from '~pages/AboutPage';
import { HomePage } from '~pages/HomePage';

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
			</Route>
		</Routes>
	);
}
