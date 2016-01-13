import { dispatch } from "../store"
import { POST$ }    from "../__lib__/http"

const DEC_AMOUNT = 1

export var type = "COUNTER_DEC"

export var shape = {
  type,
  id: String,
}

export var intent = id =>
  POST$("/api/v1/counter/dec", { id }).
    map(() => ({ type, id })).
    forEach(dispatch)

export var reducer = (state, { id }) => ({
  ...state,
  counters: decCounter( state.counters, id ),
})

// Helpers
var decCounter = (counters, id) => ({
  ...counters,
  [id]: {
    ...counters[id],
    count: counters[id].count - DEC_AMOUNT
  }
})
