import React, {  Component }      from "react"
import css                        from "./styles.css"
import { connect }                from "react-redux"
import { Counter }                from "../Counter"
import { NewCounterForm as Form } from "../NewCounterForm"
import { intent as pollCounters } from "../__aggregates__/counters_server"

var Root = ({ children }) =>
  <div className={ css.Counter }>{ children }</div>

export class Counters extends Component {
  componentWillMount () {
    pollCounters()
  }

  render () {
    var {
      counters = []
    } = this.props

    return  <Root>
              <Form/>
              { counters.map(Counter) }
            </Root>
  }
}

export var $props = ({
  counters = {}
}) => ({
  counters: Object.
              keys(counters).
              map(id => counters[id]),
})

export default connect($props)(Counters)
