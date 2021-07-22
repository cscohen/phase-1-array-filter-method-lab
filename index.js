// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(el => el.toLowerCase() === name.toLowerCase())
    }
    
function fuzzyMatch(drivers, letters) {
    return drivers.filter(el => el.startsWith(letters))
    }
    
function matchName(drivers,  match) {
    return drivers.filter(el => el.name === match)
    }