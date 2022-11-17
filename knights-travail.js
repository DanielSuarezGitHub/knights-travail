function knightMoves(start, end) {
    let queue = [start]
    const moves = [[1 , 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
    while(queue != 0) {
    let current =  queue.shift()
    if (!current[2]) current[2] = []
    if (current[0] < 0 || current[0] > 7 || current[1] < 0 || current[1] > 7) {
        continue
    }
    if (current[0] == end[0] && current[1] == end[1]) {
        let string = "Shortest Path Is \n"
        current[2].forEach((move) => {
            string = string + `[${move}] => `
        })
        string = string + `[${end}]`
        return string
    }
    moves.forEach((move) => {
        queue.push([(current[0] + move[0]), (current[1] + move[1]), current[2].concat([[current[0], current[1]]])])
    })

    }
}

console.log(knightMoves([7, 7], [1, 1])); /* Shortest Path Is [7,7] => [6,5] => [5,3] => [3,2] => [1,1] */