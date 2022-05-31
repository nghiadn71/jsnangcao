import api from './axios';

const prefix = '/students';

export const getStudents = () => api.get(prefix);

export const getStudent = (id) => api.get(`${prefix}/${id}`);