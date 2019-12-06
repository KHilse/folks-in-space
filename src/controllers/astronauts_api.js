import axios from 'axios';
import '../constants';
import { ASTRONAUTS_API_URL } from '../constants';

/** Returns an array of the current astronauts in space
 *    { name: String, craft: String }
 */
export const fetchAstronauts = (cb) => {
    console.log(`fetching astronauts`);
    axios.get(ASTRONAUTS_API_URL)
    .then(astros => {
        if (astros && astros.data && astros.data.message === 'success') {
            console.log(`found astronauts: ${astros.data.people}`)
            cb(astros.data.people);
        } else {
            console.log(`didnt find astronauts: ${JSON.stringify(astros.data.people)}`)
            cb([]);
        }
    })
    .catch(err => {
        console.log(`ERROR fetching people in space from API`, err);
    })
}