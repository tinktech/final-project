import React, { useState } from 'react';
// import Comment from './Comment';

export function Comments({
  comments,
  onEditComment,
  onDeleteComment
}) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <Comment
            comment={comment}
            onChange={onEditComment}
            onDelete={onDeleteComment}
          />
        </li>
      ))}
    </ul>
  );
}

function Comment({comment, onChange, onDelete}) {
  const [isEditing, setIsEditing] = useState(false);
  const editing = () => {
    setIsEditing(current => !current);
  }

  let commentContent;
  let editButton;
  if (isEditing) {
    commentContent = (
      <>
        <input
          type='text'
          defaultValue={comment.name}
          onChange={(e) => {
            onChange({
              ...comment,
              name: e.target.value
            });
          }}
        />
        <select
          defaultValue={comment.rating}
          onChange={(e) => {
            onChange({
              ...comment,
              rating: e.target.value
            });
          }}
        >
          <option value="★">★</option>
          <option value="★★">★★</option>
          <option value="★★★">★★★</option>
          <option value="★★★★">★★★★</option>
          <option value="★★★★★">★★★★★</option>
        </select>
        <input
          type='text'
          defaultValue={comment.comment}
          onChange={(e) => {
            onChange({
              ...comment,
              comment: e.target.value
            });
          }}
        />
      </>
    );
    editButton = "Save";
  } else {
    commentContent = (
      <>
        {`${comment.name} - ${comment.rating}`}
        {`${comment.comment}`}
      </>
    );
    editButton = "Edit";
  }

  return (
    <label>
      {commentContent}
      <button onClick={editing}>{editButton}</button>
      <button onClick={() => onDelete(comment.id)}>Delete</button>
    </label>
  )
}