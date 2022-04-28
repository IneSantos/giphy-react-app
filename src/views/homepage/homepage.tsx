import React, { useEffect, useState } from "react";
import Loader from "../../components/atomic-ui/atoms/loader/loader";
import Error from "../error/error";
import Home from "../../components/templates/home";
import { generateGifByCategory, getRandomGif, SEARCH_TERMS } from "../../services/api";
import { ApiResponse } from "services/type";
import "./homepage.css";

const Homepage = () => {
    const [gif, setGif] = useState<ApiResponse>({} as ApiResponse);
    const [activeCat, setActiveCat] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    const generateGif = () => {
        getRandomGif().then(response => {
          // @ts-ignore
          setGif(response.data);
          // @ts-ignore
          setActiveCat(response.category);
          setIsLoading(false);
        }).catch(err => {
          setIsError(true);
        });
    }

    const generateGifByCat = (cat: string) => {
      generateGifByCategory(cat).then(response => {
        // @ts-ignore
        setGif(response.data);
        // @ts-ignore
        setActiveCat(response.category);
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

      
    return <Home title={gif.title} src={gif.images.fixed_height.url} altText={gif.title} categories={SEARCH_TERMS} activeCat={activeCat} generateGifByCat={generateGifByCat} onClick={generateGif}/>
}

export default Homepage;