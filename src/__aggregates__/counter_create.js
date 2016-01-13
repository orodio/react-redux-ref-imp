import { dispatch } from "../store"
import { generate } from "bc-uuid"
import { POST$ }    from "../__lib__/http"

export var type = "COUNTER_CREATE"

export var shape = {
  type,
  counter: {
    id: String,
    title: String,
    count: Number,
  }
}

export var intent = title => {
  var counter = newCounter({ title })
  POST$("/api/v1/counters", counter).
    map(() => ({ type, counter })).
    forEach(dispatch)
}

export var reducer = (state, { counter }) => ({
  ...state,
  counters: {
    ...state.counters,
    [ counter.id ]: {
      ...state.counters[counter.id],
      ...counter
    }
  }
})

// Helpers
var newCounter = ({
  title = "",
  count = 0,
}) => ({
  id: generate(),
  title,
  count,
})
