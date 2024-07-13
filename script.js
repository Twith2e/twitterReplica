let isCollapse = true;

function expandCollapse() {
  isCollapse = !isCollapse;
  if (isCollapse == true) {
    document.querySelector(".messages").style.bottom = "0";
    document.querySelector(".collapse-btn").style.display = "block";
    document.querySelector(".expand-btn").style.display = "none";
  } else {
    document.querySelector(".messages").style.bottom = "-43%";
    document.querySelector(".collapse-btn").style.display = "none";
    document.querySelector(".expand-btn").style.display = "block";
  }
}

expandCollapse();

const btn = document.querySelector(".follow-unfollow-btn");

btn.addEventListener("click", (event) => {
  btn.style.backgroundColor = "red";
  document.querySelector(".follow").style.color = "green";
});

const myModal = document.getElementById("tweetModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
