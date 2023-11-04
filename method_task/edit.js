edit.addEventListener("click", function () {
  const postId = getPostIdFromButton(this);

  editPost(postId);
});

async function editPost(id) {
  const titleInput = document.querySelector(".title");
  const descriptionInput = document.querySelector(".description");

  const newData = {
    title: titleInput.value,
    description: descriptionInput.value,
  };

  try {
    const res = await fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

function getPostIdFromButton(button) {
  return button.getAttribute("data-post-id");
}
