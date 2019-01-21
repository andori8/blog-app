import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  const repsonse = await jsonPlaceholder.get('/posts')

  return {
    type: 'FETCH_POSTS',
    paylod: response
  }
}
