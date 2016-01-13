import { store } from "../store"
import { GET }   from "../__lib__/http"

export var type = "COUNTERS_SERVER"

export var shape = { type }

export var intent = () =>
  GET("/api/v1/counters")
    .then(counters => store.dispatch({
      type,
      counters,
    }))

export var reducer = (state, { counters={} }) => ({
  ...state,
  counters,
})
