const pool = require("../modules/pool");

const getAllPhotos = async () => {
  const query = "SELECT * FROM gallery ORDER BY id desc";
  try {
    const result = await pool.query(query);
    return result.rows
    
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

const createPhoto = async (description, path) => {
  const query = "INSERT INTO gallery" +
    " (path, description, likes)" +
    " VALUES ($1, $2, $3);"
  
  const queryParams = [description, path, 0]
  
  try {
    return await pool.query(query, queryParams)
  } catch (e) {
   console.error(e) 
  }
}

const likePhoto = async (id) => {
  const photo = await getSinglePhoto(id)
  const query = "UPDATE gallery SET likes=$1 WHERE id=$2"
  const queryParams = [(photo.likes + 1), id]
  
  try {
   return await pool.query(query, queryParams);
  } catch (e) {
   console.error(e);
  }
}

const deletePhoto = async (id) => {
 const query = `DELETE FROM gallery WHERE Id=$1`
 const queryParams = [id]
 try {
   return await pool.query(query, queryParams)
 } catch (e) {
   console.error(e)
 }
}

module.exports = {
  getAllPhotos,
  getSinglePhoto,
  createPhoto,
  likePhoto,
  deletePhoto 
}