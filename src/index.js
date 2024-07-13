
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

console.log("Promise output:" + doesFileExistPromise("./pokemonStats.json"));
console.log("Sync output:" + doesFileExistSync("./pokemonStats.json"));

(async () => {
	let asyncResult = await doesFileExistAsync("./pokemonStats.json");
	console.log("Async output:" + asyncResult.size);
})();

async function doesFileExistAsync(targetPath){
	return await fsPromises.stat(targetPath);
    
    // let result = false;
    // result = (await fsPromises.stat(targetPath)).size;
    // return result;
}

function doesFileExistPromise(targetPath){
    let result = false

    return new Promise((resolve, reject) => {
        fsPromises.stat(targetPath).then(statData => {
            if (statData.size || statData.birthtimeMs) {
                result = true;
                console.log(result)
                resolve(result);
            } else {
                resolve(result);
            }
        }).catch(error => {
            reject(error);
        });
    });

    fsPromises.stat(targetPath).then(statData => {
        if (statData.size || statData.birthtimeMs) {
            result = true;
            return result;
        } else {
            return false;
        }
    })
   
    // function(data, data, whatever, callbackFunction)
    // fs.exists(targetPath, doSomethingWithResult())
    // fs.exists(targetPath, (existsResult) => {
    // result = existsResult;
    // return result;
    // });
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

async function loadDataFromFile(targetPath){
    let data = null;

    let doesFileExist = await doesFileExistAsync(targetPath);
    if (doesFileExist){
        // data is null
        data = await fsPromises.readFile(targetPath,  { encoding: 'utf8' });
        // data is a string
        data = JSON.parse(data);
        // data is an object
        console.log("Pokemon caught is: " + data["pokemonCaught"]);
    }

    return data;
}

(async () => {

	let fileData = await loadDataFromFile("./pokemonStats.json");
	console.log(fileData);
})()


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