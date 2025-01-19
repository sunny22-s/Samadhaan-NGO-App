document.addEventListener("DOMContentLoaded", () => {
  fetch("http://13.235.241.106/track/details")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
        const donationList = document.getElementById("donationList");

      const results = data.results.slice(0, 4); // Get the first 10 results

      if (results.length === 0) {
        const donationElement = document.createElement("div");
        donationElement.classList.add("donation", "animated");
        donationElement.innerHTML = `
            <h2 style="text-align:center; margin:10px 0px" >No donations Yet!</h2>
        `;
        donationList.appendChild(donationElement);

        return;
      } else {
        results.forEach((donation, index) => {
            setTimeout(() => {
                const donationElement = document.createElement("div");
                donationElement.classList.add("donation", "animated");
                const ago = getTime(donation.donated_at);
                donationElement.innerHTML = `
                    <h2>${donation.name}</h2>

                    <p style="margin: 2px;">Donation Id: ${donation.donation_id}</p>
                    <p style="margin: 2px;">Purpose: ${donation.purpose}</p>
                    <p style="margin: 2px;">Donated: ₹${donation.amount}</p>
                    <p style="margin: 2px;">Donated At: <span style="color: #007bff; font-weight:bolder">${ago}</span></p>
                `;
                donationList.appendChild(donationElement);
            }, 200 * index);
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      console.log("request failed");
    });
});

function getTime(date) {
  const timestamp = new Date(date); 
  const now = new Date();

  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);

  let ago;
  if (months > 0) {
    ago = `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    ago = `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    ago = `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    ago = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    ago = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
  return ago;
}
