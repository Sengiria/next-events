import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import styles from './comments.module.css';

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(()=>{
    fetch('/api/comments/' + eventId)
    .then(response => response.json())
    .then(data => {
      setComments(data.comments)
      console.log(data)
    })
  }, [showComments])

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = (commentData) => {
    console.log(commentData)
    fetch('/api/comments/'  + eventId, {
      method: 'POST',
      body: JSON.stringify(commentData),
      'Content-type': 'application/json'
    })
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
