import axios from 'axios';

const resolveData =  (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(resolveData),
  post: (url, body={}, headers={'Content-Type': 'application/json'}) => axios.post(url, body, {headers}).then(resolveData),
  put: (url, body={})  => axios.put(url).then(resolveData)
}

const Photos = {
  listAll: () => requests.get("/gallery"),
  createPhoto: (body) => axios.post("/gallery", body, {'Content-Type': 'multipart/form-data'}),
  likePhoto: (id) => requests.put(`/gallery/like/${id}`)
}

const agent = {
  Photos
}

export default agent