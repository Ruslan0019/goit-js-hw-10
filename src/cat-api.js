import axios from "axios";
import { Notify } from "notiflix";

axios.defaults.headers.common["x-api-key"] = "live_1gmS5FipgHAV0fp0pzlZpPUPJSF7aQwAtIel46PPOzSdbUAUUuavtBDBCuD9nJZM";

// Колекція порід
function fetchBreeds() {
    return axios.get('https://api.thecatapi.com/v1/breeds')
        .then(response => {
            return response.data;
        })
        .catch(err => {
            Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });
     
}

//  Інформація про кота
function fetchCatByBreed(breedId) {
    return axios.get('https://api.thecatapi.com/v1/images/search', {
        params: {
            breed_ids: breedId
        }
    })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });
}

export {fetchBreeds,fetchCatByBreed }