const INSPIRATION_ENDPOINT = 'https://65f61bfc41d90c1c5e0a9762.mockapi.io/api/recipe/inspiration';

class InspirationApi {
  all = async () => {
    try {
      const resp = await fetch(INSPIRATION_ENDPOINT);
      if (resp.ok) {
        const data = await resp.json();
        return data;
      } else {
        return [];
      }
    } catch(e) {
      console.log('Oops, looks like fetchInspiration had an issue.', e);
    }
  }

  one = async (id) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${id}`);
      const data = await resp.json();
      return data;
    } catch(e) {
      console.log('Oops, looks like fetchInspiration had an issue.', e);
    }
  }

  put = async (quote) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${quote.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(quote)
      });
      return await resp.json();
    } catch(e) {
      console.log('Oops, looks like updating inspiration had an issue.', e);
    }
  }

  post = async (quote) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(quote)
      });
      return await resp.json();
    } catch(e) {
      console.log('Oops, looks like creating inspiration had an issue.', e);
    }
  }

  delete = async (quoteId) => {
    try {
      const resp = await fetch(`${INSPIRATION_ENDPOINT}/${quoteId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await resp.json();
    } catch(e) {
      console.log('Oops, looks like delete quote had an issues.', e);
    }
  }
}

export const inspirationApi = new InspirationApi();