import { useEffect } from "react"

// presentation component
export default function UserList({ users, getUsers }) {
	useEffect(() => {
		getUsers()
	}, [getUsers])

	if (users.length === 0) {
		return <p>현재 유저 정보 없음</p>
	}

	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>{user.login}</li>
			))}
		</ul>
	)
}
