var obj = new Promise((resolve,reject)=> {
	//resolve("Successfully Done"),
	reject("Error Generated...")
})

obj.then(data=>console.log(data)).catch(error=>console.log(error));
console.log("Done1")
console.log("Done2")
console.log("Done3")
console.log("Done4")
console.log("Done5")

