import { useEffect, useState } from 'react';
import { CgMoon, CgSun } from 'react-icons/cg';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';

export default function ThemeToggler() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
	return (
		<Switch.Group>
			<section className="fixed bottom-5 right-5 md:top-5">
				<div className="flex items-center">
					<Switch.Label className="mr-1 cursor-pointer">
						{theme === `dark` ? (
							<CgMoon className="text-xl text-gray-500" />
						) : (
							<CgSun className="text-xl text-yellow-500" />
						)}
					</Switch.Label>
					<Switch
						checked={theme === `dark`}
						onChange={() => {
							setTheme(theme === `dark` ? 'light' : 'dark');
						}}
						className={`${
							theme === `dark` ? `bg-blue-600` : `bg-gray-200`
						} relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
					>
						<span
							className={`${
								theme === `dark` ? `translate-x-6` : `translate-x-1`
							} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
						/>
					</Switch>
				</div>
			</section>
		</Switch.Group>
	);
}
