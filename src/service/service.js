const mainRequestService = (u, o) => {
  if (!o.headers) o.headers = {};
  if (!o.method) o.method = 'GET';
  o.headers['X-Requested-With'] = 'XMLHttpRequest';
  o.credentials = 'include';
  return fetch(u, o).then(r => {
    if (r.status === 503) {
      return new Promise(resolve => setTimeout(() => resolve(mainRequestService(u, o)), r.headers.get('Retry-After') * 1000));
    } else if (r.status === 502) {
      return new Promise(resolve => setTimeout(() => resolve(mainRequestService(u, o)), 1000));
    } else {
      return r;
    }
  });
};

export const postJsonService = (url, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body,
  };
  return mainRequestService(url, options);
};