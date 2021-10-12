Webcam.set({
    height:350,
    width:350,
    png_quality:200,
    image_format:'png'
    });
    document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
        Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        });
    
    }
    console.log("ml5 version",ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HWVvU5APM/model.json',modelLoaded);
    function modelLoaded(){
        console.log("Model Loaded!!")
    }
    function speak(){
        var synth=window.speechSynthesis;
        speak_data_1="Predication 1 is"+prediction_1;
        speak_data_2="prediction2 is"+prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
        synth.speak(utterThis);
    }