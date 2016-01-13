import xhr            from "superagent"
import { Observable } from "rx"

var id = v => v

var body = r => r.body

var r = (resolve, reject, fn=id) =>
  (err, res) =>
    !!err
      ? reject(err)
      : res.ok
        ? resolve(fn(res))
        : reject(err)

export var HTTP = (method, url, data={}, opts={}) =>
  new Promise((resolve, reject) =>
    xhr(method, url).
      send(data).
      set(opts).
      end(r( resolve, reject, body ))
  )

export var GET    = HTTP.bind(null, "GET")
export var POST   = HTTP.bind(null, "POST")
export var DELETE = HTTP.bind(null, "DELETE")

export var GET$    = (...args) => Observable.fromPromise(GET(...args))
export var POST$   = (...args) => Observable.fromPromise(POST(...args))
export var DELETE$ = (...args) => Observable.fromPromise(DELETE(...args))

export var POLL$ = (rate, ...args) =>
  Observable.
    interval(rate).
    flatMap(() => GET$(...args)).
    merge(GET$(...args))
