var type = document.querySelector('#type');
var qty = document.querySelector('#qty');
var generateBtn = document.querySelector('#generate');

var quotes = {
    humans: {
        start: ['The young child', 'The old man', 'An entire family', 'The tall bloke', 'A happy kid', 'The dumb blond', 'A smart lady', 'The idiot man', 'The tiny dwarf', 'A famous celebrity', 'The crazy scientist', 'The moody teenager', 'The handy man', 'The clumsy clown'],
        middle: ['paints a picture', 'with a huge smile', 'took a photo', 'was running late', 'started to record', 'took a trip', 'was really lost', 'with no clue', 'with giant hands', 'with sharp thinking', 'with no clothes', 'with bad breath', 'with bad tattoos', 'with bad timing', 'with weird hair'],
        end: ['falls into bush', 'slipped on ice', 'got sea sick', 'got a present', 'lost their wallet', 'never seen again', 'had sun stroke', 'got a lollipop', 'went really crazy', 'washed their car', 'went for shopping', 'drove for hours', 'lost their car', 'needed an ambulance'],
        where: ['near the center', 'in the city', 'on the road', 'in their job', 'up in space', 'at their house', 'in their room', 'in a small house', 'in the suburbs', 'at the lakes', 'on the aeroplane', 'in the sky', 'on the moon', 'at the beach'],
        when: ['back in 1960', 'at a wedding', 'at a funeral', 'at 2pac concert', 'in world warI', 'in world warII', 'in the 70s', 'at a party', 'at the last supper', 'at world cup', 'with the dinosours', 'with jesus christ', 'with bruce lee', 'on the titanic']
    },
    animals: {
        start: ['The small puppy', 'The old cat', 'A huge elephant', 'A blind dog', 'A talking parrot', 'The dumb ape', 'A smart chimp', 'The big dog', 'The tiny mouse', 'A tired horse', 'The fast cheetah', 'The hungry lion', 'A flock of geese', 'The flying bird'],
        middle: ['had no choice', 'with a huge smile', 'starts to', 'ends up', 'with no idea', 'took the', 'was really lost', 'with no clue', 'with a', 'with sharp thinking', 'with no direction', 'with bad judgement', 'cant believe', 'with bad timing', 'stops to'],
        end: ['started to talk', 'had a collar', 'got sea sick', 'got a present', 'lost their owner', 'never seen again', 'had to much to eat', 'got a scared', 'went really crazy', 'washed themselves', 'went for food', 'lost for hours', 'needed help', 'needed a vet'],
        where: ['on an island', 'in the jungle', 'on the moutains', 'in the dessert', 'in the zoo', 'under the ocean', 'in their hut', 'in a small house', 'in the park', 'in the amazon', 'in the backyard', 'in the forest', 'in the vet', 'at the safari'],
        when: ['in ancient times', 'in 1978', 'back in 1800', 'in the future', 'with the romans', 'in stone age', 'in the 40s', 'with the cowboys', 'in the ice age', 'at world cup', 'with the dinosours', 'with neil armstrong', 'at woodstock', 'at new years']
    }
}


function generateQuote(type) {

    var part1 = quotes[type].start[Math.floor(Math.random() * quotes[type].start.length)];
    var part2 = quotes[type].middle[Math.floor(Math.random() * quotes[type].middle.length)];
    var part3 = quotes[type].end[Math.floor(Math.random() * quotes[type].end.length)];
    var part4 = quotes[type].where[Math.floor(Math.random() * quotes[type].where.length)];
    var part5 = quotes[type].when[Math.floor(Math.random() * quotes[type].when.length)];

    return part1 + " " + part2 + " " + part3 + " " + part4 + " " + part5 + '<hr style="border-top-color: rgba(0,0,0,.5)" />';
}


generateBtn.addEventListener('click', function () {
    console.log('qty', Math.floor(qty.value));
    var output = [];
    for (var i = 0; i < Number(qty.value); i++) {
        output.push(generateQuote(type.value));
       
  //    console.log('quote:', generateQuote(type.value)) 
    }
    document.getElementById('quote').innerHTML = output.join("");
    console.log('ended loop...');
});




