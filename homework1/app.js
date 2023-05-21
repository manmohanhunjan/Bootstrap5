const modalBtn = document.querySelector('#modalBtn')
const vod = document.querySelector('video')
const videoStopBtn = document.querySelectorAll('.videoStop')

modalBtn.addEventListener('click', function () {
    vod.play();
    }
)

videoStopBtn[0].addEventListener('click', function () {
    vod.pause();
    }
)
videoStopBtn[1].addEventListener('click', function () {
    vod.pause();
    }
)