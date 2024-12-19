import axios from "axios";
import React, { useEffect, useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Tweet({ index, _id, content, createdAt, owner, likes, onSuccess }) {
  const uid = useSelector((state) => state.auth.userId);
  const [tweetOwner, setTweetOwner] = useState({});
  const [likesNo, setLikesNo] = useState(likes?.likedBy?.length);
  const [likedByCurrentUser, setLikedByCurrentUser] = useState(
    likes?.likedBy?.some((user) => user._id === uid)
  );
  const navigate = useNavigate();
  const GetOwnerById = async (owner) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/v1/users/get-userbyid/${owner}`,
        { withCredentials: true }
      );
      // console.log('Tweet Owner Details Page Owner',response.data.data)
      setTweetOwner(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const NavigateToChannel = () => {
    navigate(`/channel-page/${tweetOwner?._id}`);
  };

  const toggleLike = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/likes/toggle/t/${_id}`,
        {},
        { withCredentials: true }
      );
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetOwnerById(owner);
  }, []);

  return (
    <div className="w-full overflow-hidden flex gap-3 border-b border-gray-700 py-4 mybg">
      <div
        className="h-14 w-14 shrink-0"
        onClick={() => {
          NavigateToChannel(tweetOwner?._id);
        }}
      >
        <img
          src={tweetOwner?.avatar}
          alt={tweetOwner?.fullname}
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="text-white w-full ">
        <h4 className="mb-1 flex items-center gap-x-2">
          <span className="font-semibold">{tweetOwner?.fullname}</span> 
          <span className="inline-block text-sm text-gray-400">
            {createdAt.split("T")[0]}
          </span>
        </h4>
        <p className="mb-2">{content}</p>
        <div className="flex gap-4">
          <button
            className={`group inline-flex items-center gap-x-1 outline-none ${
              likedByCurrentUser ? "text-white" : "text-gray-500"
            }`}
            data-like-count={likes}
            onClick={toggleLike}
          >
            <SlLike color={likedByCurrentUser ? "white" : "grey"} />
            <span>{likesNo}</span>
          </button>
          {/* <button
            className="group inline-flex items-center gap-x-1 outline-none"
            data-dislike-count="87">
            <SlDislike color='lime' />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
