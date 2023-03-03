interface ALinkProps {
	children?: React.ReactFragment | React.ReactNode;
	url: string;
}

export default function ALink({ children, url }: ALinkProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="text-blue-400 underline cursor-pointer hover:text-blue-300 dark:text-white dark:hover:text-blue-400"
		>
			{children}
		</a>
	);
}
