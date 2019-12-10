import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import '../constants';
import { ISS_LOCATION_API_URL } from '../constants';

/** Returns an array of the current astronauts in space
 *    { name: String, craft: String }
 */
export const fetchIssLocation = (cb) => {
    axios.get(ISS_LOCATION_API_URL, {
        adapter: jsonpAdapter
    })
    .then(location => {
        if (location && location.data && location.data.message === 'success') {
            cb(location.data.iss_position);
        } else {
            cb(null);
        }
    })
    .catch(err => {
        console.log(`ERROR fetching people in space from API`, err);
    })
}