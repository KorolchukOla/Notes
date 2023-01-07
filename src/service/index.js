export const getFakeResApi = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments");
  return data.json();
};
