document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll("button");

  // Like
  buttons[0].addEventListener("click", () => {
    alert("❤️ ভিডিওটি লাইক হয়েছে");
  });

  // Comment
  buttons[1].addEventListener("click", () => {
    const comment = prompt("আপনার মন্তব্য লিখুন:");
    if (comment) {
      alert("ধন্যবাদ!\nআপনার মন্তব্য: " + comment);
    }
  });

  // Share
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

  // Google Login
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", async () => {
    try {
      const result = await window.signInWithPopup(
        window.auth,
        window.provider
      );

      alert("স্বাগতম " + result.user.displayName);
    } catch (error) {
      alert(error.message);
    }
  });

});
