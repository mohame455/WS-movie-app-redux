import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../const/actionTypes";

const initialState = {
  movies: [
    {
      title: `The godfather`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg`,
      description: `The aging patriarch of an organized crime 
                 dynasty transfers control of his clandestine 
                 empire to his reluctant son.`,
      rate: 5,
      //   src: "https://www.youtube.com/embed/kTlhEX0kmL8",
      id: Math.random(),
    },
    {
      title: `Fight club`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg`,
      description: `An insomniac office worker and 
                 a devil-may-care soapmaker form an underground
                  fight club that evolves into something much, 
                  much more.`,
      rate: 4,
      //   src: "https://www.youtube.com/embed/_XgQA9Ab0Gw",
      id: Math.random(),
    },
    {
      title: `The illusionist`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BY2VkMzZlZDAtNTkzNS00MDIzLWFmOTctMWQwZjQ1OWJiYzQ1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX700_AL_.jpg`,
      description: `In turn-of-the-century Vienna, 
                 a magician uses his abilities to secure the 
                 love of a woman far above his social standing.`,
      rate: 3,
      //   src: "https://www.youtube.com/embed/vUo7fqHOIOw",
      id: Math.random(),
    },
    {
      title: `American History X`,
      posterUrl: `https://m.media-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg`,
      description: `A former neo-nazi skinhead
                  tries to prevent his younger brother 
                  from going down the same wrong path that he did.`,
      rate: 2,
      //   src: "https://www.youtube.com/embed/XfQYHqsiN5g",
      id: Math.random(),
    },
  ],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, payload] };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === payload.id ? { ...movie, ...payload } : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };

    default:
      return state;
  }
};

export default movieReducer;
