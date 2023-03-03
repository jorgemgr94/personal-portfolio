import { useEffect, useState } from 'react';

const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData(url);
	}, [url]);

	async function getData(url: string) {
		setData(null);
		setLoading(true);
		const response = await fetch(url);
		const json = await response.json();
		setData(json);
		setLoading(false);
	}

	// function handleDelete() {
	// 	console.log('Delete!');
	// }

	// function handleAdd() {
	// 	console.log('Add!');
	// }

	// const handleEdit = () => {
	// 	console.log('Edit!');
	// };

	return { loading, getData, data };
};

export { useFetch };
