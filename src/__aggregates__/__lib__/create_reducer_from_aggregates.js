export var createReducer = (initialState, ...aggregates) => {
  var reducers = {}
  for (var aggregate of aggregates) {
    // validate aggregate shape here
    reducers[aggregate.type] = aggregate.reducer
  }

  return (state=initialState, intent) => {
    // validate intent shape against aggregate.shape
    return reducers.hasOwnProperty(intent.type)
      ? reducers[intent.type](state, intent)
      : state
    }
}
