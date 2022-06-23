import { ajax as axios } from "../lib/axios";

export const getAllData = (params) => {
  let url = `/api/_search`
  return axios.post(url, params)
}