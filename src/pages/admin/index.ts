import { useUser } from '@/contexts/authContext';

export default function Index() {
	const { loadingUser, user } = useUser();

	return <span>{user}</span>;
}
