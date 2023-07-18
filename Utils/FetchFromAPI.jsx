import axios from "axios";

const APIURL = "https://youtube-v31.p.rapidapi.com/captions";
const options = {
  params: {
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${APIURL}/${url}`, options);
  return data;
};
