const requestUrl = "https://randomuser.me/api/";

async function getAllUsers() {
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error at ${error}`);
  }
}

// getAllUsers();

fetch(requestUrl)
  .then((response) => {
    return (data = response.json());
  })
  .then((data) => {
    console.log(data.results);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Data fetched!!!");
  });
