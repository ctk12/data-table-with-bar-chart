
/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = "https://dummyjson.com";

// To have autocompletion and avoid mistypes
type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null, // we can send any data to the server,
): Promise<T> {
  const options: RequestInit = { method };

  options.headers = {
    "Content-Type": "application/json; charset=UTF-8"
  };

  if (data) {
    // We add body and Content-Type only for the requests with data
    options.body = JSON.stringify(data);
  }

  return fetch(BASE_URL + url, options)
    .then(response => {
      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
};
