function getMonth(month) {
	if (month === "January") {
		return 1;
	}
	if (month === "February") {
		return 2;
	}
	if (month === "March") {
		return 3;
	}
	if (month === "April") {
		return 4;
	}
	if (month === "May") {
		return 5;
	}
	if (month === "June") {
		return 6;
	}
	if (month === "July") {
		return 7;
	}
	if (month === "August") {
		return 8;
	}
	if (month === "September") {
		return 9;
	}
	if (month === "October") {
		return 10;
	}
	if (month === "November") {
		return 11;
	}
	if (month === "December") {
		return 12;
	}
	return 6; //This shouldn't happen, but let's just split the differnece just in case
}


function age(y1, m1, y2, m2) {
	var temp = (y1 - y2) * 12 + m1 - m2;
	if (temp < 1) {
		return 1;
	}
	return temp;
}

function ageOld(date1, date2) {
    dt1 = new Date(date1)
    dt2 = new Date(date2)
    return (dt1.getFullYear() - dt2.getFullYear()) * 12 + dt1.getMonth() - dt2.getMonth() + (dt1.getDate() - dt2.getDate())/30
}

function getTotalRaisedStatus(totalRaised, ageNow) {
	if(totalRaised > 100 && ageNow < 96) {
		return 1;
	}
	if(totalRaised > 100) {
		return 2;
	}
	if(totalRaised > 20 & ageNow < 36) {
		return 2;
	}
	if(totalRaised > 20 & ageNow < 96) {
		return 3;
	}
	if(ageNow < 36) {
		return 3;
	}
	return 4;
}

function getFirstRoundStatus(firstAmt) {
	if(firstAmt > 20) {
		return 1;
	}
	return 2;
}

function getRoundSpeedStatus(roundsPerYear) {
	if(roundsPerYear > 0.8) {
		return 1;
	}
	if(roundsPerYear > 0.5) {
		return 2;
	}
	return 3;
}

function getUnicornPercent(unicornStatus, totalRaisedStatus, firstRoundStatus, roundSpeedStatus) {
	let per = 0
	if (unicornStatus === 1) { per = 90}
	if (unicornStatus === 2) { per = 70}
	if (unicornStatus === 3) { per = 50}
	if (unicornStatus === 4) { per = 40}
	if (unicornStatus === 5) { per = 10}

	if(totalRaisedStatus === 1) { per = per + 7 }
	if(totalRaisedStatus === 1) { per = per + 4 }
	if(totalRaisedStatus === 1) { per = per + 1 }
	if(totalRaisedStatus === 1) { per = per - 3 }

	if(firstRoundStatus === 1) { per = per + 5 }

	if(roundSpeedStatus === 1) { per = per + 4 }
	if(roundSpeedStatus === 2) { per = per + 0 }
	if(roundSpeedStatus === 3) { per = per - 2 }

	if(per > 100) { per = 100 }
	if(per < 1) { per = 1 }

	return per;
}

/* Unicorn status codes
1 - Already a unicorn
2 - Close to unicorn and growing
3 - Big but not growing
4 - small to mid and on the path
5 - small to mid and not on path
*/
function getUnicornStatus(priorarr, arrGrowth, totalRaised, ageNow) {
	if(priorarr > 100 || totalRaised > 500) {
		return 1;
	}
	if(priorarr > 35 && arrGrowth > 75) {
		return 2;
	}
	if(totalRaised > 100 && ageNow < 96 && arrGrowth > 25) {
		return 2;
	}
	if(totalRaised > 100) {
		return 3;
	}
	if(totalRaised > 20 && ageNow < 36) {
		return 4;
	}
	if(priorarr > 5 && arrGrowth > 100) {
		return 4;
	}
	return 5;
}

