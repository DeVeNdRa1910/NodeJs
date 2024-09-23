const fs = require('fs')

// create file
// Sync...
// fs.writeFileSync('./text.txt', "use it if you are not handling async JS")


// Async...
// fs.writeFile('./text.txt', "use it if you are handling async JS", (error)=>{
//   console.log(error);
// })

//read Files

// sync
// const result = fs.readFileSync('./contacts.txt', 'utf-8')
// console.log(result); 

//async
// fs.readFile('./contacts.txt', 'utf-8', (err, result)=>{
//   if(err){
//     console.log("Error:", err); 
//   } else {
//     console.log("Result:", result); 
//   }
// })

/* 
Sync methods always return result while async method aspact a callback
*/


// create file and add new content every time
fs.appendFileSync('./text.txt', `${Date.now()} Hey There\n`)

//create copy of file
fs.cpSync('./contacts.txt', './copy.txt')