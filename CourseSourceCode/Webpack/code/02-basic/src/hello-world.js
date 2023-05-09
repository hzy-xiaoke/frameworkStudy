function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello webpack!');
    }, 2000);
  });
}

async function helloWorld(){
  let message = await getString();
  console.log(message);
}

export default helloWorld;