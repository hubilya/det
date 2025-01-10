window.onload = function () {
    document.getElementById("video1").addEventListener("ended", function () {
    document.getElementById("video2").play();
    document.getElementById("video2").classList.remove("hide");
    document.getElementById("video1").classList.add("hide")
  
  });
    document.getElementById("video2").addEventListener("ended", function () {
    document.getElementById("video1").play();
    document.getElementById("video1").classList.remove("hide");
    document.getElementById("video2").classList.add("hide")
  
  });

    }