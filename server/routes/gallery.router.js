const express = require('express');
const multer = require('multer');
const path = require('path');
const { getAllPhotos, createPhoto, likePhoto, deletePhoto } = require('../queries/galleryQueries');
const router = express.Router();

// MULTER CONFIG
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const saveToPath = path.join(__dirname, '..', '..', 'public', 'images', 'uploads');
    cb(null, saveToPath);
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `uploaded-${uniqueSuffix}.${file.mimetype.replace(/[A-Za-z]+\//, '')}`);
  },
});
const upload = multer({ storage });

// GET Route
router.get('/', async (req, res) => {
  try {
    const photos = await getAllPhotos();
    res.send(photos);
  } catch (e) {
    console.error(e);
  }
}); // END GET Route

// CREATE PHOTO
router.post('/', upload.single('file'), async (req, res) => {
  const { description } = req.body;
  try {
    const result = await createPhoto(`images/uploads/${req.file.filename}`, description);
    res.sendStatus(201);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

// PUT Route
router.put('/like/:id', async (req, res) => {
  const photoId = req.params.id;
  try {
    await likePhoto(photoId);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
  }
}); // END PUT Route

router.delete('/:id', async (req, res) => {
  const photoId = req.params.id;
  console.log(photoId);
  try {
    await deletePhoto(photoId);
    res.sendStatus(204);
  } catch (e) {
    console.error(e);
  }
});


module.exports = router;