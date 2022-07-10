/* eslint-disable no-console */
import axios from "axios";

export const getVideos = () => {
  axios
    .get(
      "https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=8ssspdg7rjufgbgk823q1irqv1&quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34270"
    )
    .then((res) => res.data.response.groups)
    .catch((err) => console.log(err));
};

export const getDetails = (id) => {
  console.log(id);
  axios
    .get(
      `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web62c5d605af24a&user_id=59352999&group_id=${id}`
    )
    .then((res) => res.data.response.group.common)
    .catch((err) => console.log(err));
};
