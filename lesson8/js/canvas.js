const canvasLogo = document.getElementById("canvas")
const logoContext = canvasLogo.getContext('2d')

logoContext.lineWidth = 10
logoContext.beginPath()
logoContext.arc(100, 75, 60, 0, 2 * Math.PI)
logoContext.stroke()
logoContext.moveTo(0,0)
logoContext.lineTo(canvasLogo.width,canvasLogo.height*.5)
logoContext.stroke()
logoContext.moveTo(canvasLogo.width,0)
logoContext.lineTo(0,canvasLogo.height*.5)
logoContext.stroke()

logoContext.font = '75px spectral'
logoContext.fillText('Hello', 15, 190)