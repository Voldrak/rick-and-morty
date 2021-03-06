import { useStateValue } from "./../Libs/StateProvider";
import style from "./FavoriteCharacters.module.scss"

const FavoriteCharacters = ({id, name, image}) => {
    // eslint-disable-next-line
    const [{ favorite }, dispatch] = useStateValue();

    // ELIMINARE DAI PREFERITI //
    const deleteFromFavorites = () => {
        dispatch({
          type: "delete_char_favorite",
          obj: {
            id,
            image,
            name,
          },
        });
      };


    return(
        <div key={id} className={style.wrapper_Fav}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <button onClick={deleteFromFavorites} className={style.btnRemove}>🗑️</button>
        </div>

    )
}

export default FavoriteCharacters;