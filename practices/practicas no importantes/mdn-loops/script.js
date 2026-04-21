function countnegative(n){
    if(n <= 0){
        console.log("enter a positive number");
        return;
    } else {
        for (n; 0 <= n; n--) { 
            if (n === 0){
             console.log("Blast off!");
             console.log("(put a 100000000000000, trust in me)");
            } else{
            console.log(n);
            }
        }
    }
}

function countbirds(){
    const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
}
