// @flow

let logger = ['log', 'error', 'warn', 'debug', 'info']
  .reduce((logger, name) => {
    logger[name] = console[name].bind(console, 'MyApp')
    return logger
  }, {})

logger.log.toFixed()


let a: number = ''


class A {
  static aa: number
}


class B extends A {
  static bb: string
}


type Action =
  | {| type: "FETCH_PENDING", meta: {id: string} |}
  | {| type: "FETCH_SUCCESS", payload: { title: string } |}
  | {| type: "FETCH_FAILURE", error: { message: string } |}

function reducer(state={}, action: Action) {
	switch (action.type) {
		case 'FETCH_PENDING':
      action.meta.id
			//...
			return state
		case 'FETCH_FAILURE':
      console.log(action.error.message)
			//...
			return state
	}
	return state
}
