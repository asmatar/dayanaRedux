import './App.css';
import { connect } from 'react-redux';
import { incrementAction, decrementAction } from './redux/actions';
function App({increaseFunction, decreaseFunction, counter}) {
console.log(counter)
/*   const increaseFunction () =>{uhñcdp} */
  return (
    <div className="App">
      <button onClick={increaseFunction}>increase</button>
      <p>{counter}</p>
      <button onClick={decreaseFunction}>decrease</button>
    </div>
  );
}
// => 2. una para dispatch una action
function mapDispatchToProps(dispatch) {
  // dispatch 2 actions
  return {
    increaseFunction: () => dispatch(incrementAction()),
    decreaseFunction: () => dispatch(decrementAction())
  }
}
// => 1. una para recibir el state
function mapStateToProps(state) {
  return{
    counter: state.count
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


// store
// connectar el store con el provider
// reducer con los reducer
// connect tu componente y anadir mapStateToprop, y/o mapDispatchToProps  
// crear las acciones dentro del accion creator
// y por cada action hay que definir la function dentro de mapDispatchToprops