Webcam.set(
    {
        width: 330,
        height: 270,
        image_format: 'png',
        png_quality:100
    });
    camera=document.getElementById("camera");
    Webcam.attach(camera);
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'">';
});    
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ko_nRBzW5/model.json',modelLoaded);
function modelLoaded()
{
    console.log("modelLoaded");
}