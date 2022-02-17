import axios from 'axios';

const URL_API = 'http://localhost:3001/todo';

export async function createTask(taskName) {
  return axios.post(URL_API, { taskName });
};

export async function findAllTask() {
  const { data } = await axios.get(URL_API);
  return data;
};

export async function updateStatus(id, status) {
  return axios.put(`${URL_API}/${id}`, { status });
};

export async function deleteTask(id) {
  const { data } = await axios.delete(`${URL_API}/${id}`);
  return data;
};
