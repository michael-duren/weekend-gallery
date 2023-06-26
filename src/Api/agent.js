import axios from 'axios';

const resolveData =  (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(resolveData),
  put: (url)  => axios.put(url).then(resolveData)
}

const Photos = {
  listAll: () => requests.get("/gallery"),
  likePhoto: (id) => requests.put(`/gallery/like/${id}`)
}

const agent = {
  Photos
}

export default agent