import React, {useEffect, useState} from "react";
import axios from "axios";

export default function PhotoForm() {
  const [uploadedImage, setUploadedImage] = useState({})
  const [description, setDescription] = useState("")

  useEffect(() => {
    console.log(uploadedImage)
  }, [uploadedImage])
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setUploadedImage({file, url: URL.createObjectURL(file)})
    console.log(uploadedImage)
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", uploadedImage.file)
    formData.append("description", description)

    console.log(formData)

    axios.post('/gallery', formData, {
      'Content-Type': 'multipart/form-data'
    })
      .then(() => console.log('YAYYYh'))

  }


  return (
    <div
      className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-black">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="w-full flex justify-end">
          {uploadedImage.url && <img className="h-16" src={uploadedImage.url} alt="preview"/>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-light text-secondary-content" htmlFor="photo">Photo</label>
          <input onChange={(e) => handleFileChange(e)} name="photo" type="file" className="file-input w-full max-w-xs"/>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-light text-secondary-content" htmlFor="Description">Description</label>
          <input value={description} type="text" name="Description" placeholder="Description"
                 onChange={handleDescriptionChange} className="input w-full max-w-xs"/>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}