import React from "react";
import GifImg from "../../atoms/gif/gif-img";
import Label from "../../atoms/label/label";
import "./gif-card.css";

interface Props {
    title: string,
    src: string,
    altText: string,
    onClick: () => void
}

const GifCard = (props: Props) => {
    const { title, src, altText, onClick } = props;
    return  (
        <div className="gif-card-wrapper">
            <div className="gif-card-container" onClick={onClick}>
                <GifImg src={src} altText={altText}/>
                <Label title={title}/>
            </div>
        </div>
    )
  }
  
  export default GifCard;