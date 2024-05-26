
const fs = require("node:fs");

console.log("Promise output:" + doesFileExist("./pokemonStats.json"));
console.log("Sync output:" + doesFileExistSync("./pokemonStats.json"));

function doesFileExist(targetPath){
    let result = false
   
    // function(data, data, whatever, callbackFunction)
    // fs.exists(targetPath, doSomethingWithResult())
   fs.exists(targetPath, (existsResult) => {
    result = existsResult;
    return result;
   });
    // if (existsResult){
    //     result = true;
    // } else {
    //     result = false;
    // }
//     result = existsResult;
//    }).catch((error) => {
//         console.error(error);
//    });

   // return result;
}

function doesFileExistSync(targetPath){
    let result = false

    if (fs.existsSync(targetPath)){
        result = true;
    } else {
        result = false;
    }

    // TODO: Find file logic goes here
    // Take time as well, but we can force the app to halt
    // until it have a result

    return result;
}

function createJsonFile(targetPath, data){
    // TODO: Wishlist item because a json file already exists for us

}

function loadDataFromFile(targetPath){
    let data = null;

    // TODO: Load data from file logic goes here
    // Reading data from files takes time
    // promises or async/await

    return data;
}

/*
Technique 1 to modify keys in JSON:
function editPokemonCaught(newData){}
function editFavouriteType(newData){}
function editPokemonCompletionNumber(newData){}
*/

/*
Class voted for this one!!!
Technique 2 to modify keys in JSON:
function editKey(targetKey, newData){}
*/

function saveDataToFile(targetPath, data){
    // TODO: Wrtie data to JSON file logic goes here
}