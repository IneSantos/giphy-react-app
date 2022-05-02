import React, { useEffect, useState } from "react";
import Loader from "../../components/atomic-ui/atoms/loader/loader";
import Error from "../error/error";
import Home from "../../components/templates/home";
import { generateGifByCategory, getRandomGif, searchGif, SEARCH_TERMS } from "../../services/api";
import { ApiResponse } from "services/type";
import "./homepage.css";

const Homepage = () => {
    const [gif, setGif] = useState<ApiResponse>({} as ApiResponse);
    const [activeCat, setActiveCat] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [input, setInput] = useState("");
    

    const handleSubmit = () => {
      setIsLoading(true);

      searchGif(input).then(response => {
        setGif(response);
        setActiveCat("");
        setInput("");
        setIsLoading(false);
      }).catch(err => {
        setIsError(true);
      });
    }

    const handleSearch = (e: { target: HTMLInputElement }) => {
      const userInput = e.target.value;
      setInput(userInput);
    }
    
    const generateGif = () => {
      setIsLoading(true);
        getRandomGif().then(response => {
          // @ts-ignore
          setGif(response.data);
          // @ts-ignore
          setActiveCat(response.category);
          setInput("");
          setIsLoading(false);
        }).catch(err => {
          setIsError(true);
        });
    }

    const generateGifByCat = (cat: string) => {
      setIsLoading(true);
      generateGifByCategory(cat).then((response) => {
        // @ts-ignore
        setGif(response.data);
        // @ts-ignore
        setActiveCat(response.category);
        setInput("");
        setIsLoading(false);
      }).catch(err => {
        setIsError(true);
      });
    }
    
    useEffect(() => {
        generateGif();
    }, []);
    
    if(isLoading) return <Loader />
    if(isError) return <Error />

      
    return <Home title={gif.title} src={gif.images.fixed_height.url} altText={gif.title} categories={SEARCH_TERMS} activeCat={activeCat} searchInput={input} handleSubmit={handleSubmit} handleSearch={handleSearch} generateGifByCat={generateGifByCat} onClick={generateGif}/>
}

export default Homepage;