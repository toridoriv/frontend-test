const API_URL = `http://${ window.location.hostname }:3001/api/v1/counter`;

export async function fetchCounters<ICountersListState>(): Promise<ICountersListState | Array<any>> {
  return fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
      method: 'GET'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
};

export async function postCounter<ICounterState>(title: string): Promise<ICounterState> {
  return fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(title)
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
};
