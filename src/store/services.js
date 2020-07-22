import axios from "axios"
import {
  NESTEDOBJECTCONNECTOR1_USERNAME,
  NESTEDOBJECTCONNECTOR1_PASSWORD
} from "react-native-dotenv"
const nestedObjectConnector1 = axios.create({
  baseURL: "https://www.a1.com",
  auth: {
    username: NESTEDOBJECTCONNECTOR1_USERNAME,
    password: NESTEDOBJECTCONNECTOR1_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function nestedobjectconnector1_post_addApple_read(requestBody) {
  return nestedObjectConnector1.post(`/addApple`, requestBody)
}
export const apiService = { nestedobjectconnector1_post_addApple_read }
