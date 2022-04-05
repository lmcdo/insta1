import React from "react";
import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "llllala",
		userImg: "https://i.ibb.co/Ptgx60W/P1010859.jpg",
		img: "https://i.ibb.co/Ptgx60W/P1010859.jpg",
		caption: "subscribe and destroy the like button",
	},
	{
		id: "123",
		username: "llllala",
		userImg: "https://i.ibb.co/Ptgx60W/P1010859.jpg",
		img: "https://i.ibb.co/Ptgx60W/P1010859.jpg",
		caption: "subscribe and destroy the like button",
	},
	{
		id: "123",
		username: "llllala",
		userImg: "https://i.ibb.co/Ptgx60W/P1010859.jpg",
		img: "https://i.ibb.co/Ptgx60W/P1010859.jpg",
		caption: "subscribe and destroy the like button",
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.username}
					userImg={post.userImg}
					img={post.img}
					caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
