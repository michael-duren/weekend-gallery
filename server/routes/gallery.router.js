const express = require('express');
const {getAllPhotos, likePhoto} = require("../queries/galleryQueries")
const router = express.Router();


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', async (req, res) => {
  const galleryId = req.params.id;
  try {
    await likePhoto(galleryId);
    res.sendStatus(204);
  } catch (e) {
    console.error(e)
  }
}); // END PUT Route

// GET Route
router.get('/', async (req, res) => {
  try {
    const photos = await getAllPhotos()
    res.send(photos)
  } catch (e) {
    console.error(e)
  }
}); // END GET Route

module.exports = router;