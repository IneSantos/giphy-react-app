import axios from "axios";

const GIPHY_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "D31L73ySufmBJ3YBDkmbVnH9TuWXuvMa";
export const SEARCH_TERMS = ["cats", "dogs", "elephants", "lions", "monkeys"];

const getRandomSearchQuery = () => {
 const index = Math.floor(Math.random() * (SEARCH_TERMS.length - 1));
  return SEARCH_TERMS[index];
}

export const getRandomGif = async () => {
  try {
      const category = getRandomSearchQuery();
      const results = await axios(`${GIPHY_URL}/random`, {
        params: {
          api_key: API_KEY,
          tag: category
        }
      });
      return {data: results.data.data, category: category};
    } catch (err) {
      return err;
    }
}

export const generateGifByCategory = async (category: string) => {
  try {
      const results = await axios(`${GIPHY_URL}/random`, {
        params: {
          api_key: API_KEY,
          tag: category
        }
      });
      return {data: results.data.data, category: category};
    } catch (err) {
      return err;
    }
}


export const searchGif = async (search: string) => {
  try {
    const results = await axios(`${GIPHY_URL}/search`, {
      params: {
        api_key: API_KEY,
        q: search,
        limit: 1
      }
    });
    if(!results.data || !results.data.data) return getRandomGif();
    if(!results.data.data[0] || results.data.data[0] === undefined || results.data.data[0].length === 0) return getRandomGif();
    return results.data.data[0];
  } catch (err) {
    return err;
  }
}