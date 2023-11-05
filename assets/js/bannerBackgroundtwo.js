const colors = [
    // '#0094FF',
    // '#00FF6B',
    // '#FF0094',
    // '#FF6B00',
    '#00ffeb',
    // '#00a9ff',
    '#0094ff',
    '#0015ff',
    // '#007fff',
]

for (let i = 0; i < 144 * 4; i++) {
    let squareEl = document.createElement('div')
    document.querySelector('section').appendChild(squareEl)
}

function animateThing(element) {
    anime({
        targets: element,
        // opacity: () => anime.random(25,100) / 100,
        backgroundColor: () => colors[anime.random(0, colors.length - 1)],
        duration: () => anime.random(200, 1000),
        complete: () => animateThing(element)
    })
}

for (let element of document.querySelectorAll('div')) {
    animateThing(element)
}