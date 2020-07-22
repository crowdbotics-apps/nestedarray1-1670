import axios from "axios"
import {} from "react-native-dotenv"
const nestedObjectConnector1 = axios.create({
  baseURL: "https://www.a1.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function nestedobjectconnector1_post_addOrange_read(requestBody) {
  return nestedObjectConnector1.post(`/addOrange`, requestBody)
}
export const apiService = { nestedobjectconnector1_post_addOrange_read }
