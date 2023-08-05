const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
};

// Only edit below

const first =  data.lists[0][1];
const second = data.lists[1][1];
const third  = data.lists[2][1];

const extractBiggest = () => {
	const firstLast = first[first.length -1];
  const secondLast = second[second.length -1];
	const thirdLast = third[third.length -1];

if (firstLast > secondLast && firstLast > thirdLast) {
	first.pop();
	return firstLast ;
	
}
if (secondLast > thirdLast && secondLast > firstLast ) {
	second.pop();
	return secondLast;
}
	third.pop();
	return thirdLast
};



// Only edit above

const result = [];

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())


console.log(result);
