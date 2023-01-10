export const getFakeResApi = async () => {
  const data = await fetch("https://retoolapi.dev/V3QUyT/data");
  return data.json();
};

export const deleteFakeUserById = async (id) => {
  await fetch("https://retoolapi.dev/V3QUyT/data/" + id, {
    method: "DELETE",
  });
};

export const updateFakeUserById = async (id, userData) => {
  await fetch("https://retoolapi.dev/V3QUyT/data/" + id, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(userData),
  });
};

export const postFakeUser = async (user) => {
  await fetch("https://retoolapi.dev/V3QUyT/data", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(user),
  });
};
