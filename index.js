

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
    alert('scroll event')
})

console.log();