import axios from 'axios';

const API = axios.create({ baseURL: 'https://mern-portfolio-notes.onrender.com/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const createNote = (newNote) => API.post('/notes', newNote);
export const fetchNotes = () => API.get('/notes');
export const deleteNote = (id) => API.delete(`/notes/${id}`);
export const updateNote = (id, updatedNote) => API.put(`/notes/${id}`, updatedNote);


// This is the "bridge" to my Express server. 
// Since i am using JWT, 
// This code automatically attaches to token for every request.