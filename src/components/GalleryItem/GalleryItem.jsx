import {AiOutlineLike} from 'react-icons/ai'
import {useState} from "react";

export default function GalleryItem({photo}) {
  const {id, path, description, likes} = photo
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  
  const onShowDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <div onClick={onShowDescription} className={`carousel-item cursor-pointer ${showDescription ? "bg-gradient-to-r from-gray-800  to-gray-950": ""} relative `} key={id}>
      <img  className={`${showDescription && " opacity-20"} h-96 `} src={path} alt={description}/>
      <div className={`top-[50%] text-2xl ${showDescription ? "block" : "hidden"} text-white left-[50%] absolute transform -translate-x-1/2 -translate-y-1/2`}>{description}</div>
      <div className=" px-4 flex items-center py-2 aspect-square text-white absolute bottom-2 left-2 chat-bubble-info rounded-full">{likes}</div>
      <label
        className={`btn absolute bottom-2 right-2 btn-circle swap swap-rotate`}>
        {/* this hidden checkbox controls the state */}
        <input value={liked} onChange={() => {
          setLiked(!liked)
          setLocalLikes(likes + 1)
        }} type="checkbox"/>

        {/* hamburger icon */}
        <AiOutlineLike className="swap-off fill-current" size={20}/>

        {/* close icon */}
        <AiOutlineLike className="swap-on fill-current" size={20}/>

      </label>
    </div>
  );
}