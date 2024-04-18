import Chicken from './Chicken'; // Assuming the component is named Chicken and the file is named Chicken.js (or .jsx)
import './App.css';
import Greeter from './Greeter';
import Die from './Die';
import Listpicker from './Listpicker';
import Doubledice from './Doubledice';
import Heading from './Heading';
import Colorlist from './Colorlist';
function App() {
  return (
    // <div>
    //   <Chicken />
    //   <Chicken />
    //   <Chicken />
    // </div>
    // <div>
    //   <Greeter person="Sasi" from="deepu"/>
    //   <Greeter person="Deepu" from="sasi"/>
    //   <Die numsides={20}/>
    //   <Die numsides={10}/>
    // </div>
    // <div>
    //   <Listpicker values={[1,2,3]}/>
    //   <Listpicker values={["a",'b','c']}/>
    // </div>
    <div>
      <Heading color='magenta' text="welcome" fontsize="20px"/>
      <Heading color='orange' text="heheheh" fontsize="30px"/>
       <Doubledice/>
       <Doubledice/>

       <Colorlist colors={['red','green','blue','pink']}/>
    </div>
  )
}

export default App;
