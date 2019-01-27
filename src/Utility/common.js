export function timeToInterval(time): string {
	let send_time = Date.parse(time)
	let now = Date.now()
	let msec_dif = now - send_time
	
	if (msec_dif <= 3600000) {
		let min = msec_dif / 60000
		console.log(Math.round(min))
		return `${Math.round(min)}分前`
	} else if (msec_dif <= 86400000) {
		let hour = msec_dif / 3600000
		console.log(Math.round(hour))
		return `${Math.round(hour)}時間前`
	} else {
		let days = msec_dif / 86400000
		return `${Math.round(days)}日前`}
}

