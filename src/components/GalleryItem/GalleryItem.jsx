import {AiOutlineLike} from 'react-icons/ai'
import {useState} from "react";
import axios from "axios";
import agent from "../../Api/agent";

export default function GalleryItem({photo, setPhotos}) {
  const {id, path, description, likes} = photo
  const [liked, setLiked] = useState(false);
  const [localLikes, setLocalLikes] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const onShowDescription = () => {
    setShowDescription(!showDescription)
  }

  const likePhoto = async (id) => {
    await agent.Photos.likePhoto(id);
    const newPhotos = await agent.Photos.listAll();
    setPhotos(newPhotos);
  }

  return (
    <div onClick={onShowDescription}
         className={`carousel-item cursor-pointer ${showDescription ? "bg-gradient-to-r from-gray-800  to-gray-950" : ""} relative `}
         key={id}>
      <img className={`${showDescription && " opacity-20"} h-96 `} src={path} alt={description}/>
      <div
        className={`top-[50%] text-2xl ${showDescription ? "block" : "hidden"} text-white left-[50%] absolute transform -translate-x-1/2 -translate-y-1/2`}>{description}</div>
      <div className="chat chart-start absolute bottom-2 left-2 ">
        <div className="chat-image peer avatar">
          <div
            className="px-4 flex min-h-10 items-center py-2 aspect-square text-white  chat-bubble-info rounded-full">{likes}</div>
        </div>
        <div className="hidden chat-bubble  bg-accent peer-hover:block absolute bottom-2 left-12 text-xs">{likes} people liked this photo</div>
      </div>
      <label
        className={`btn absolute bottom-2 right-2 btn-circle swap swap-rotate`}>
        {/* this hidden checkbox controls the state */}
        <input value={id} onChange={() => likePhoto(id)} type="checkbox"/>

        <AiOutlineLike className="swap-off fill-current" size={20}/>

        <AiOutlineLike className="swap-on fill-current" size={20}/>

      </label>
    </div>
  );
}

// <div className="chat chat-start">
//   <div className="chat-image avatar">
//     <div className="w-10 rounded-full">
//       <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//     </div>
//   </div>
//   <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
// </div>