import React from 'react';
import Header from './Header'
import BlogContainer from './BlogContainer'
import SocialButtons from './social-media-logos'
import './App.css';
import ProjectContainer from './ProjectContainer';


function App() {
  fetch("https://data.feedmirror.com/-Lxc6DxjutQwLFtSKflI.json")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })

  return (
    <div className="App">
      <Header />
      <BlogContainer />

    </div >
  );
}
export default App;
