import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter as Router} from "react-router-dom";
import { PokeApp } from './PokeApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Router>
      <PokeApp/>
    </Router>
  </React.StrictMode>
)
