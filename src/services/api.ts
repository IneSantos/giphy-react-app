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