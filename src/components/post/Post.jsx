import React from 'react'
import {useState} from 'react';
import {MoreVert} from "@mui/icons-material"
import "./post.css"
import {Users} from "../../data/DummyData"

export default function Post({post}) {
    const [like,setlike] =useState(post.like)
    const [isLiked,setISLike] =useState(false)

    const likeHandler = () =>{
        setlike(isLiked ? like-1 : like+1)
        setISLike(!isLiked)
    }
    
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img  className='postImg'src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img  className='likeIcon' src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> {post.comment} Comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}
