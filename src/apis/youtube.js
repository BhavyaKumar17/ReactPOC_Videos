import axios from 'axios';

const KEY = 'AIzaSyAsewYaUi2HbslWt6K-lgsxPNMrp8TSQrE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});