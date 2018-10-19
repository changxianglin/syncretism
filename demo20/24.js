try {
var ninjas = syncGetJSON("ninjas.json")
var missions = syncGetJSON(ninjas[0].missionUrl)
var missionDetails = syncGetJSON(mission[0].detailsUrl)
}
catch(e) {
)






async(function*() {
	try {
		const ninjas = yield getJSON("ninjas.json")
		const missions = yield getJSON(ninjas[0].missionUrl)
		const missionDescription = yeild getJSON(mission[0].missionUrl)
	}
	catch(e) {

	}
}



function* WeaponGenerator() {
	yield "Katana"
	yield "Wakizashi"
	yield "Kusarigama"
}

for (let weapon of WeaponGenerator()) {
}
