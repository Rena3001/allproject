let id = 0;

const create = document.querySelector(".create");
const tableBody = document.querySelector("tbody");
const deleteButton = document.createElement("a");

async function createPost(e) {
  e.preventDefault();
  const titleInput = document.querySelector(".title");
  const descriptionInput = document.querySelector(".description");

  const data = {
    title: titleInput.value,
    description: descriptionInput.value,
  };

  try {
    const res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const posts = await res.json();
    if (data.title === "") {
      alert("title is empty");
    } else if (data.description === "") {
      alert("description is empty");
    } else {
      const newRow = document.createElement("tr");

      const idCell = document.createElement("td");
      const titleCell = document.createElement("td");
      const descriptionCell = document.createElement("td");
      const editButton = document.createElement("button");

      idCell.textContent = posts.id;
      titleCell.textContent = posts.title;
      descriptionCell.textContent = posts.description;
      deleteButton.textContent = "Sil" + " " + "/";
      editButton.textContent = "Edit";

      deleteButton.classList.add("delete");
      editButton.classList.add("edit");
     
      newRow.append(idCell);
      newRow.append(titleCell);
      newRow.append(descriptionCell);
      newRow.append(deleteButton);
      newRow.append(editButton);

      tableBody.append(newRow);

      titleInput.value = "";
      descriptionInput.value = "";
    }

    
  } catch (error) {
    console.error("Error:", error);
  }
}

const form = document.querySelector("form");

form.addEventListener("submit", createPost);

async function deleteFunc(id) {
  try {
    const res = await fetch("http://localhost:3000/posts/"+id, {
     
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// deleteButton.addEventListener("click", deleteFunc);
