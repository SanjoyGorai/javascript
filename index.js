
document.write('HEllo JS')
document.write('HEllo JS')
document.writeln('HEllo JS')
document.write('<h1>Hello</h1>')

addEventListener('copy', () => {
    alert('Copy Event')
})

addEventListener('paste', () => {
    alert('Paste Event')
})

addEventListener('cut', () => {
    // alert('Cut Event')
})

oncut = (e) => {
    alert('On cut event')
}

addEventListener('scroll', () => {
    // alert('scroll event')
})

addEventListener('fullscreenchange',()=>{
    alert('Fullscreen change event')
})

console.log();