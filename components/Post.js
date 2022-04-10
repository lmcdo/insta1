import React, { useEffect, useState } from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
    SparklesIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [ comments, setComments ] = useState([]);
    const [comment, setComment] = useState("");
    
    useEffect(
        () => 
            onSnapshot(
                query(
                    collection(db, "posts", id, "comments"),
                    orderBy("timestamp", "desc")
                ),
                (snapshot) => setComments(snapshot.docs)
            ),
        [db]
        );

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        });
    }


  return (
		<div className="bg-white my-7 border rounded-sm">
			{/* Header */}
			<div className="flex items-center p-5">
				<img
					src={userImg}
					alt=""
					className="
                rounded-full h-12 w-12
                object-contain border p-1 mr-3"
				/>
				<p className="flex-1 font-bold">{username}</p>
				<DotsHorizontalIcon className="h-5" />
			</div>

			{/* img */}
			<img src={img} alt="" className="object-cover w-full" />
          {/* Buttons */}
          {session && (<div
				className="flex justify-between 
                px-4 pt-4"
			>
				<div className="flex space-x-4">
					<HeartIcon className="btn" />
					<ChatIcon className="btn" />
					<PaperAirplaneIcon className="btn" />
				</div>
				<BookmarkIcon className="btn" />
          </div>
          )}
			

          <p className='p-5 truncate'>
          <span className="font-bold mr-l">{username} </span>
              {caption}
          </p>
          {/* comments */}
          {comments.length > 0 && (
              <div className="ml-10 h-20 overflow-y-scroll
               scrollbar-thumb-black scrollbar-thin">
                  {comments.map((comment => (
                      <div
                          key={comment.id}
                          className="flex items-center space-x-2 mb-3"
                      >
                          <img
                              className="h-7 rounded-full"
                              src={comment.data().userImage}
                              alt=""
                          />
                          <p>
                              <span className="font-bold">{comment.data().username}
                              </span>{" "}
                              {comment.data().comment}
                          </p>
                      </div>
                  )))}
            </div>
            )}
              
          
          {/* input box */}
          {session && (
              <form className="flex items-center p-4">
              <EmojiHappyIcon className='h-7' />
              <input
                      type="text"
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                  placeholder="Add a comment ..."
                  className="border-none flex-1 focus:ring-0 outline-none"
              />
                  <button
                      type="submit"
                      onClick={sendComment}
                      className="font-semibold text-blue-400"
                      disabled={!comment.trim()}
                  >
                 </button>
          </form>
          )}          
        </div>
  );
}

export default Post