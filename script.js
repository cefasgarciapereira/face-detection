function init(){
    const video = document.getElementById('video')
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    const faceTracker = new tracking.ObjectTracker('face')
    const eyeTracker = new tracking.ObjectTracker('eye')
    tracking.track('#video', faceTracker, {camera: true})
    tracking.track('#video', eyeTracker, {camera: true})

    //track face
    faceTracker.on('track', event => {
        //console.log(event);
        context.clearRect(0,0,canvas.clientWidth,canvas.height)
        event.data.forEach(
            rect => {
                context.strokeStyle = '#ff0000'
                context.clientWidth = 2
                context.strokeRect(rect.x, rect.y, rect.width, rect.height)
                context.fillText("rosto", rect.x+rect.width+20,rect.y+20)
            }
        )
    })
}

window.onload = init();
