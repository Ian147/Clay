function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";
}

// Set default open tab
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks.active').click();
});

// Night mode toggle
function toggleTheme() {
    var body = document.body;
    body.classList.toggle("night-mode");
    var button = document.getElementById("toggle-theme");
    if (body.classList.contains("night-mode")) {
        button.innerHTML = "🌞"; // Change to sun icon for light mode
    } else {
        button.innerHTML = "🌙"; // Change to moon icon for night mode
    }
}
