import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Post from '../components/Post';
import { getPost, clearPost } from '../modules/posts';

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector(state => state.posts.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러발생!!!</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostContainer;
