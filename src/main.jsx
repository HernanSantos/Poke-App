import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter as Router} from "react-router-dom";
import { PokeApp } from './PokeApp';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import './styles.css';
import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"

i18next.init({
  interpolation:{escapeValue:false},
  lng: "es",
  resources:{
    es:{
      global: global_es
    },
    en:{
      global: global_en
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Router>
      <I18nextProvider i18n={i18next}>
        <PokeApp/>
      </I18nextProvider>
    </Router>
  </React.StrictMode>
)
//