import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListStagiaire from "./components/stagiaire/ListStagiaire";
import DetailStagiaire from "./components/stagiaire/DetailStagiaire";
import AddStagiaire from "./components/stagiaire/AddStagiaire";
import Header from "./components/Header/Header";


const initialState = [
    {
        image: 'https://randomuser.me/api/portraits/men/49.jpg',
        nom: 'Zaid',
        prenom: 'Riyad',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
        nom: 'Riyad',
        prenom: 'Mouad',
        filiere: 'TDI',
    },

    {
        image: 'https://randomuser.me/api/portraits/men/35.jpg',
        nom: 'Jamaoui',
        prenom: 'Aymane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/30.jpg',
        nom: 'Manal',
        prenom: 'Imane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/25.jpg',
        nom: 'Zineb',
        prenom: 'wiam',
        filiere: 'TDI',
    },
]
const stagiaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_stagiaire':
            return [...state, action.payload]
        default:
            return state
    }
}
const store = createStore(stagiaireReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<ListStagiaire/>}/>
                    <Route path={'/:nom'} element={<DetailStagiaire/>}/>
                    <Route path={'/add'} element={<AddStagiaire/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
