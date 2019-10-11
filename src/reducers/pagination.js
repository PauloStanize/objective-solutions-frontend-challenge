const initialState = {
  limit: 10,
  offset: 0,
}

export default (state = initialState, action) => ({ ...state, ...action.pagination })
export const getCurrentPagination = state => state.pagination