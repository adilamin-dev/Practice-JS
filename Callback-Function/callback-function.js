const getVarC = (callback) => {
   setTimeout(function() {
      console.log('A Function that takes some time');
      callback();
   }, 3000)
}

const printSomethingC = () => {
   console.log('Another Function');
}

getVarC(printSomethingC); 