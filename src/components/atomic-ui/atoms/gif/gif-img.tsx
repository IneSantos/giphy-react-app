import { Gif } from "./type";

const GifImg = (props: Gif) => {
  const { src, altText } = props;
  return  <img src={src} alt={altText}/>
}

export default GifImg;