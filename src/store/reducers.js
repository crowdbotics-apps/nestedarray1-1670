import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.NESTEDOBJECTCONNECTOR1_POST_ADD_ORANGE_READ:
    case types.NESTEDOBJECTCONNECTOR1_POST_ADD_ORANGE_READ_SUCCEEDED:
    case types.NESTEDOBJECTCONNECTOR1_POST_ADD_ORANGE_READ_FAILED:
    default:
      return state
  }
}
