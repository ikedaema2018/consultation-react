const sortDataEnum = {
	NEW: "new",
	OLD: "old"
}

export const sortTopWorry = (worries, sortType) => {
	if (sortType === sortDataEnum.NEW) {
		worries.reverse()
	} else if (sortType === sortDataEnum.OLD) {
		{}
	} else {
	　console.log("は？")
		return worries
	}
}