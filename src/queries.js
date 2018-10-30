import axios from "axios";

export const getAllRates = () => {
    return axios.get(`http://api.nbp.pl/api/exchangerates/tables/C?format=json`);
  }

export const getSingleRate = (selected, number) => {
    return axios.get(`http://api.nbp.pl/api/exchangerates/rates/C/${selected}/last/${number}?format=json`);
}