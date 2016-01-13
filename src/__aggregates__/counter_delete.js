import { store } from "../store"
import { DELETE } from "../__lib__/http"

export var type = "COUNTER_DELETE"

export var shape = {
  type,
  id: String,
}

export var intent = id =>
  DELETE("/api/v1/counters", { id })
    .then(res => store.dispatch({
      type,
      id,
    }))

export var reducer = (state, { id }) => ({
  ...state,
  counters: deleteCounter( state.counters, id ),
})



// Helpers
var deleteCounter = (counters, id) => {
  delete counters[id]
  return { ...counters }
}
