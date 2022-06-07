// taken from 14-MVC/28-Stu_Mini-Project/public/js/profile.js

document.querySelector("#blogheader").textContent = "Post a Comment!"; // seems I didn't even need span to get this to work


const newFormHandler = async (event) => {
  event.preventDefault();

  const comment_content = document.querySelector('#post-content').value.trim();
  const post_id = document.querySelector('.post-form').getAttribute('data-id');

  if (comment_content && post_id) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_content, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', newFormHandler);