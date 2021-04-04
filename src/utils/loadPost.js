export const loadPost = async () => {
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postJson = await posts.json();
  const photoJson = await photos.json();

  const postAndPhotos = postJson.map((post, index) => {
    return { ...post, cover: photoJson[index].url };
  });

  return postAndPhotos
};
