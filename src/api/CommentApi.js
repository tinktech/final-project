const INSPIRATION_ENDPOINT = 'https://65f61bfc41d90c1c5e0a9762.mockapi.io/api/recipe/inspiration';

class CommentApi {
  all = async (inspirationId) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${inspirationId}/comments`);
      if (resp.ok) {
        const data = await resp.json();
        return data;
      } else {
        return [];
      }
    } catch(e) {
      console.log('Oops, looks like fetchComments had an issue.', e);
    }
  }

  one = async (inspirationId, commentId) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${inspirationId}/comments/${commentId}`);
      const data = await resp.json();
      return data;
    } catch(e) {
      console.log('Oops, looks like fetchComment had an issue.', e);
    }
  }

  put = async (inspirationId, comment) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${inspirationId}/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
      });
      return await resp.json();
    } catch(e) {
      console.log('Oops, looks like updating comment had an issue.', e);
    }
  }

  post = async (inspirationId, comment) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${inspirationId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
      });
      return await resp.json();
    } catch(e) {
      console.log('Oops, looks like creating comment had an issue.', e);
    }
  }

  delete = async (inspirationId, commentId) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${inspirationId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await resp.json();
    } catch(e) {
      console.log('Oops, looks like delete comment had an issues.', e);
    }
  }

  deleteAll = async (inspirationId) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${inspirationId}/comments/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await resp.json();
    } catch(e) {
      console.log('Oops, looks like deleting quote comments had an issue.', e);
    }
  }
}

export const commentApi = new CommentApi();