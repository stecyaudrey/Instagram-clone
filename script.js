const followBtn =
document.getElementById("follow-btn");
followBtn.addEventListener("click", function() {this.classList.toggle("following");
  if(this.innerText === "Following"){innerText = "Follow";
  } else {
    this.innerText = "Following";
  }
});