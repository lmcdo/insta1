import React from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img }) {
  return (
		<div>
			{/* Header */}
			<div className="">
			    <img src={userImg} alt="" className="" />
                <p className="">{username}</p>
                <DotsHorizontalIcon className="h-5" />
			</div>

			{/* img */}
			{/* Buttons */}
			{/* caption */}
			{/* comments */}
			{/* img */}
		</div>
  );
}

export default Post