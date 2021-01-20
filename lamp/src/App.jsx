import './App.css';
import Image from './component/Image/Image';
import Button from "./component/Button/Button";
import React, { useState } from 'react';
// import React, { Component } from "react";
import Light from './entity/Light'

const App = () => {
  const [lamp, updateLamp] = useState(Light.off);

  const switchLamp = () => updateLamp(lamp.switch());

  return (
    <div className="App">
      <Image path={lamp.imagePath} alt={lamp.imageAlt} />
      <Button value={lamp.switchButton} onClick={switchLamp} />
    </div>
  );
}

export default App;

///// CLASS COMPONENT version below:

// export default class App extends Component {

//   state = {
//     lamp: Light.off
//   }

//   switchLamp = () => this.setState(prev => ({
//     lamp: prev.lamp.switch()
//   }));
  
//   render() {
//     return (
//       <div className="App">
//         <Image
//           path={this.state.lamp.imagePath}
//           alt={this.state.lamp.imageAlt}
//         />
//         <Button value={this.state.lamp.switchButton} onClick={this.switchLamp} />
//       </div>
//     );
//   }
// }
