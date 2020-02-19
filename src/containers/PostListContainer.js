import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/posts';
import PostList from '../components/PostList';

function PostListContainer() {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  // 루트 리듀서의 state.posts안에 posts값(posts.js에 있는)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러발생!!!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;
