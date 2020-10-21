import React, { useState } from 'react';
import { render } from 'react-dom';
import useFetch from './hooks/useFetch';
import './style.css';

const postsIds = [1, 2, 3, 4, 5, 6, 7, 8];

// const fetchPost = async (id) => {
//   const apiCall = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );
//   const respuesta = await apiCall.json();

//   return respuesta;
// };

const App = () => {
  const [index, setIndex] = useState(0);
  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postsIds[index]}`
  );
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);
  //   const [post, setPost] = useState(null);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetchPost(postsIds[index])
  //       .then((respuesta) => {
  //         setLoading(false);
  //         setError(null);
  //         setPost(respuesta);
  //       })
  //       .catch((err) => {
  //         setLoading(false);
  //         setError(err);
  //       });
  //      },[index]);

  const incrementIndex = () => {
    setIndex((i) => {
      return i === postsIds.length - 1 ? i : i + 1;
    });
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={incrementIndex}>Siguiente Post</button>
      </>
    );
  }

  return (
    <div>
      {index === postsIds.length - 1 ? (
        <p>No hay mas! gato!</p>
      ) : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <button onClick={incrementIndex}>Siguiente Post</button>
        </>
      )}
    </div>
  );
};

render(React.createElement(App), document.getElementById('root'));
