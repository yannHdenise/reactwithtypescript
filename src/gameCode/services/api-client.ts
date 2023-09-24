import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'ede67dc55cf640ff8e6ba3a1afc33ead'
    }
})