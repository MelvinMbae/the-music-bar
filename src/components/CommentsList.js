import React, { useState, useEffect } from "react";

const commentURL = "http://localhost:3000/comments";

function CommentsList(props) {
  const {
    album,
    commentsDictionary,
    setCommentsDictionary,
    apiComments = [],
    fetchCommentData,
  } = props;

  const [newComment, setNewComment] = useState("");
  const [albumComments, setAlbumComments] = useState([]);

  useEffect(
    () =>
      setAlbumComments(
        apiComments.filter((comment) => comment.albumID === album.id),
      ),
    [apiComments],
  );

  function handleSubmit(e) {
    fetch(commentURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "Mark Mutugi",
        comment: newComment,
        albumID: album.id,
      }),
    })
      .then((res) => res.json())
      .then((comment) => {
        setCommentsDictionary({
          ...commentsDictionary,
          ...{ [album.id]: [...albumComments, comment] },
        });
        fetchCommentData();
        setNewComment("");
      });
  }

  function handleDelete(id) {
    fetch(`${commentURL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => res.json())
      .then((comment) => {
        setCommentsDictionary({
          ...commentsDictionary,
          ...{ [album.id]: [...albumComments, comment] },
        });
        fetchCommentData();
        setNewComment("");
      });
  }

  function handleEdit(id, comment) {
    fetch(`${commentURL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        comment,
      }),
    })
      .then((res) => res.json())
      .then((comment) => {
        setCommentsDictionary({
          ...commentsDictionary,
          ...{ [album.id]: [...albumComments, comment] },
        });
        fetchCommentData();
        setNewComment("");
      });
  }

  return (
    <div className="comments-section">
      <div className="comments-list">
        {albumComments.map((comment) => (
          <div className="comment-field" key={comment.id}>
            <div>
              <b>{comment.user}</b>:{comment.comment}
            </div>
            <div className="comment-field-btns">
              <button
                className="comment-btn"
                onClick={(_) => handleDelete(comment.id)}
              >
                <span className="material-symbols-outlined">delete</span>
                Delete
              </button>
              <button
                className="comment-btn"
                onClick={(_) => handleEdit(comment.id, "Kiasssiiiiiiiii")}
              >
                <span className="material-symbols-outlined">edit</span>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="comment-input">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => {
            setNewComment(e.target.value);
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          type="text"
          placeholder="Add a comment..."
          id="comment"
        />
        <button onClick={handleSubmit} className="comment-btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CommentsList;
