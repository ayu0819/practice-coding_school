import React from 'react';

import Graduate1 from './Graduate1';
import MainContents from './MainContents';
import Graduate2 from './Graduate2';
import Graduate3 from './Graduate3';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Main from './Main';
import Footer from './Footer';
 
function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };
  return (
    

    <div className="App">
      <Header />
      <Jumbotron />
    <Main />
    <div class="sample__fix container">
        <Graduate1 />
        <Graduate2 />
        <Graduate3 />
        </div>
    <MainContents />
   <Footer />
      
    </div>
  );
}
 
export default App;