const INSPIRATION_ENDPOINT = 'https://65f61bfc41d90c1c5e0a9762.mockapi.io/api/recipe/inspiration';

class InspirationApi {
  get = async () => {
    try {
      const resp = await fetch(INSPIRATION_ENDPOINT);
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
}

export const inspirationApi = new InspirationApi();