import React, { Component }        from "react"
import { intent as createCounter } from "../__aggregates__/counter_create"

export class NewCounterForm extends Component {
  submit () {
    var node  = this.refs.title
    var value = node.value.trim()
    if (!!value.length) {
      createCounter(value)
      node.value = ""
    }
  }

  render () {
    var submit = this.submit.bind(this)

    return  <div>
              <input ref="title"/>
              <button onClick={ submit }>Add</button>
            </div>
  }
}
