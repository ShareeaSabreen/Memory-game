document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'blush',
            img: 'images/blush.png'
        },
        {
            name: 'brown',
            img: 'images/brown.png'
        },
        {
            name: 'circle',
            img: 'images/circle.png'
        },
        {
            name: 'gray',
            img: 'images/gray.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },
        {
            name: 'whiteblush',
            img: 'images/whiteblush.png'
        },
        {
            name: 'blush',
            img: 'images/blush.png'
        },
        {
            name: 'brown',
            img: 'images/brown.png'
        },
        {
            name: 'circle',
            img: 'images/circle.png'
        },
        {
            name: 'gray',
            img: 'images/gray.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },
        {
            name: 'whiteblush',
            img: 'images/whiteblush.png'
        },
        {
            name: 'transparent',
            img: 'images/transparent.png'
        },
        {
            name: 'transparent',
            img: 'images/transparent.png'
        },
        {
            name: 'face',
            img: 'images/face.png'
        },
        {
            name: 'face',
            img: 'images/face.png'
        }


    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const flipDisplay = document.querySelector('#flipNumber')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var flip = 0


    //create board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blue.JPG')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)

            grid.appendChild(card)
        }
    }



    //check for match

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            //alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
            flip++


        } else {
            cards[optionOneId].setAttribute('src', 'images/blue.JPG')
            cards[optionTwoId].setAttribute('src', 'images/blue.JPG')
            //alert('Sorry, try again')
            flip++

        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        flipDisplay.textContent = `${flip}!`
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = '8'

            alert('Congratulations! You found them all!!!')
            // alert(`total ${flip} flips`)
        }
    }


    //flip the card

    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    

    //play again



    createBoard()

})
