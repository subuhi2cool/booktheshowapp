import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;
// const EVENTS_URL="http://3.17.216.66:4000/events";
// const UPCOMING_MOVIES_URL="http://3.17.216.66:4000/upcomingMovies";
// const DETAILS_PAGE_URL="http://3.17.216.66/latest/5ab12612f36d2879268f284a";
// const LATEST_MOVIES_URL="http://3.17.216.66:4000/latest";

const headers={
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) =>{
try{
  const {data} = await axios.get(BASE_URL +url,{
    headers,
    params
  })
  return data;

}catch(err){
  console.log(err);
  return err;
}
}