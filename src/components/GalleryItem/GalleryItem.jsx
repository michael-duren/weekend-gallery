import {AiOutlineLike} from 'react-icons/ai'
import {useState} from "react";

export default function GalleryItem({photo}) {
  const [liked, setLiked] = useState(false);
  const {id, path, description, likes} = photo

  return (
    <div className="carousel-item relative" key={id}>
      <img className="h-96" src={path} alt={description}/>
      <div className="chat-bubble text-white absolute bottom-2 left-2 chat-bubble-info rounded-full">0</div>
      <label
        className={`btn ${liked ? "btn-accent" : "btn-primary"} absolute bottom-2 right-2 btn-circle swap swap-rotate`}>

        {/* this hidden checkbox controls the state */}
        <input value={liked} onChange={() => {
          setLiked(!liked)
        }} type="checkbox"/>

        {/* hamburger icon */}
        <AiOutlineLike className="swap-off fill-current" size={30}/>

        {/* close icon */}
        <AiOutlineLike className="swap-on fill-current" size={30}/>

      </label>
    </div>
  );
}