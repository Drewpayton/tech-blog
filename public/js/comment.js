const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comments = document.querySelector('#comment').value.trim();
  
    if (comments && event.target.hasAttribute('data-id')) {

      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comments }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload()
      } else {
        alert('Failed to create project');
      }
    }
  };

  document
  .querySelector('.comment-form')
  .addEventListener('submit', newFormHandler);