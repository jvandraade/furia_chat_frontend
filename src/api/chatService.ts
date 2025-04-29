import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chat-furia-production.up.railway.app',
});

export const sendMessage = async (message: string) => {
  const response = await api.post('/chat', { message });
  return response.data;
};
