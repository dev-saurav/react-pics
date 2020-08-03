//config file for unsplash

import axios from 'axios';

//create a instance of axios with pre-written configuration
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3pm33vS_CbL1702sCNe1_kUD5jS2xTXI0q2g_IJL1RM'
    }
})