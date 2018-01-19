import createHistory from 'history/createBrowserHistory'

export default createHistory()

// const onChangeListeners = []

// function push(path) {
//   window.history.pushState({}, '', path)

//   onChangeListeners.forEach(callback => callback(path))
// }

// export default {
//   push,
//   // TODO: add a function to remove an event listener
//   onChange: callback => onChangeListeners.push(callback),
// }
