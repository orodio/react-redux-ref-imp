import xhr from "superagent"

var id = v => v

var body = r => r.body

var r = (resolve, reject, fn=id) =>
  (err, res) =>
    !!err
      ? reject(err)
      : res.ok
        ? resolve(fn(res))
        : reject(err)

export var GET = (url, data={}, opts={}) =>
  new Promise((resolve, reject) =>
    xhr("GET", url)
      .send(data)
      .set(opts)
      .end(r( resolve, reject, body ))
  )

export var POST = (url, data={}, opts={}) =>
  new Promise((resolve, reject) =>
    xhr("POST", url)
      .send(data)
      .set(opts)
      .end(r( resolve, reject, body ))
  )

export var DELETE = (url, data={}, opts={}) =>
  new Promise((resolve, reject) =>
    xhr("DELETE", url)
      .send(data)
      .set(opts)
      .end(r( resolve, reject, body ))
  )
