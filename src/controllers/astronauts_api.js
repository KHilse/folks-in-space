import axios from 'axios';
import '../constants';
import { ASTRONAUTS_API_URL } from '../constants';

/** Returns an array of the current astronauts in space
 *    { name: String, craft: String }
 */
export const fetchAstronauts = (cb) => {
    axios.get(ASTRONAUTS_API_URL)
    .then(astros => {
        console.log(`astros`)
        console.log(astros.data)
        let data = JSON.parse(astros.data.substring(3, astros.data.length-1));
        if (data && data.message === 'success') {
            cb(data.people);
        } else {
            cb([]);
        }
    })
    .catch(err => {
        console.log(`ERROR fetching people in space from API`, err);
    })
}