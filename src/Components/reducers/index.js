//easy api sample: https://pokeapi.co/api/v2/pokemon

export const initialState = {
  requestParam: {
    url: 'https://pokeapi.co/api/v2/pokemon', 
    method: 'GET',
    body: {}
  },
  data: {},
  loading: false,
  history: []
}

export const dataReducer = (state, action) => {
  switch (action.type) {
    case 'get_params':
      return { ...state,
        requestParam: {
          url: action.payload.url,
          method: action.payload.method,
          body: action.payload.body
        }
      };

    case 'store_result':
      return { 
        ...state, 
        history: [
          ...state.history, 
          { requestParam: state.requestParam, data: state.data }
        ]
      }

    case 'toggle_loading':
      return { ...state, loading: !state.loading }

    case 'store_data':
      return { ...state, data: action.payload }

    default:
      return state;
  }
}

export const getParams = (requestParam) => {
  return {
    type: 'get_params',
    payload: requestParam
  };
}

export const storeResult = () => {
  return {
    type: 'store_result',
  }
}

export const storeData = (data) => {
  return {
    type: 'store_data',
    payload: data
  }
}