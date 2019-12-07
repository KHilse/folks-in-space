import axios from 'axios';
import '../constants';
import { ASTRONAUTS_API_URL } from '../constants';

/** Returns an array of the current astronauts in space
 *    { name: String, craft: String }
 */
export const fetchAstronauts = (cb) => {
    axios.get(ASTRONAUTS_API_URL)
    .then(astros => {
        if (astros && astros.data && astros.data.message === 'success') {
            cb(astros.data.people);
        } else {
            cb([]);
        }
    })
    .catch(err => {
        console.log(`ERROR fetching people in space from API`, err);
    })
}