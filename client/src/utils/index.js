import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants';


export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}

export async function downloadImage(_id, photo, canvasRef) {
    const base_image = new Image();
    base_image.src = photo;
    
    var canvas = canvasRef.current;
    var context = canvas.getContext('2d');
    console.log(canvas, context);

    // Draw image within
    context.drawImage(base_image, 300, 300);
    console.log(canvas, context);
    
    // Save the canvas
    saveCanvas(canvas, _id);
    console.log(canvas, context);
}

function saveCanvas(x_canvas, _id){
    x_canvas.toBlob(function(blob) {
        saveAs(
            blob
            , `download-${_id}.png`
        );
    }, "image/png");
}
