import './App.css';
import { incrementAction, decrementAction } from './redux/actions'; 
import { useDispatch, useSelector } from 'react-redux';
function App() {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.count)
  const increaseFunction = () => {
    dispatch(incrementAction())
  }
  const decreaseFunction  = () => {
    dispatch(decrementAction())
  }
  
  return (
    <div className="App">
      <button onClick={()=>increaseFunction()}>increase</button>
      <p>{counter}</p>
      <button onClick={()=>decreaseFunction()}>decrease</button>
    </div>
  );
}
// dispatch action
// recibir el count (el styate)
// useDispatch => mapDispatchToProps
// useSelector => mapStateToProps

export default App;