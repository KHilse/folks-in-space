import axios from 'axios';
import '../constants';
import { ISS_LOCATION_API_URL } from '../constants';

/** Returns an array of the current astronauts in space
 *    { name: String, craft: String }
 */
export const fetchIssLocation = (cb) => {
    axios.get(ISS_LOCATION_API_URL)
    .then(location => {
        let data = JSON.parse(location.data.substring(3, location.data.length-1));
        if (data && data.message === 'success') {
            cb(data.iss_position);
        } else {
            cb(null);
        }
    })
    .catch(err => {
        console.log(`ERROR fetching people in space from API`, err);
    })
}