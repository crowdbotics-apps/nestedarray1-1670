import * as types from "./constants"
export const nestedobjectconnector1_post_addApple_read = () => ({
  type: types.NESTEDOBJECTCONNECTOR1_POST_ADD_APPLE_READ
})
export const nestedobjectconnector1_post_addApple_readSucceeded = response => ({
  type: types.NESTEDOBJECTCONNECTOR1_POST_ADD_APPLE_READ_SUCCEEDED,
  response
})
export const nestedobjectconnector1_post_addApple_readFailed = error => ({
  type: types.NESTEDOBJECTCONNECTOR1_POST_ADD_APPLE_READ_FAILED,
  error
})
