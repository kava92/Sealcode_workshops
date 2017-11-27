var n = 10;
var tab = [];

for(var i = 0; i < n; i++){
    tab[i] = [];
    for (var j = 0; j < n; j++){
        if(i<=j){
            tab[i][j] = (i+1)*(j+1);
        }
        else{
            tab[i][j] = 0;
        }
    }
    console.log(tab[i]);
}
