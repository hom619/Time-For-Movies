export const storeInLocalStorage = (movieArg) => {
  localStorage.setItem("movieList", JSON.stringify(movieArg));
};

export const accessFromLocalStorage = () => {
  const str = localStorage.getItem("movieList");
  return str ? JSON.parse(localStorage.getItem("movieList")) : null;
};
