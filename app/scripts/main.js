console.log('Beneath lies my underscores')



///////////////////////////////////////////////////////////////////////////
///////////////////////// ARRAY WITH OBJECTS //////////////////////////////
///////////////////////////////////////////////////////////////////////////



var bands = [
	{title: 'Between the Buried and Me', style: 'Progressive Metal', yearStarted: 2000, location: 'Raleigh, North Carolina'},

	{title: 'As I lay Dying', style: 'Metalcore', yearStarted: 2000, location: 'San Diego, California'},

	{title: 'August Burns Red', style: 'Metalcore', yearStarted: 2003, location: ''},

	{title: 'The Number Twelve Looks Like You', style: 'Mathcore', yearStarted: 2002, location: 'Fair Lawn, New Jersey'},

	{title: 'In Flames', style: 'Swedish Metal', yearStarted: 1990, location: 'Gothenburg, Sweden'},

	{title: 'Eluveitie', style: 'Swiss Folk Metal', yearStarted: 2002, location: 'Winterthur, Zurich'}
];



//////////// NUMBER ONE //////////////


_.rest(bands);
console.log('01 | _.rest | Generates all the items within the object besides the first.')
// This allowed me to generate a list of the objects besides the first one.



//////////// NUMBER TWO //////////////



_.first(bands);
console.log('02 | _.first | The first underscore is _.first and allows you to select the first object in an array.')
// This allowed me to select the first object within the array.



//////////// NUMBER THREE //////////////


_.pluck(bands, 'location');
console.log('03 | _.pluck | Pluck allows you to select certain lists of elements from within your objects.')
//This allowed me to either call out different attributes within the objects.


//////////// NUMBER FOUR //////////////


_.isArray(bands);
console.log('04 | _.isArray | allows me to check if the variable is an array.')
// This let me confirm that the variable bands was an array.


//////////// NUMBER FIVE //////////////


_.isObject(bands);
console.log('05 | _.isObject | Allows me to confirm if the variable ')
// Allowed me to confirm that the variable was an object.


//////////// NUMBER SIX //////////////


_.pairs(bands);
console.log('06 | _.pairs | allows me to confirm if the variable ')
// Allowed me to confirm that the variable was an object.


//////////// NUMBER SEVEN //////////////


_.invert({title: 'Between the Buried and Me', style: 'Progressive Metal', yearStarted: 2000, location: 'Raleigh, North Carolina'});
console.log('07 | _.invert | Inverts everything within the selected object within the array.')
// Allowed me to confirm that the variable was an object.


//////////// NUMBER EIGHT //////////////


_.clone({title: 'Eluveitie', style: 'Swiss Folk Metal', yearStarted: 2002, location: 'Winterthur, Zurich'});
console.log('08 | _.clone | Clones the object that was selected.')
// Allowed me to confirm that the variable was an object.


//////////// NUMBER NINE //////////////


_.countBy(bands, 'title');
console.log('09 | _countBy | Selects the style and tells me how many had the same style of music.')
// Object {Progressive Metal: 1, Metalcore: 2, Mathcore: 1, Swedish Metal: 1, Swiss Folk Metal: 1…}
// Counts each instance of whatever category you choose.


//////////// NUMBER TEN //////////////


_.findWhere(bands, {title: 'In Flames'});
console.log('10 | _.findWhere | Finds a certain instance of an object.')


//////////// NUMBER ELEVEN //////////////


_.groupBy(bands, 'style');
console.log('11 | _.groupBy | Groups the objects with the same style together.')
// 


//////////// NUMBER TWELVE //////////////


_.size(bands);
console.log('12 | _.size | Calls for the number of objects within the array.')
// Calls for the amount of objects that I have within the array.


//////////// NUMBER THIRTEEN //////////////


_.where(bands, {yearStarted: 2000});
console.log('13 | _.where | Calls for specific objects that include the integer 2000')


//////////// NUMBER FOURTEEN //////////////


_.object(['title', 'style', 'yearStarted', 'location'], ['As I lay Dying', 'Metalcore', '2000', 'San Diego, California']);
console.log('14 | _.object | Sets the strings within the array as objects.')


///////////// NUMBER FIFTEEN //////////////


_.countBy(bands, function(loc) { return loc.location == 'Winterthur, Zurich' ? 'Zurich': 'on tour';});
console.log('15 | _.countBy | This counts and returns with location and on tour.')




///////////////////////////////////////////////////////////////////////////
//////////////////////////// ARRAY WITH STRINGS ///////////////////////////
///////////////////////////////////////////////////////////////////////////




var bandNames = ['Between the Buried and Me', 'As I lay Dying', 'August Burns Red', 'The Number Twelve Looks Like You', 'In Flames', 'Eluveitie'];


//////////// NUMBER SIXTEEN //////////////


_.indexOf(bandNames, 'The Number Twelve Looks Like You');
console.log('16 | _.indexOf | Allows me to return the index location of the selected list item.')
// I selected 'The Number Twelve Looks Like You' and it returned 3 because of the placement in the list.


//////////// NUMBER SEVENTEEN //////////////


_.without(bandNames, 'In Flames', 'As I lay Dying');
console.log('17 | _.without | Allows me to leave out certain listed items within my list.')
// This allowed me to leave out certain items within the list when generated.


//////////// NUMBER EIGHTEEN //////////////


_.shuffle(bandNames);
console.log('18 | _.shuffle | Shufles everything within the selected list.')
// This shuffles the list within an array.


//////////// NUMBER NINETEEN //////////////


_.sample(bandNames, 3);
console.log('19 | _.sample | Sample allows you to generate a certain number of items within a list.')
// With sample you are able to either sample one at a time or call out a certain number for it to generate.


///////////// NUMBER TWENTY //////////////


_.has(bandNames, 'As I lay Dying');
console.log('20 | _.has | Looks inside the array for the certain string and returns true or false.')
// Has will look inside the array and return true or false depending on the string name.








