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
	if (unicornStatus === 4) { per = 30}
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

/* Unicorn Matching
1 - Already Unicorn - high arr or raise
2 - Strong revenue, close to unicorn
3 - Steady growth, young with decent numbers?
4 - Big raise, but not unicorn level
5 - Off track
*/

function getUnicornStatus(priorarr, arrGrowth, totalRaised, ageNow) {
    var growth = arrGrowth/100+1
    var nextarr = priorarr * growth
	if(priorarr >= 100 || totalRaised >= 500) {
		return 1;
	}
	if(nextarr >= 70 && arrGrowth >= 50 && priorarr >= 25) {
		return 2;
	}
	if(nextarr >= 100 && arrGrowth >= 35 && priorarr >= 20) {
		return 2;
	}
	if(totalRaised >= 100 && ageNow < 96 && arrGrowth >= 25 && priorarr >= 25) {
		return 3;
	}
	if(totalRaised >= 25 && ageNow < 48 && arrGrowth > 50) {
	    return 3;
	}
	if(priorarr * arrGrowth / 50 >= Math.pow(2, (ageNow/12)) && ageNow >= 24) {
	    return 3;
	}
	if(nextarr >= 90 && arrGrowth >= 20) {
	    return 3;
	}
	if(totalRaised >= 100) {
		return 4;
	}
	return 5;
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
    if(unicornStatus == 3) {
        if(page == 0) {
            return "workday"
        }
        return "cloudera"
    }
    if(unicornStatus == 4) {
        return "quora"
    }
    if(unicornStatus == 5) {
        if(page == 0) {
            return "creditkarma"
        }
        return "slack"
    }

}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var foundedMonth = getMonth(getUrlVars()['foundedMonth'])
var foundedYear = getUrlVars()['foundedYear']
var firstRoundMonth = getMonth(getUrlVars()['firstRoundMonth'])
var firstRoundYear = getUrlVars()['firstRoundYear']
var firstRoundAmt = getUrlVars()['firstamt']
var rounds = getUrlVars()['totalrounds']
var totalAmountRaised = getUrlVars()['totalamt']
var sector = getUrlVars()['sector']
var priorARRRaw = getUrlVars()['lastarr']
var arrGrowthRaw = getUrlVars()['arrgrowth']
var redirect = getUrlVars()['redirect']

/*
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
var redirect = urlParams.get('redirect')
*/

if(rounds == 1) {
    firstRoundAmt = totalAmountRaised
}
if(rounds == 0) {
    totalAmountRaised = 0
    firstRoundAmt = 0
    firstRoundMonth = 11
    firstRoundYear = 2018
}

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
let ageInYears = Math.round( (ageNow / 12) * 10) / 10

console.log("\n\nUnicorn status: " + unicornStatus)
console.log("totalRaisedStatus: " + totalRaisedStatus)
console.log("firstRoundStatus: " + firstRoundStatus)
console.log("roundSpeedStatus: " + roundSpeedStatus)
console.log("unicornPercent: " + unicornPercent)


if(redirect != 1) {
    var params = "un=" + unicornPercent + "&ag=" + ageInYears + "&ra=" + totalRaised + "&nr=" + rounds + "&re=" + priorARRRaw + "&rg=" + arrGrowthRaw
    var page = similarCompany(unicornStatus)
    window.location.replace("http://fullinpartners.com/" + page + "?" + params)
}