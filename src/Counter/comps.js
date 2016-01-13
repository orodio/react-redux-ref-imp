import React                    from "react"
import css                      from "./styles.css"
import { intent as incCounter } from "../__aggregates__/counter_inc"
import { intent as decCounter } from "../__aggregates__/counter_dec"

export var Inc = ({
  id = "",
}) =>
  <button onClick={ e => incCounter(id) }>+</button>

export var Dec = ({
  id    = "",
  count = 0,
}) =>
  !count
    ? <noscript/>
    : <button onClick={ e => decCounter(id) }>-</button>

export var Count = ({
  count = 0,
  id    = "",
}) =>
  <span>
    <Dec id={ id } count={ count }/>
    { ` ${ count } ` }
    <Inc id={ id }/>
  </span>

export var Title = ({ children }) =>
  <strong>{ children }</strong>

export var Root = ({ children }) =>
  <div className={ css.Counter }>
    { children }
  </div>
