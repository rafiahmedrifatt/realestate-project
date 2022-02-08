import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key': '95ef68e9d2mshbd4d35bdd1948e0p13ba37jsn06bceea9e6d3'
              }
    });
    return data;
}