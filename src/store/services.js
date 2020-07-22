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
const nestedArray1API = axios.create({
  baseURL: "https://nestedarray1-1670.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function nestedobjectconnector1_post_addOrange_read(requestBody) {
  return nestedObjectConnector1.post(`/addOrange`, requestBody)
}
function api_v1_customtext_list() {
  return nestedArray1API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return nestedArray1API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return nestedArray1API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return nestedArray1API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return nestedArray1API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return nestedArray1API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return nestedArray1API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return nestedArray1API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return nestedArray1API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return nestedArray1API.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return nestedArray1API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return nestedArray1API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return nestedArray1API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return nestedArray1API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return nestedArray1API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return nestedArray1API.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return nestedArray1API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return nestedArray1API.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return nestedArray1API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return nestedArray1API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return nestedArray1API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  nestedobjectconnector1_post_addOrange_read,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
