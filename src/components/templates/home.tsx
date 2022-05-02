import React from "react";
import GifCard from "../atomic-ui/molecules/gif-card/gif-card";
import NavBar from "components/atomic-ui/organisms/navbar/navbar";
import SearchBar from "components/atomic-ui/molecules/search-bar/search-bar";

interface Props {
    title: string,
    src: string,
    altText: string,
    categories: string[],
    activeCat: string,
    searchInput: string,
    handleSubmit: () => void,
    handleSearch: (e: { target: HTMLInputElement }) => void,
    onClick: () => void,
    generateGifByCat: (a: string) => void
}


const Home = (props: Props) => {
    const { title, src, altText, categories, activeCat, searchInput, handleSubmit, handleSearch, onClick, generateGifByCat } = props;
    return (
        <div className="page-wrapper">
            <header>
                <NavBar categories={categories} activeCat={activeCat} generateGifByCat={generateGifByCat}/>
                <SearchBar searchInput={searchInput} handleSubmit={handleSubmit} handleSearch={handleSearch} />
            </header>
            <section className="gif-section-wrapper">
                <GifCard title={title} src={src} altText={altText} onClick={onClick}/>
            </section>
        </div>
    )
  }
  
  export default Home;