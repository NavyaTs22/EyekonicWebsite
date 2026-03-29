document.addEventListener('DOMContentLoaded', function() {
 
    const video = document.querySelector('video');
    const muteButton = document.getElementById('mutetoggle');

   
    if (!video || !muteButton) {
        console.error("Video or Mute Toggle Button not found.");
        return;
    }


    muteButton.innerHTML = '🔇';

    muteButton.addEventListener('click', function() {
        
 
        video.muted = !video.muted; 

        if (video.muted) {
            muteButton.innerHTML = '🔇'; 
        } else {
            muteButton.innerHTML = '🔊'; 
        }
    });

  
    video.play().catch(error => {
        console.log("Video autoplay prevented or failed:", error);
    });
});




document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Please fill in all fields");
  } else {
    alert("Login successful");

  }
});