function showTotalRaisedResults(totalRaisedStatus) {
	if(totalRaisedStatus === 1) {
		document.getElementById("totalRaisedImg").innerHTML = getStarImage(5)
		document.getElementById("totalRaisedText").innerHTML = "The amount of funding raised at this stage of a company looks a whole lot like a unicorn in the making!"
	}
	if(totalRaisedStatus === 2) {
		document.getElementById("totalRaisedImg").innerHTML = getStarImage(4)
		document.getElementById("totalRaisedText").innerHTML = "You've raised a lot of funding pretty fast, but many unicorns do even more."
	}
	if(totalRaisedStatus === 3) {
		document.getElementById("totalRaisedImg").innerHTML = getStarImage(3)
		document.getElementById("totalRaisedText").innerHTML = "The funding you've raised so far is pretty normal for successful companies, but not necessarily unicorns."
	}
	if(totalRaisedStatus === 4) {
		document.getElementById("totalRaisedImg").innerHTML = getStarImage(1)
		document.getElementById("totalRaisedText").innerHTML = "The funding you've done so far doesn't look like most unicorns of the past few decades."
	}
}

function showFirstRoundResults(firstRoundStatus) {
	if(firstRoundStatus === 1) {
		document.getElementById("firstRoundImg").innerHTML = getStarImage(5)
		document.getElementById("firstRoundText").innerHTML = "Many unicorns have quickly raised large early rounds, just as you have!"
	}

	document.getElementById("firstRoundImg").innerHTML = getStarImage(3)
	document.getElementById("firstRoundText").innerHTML = "Your first round is in a normal range, not predictive one way or another of becoming a unicorn."
}

function showRoundSpeedResults(roundSpeedStatus) {
	if(roundSpeedStatus === 1) {
		document.getElementById("roundSpeedImg").innerHTML = getStarImage(5)
		document.getElementById("roundSpeedText").innerHTML = "The speed at which you've raised additional funding looks just like a future unicorn!"
	}
	if(roundSpeedStatus === 2) {
		document.getElementById("roundSpeedImg").innerHTML = getStarImage(3)
		document.getElementById("roundSpeedText").innerHTML = "You've raised additoinal funding at an average pace for successful startups, not predictive either way of being a unicorn"
	}
	if(roundSpeedStatus === 3) {
		document.getElementById("roundSpeedImg").innerHTML = getStarImage(1)
		document.getElementById("roundSpeedText").innerHTML = "You've been raising additional funding a fair bit slower than most unicorns in recent history."
	}
}

function getStarImage(num) {
	if(num === 1) { return img("/UnicornResults/img/1Star.png") }
	if(num === 2) { return img("/UnicornResults/img/2Stars.png") }
	if(num === 3) { return img("/UnicornResults/img/3Stars.png") }
	if(num === 4) { return img("/UnicornResults/img/4Stars.png") }
	if(num === 5) { return img("/UnicornResults/img/5Stars.png") }
}

function img(loc) {
    return "<img src=" + loc + ">"
}

function showUnicornResults(unicornStatus, unicornPercent) {
	document.getElementById("unicornPercent").innerHTML = unicornPercent + "% Unicorn"

	if(unicornStatus == 1) {
		document.getElementById("unicornText").innerHTML = "You already look like a unicorn!  Way to go!"
		document.getElementById("unicornImg").innerHTML = img("/UnicornResults/img/unicorn3.png")
	}
	if(unicornStatus == 2) {
		document.getElementById("unicornText").innerHTML = "You're getting close to being a unicorn and on the right path!  Keep it up!"
		//TODO: Replace the photo
		document.getElementById("unicornImg").innerHTML = img("/UnicornResults/img/unicorn3.png")
	}
	if(unicornStatus == 3) {
		document.getElementById("unicornText").innerHTML = "You've gotten pretty big, but your growth has slowed from what most unicorns have done."
		document.getElementById("unicornImg").innerHTML = img("/UnicornResults/img/unicorn1.png")
	}
	if(unicornStatus == 4) {
		document.getElementById("unicornText").innerHTML = "You're still early in the journey, but so far you're on the right path!"
		document.getElementById("unicornImg").innerHTML = img("/UnicornResults/img/unicorn1.png")
	}
	if(unicornStatus == 5) {
		document.getElementById("unicornText").innerHTML = "You're really early in the journey and not yet on the path most unicorns take."
		//TODO: Replace teh photo
		document.getElementById("unicornImg").innerHTML = img("/UnicornResults/img/unicorn1.png")
	}

}

