// taken from 14-MVC/28-Stu_Mini-Project/public/js/profile.js

document.querySelector("#blogheader").textContent = "Editing Post"; // seems I didn't even need span to get this to work

const editFormHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');

  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};


const delButtonHandler = async (event) => {
    const id = event.target.getAttribute('data-id')
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('.delete-list')
  .addEventListener('click', delButtonHandler);