import axios from 'axios';
import '../constants';
import { ISS_LOCATION_API_URL } from '../constants';

/** Returns an array of the current astronauts in space
 *    { name: String, craft: String }
 */
export const fetchIssLocation = (cb) => {
    console.log(`fetching iss location`);
    axios.get(ISS_LOCATION_API_URL)
    .then(location => {
        console.log(location.data.iss_position.longitude, location.data.iss_position.latitude);
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