import React from "react"

import {
  Inc,
  Dec,
  Count,
  Title,
  Root,
} from "./comps"

export var Counter = ({
  id    = "",
  title = "",
  count = 0,
}) =>
  <Root key={ id }>
    <Title>{ title }</Title> <Count count={ count } id={ id }/>
  </Root>
