import React, { useState } from "react";

export default function CommentForm(props) {
  const [commenter, setCommenter] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (commenter && rating && comment) {
      props.addNewComment({commenter, rating, comment});
      setCommenter('');
      setRating('');
      setComment('');
    } else {
      console.log('invalid input');
    }
  };

  return (
    <div className="commentForm">
      <h4>Add a new comment</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setCommenter(e.target.value)}
          value={commenter}
        />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="★">★</option>
          <option value="★★">★★</option>
          <option value="★★★">★★★</option>
          <option value="★★★★">★★★★</option>
          <option value="★★★★★">★★★★★</option>
        </select>
        <input
          type="text"
          placeholder="comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}