document.addEventListener('DOMContentLoaded', () => {

    const progressBar = document.querySelector('.progress-bar');

    function setProgressAnimation(fromWidth, toWidth, duration) {
        const start = performance.now();
    
        function animate() {
            const elapsed = performance.now() - start;
            const progress = Math.min(elapsed / duration, 1); // Ensure progress is between 0 and 1
            const newWidth = fromWidth + (toWidth - fromWidth) * progress;
            progressBar.style.width = `${newWidth}%`;
    
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
    
        requestAnimationFrame(animate);
    }

    fetch('http://13.235.241.106/track/donations')
        .then(response => response.json())
        .then(data => {
            const raisedElement = document.getElementById('raised');
            raisedElement.textContent = `₹${data.totalAmount} raised`;

            const goalAmount = 5000; 
            const percentage = (data.totalAmount / goalAmount) * 100;

            setProgressAnimation(0, percentage, 1000);

        })
        .catch(error => {
            const goalAmount = 1000/2; 
            const percentage = (data.totalAmount / goalAmount) * 100;

            setProgressAnimation(0, percentage, 1000);
            console.error('Error:', error);
            console.log("request failed");
        });
});
