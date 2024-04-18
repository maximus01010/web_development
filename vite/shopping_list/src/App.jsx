import Chicken from './Chicken'; // Assuming the component is named Chicken and the file is named Chicken.js (or .jsx)
import './App.css';
import Greeter from './Greeter';
import Die from './Die';
import Listpicker from './Listpicker';
import Doubledice from './Doubledice';
import Heading from './Heading';
import Colorlist from './Colorlist';
import Shopping_list from './Shopping_list';
import Propertylist from './Propertylist';
const data=[
  {id:1,item:"eggs",quantity:2,completed:false},
  {id:2,item:"bread",quantity:344,completed:true},
  {id:3,item:"jelly",quantity:21,completed:false},
  {id:4,item:"jam",quantity:25,completed:false}
]
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
function App() {

  return (
    //<Shopping_list items={data}/>
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
    // <div>
    //   <Heading color='magenta' text="welcome" fontsize="20px"/>
    //   <Heading color='orange' text="heheheh" fontsize="30px"/>
    //    <Doubledice/>
    //    <Doubledice/>

    //    <Colorlist colors={['red','green','blue','pink']}/>
    // </div>
    <Propertylist properties={properties}/>
    
  )
}

export default App;
