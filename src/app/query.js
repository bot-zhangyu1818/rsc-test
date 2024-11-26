export const query = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 2000);
  });
};
