const pool = require("../modules/pool");

const getAllPhotos = async () => {
  const query = "SELECT * FROM gallery ORDER BY id asc";
  try {
    return await pool.query(query);
    
  } catch (e) {
   console.error(e) 
  }
}

const getSinglePhoto = async (id) => {
  const query = "SELECT * FROM gallery WHERE Id=$1"
  const queryParmas = [id]
  try {
    const result = await pool.query(query, queryParmas)
    return result.rows[0]
  } catch (e) {
   console.error(e);
  }
}

const likePhoto = async (id) => {
  const photo = await getSinglePhoto(id)
  console.log("PHOTO", photo)
  const query = "UPDATE gallery SET likes=$1 WHERE id=$2"
  const queryParams = [(photo.likes + 1), id]
  
  try {
   return await pool.query(query, queryParams);
  } catch (e) {
   console.error(e);
  }
}

module.exports = {
  getAllPhotos,
  getSinglePhoto,
  likePhoto
}