export const getFakeResApi = async () => {
  const data = await fetch("https://retoolapi.dev/V3QUyT/data");
  return data.json();
};

export const deleteFakeUserById = async (id) => {
  const data = await fetch(
    "https://retoolapi.dev/V3QUyT/data/" + id,
    {
      method: "DELETE",
    }
  );
  console.log("And here work?", id, data.json());
};
