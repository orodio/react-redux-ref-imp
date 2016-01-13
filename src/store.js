import { createStore }   from "redux"
import { createReducer } from "./__aggregates__/__lib__/create_reducer_from_aggregates"

import * as counter_create  from "./__aggregates__/counter_create"
import * as counter_dec     from "./__aggregates__/counter_dec"
import * as counter_delete  from "./__aggregates__/counter_delete"
import * as counter_inc     from "./__aggregates__/counter_inc"
import * as counters_server from "./__aggregates__/counters_server"

const INITIAL_STATE = {
  counters: {}
}

var reducer = createReducer(
  INITIAL_STATE,
  counter_create,
  counter_dec,
  counter_delete,
  counter_inc,
  counters_server,
)

export var store = createStore(reducer)