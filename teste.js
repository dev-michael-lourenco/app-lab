// Exercicio 3: HackerRank

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    var result =[0,0]
  
    for(var i=0;i<=a.length-1; i++){
        if(a[i] > b[i]){
            result[0]= result[0]+1
        }
        else if(a[i]<b[i]){
            result[1]=result[1]+1
        }
        else {
            result=result
        }
    }
    return result;  
}

const compare = compareTriplets([5,6,7],[3,6,10])
console.log(compare)

