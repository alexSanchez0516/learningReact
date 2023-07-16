// eslint-disable-next-line react/prop-types
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function CardFollow({formatUserName,name,user,img_url,isFollowing}) {

	const [isFollowingUser, setTextFollowingFollower] = useState(isFollowing);

	const handlerChangeFollowing = () => {
		setTextFollowingFollower(!isFollowingUser); // le da la vuelta
	}

	return (
		<>
			<article>
				<header>
					<img src={img_url}  alt=''/>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<strong>{name}</strong>
						<span style={{margin: '1rem'}}>{formatUserName(user)}</span>
					</div>
				</header>
				<aside>
					<button onClick={handlerChangeFollowing}>
						{isFollowingUser ? 'Dejar de seguir' : 'Seguir'}
					</button>
				</aside>
			</article>
		</>
	)
}