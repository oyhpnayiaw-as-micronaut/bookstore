import { API_URL } from './config';

export const getBooks = async () => {
  const res = await fetch(API_URL);

  if (!res.ok) return [];

  const contentLength = res.headers.get('content-length');
  if (res.ok && contentLength === '0') return [];

  const json = await res.json();
  const data = Object.entries(json).map(([id, v]) => ({ ...v[0], id }));
  data.sort((a, b) => a.id.localeCompare(b.id));

  return data;
};

export const postBook = async (book) => {
  const id = `${Date.now()}-${crypto.randomUUID()}`;

  const data = { ...book, category: 'Category' };

  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ ...data, item_id: id }),
    headers: { 'Content-type': 'application/json' },
  });

  return { ...data, id };
};

export const deleteBook = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
