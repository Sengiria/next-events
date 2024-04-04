import styles from './comment-list.module.css';

const CommentList = ({items}) => {
  return (
    <ul className={styles.comments}>
      {
        items && items.map(({_id, text, name}) =>       
          <li key={_id}>
            <p>{text}</p>
            <div>
              By <address>{name}</address>
            </div>
          </li>
        )
      }
    </ul>
  );
}

export default CommentList;
