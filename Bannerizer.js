//Write a function that will take a short line of text, and write it to the console log within a box.
//logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
function logInBox(string){
    const length = string.length + 2
    let top = ''
    let whiteSpace = ''
    for (let i = 0; i < length; i++){
        top += '-'
        whiteSpace += ' '
    }
    top = '+' + top + '+'
    console.log(top)
    console.log('|' + whiteSpace + '|')
    console.log(`| ${string} |` )
    console.log('|' + whiteSpace + '|')
    console.log(top)

}
logInBox('To boldly go where no one has gone before.');