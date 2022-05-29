// taken from 14-MVC/28-Stu_Mini-Project/public/js/profile.js

const newFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('#post-title').value.trim();
  const post_content = document.querySelector('#post-content').value.trim();

  if (post_title && post_content) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ post_title, post_content }),
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
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
