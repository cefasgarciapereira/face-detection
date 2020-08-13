function init(){
    const video = document.getElementById('video')
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const tracker = new tracking.ObjectTracker(['face'])

    tracking.track('#video', tracker, {camera: true})
    tracker.on('track', event => {
        //console.log(event);
        context.clearRect(0,0,canvas.width,canvas.height)
        event.data.forEach( rect => {
            context.strokeStyle = '#FF0000'
            context.lineWidth = 2
            context.strokeRect(rect.x, rect.y, rect.width, rect.height)
            context.fillText("Rosto: ", rect.x+rect.width+20,rect.y+20)
            context.fillText(`x: ${rect.x}, w: ${rect.width}`, rect.x+rect.width+20,rect.y+40)
            context.fillText(`y: ${rect.y}, h: ${rect.height}`, rect.x+rect.width+20,rect.y+60)
        })
    })
}

window.onload = init();
