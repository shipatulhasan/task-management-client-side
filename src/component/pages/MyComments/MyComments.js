import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommnet, postCommnet } from '../../../Slices/commentSlice';
import CommentForm from './CommentForm'
import Comment from './Comment'

const MyComment = ({id}) => {
    
    const {comments,commentLoading} = useSelector(state=>state.comment)
    const {userInfo} = useSelector(state=>state.auth)
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCommnet(id))
    },[id,dispatch])

    const handleComment = (e)=>{
        e.preventDefault()
        const date = new Date().toLocaleString("en-US")
        const form = e.target
        const comment= form.comment.value
        if(comment===null){
            alert('please add your comment')
            return
        }
        const commentDetails = {
            date,image:userInfo?.photoURL,comment,task:id,user:userInfo?.displayName
        }
        // console.log(commentDetails)

        dispatch(postCommnet(commentDetails))
    }


    return (
        <div className='space-y-4'>
            <div>
            {comments.map((comment,i)=><Comment key={comment._id} mycomment={comment} index={i===comments.length-1} />)}
            </div>
            <div>

            <CommentForm handleComment={handleComment} isLoading={commentLoading} />
            </div>
        </div>
    );
};

export default MyComment;