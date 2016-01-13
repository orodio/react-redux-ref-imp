import { dispatch } from "../store"
import { POST$ } from "../__lib__/http"

const INC_AMOUNT = 1

export var type = "COUNTER_INC"

export var shape = {
  type,
  id: String,
}

export var intent = id =>
  POST$("/api/v1/counter/inc", { id }).
    map(() => ({ type, id })).
    forEach(dispatch)

export var reducer = (state, { id }) => ({
  ...state,
  counters: incCounter( state.counters, id ),
})

// Helpers
var incCounter = (counters, id) => ({
  ...counters,
  [id]: {
    ...counters[id],
    count: counters[id].count + INC_AMOUNT
  },
})
