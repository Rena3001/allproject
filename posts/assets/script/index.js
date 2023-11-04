const wrapper = document.querySelector(".create__wrapper");
const btn = document.querySelector(".add");

const getData = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const deleteData = async (url, id) => {
  await fetch(url + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const postData = async (url) => {
  const data = {
    title: document.querySelector("input").value,
    description: document.querySelector("textarea").value,
  };
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

getData("http://localhost:3000/posts").then((res) => {
  res.forEach((res) => {
    let element = `
    <div class="row">
    <div class="id">${res.id}</div>
    <div class="title">${res.title}</div>
    <div class="desc">${res.description}</div>
    <div class="date">1</div>
    <div class="actions">
        <a href="./create.html" class="create" data-id=${res.id}>edit</a>
        <button class="delete" data-id=${res.id}>delete</button>
    </div>
    </div>
    `;

    wrapper.insertAdjacentHTML("beforeend", element);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.preventDefault(); // Prevent the default behavior
    let id = e.target.getAttribute("data-id");
    deleteData("http://localhost:3000/posts/", id).then((res) =>
      console.log(res)
    );
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  postData("http://localhost:3000/posts/");
});

const createData = async (url, id) => {
  const newData = {
    title: document.querySelector("input").value,
    description: document.querySelector("textarea").value,
  };
  try {
    const response = await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("create")) {
    e.preventDefault();
    let id = e.target.getAttribute("data-id");
    // createData("http://localhost:3000/posts/create/", id);
    window.open("google.com", "_blank");
  }
});
