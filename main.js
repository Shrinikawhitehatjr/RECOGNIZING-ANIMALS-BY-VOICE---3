function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
if (error) {
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_r = Math.floor(Math.random() * 255) + 1;

    document.getElementById("id_of_element").innerHTML = 'I can hear - '+results[0].label;
    document.getElementById("result_count").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";

    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+ ","+random_number_r+")";

    if (results[0].label == "Clap") {
        img.src = 'aliens-01.gif';
        img.src1 = 'aliens-02.png';
        img.src2 = 'aliens-03.png';
        img.src3 = 'aliens-04.png';
    }else if (results[0].label == "Bell") {
        img.src = 'aliens-01.png';
        img.src1 = 'aliens-02.gif';
        img.src2 = 'aliens-03.png';
        img.src3 = 'aliens-04.png';
    }else if (results[0].label == "Snapping") {
        img.src = 'aliens-01.png';
        img.src1 = 'aliens-02.gif';
        img.src2 = 'aliens-03.png';
        img.src3 = 'aliens-04.png';
    }else{
    }
}
}