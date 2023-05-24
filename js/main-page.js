// video slider
function videoSlider() {
    let videoCount = document.querySelectorAll(".video-slides > div").length;
    for (let x = 1; x <= videoCount;) {
        let id = "video" + "" + x;
        let x2 = x + 10;
        $(".video-slides > div:nth-of-type(" + x + ")").attr({"id": id});
        $(".video-slide:nth-of-type(" + x + ") > div.videos").attr({"id": x2});
        x++;
    }
    $(".main-video-nav-div > div:first").attr({"id": "v1"});
    for (let i = 2; i <= videoCount;) {
        let x = "v" + i;
        $(".main-video-nav-div > div:first").clone().appendTo(".main-video-nav-div").attr({"id": x});
        i++;
    }
}

function videoInput() {
    $("#v1").addClass("video-nav-active");
    $("#v2").addClass("video-nav-active");
    $("#v3").addClass("video-nav-active");
    $("#v4").addClass("video-nav-active");
    $("#v5").addClass("video-nav-active");
    $("#video1 > div").clone().appendTo(".video-section-1").removeClass("d-none");
    $("#video2 > div").clone().appendTo(".video-section-2").removeClass("d-none");
    $("#video3 > div").clone().appendTo(".video-section-3").removeClass("d-none");
    $("#video4 > div").clone().appendTo(".video-section-4").removeClass("d-none");
    $("#video5 > div").clone().appendTo(".video-section-5").removeClass("d-none");
}

function HideAllVideos() {
    $(".video-section-1").empty();
    $(".video-section-2").empty();
    $(".video-section-3").empty();
    $(".video-section-4").empty();
    $(".video-section-5").empty();
}

function videoNextSlide() {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v1 = $(".video-section-1 > div").attr("id");
    let v2 = $(".video-section-2 > div").attr("id");
    let v3 = $(".video-section-3 > div").attr("id");
    let v4 = $(".video-section-4 > div").attr("id");
    let v5 = $(".video-section-5 > div").attr("id");
    if (v5 == videoCount){
      v1 = 10
      v2 = 11
      v3 = 12
      v4 = 13
      v5 = 14
    }

    if (v5 <= videoCount - 1) {
        $(".video-nav").removeClass("video-nav-active");
        v1++;
        v2++;
        v3++;
        v4++;
        v5++;
        let nav1 = v1 - 10;
        let nav2 = v2 - 10;
        let nav3 = v3 - 10;
        let nav4 = v4 - 10;
        let nav5 = v5 - 10;
        let ve1 = "#" + v1;
        let ve2 = "#" + v2;
        let ve3 = "#" + v3;
        let ve4 = "#" + v4;
        let ve5 = "#" + v5;
        HideAllVideos();
        $(ve1).clone().appendTo(".video-section-1").removeClass("d-none");
        $(ve2).clone().appendTo(".video-section-2").removeClass("d-none");
        $(ve3).clone().appendTo(".video-section-3").removeClass("d-none");
        $(ve4).clone().appendTo(".video-section-4").removeClass("d-none");
        $(ve5).clone().appendTo(".video-section-5").removeClass("d-none");
        $(".video-nav:nth-of-type(" + nav1 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav2 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav3 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav4 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav5 + ")").addClass("video-nav-active");
    }
}

function videoPrevSlide() {
    let v1 = $(".video-section-1 > div").attr("id");
    let v2 = $(".video-section-2 > div").attr("id");
    let v3 = $(".video-section-3 > div").attr("id");
    let v4 = $(".video-section-4 > div").attr("id");
    let v5 = $(".video-section-5 > div").attr("id");
    $(".video-nav").removeClass("video-nav-active");
    if (v1 >= 12) {
        v1--;
        v2--;
        v3--;
        v4--;
        v5--;
        let nav1 = v1 - 10;
        let nav2 = v2 - 10;
        let nav3 = v3 - 10;
        let nav4 = v4 - 10;
        let nav5 = v5 - 10;
        let ve1 = "#" + v1;
        let ve2 = "#" + v2;
        let ve3 = "#" + v3;
        let ve4 = "#" + v4;
        let ve5 = "#" + v5;
        HideAllVideos();
        $(ve1).clone().appendTo(".video-section-1").removeClass("d-none");
        $(ve2).clone().appendTo(".video-section-2").removeClass("d-none");
        $(ve3).clone().appendTo(".video-section-3").removeClass("d-none");
        $(ve4).clone().appendTo(".video-section-4").removeClass("d-none");
        $(ve5).clone().appendTo(".video-section-5").removeClass("d-none");
        $(".video-nav:nth-of-type(" + nav1 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav2 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav3 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav4 + ")").addClass("video-nav-active");
        $(".video-nav:nth-of-type(" + nav5 + ")").addClass("video-nav-active");
    }
}

videoSlider()
videoInput()
$(".video-next-btn").click(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v5 = $(".video-section-5 > div").attr("id");
    if (v5 <= videoCount) {
        videoNextSlide();
    }
})
$(".video-prev-btn").click(function () {
    let v1 = $(".video-section-1 > div").attr("id")
    if (v1 >= 12) {
       videoPrevSlide()
    }
})

$(".modal").on('hidden.bs.modal', function (e) {
    $("iframe").attr("src", $("iframe").attr("src"));
});

const videoStopper1 = document.querySelector('.videos .modalbutton');
const videoStopper2 = document.querySelector('.video-next-btn');
const videoStopper3 = document.querySelector('.video-prev-btn');
let autoplayInterval;
autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v5 = $(".video-section-5 > div").attr("id")
    if (v5 <= videoCount) {
        videoNextSlide()
    }
}, 15000);

function stop() {
    clearInterval(autoplayInterval)
}

videoStopper1.addEventListener('mouseenter', (e) => {
    stop()
});
videoStopper2.addEventListener('mouseenter', (e) => {
    stop()
});
videoStopper3.addEventListener('mouseenter', (e) => {
    stop()
});
videoStopper1.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v5 = $(".video-section-5 > div").attr("id")
    if (v5 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
});
videoStopper2.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v5 = $(".video-section-5 > div").attr("id")
    if (v5 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
});
videoStopper3.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v5 = $(".video-section-5 > div").attr("id")
    if (v5 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
});
$('.modal').on('shown.bs.modal', function () {
  stop()
})
$('.modal').on('hidden.bs.modal', function () {
  autoplayInterval = setInterval(function () {
    let videoCount = document.querySelectorAll(".video-slides > div").length + 10;
    let v5 = $(".video-section-5 > div").attr("id")
    if (v5 <= videoCount) {
        videoNextSlide()
    }
}, 15000);
})

$(".main-video-nav-div").hide();


