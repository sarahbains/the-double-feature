// Fav Button

function FavButton({ movieObj, remove, handleFavClick }) {

    function handleAddFav(){
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav(){
        handleFavClick(false, movieObj);
    }

    return (
        <>
            {remove === false ? 
            <div className="heart" onClick={handleAddFav}></div> : 
            <div className="heart-remove" onClick={handleRemoveFav}></div>}
                        
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