function similarCompany(unicornStatus) {
    var page = Math.floor(Math.random() * 2)
    if(unicornStatus == 1) {
        return "airbnb"
    }
    if(unicornStatus == 2) {
        if(page == 0) {
            return "rovio"
        }
        return "squarespace"
    }
    if(unicornStatus = 4) {
        return "quora"
    }

    if(page == 0) {
        return "mature-unicorn-airbnb"
    }
    if(page == 1) {
        return "mature-unicorn-airbnb"
    }
}

var urlParams = new URLSearchParams(window.location.search)

var foundedMonth = getMonth(urlParams.get('foundedMonth'))
var foundedYear = urlParams.get('foundedYear')
var firstRoundMonth = getMonth(urlParams.get('firstRoundMonth'))
var firstRoundYear = urlParams.get('firstRoundYear')
var firstRoundAmt = urlParams.get('firstamt')
var rounds = urlParams.get('totalrounds')
var totalAmountRaised = urlParams.get('totalamt')
var sector = urlParams.get('sector')
var priorARRRaw = urlParams.get('lastarr')
var arrGrowthRaw = urlParams.get('arrgrowth')

var ageAtFirstRound = age(firstRoundYear, firstRoundMonth, foundedYear, foundedMonth)
var ageNow = age(2018, 11, foundedYear, foundedMonth)
var firstAmt = parseFloat(firstRoundAmt)
var roundsPerYear = rounds / ageNow * 12
var totalRaised = parseFloat(totalAmountRaised)
var priorarr = parseFloat(priorARRRaw)
var arrGrowth = parseFloat(arrGrowthRaw)

console.log("Age at first round: " + ageAtFirstRound)
console.log("Age now: " + ageNow)
console.log("Rounds: " + rounds)
console.log("Rounds per year: " + roundsPerYear)
console.log("First round amt: " + firstAmt)
console.log("Total raised amt: " + totalRaised)
console.log("Sector: " + sector)
console.log("Prior ARR: " + priorarr)
console.log("ARR Growth: " + arrGrowth)

let unicornStatus = getUnicornStatus(priorarr, arrGrowth, totalRaised, ageNow)
let totalRaisedStatus = getTotalRaisedStatus(totalRaised, ageNow)
let firstRoundStatus = getFirstRoundStatus(firstAmt)
let roundSpeedStatus = getRoundSpeedStatus(roundsPerYear)
let unicornPercent = getUnicornPercent(unicornStatus, totalRaisedStatus, firstRoundStatus, roundSpeedStatus)

console.log("\n\nUnicorn status: " + unicornStatus)
console.log("totalRaisedStatus: " + totalRaisedStatus)
console.log("firstRoundStatus: " + firstRoundStatus)
console.log("roundSpeedStatus: " + roundSpeedStatus)
console.log("unicornPercent: " + unicornPercent)

//These need corresponding UI elements to modify
//showUnicornResults(unicornStatus, unicornPercent)
//showTotalRaisedResults(totalRaisedStatus)
//showFirstRoundResults(firstRoundStatus)
//showRoundSpeedResults(roundSpeedStatus)

//Alternatively, just redirect to another page.  Use above calcs to pass parameters
var params = "un=" + unicornPercent + "&ag=" + ageNow + "&ra=" + totalRaised + "&nr=" + rounds + "&re=" + priorARRRaw + "&rg=" + arrGrowthRaw
var page = similarCompany(unicornStatus)
window.location.replace("http://fullinpartners.com/" + page + "?" + params)