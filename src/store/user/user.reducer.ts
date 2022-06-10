const authenticated = (state: any, action: any) => {
  state.authenticated = action.payload
}

const reducers = {
  authenticated
}

export { reducers, authenticated };