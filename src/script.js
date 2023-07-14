/* $(document).ready(function () {
  $("#btn1").on("click", function () {
    $("#btn2").css({ display: "block" });
    $("#btn1").css({ display: "none" });
  });
  $("#btn2").on("click", function () {
    $("#btn1").css({ display: "block" });
    $("#btn2").css({ display: "none" });
  });
}); */

document.getElementById("btn1").addEventListener("click", function () {
  this.className = "hide";
  document.getElementById("btn2").className = "show";
});

document.getElementById("btn2").addEventListener("click", function () {
  this.className = "hide";
  document.getElementById("btn1").className = "show";
});

$(document).ready(function () {
  $("#table-btn").on("click", function () {
    $("tr")
      .eq(4)
      .children()
      .last()
      .css({ background: "black", color: "white" });
  });

  $("#color").on("click", function () {
    $("main").css({ background: "black", color: "white" });
  });
});
