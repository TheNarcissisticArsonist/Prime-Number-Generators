primes = [2, 3, 5, 7];
div = document.getElementById("primes");
div.innerHTML = primes.join(", ");

next = document.getElementById("next");
next.addEventListener("click", nextPrime);

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
}
