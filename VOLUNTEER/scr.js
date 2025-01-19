// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




// Example data for volunteer opportunities
const volunteerOpportunities = [
    { title: "Event Support", description: "Assist in organizing and running events." },
    { title: "Skill-Based Volunteering", description: "Provide professional expertise in various areas." },
    { title: "Community Outreach", description: "Engage with local communities to raise awareness." }
];

// Function to display volunteer opportunities
function displayVolunteerOpportunities() {
    const volunteerSection = document.getElementById('volunteer');
    const volunteerContainer = document.createElement('div');
    volunteerContainer.className = 'volunteer';

    volunteerOpportunities.forEach(opportunity => {
        const opportunityCard = document.createElement('div');
        opportunityCard.className = 'opportunity';

        const title = document.createElement('h3');
        title.textContent = opportunity.title;

        const description = document.createElement('p');
        description.textContent = opportunity.description;

        opportunityCard.appendChild(title);
        opportunityCard.appendChild(description);
        volunteerContainer.appendChild(opportunityCard);
    });

    volunteerSection.appendChild(volunteerContainer);
}

// Call functions to display partner and volunteer information
displayPartners();
displayVolunteerOpportunities();

// Example data for testimonials
const testimonials = [
    { text: "Our partnership with this NGO has been incredibly rewarding. We've witnessed the positive impact firsthand.", author: "John Doe, CEO of Company A" },
    { text: "This NGO is truly making a difference in the community. Proud to be associated with such a worthy cause.", author: "Jane Smith, CSR Manager at Company B" },
    { text: "The team at this NGO is dedicated, passionate, and inspiring. It's an honor to support their mission.", author: "Mark Johnson, Director of Company C Foundation" }
];

// Function to display testimonials
function displayTestimonials() {
    const testimonialsSection = document.getElementById('testimonials');
    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial';
        testimonialCard.innerHTML = `
            <p>${testimonial.text}</p>
            <p class="author">${testimonial.author}</p>
        `;
        testimonialsSection.appendChild(testimonialCard);
    });
}

// Call the function to display testimonials
displayTestimonials();

// Example data for the timeline events
const timelineEvents = [
    { date: "2010", event: "Foundation of NGO", description: "The NGO was founded with a mission to serve the community." },
    { date: "2012", event: "Expansion of Programs", description: "Expanded programs to include education and healthcare initiatives." },
    { date: "2015", event: "Partnership with International Organizations", description: "Established partnerships with global NGOs to address global issues." },
    { date: "2018", event: "Launch of Youth Empowerment Program", description: "Introduced a program focused on empowering youth through skill development." },
    { date: "2020", event: "COVID-19 Response", description: "Responded to the COVID-19 pandemic by providing relief assistance and healthcare support." },
    { date: "2022", event: "Achievement of Sustainability Goals", description: "Successfully achieved sustainability goals by implementing eco-friendly practices." }
];

// Function to display timeline events
function displayTimelineEvents() {
    const timelineContainer = document.getElementById('timeline-container');

    timelineEvents.forEach(event => {
        const timelineEvent = document.createElement('div');
        timelineEvent.className = 'timeline-event';
        timelineEvent.innerHTML = `
            <h4>${event.date}</h4>
            <p><strong>${event.event}</strong></p>
            <p>${event.description}</p>
        `;
        timelineContainer.appendChild(timelineEvent);
    });
}

// Call the function to display timeline events
displayTimelineEvents();

