let TotalCats = 50
let CatsInRow = 9

const ToalCatsRow = Math.floor(TotalCats/CatsInRow);
const CatsLeftOutside = TotalCats % CatsInRow;
const MissingCats = CatsInRow -CatsLeftOutside;

console.log(`ci sono ${CatsInRow} file di gatti, ne mancano ${CatsLeftOutside} per una nuova fila, ma ne rimangono ${MissingCats} fuori`);
