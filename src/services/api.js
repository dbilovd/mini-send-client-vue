import axios from 'axios';

const { baseUrl } = window.miniSend;
const apiBaseUrl = `${baseUrl}/api`;

const sendMessage = (data) => new Promise((resolve, reject) => {
  // eslint-disable-next-line no-param-reassign
  data.userId = 1;
  axios.post(`${apiBaseUrl}/messages`, data)
    .then((res) => {
      console.log('Created a new message:', res);
      resolve(res.data.data);
    })
    .catch((err) => reject(err));
});

const fetchMessages = (data) => new Promise((resolve, reject) => {
  axios.get(`${apiBaseUrl}/messages?userId=1`, {
    params: data,
  })
    .then((res) => {
      console.log('Fetched messages:', res);
      resolve(res.data.data);
    })
    .catch((err) => reject(err));
});

const fetchMessageDetails = (messageId) => new Promise((resolve, reject) => {
  if (!messageId) {
    reject();
    return;
  }

  axios.get(`${apiBaseUrl}/messages/${messageId}?userId=1`)
    .then((res) => {
      console.log('Fetched messages:', res);
      resolve(res.data.data);
    })
    .catch((err) => reject(err));
});

const uploadAttachment = (data) => new Promise((resolve, reject) => {
  if (!data) {
    reject();
    return;
  }

  axios.post(`${apiBaseUrl}/attachments?userId=1`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
    .then((res) => {
      console.log('Uploaded attachment:', res);
      resolve(res.data.data);
    })
    .catch((err) => reject(err));
});

const fetchStats = () => new Promise((resolve, reject) => {
  axios.get(`${apiBaseUrl}/stats?userId=1`)
    .then((res) => {
      console.log('Fetched stats:', res);
      resolve(res.data.data);
    })
    .catch((err) => reject(err));
});

export default {
  sendMessage,
  fetchMessages,
  fetchMessageDetails,
  uploadAttachment,
  fetchStats,
};
