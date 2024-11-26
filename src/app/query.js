export const query = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World'+Math.random());
    }, 2000);
  });
};
