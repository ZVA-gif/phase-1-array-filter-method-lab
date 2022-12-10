// Code your solution here
const drivers = [
{
    name: 'Adam',
    hometown: 'Albany'
},
{
    name: 'Bob',
    hometown: 'Bosie',
},
{
    name: 'Cassie',
    hometown: 'Chicago',
},
{
    name: 'Dylan',
    hometown: 'Denver',
},
{
    name: 'Ellie',
    hometown: 'Eugene',
},
{
    name: 'Frankie',
    hometown: 'Fort Worth',
},
];

function findMatching(drivers, attribute) {
    return drivers.filter(function(driver){
        return driver.toLowerCase() === attribute.toLowerCase()
    }
    )

}

function fuzzyMatch(drivers, attribute){
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase()

    })
}

function matchName(drivers, argument){
    return drivers.filter(function(driver){
        return driver.name === argument
    })

}