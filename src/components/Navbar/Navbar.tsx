import { useState } from 'react';
// import scrollTo from 'gatsby-plugin-smoothscroll';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

import { INavigationItem } from './type';

const routes: INavigationItem[] = [
	{ name: `About Me`, href: `#about`, current: true },
	{ name: `Professional Exp.`, href: `#experience`, current: false },
	{ name: `Social`, href: `#social`, current: false }
];

export default function Navbar() {
	const [navigationItems, setNavigationItems] = useState(routes);

	const setCurrentItem = (currentItem: INavigationItem) => {
		const newNavigation = navigationItems.map((navigationItem) => {
			return {
				...navigationItem,
				current: currentItem.name === navigationItem.name ? true : false
			};
		});
		setNavigationItems([...newNavigation]);
		// scrollTo(currentItem.href);
	};

	return (
		<>
			<MobileNavbar
				navigationItems={navigationItems}
				setCurrentItem={setCurrentItem}
			/>
			<DesktopNavbar
				navigationItems={navigationItems}
				setCurrentItem={setCurrentItem}
			/>
		</>
	);
}
