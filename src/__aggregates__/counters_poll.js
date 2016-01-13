import { store }      from "../store"
import { POLL$ }      from "../__lib__/http"
import { Observable } from "rx"

const POLL_RATE = 1000

export var type = "COUNTERS_POLL"

export var shape = { type }

export var intent = () =>
  POLL$(POLL_RATE, "/api/v1/counters").
    map(counters => ({
      type,
      counters,
    })).
    forEach(store.dispatch.bind(store))

export var reducer = (state, { counters={} }) => ({
  ...state,
  counters,
})
