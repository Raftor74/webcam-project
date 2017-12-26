/**
 * Created by Андрей on 26.12.2017.
 */
(function() {
    var video = document.getElementById('webcam'),
        vendorUrl = window.URL || window.webkitURL;
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.
            mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getMedia({
        video: true,
        audio: false
    }, function(stream) {
        video.src = vendorUrl.createObjectURL(stream);
        video.play();
    }, function(error) {
        alert('Ошибка! Что-то пошло не так, попробуйте позже.');
        console.log(error);
    });

    //Add some code
})();