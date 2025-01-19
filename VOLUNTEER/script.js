var slideIndex = 0;
showSlides();
openPopup();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function openPopup() {
    var popup = document.getElementById("popup");
    var popupBtn = document.getElementById("popup-btn");
    var closeBtn = document.getElementsByClassName("close")[0];

    popupBtn.onclick = function () {
        popup.style.display = "block";
    }

    closeBtn.onclick = function () {
        popup.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}
// Function to show location and time
function showDetails(location, time) {
    alert("Location: " + location + "\nTime: " + time);
}

// Add event listeners to "Definitely Coming" and "Maybe Next Time" buttons
document.querySelectorAll('.event-card .definitely-coming').forEach(btn => {
    btn.addEventListener('click', function () {
        const eventCard = this.closest('.event-card');
        const location = eventCard.dataset.location;
        const time = eventCard.dataset.time;
        showDetails(location, time);
    });
});

function maybeNextTime() {
    alert("Waiting for your availability.");
}

