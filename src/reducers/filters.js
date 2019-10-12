const initialState = {
  name: '',
}

export default (state = initialState, action) => ({ ...state, ...action.filter })
export const getCurrentFilters = state => state.filters