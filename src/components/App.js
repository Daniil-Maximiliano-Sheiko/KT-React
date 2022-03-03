import React from 'react';
import Header from "./Header";
import Body from "./body";
import "./style.css"

function App() {
  const navigation = {
    nav: [
      {
        name:'About',
        link:'About',
        activite:false
      },
      {
        name:'Shop',
        link:'Shop',
        activite:false
      },
      {
        name:'Artists',
        link:'Artists',
        activite:false
      },
      {
        name:'Stories',
        link:'Stories',
        activite:false
      }
    ],
    view: [
      {
        name:'VIEW ALL PRODUCTS',
        link:'allproducts',
        activite:false
      }
    ]
  }
  return(<div>
    <Header navigation={navigation.nav}/>
    <hr id="line"></hr>
    <Body navigation={navigation.view}/>
  </div>)
}

export default App;