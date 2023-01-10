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
};

export const updateFakeUserById = async (id, userData) => {
  const data = await fetch(
    "https://retoolapi.dev/V3QUyT/data/" + id,
    {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
       },
      body: JSON.stringify(userData)
    }
  );
};
