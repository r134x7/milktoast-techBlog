// taken from 14-MVC/28-Stu_Mini-Project/public/js/profile.js

const newFormHandler = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector('#post-content').value.trim();
  const post_id = event.target.getAttribute('data-id');

  if (comment_content && post_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', newFormHandler);