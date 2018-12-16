var type = document.querySelector('#type');
var qty = document.querySelector('#qty');
var generateBtn = document.querySelector('#generate');

var numQuotes = 1;
var mixedNum = 5;


function setNumQuotesTo1() {
    numQuotes = 1;
}
function setNumQuotesTo2() {
    numQuotes = 2;
}
function setNumQuotesTo3() {
    numQuotes = 3;
}
function setNumQuotesTo4() {
    numQuotes = 4;
}
function setNumQuotesTo5() {
    numQuotes = 5;
}





function generateQuote(type) {

    var part1 = quotes[type].start[Math.floor(Math.random() * quotes[type].start.length)];
    var part2 = quotes[type].middle[Math.floor(Math.random() * quotes[type].middle.length)];
    var part3 = quotes[type].end[Math.floor(Math.random() * quotes[type].end.length)];
    var part4 = quotes[type].where[Math.floor(Math.random() * quotes[type].where.length)];
    var part5 = quotes[type].when[Math.floor(Math.random() * quotes[type].when.length)];

    return part1 + " " + part2 + " " + part3 + " " + part4 + " " + part5;
}


generateBtn.addEventListener('click', function() {
    for(var i = 0; i < parseInt(qty.value); i++) {
        document.querySelector('#quote').textContent = generateQuote(type.value);
//    console.log('quote:', generateQuote(type.value))   
            
    }
    console.log('ended loop...');
});




var quotes = {
    humans: {
        start: ['The young child', 'The old man', 'An entire family', 'The tall bloke', 'A happy kid', 'The dumb blond', 'A smart lady', 'The idiot man', 'The tiny dwarf', 'A famous celebrity', 'The crazy scientist', 'The moody teenager', 'The handy man', 'The clumsy clown'],
        middle: ['paints a picture', 'with a huge smile', 'took a photo', 'was running late', 'started to record', 'took a trip', 'was really lost', 'with no clue', 'with giant hands', 'with sharp thinking', 'with no clothes', 'with bad breath', 'with bad tattoos', 'with bad timing', 'with weird hair'],
        end: ['falls into bush', 'slipped on ice', 'got sea sick', 'got a present', 'lost their wallet', 'never seen again', 'had sun stroke', 'got a lollipop', 'went really crazy', 'washed their car', 'went for shopping', 'drove for hours', 'lost their car', 'needed an ambulance'],
        where: ['on an island', 'in the jungle', 'on the moutains', 'in the dessert', 'up in space', 'under the ocean', 'in their room', 'in a small house', 'in the city', 'in the lakes', 'on the aeroplane', 'in the sky', 'on the moon', 'at the beach'],
        when: ['back in 1960', 'at a wedding', 'at a funeral', 'in the future', 'in world war1', 'in stone age', 'in the 70s', 'at a party', 'in the ice age', 'at world cup', 'with the dinosours', 'with jesus christ', 'with bruce lee', 'at new years']
    },
    animals: {
        start: ['The young child', 'The old man', 'An entire family', 'The tall bloke', 'A happy kid', 'The dumb blond', 'A smart lady', 'The big dog', 'The tiny dwarf', 'A famous celebrity', 'The crazy scientist', 'The moody teenager', 'The handy man', 'The clumsy clown'],
        middle: ['paints a picture', 'with a huge smile', 'took a photo', 'was running late', 'started to record', 'took a trip', 'was really lost', 'with no clue', 'with giant hands', 'with sharp thinking', 'with no clothes', 'with bad breath', 'with bad tattoos', 'with bad timing', 'with weird hair'],
        end: ['falls into bush', 'slipped on ice', 'got sea sick', 'got a present', 'lost their wallet', 'never seen again', 'had sun stroke', 'got a lollipop', 'went really crazy', 'washed their car', 'went for shopping', 'drove for hours', 'lost their car', 'needed an ambulance'],
        where: ['on an island', 'in the jungle', 'on the moutains', 'in the dessert', 'up in space', 'under the ocean', 'in their room', 'in a small house', 'in the city', 'in the lakes', 'on the aeroplane', 'in the sky', 'on the moon', 'at the beach'],
        when: ['back in 1960', 'at a wedding', 'at a funeral', 'in the future', 'in world war1', 'in stone age', 'in the 70s', 'at a party', 'in the ice age', 'at world cup', 'with the dinosours', 'with jesus christ', 'with bruce lee', 'at new years']
    }
}