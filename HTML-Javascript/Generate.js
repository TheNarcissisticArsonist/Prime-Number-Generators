primes = [2, 3, 5, 7];
div = document.getElementById("primes");
div.innerHTML = primes.join(", ");

next = document.getElementById("next");
next.addEventListener("click", nextPrime);

next10 = document.getElementById("next10");
next10.addEventListener("click", function() {
  for(j=0; j<10; j++) {
    nextPrime();
  }
});

next100 = document.getElementById("next100");
next100.addEventListener("click", function() {
  for(j=0; j<100; j++) {
    nextPrime();
  }
});

next1000 = document.getElementById("next1000");
next1000.addEventListener("click", function() {
  for(j=0; j<1000; j++) {
    nextPrime();
  }
});

next10000 = document.getElementById("next10000");
next10000.addEventListener("click", function() {
  for(j=0; j<10000; j++) {
    nextPrime();
  }
});

next100000 = document.getElementById("next100000");
next100000.addEventListener("click", function() {
  for(j=0; j<100000; j++) {
    nextPrime();
  }
});

document.addEventListener("keydown", function(event) {
  console.log(event.which);
  if(event.which == 13) {
    nextPrime();
  }
});


function nextPrime() {
  currentNum = primes[primes.length - 1];
  foundNext = false;
  while(!foundNext) {
    currentNum++;
    broke = false;
    for(i=0; i<primes.length; i++) {
      if(currentNum % primes[i] == 0) {
        broke = true;
        break;
      }
    }
    if(!broke) {
      foundNext = true;
      primes.push(currentNum);
    }
  }
  div.innerHTML = primes.join(", ");
  document.getElementById("current").innerHTML = primes.length;
}
