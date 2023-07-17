const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`);

copied = {
    id : 6 ,
    name : 'X-mass Day',
    date :new Date(`25 December${currentYear}`),
}

 const correctDate = copied.date.setHours(0,0,0)
 isEarlier = copied.date.getTime() < holidays[6].date.getTime()
console.log('New date is earlier:', isEarlier)

if (isEarlier){}
console.log('ID change:', holidays[christmas].id !== copied.id ? copied.id : false);
console.log('Name change:', holidays[6].name !== copied.name ? copied.name : false);
console.log('Date change:', holidays[christmas].date !== copied.date ? `${copied.date.getDate().toString().padStart(2, '0')}/${(copied.date.getMonth() + 1).toString().padStart(2, '0')}/${copied.date.getFullYear()}` : holidays[christmas].date);



const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log(`${firstDay .getDate().toString().padStart(2, '0')}/${(firstMonth.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`);
console.log(`${lastDay .getDate().toString().padStart(2, '0')}/${(lastMonth.getMonth() + 1).toString().padStart(2, '0')}/${currentYear}`);


const randomHoliday = holidays[Math.random] 
console.log(`${randomHoliday.date.getDate().toString().padStart(2, '0')}/${(randomHoliday.date.getMonth() + 1).toString().padStart(2, '0')}/${randomHoliday.date.getFullYear()}`);


