import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      Music
      </header>
      <div >
        <svg
          id="home-icon"  
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
        </svg>
      </div>
      <div class="flex-container">
       <div id="smile">
         <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
       </div>
       <div id="nothing">
         <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-2h8v2zm-7.5-9c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
       </div>
       <div id="sad">
         <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.001 14c-2.332 0-4.145 1.636-5.093 2.797l.471.58c1.286-.819 2.732-1.308 4.622-1.308s3.336.489 4.622 1.308l.471-.58c-.948-1.161-2.761-2.797-5.093-2.797zm-3.501-6c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
       </div>
       <div id="angry">
       <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M15.877 6.124l-3.877 3.876-3.877-3.876 1.124-1.124 2.753 2.753 2.754-2.753 1.123 1.124zm-3.877-4.124c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.001 14c-2.332 0-4.145 1.636-5.093 2.797l.471.58c1.286-.819 2.732-1.308 4.622-1.308s3.336.489 4.622 1.308l.471-.58c-.948-1.161-2.761-2.797-5.093-2.797zm-3.501-5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
       </div>
       </div>
       <div id="heart">
          <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18.905 14c-2.029 2.401-4.862 5.005-7.905 8-5.893-5.8-11-10.134-11-14.371 0-6.154 8.114-7.587 11-2.676 2.865-4.875 11-3.499 11 2.676 0 .784-.175 1.572-.497 2.371h-6.278c-.253 0-.486.137-.61.358l-.813 1.45-2.27-4.437c-.112-.219-.331-.364-.576-.38-.246-.016-.482.097-.622.299l-1.88 2.71h-1.227c-.346-.598-.992-1-1.732-1-1.103 0-2 .896-2 2s.897 2 2 2c.74 0 1.386-.402 1.732-1h1.956c.228 0 .441-.111.573-.297l.989-1.406 2.256 4.559c.114.229.343.379.598.389.256.011.496-.118.629-.337l1.759-2.908h8.013v2h-5.095z"/></svg>
       </div>
       <Button variant="outlined" color="primary">
        BPM 110
      </Button>
       <div id="graph">
       <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M0 5.783v-2.783l4 4 5-6 9 7.878 6-3.922v2.437l-6.176 3.989-8.6-7.528-5.09 6.108-4.134-4.179zm18.909 7.279l-1.267.818-1.135-.994-7.058-6.177-3.778 4.534-1.41 1.692-1.548-1.566-2.713-2.743v14.374h24v-13.226l-5.091 3.288z"/></svg>
       </div>

 </div>
    );
  }
}

export default App;
