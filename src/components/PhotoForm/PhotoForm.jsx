import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import agent from "../../Api/agent";
import toast from "react-hot-toast";

export default function PhotoForm({setPhotos}) {
  const [uploadedImage, setUploadedImage] = useState({file: null, url: ""})
  const [description, setDescription] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setUploadedImage({file, url: URL.createObjectURL(file)})
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", uploadedImage.file)
    formData.append("description", description)

    try {
      await agent.Photos.createPhoto(formData)
      toast.success("Your photo has been added! 🥳")
      const newList = await agent.Photos.listAll();
      setPhotos(newList)
      setUploadedImage({file: null, url: ""})
      setDescription("")
      setIsFormOpen(false)
    } catch (e) {
      toast.error("Oh no! Something went wrong! We couldn't add your photo.")
    }
  }

  return (

    <div className="collapse z-10 right-10 w-[20rem] absolute bg-base-200">
      <input type="checkbox" onChange={() => setIsFormOpen(!isFormOpen)} checked={isFormOpen} className="peer" />
      <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content">
        Add Photo
      </div>

      <div
        className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-black">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="w-full flex justify-end">
            {uploadedImage.url && <img className="h-16" src={uploadedImage.url} alt="preview"/>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-light text-secondary-content" htmlFor="photo">Photo</label>
            <input required accept="image/jpeg, image/jpg, image/png" onChange={(e) => handleFileChange(e)} name="photo" type="file" className="file-input w-full max-w-xs"/>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-light text-secondary-content" htmlFor="Description">Description</label>
            <input required value={description} type="text" name="Description" placeholder="Description"
                   onChange={handleDescriptionChange} className="input w-full max-w-xs"/>
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}