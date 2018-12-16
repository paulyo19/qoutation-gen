var type = document.querySelector('#type');
var qty = document.querySelector('#qty');
var generateBtn = document.querySelector('#generate');

var quotes = {
    humans: {
        start: ['The young child', 'The old man', 'An entire family', 'The tall bloke', 'A happy kid', 'The dumb blond', 'A smart lady', 'The big dog', 'The tiny dwarf', 'A famous celebrity', 'The crazy scientist', 'The moody teenager', 'The handy man', 'The clumsy clown'],
        middle: ['paints a picture', 'with a huge smile', 'took a photo', 'was running late', 'started to record', 'took a trip', 'was really lost', 'with no clue', 'with giant hands', 'with sharp thinking', 'with no clothes', 'with bad breath', 'with bad tattoos', 'with bad timing', 'with weird hair'],
        end: ['falls into bush', 'slipped on ice', 'got sea sick', 'got a present', 'lost their wallet', 'never seen again', 'had sun stroke', 'got a lollipop', 'went really crazy', 'washed their car', 'went for shopping', 'drove for hours', 'lost their car', 'needed an ambulance'],
    },
    animals: {
        start: ['The young child', 'The old man', 'An entire family', 'The tall bloke', 'A happy kid', 'The dumb blond', 'A smart lady', 'The big dog', 'The tiny dwarf', 'A famous celebrity', 'The crazy scientist', 'The moody teenager', 'The handy man', 'The clumsy clown'],
        middle: ['paints a picture', 'with a huge smile', 'took a photo', 'was running late', 'started to record', 'took a trip', 'was really lost', 'with no clue', 'with giant hands', 'with sharp thinking', 'with no clothes', 'with bad breath', 'with bad tattoos', 'with bad timing', 'with weird hair'],
        end: ['falls into bush', 'slipped on ice', 'got sea sick', 'got a present', 'lost their wallet', 'never seen again', 'had sun stroke', 'got a lollipop', 'went really crazy', 'washed their car', 'went for shopping', 'drove for hours', 'lost their car', 'needed an ambulance'],
    }
}



function generateQuote(type) {


    var part1 = quotes[type].start[Math.floor(Math.random() * quotes[type].start.length)];
    var part2 = quotes[type].middle[Math.floor(Math.random() * quotes[type].middle.length)];
    var part3 = quotes[type].end[Math.floor(Math.random() * quotes[type].end.length)];
    

    return part1 + " " + part2 + " " + part3;
}


generateBtn.addEventListener('click', function() {
    for(var i = 0; i < parseInt(qty.value); i++) {
        document.querySelector('#quote').textContent = generateQuote(type.value);
//    console.log('quote:', generateQuote(type.value))   
            
    }
    console.log('ended loop...');
});



