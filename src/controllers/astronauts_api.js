import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import '../constants';
import { ASTRONAUTS_API_URL } from '../constants';

/** Returns an array of the current astronauts in space
 *    { name: String, craft: String }
 */
export const fetchAstronauts = (cb) => {
    axios.get(ASTRONAUTS_API_URL, {
        adapter: jsonpAdapter
    })
    .then(astros => {
        console.log(`astros`)
        console.log(astros.data)
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