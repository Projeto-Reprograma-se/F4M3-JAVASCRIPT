const prompt = require('prompt-sync')();

n = parseInt(prompt("Digite um número: "));
par = 0;
imp = 0;

for(i = 0;i < 20;i++){
  p = (n+i) * (n+i);
    console.log(p);
      if(p % 2 === 0){
        par = par + p;
          }else{
            imp = imp + p;
          }
};

  console.log("A soma de quadrados pares: ",par);
  console.log("A soma de quadrados ímpares: ",imp);

