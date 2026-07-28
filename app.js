document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", () => {
    alert("❤️ ভিডিওটি লাইক হয়েছে");
  });

  buttons[1].addEventListener("click", () => {
    const comment = prompt("আপনার মন্তব্য লিখুন:");
    if(comment){
      alert("ধন্যবাদ!\nআপনার মন্তব্য: " + comment);
    }
  });

  buttons[2].addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: "ViralHub BD",
        text: "এই ভিডিওটি দেখুন",
        url: window.location.href
      });
    } else {
      alert("আপনার ব্রাউজারে Share সাপোর্ট নেই");
    }
  });

});
