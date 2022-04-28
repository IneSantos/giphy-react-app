import React from "react";
import GifCard from "../atomic-ui/molecules/gif-card/gif-card";
import NavBar from "components/atomic-ui/organisms/navbar/navbar";

interface Props {
    title: string,
    src: string,
    altText: string,
    categories: string[],
    activeCat: string,
    onClick: () => void,
    generateGifByCat: (a: string) => void
}


const Home = (props: Props) => {
    const { title, src, altText, categories, activeCat, onClick, generateGifByCat } = props;
    return (
    <div className="page-wrapper">
        <NavBar categories={categories} activeCat={activeCat} generateGifByCat={generateGifByCat}/>
        <GifCard title={title} src={src} altText={altText} onClick={onClick}/>
    </div>
    )
  }
  
  export default Home;