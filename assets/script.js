const change = document.getElementById('change')
    const color = document.getElementById('color')
    const body = document.body

    change.addEventListener('click', mudarBG)

    function mudarBG() {
    const cor1 = corRandonRGB()
    const cor2 = corRandonRGB()
    const cor3 = corRandonRGB()

    const colorString = `rgb(${cor1}, ${cor2}, ${cor3})` 

    body.style.background = colorString
    color.innerText = colorString

}

function corRandonRGB() {
    return Math.floor(Math.random() * 256)
}
