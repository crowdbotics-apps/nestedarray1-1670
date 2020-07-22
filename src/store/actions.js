import * as types from "./constants"
export const nestedobjectconnector1_post_addOrange_read = () => ({
  type: types.NESTEDOBJECTCONNECTOR1_POST_ADD_ORANGE_READ
})

export const nestedobjectconnector1_post_addOrange_readSucceeded = response => ({
  type: types.NESTEDOBJECTCONNECTOR1_POST_ADD_ORANGE_READ_SUCCEEDED,
  response
})

export const nestedobjectconnector1_post_addOrange_readFailed = error => ({
  type: types.NESTEDOBJECTCONNECTOR1_POST_ADD_ORANGE_READ_FAILED,
  error
})
