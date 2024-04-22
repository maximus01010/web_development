import './App.css';

import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import Togglecounter from './Togglecounter';
import Colorbox from './Colorbox';
const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];
import Colorboxgrid from './Colorboxgrid';
function App() {
  return (
    // <div>
    //   <Form/>
    //   <Clicker/>
    //   <Clicker message="hi" buttontext="please click me"/>
    // </div>
  //  <Counter/>
  //<Toggler/>
  <div>
    <Colorboxgrid colors={colors}/>
  </div>
  
  )
}

export default App;
