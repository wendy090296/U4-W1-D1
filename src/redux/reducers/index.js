// qui ci va il reducer, la funzione PURA
// questa funzione fornita di paramentri, torna sempre lo stesso output

//il reducer necessita di uno stato iniziale e, di solito lo stato di redux é un oggetto con più sottoggetti

const initialState = {
  favourites: {
    content: [],
  },
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    // type sempre obbligatorio
    case "ADD-TO-FAVOURITES":
      return {
        ...state,
        content: [...state.favourites.content, action.playload],
      };

    case "REMOVE-FROM-FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (job, i) => i !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
