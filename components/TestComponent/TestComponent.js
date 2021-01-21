const useState = require('useState');
'use strict';


function LikeButton(props) {
  const [liked, setLiked] = useState(false);

  function likeState() {
    if (liked) {
      return 'You liked comment number ' + props.commentID;
    } else {
      return 'Like';
    }
  }

  return (
    <button onClick={() => setLiked(true)}>
      {likeState()}
    </button>
  );
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.test-component-container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<LikeButton commentID={commentID} />, domContainer);
  });
