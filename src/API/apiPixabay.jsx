import axios from "axios";

const KEY_API = '?key=29627581-d6f8c2acd4ff53b2d07d8c597';
const PER_PAGE = '12'


export function apiPixabay(searchImg, page) {
    return axios.get(`https://pixabay.com/api/${KEY_API}&q=${searchImg}&page=${page}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)

}


// export default apiPixabay();