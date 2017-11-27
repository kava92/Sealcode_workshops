var table = ['1', '2', '3'];
function getReverseTable(table){
    var newTable = [];
    for(var i = 0; i < table.length; i++){
        newTable[i] = table[table.length - i -1]; 
    }
    return newTable;
}

console.log(getReverseTable(table));