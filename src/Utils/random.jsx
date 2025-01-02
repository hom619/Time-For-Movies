export const randomChar = () => {
  const str = "zxcvbnmasdfghjklqwertyuiop";
  return str[Math.floor(Math.random() * str.length)];
};
