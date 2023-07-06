const position = 2;

const getItem = (array, position) => array.at(position)

const replacementCard = 6;
const setItem = (array, position, replacementCard) => {
    array.splice(position, 1, replacementCard);
    return array;
}

const removeItem = (array, position) => {
    array.splice(position, 1);
    return array;
}

function insertItemAtTop(cards, newCard) {
    cards.push(newCard)
 
   return cards;
 }

console.log(insertItemAtTop([1,5],9))