// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './App.css';
import HeaderBlock from './components/header-block/HeaderBlock.component'
import ContentBlock from './components/content-block/ContentBlock.component'
import FooterBlock from './components/footer-block/FooterBlock.component'

const App = () => {
  const count = [<p>You cliked!</p>];
  const addItem = () => {
    console.log('rrr');
  }; 
  const li = ['Color', 'red', 'Grean'];
  const content='Hello, this is block with content'
  return (
    <React.Fragment>
      <HeaderBlock title='Учите слова онлайн!' />
      <ContentBlock content={content} addItem={addItem} li={li}count={count}/>
      <FooterBlock />
    </React.Fragment>
  );
}

export default App;
