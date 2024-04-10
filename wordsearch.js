const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    console.log(horizontalJoin)
    for (let l of horizontalJoin) {
            if (l.includes(word)) return true
    }

    newArray = []
    for (let i = 0; i < letters[0].length; i++) {
      newArray.push([])
      for (let j = 0; j < letters.length; j++) {
        newArray[i].push(letters[j][i])
      }
      combinedLetters = newArray[i].join('')
      console.log(combinedLetters)
      if (combinedLetters.includes(word)) return true
    }
    return false
  }
module.exports = wordSearch;
