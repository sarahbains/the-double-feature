// Global App State

import globalHook from 'use-global-hook';
import { appStorageName } from '../globals/globals';

function getFavs(){
    let favsFromStorage = localStorage.getItem(appStorageName);
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
}

const actions = {
    addFav: (store, movieObj) => {

        const newFavs = [...store.state.favs, movieObj];

        const newFavsForStorage = JSON.stringify(newFavs);
        
        localStorage.setItem(appStorageName, newFavsForStorage);
        
        store.setState({ favs: newFavs });

    },
    removeFav: (store, id) => {

        let currentFavs = store.state.favs;

        const indexOfMovieToRemove = currentFavs.findIndex((movieObj) => movieObj.id === id);
        currentFavs.splice(indexOfMovieToRemove, 1);
    
        let favsForStorage = JSON.stringify(currentFavs);
        localStorage.setItem(appStorageName, favsForStorage);
        
        store.setState({ favs: currentFavs });

    }, 
    setFavs: (store) => {
        store.setState({ favs: getFavs() })
    } 
}

const initialState = {
    favs: getFavs()
}

const useGlobal = globalHook(initialState, actions);

export default useGlobal;