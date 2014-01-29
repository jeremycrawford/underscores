console.log("Beneath lies my underscores");var bands=[{title:"Between the Buried and Me",style:"Progressive Metal",yearStarted:2e3,location:"Raleigh, North Carolina"},{title:"As I lay Dying",style:"Metalcore",yearStarted:2e3,location:"San Diego, California"},{title:"August Burns Red",style:"Metalcore",yearStarted:2003,location:""},{title:"The Number Twelve Looks Like You",style:"Mathcore",yearStarted:2002,location:"Fair Lawn, New Jersey"},{title:"In Flames",style:"Swedish Metal",yearStarted:1990,location:"Gothenburg, Sweden"},{title:"Eluveitie",style:"Swiss Folk Metal",yearStarted:2002,location:"Winterthur, Zurich"}];_.rest(bands),console.log("01 | _.rest | Generates all the items within the object besides the first."),_.first(bands),console.log("02 | _.first | The first underscore is _.first and allows you to select the first object in an array."),_.pluck(bands,"location"),console.log("03 | _.pluck | Pluck allows you to select certain lists of elements from within your objects."),_.isArray(bands),console.log("04 | _.isArray | allows me to check if the variable is an array."),_.isObject(bands),console.log("05 | _.isObject | Allows me to confirm if the variable "),_.pairs(bands),console.log("06 | _.pairs | allows me to confirm if the variable "),_.invert({title:"Between the Buried and Me",style:"Progressive Metal",yearStarted:2e3,location:"Raleigh, North Carolina"}),console.log("07 | _.invert | Inverts everything within the selected object within the array."),_.clone({title:"Eluveitie",style:"Swiss Folk Metal",yearStarted:2002,location:"Winterthur, Zurich"}),console.log("08 | _.clone | Clones the object that was selected."),_.countBy(bands,"title"),console.log("09 | _countBy | Selects the style and tells me how many had the same style of music."),_.findWhere(bands,{title:"In Flames"}),console.log("10 | _.findWhere | Finds a certain instance of an object."),_.groupBy(bands,"style"),console.log("11 | _.groupBy | Groups the objects with the same style together."),_.size(bands),console.log("12 | _.size | Calls for the number of objects within the array."),_.where(bands,{yearStarted:2e3}),console.log("13 | _.where | Calls for specific objects that include the integer 2000"),_.object(["title","style","yearStarted","location"],["As I lay Dying","Metalcore","2000","San Diego, California"]),console.log("14 | _.object | Sets the strings within the array as objects."),_.countBy(bands,function(a){return"Winterthur, Zurich"==a.location?"Zurich":"on tour"}),console.log("15 | _.countBy | This counts and returns with location and on tour.");var bandNames=["Between the Buried and Me","As I lay Dying","August Burns Red","The Number Twelve Looks Like You","In Flames","Eluveitie"];_.indexOf(bandNames,"The Number Twelve Looks Like You"),console.log("16 | _.indexOf | Allows me to return the index location of the selected list item."),_.without(bandNames,"In Flames","As I lay Dying"),console.log("17 | _.without | Allows me to leave out certain listed items within my list."),_.shuffle(bandNames),console.log("18 | _.shuffle | Shufles everything within the selected list."),_.sample(bandNames,3),console.log("19 | _.sample | Sample allows you to generate a certain number of items within a list."),_.has(bandNames,"As I lay Dying"),console.log("20 | _.has | Looks inside the array for the certain string and returns true or false.");