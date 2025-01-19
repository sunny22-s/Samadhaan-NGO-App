var volunteers = [
    "Arjun", "Priya", "Rahul", "Aisha", "Vikram",
    "Maya", "Karthik", "Ananya", "Raj", "Sita",
    "Aditya", "Aarti", "Deepak", "Kavita", "Sanjay",
    "Meera", "Ravi", "Nisha", "Aruna", "Nikhil"
];
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return;
    }

    // Simulate server response (replace with actual logic)
    var botResponse = getBotResponse(userInput);
    appendMessage(userInput, 'user');
    appendMessage(botResponse, 'bot');

    // Clear user input field
    document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
    if (volunteers.includes(userInput.trim())) {
        return userInput.trim() + " is a registered volunteer.";
    } else {
        // FAQ database
        var faqs = {
            "hi": "Hello! How can I assist you today?",
            "hello": "Hi there! How can I help you?",
            "how are you?": "I'm just a bot, but I'm here to help you with any questions you have.",

            "How can I become a volunteer for your NGO?": "You can become a volunteer by filling out our online volunteer application form on our website. Once submitted, our volunteer coordinator will reach out to you to discuss potential opportunities.",
            "What are the current volunteer opportunities available?": "Currently, we have opportunities in areas such as community outreach, event planning, fundraising, administrative support, and more. We regularly update our website with new opportunities, so please check there for the latest listings.",
            "What types of volunteer roles do you offer?": "We offer a variety of volunteer roles, including direct service roles such as tutoring or mentoring, administrative roles, event planning, marketing and communications, and specialized skills-based roles like graphic design or web development.",
            "What qualifications or skills are required to volunteer?": "The qualifications and skills required vary depending on the specific volunteer role. Some roles may require specific expertise or experience, while others may only require a willingness to learn and contribute.",
            "How much time commitment is expected from volunteers?": "The time commitment varies depending on the role and project. Some opportunities may require a few hours per week, while others may be more intensive or project-based. We strive to accommodate volunteers' availability and schedules as much as possible.",
            "Can I volunteer remotely or do I need to be onsite?": "We offer both onsite and remote volunteering opportunities, depending on the nature of the role and project. Many administrative and skill-based roles can be done remotely, while others may require onsite participation.",
            "How do I apply to become a volunteer?": "To apply, simply visit our website and fill out the volunteer application form. Be sure to provide detailed information about your skills, interests, and availability so we can match you with the most suitable opportunity.",
            "Is there any training provided for volunteers?": "Yes, we provide training and orientation sessions for volunteers to familiarize them with our organization, mission, and specific roles. Training may include information about our programs, policies, and procedures, as well as any necessary skills development.",
            "What are the benefits of volunteering with your NGO?": "Volunteering with our NGO offers the opportunity to make a meaningful impact in your community, gain valuable experience, develop new skills, expand your network, and contribute to a cause you're passionate about. Additionally, volunteers often report personal fulfillment and satisfaction from their volunteer work.",
            "How do volunteers contribute to your organization's mission?": "Volunteers play a vital role in advancing our organization's mission by providing essential support and expertise across various programs and initiatives. Their contributions help us reach more individuals, deliver services more effectively, and achieve our goals.",
            "Are there any specific requirements or restrictions for volunteers?": "Requirements and restrictions may vary depending on the role and project. Some roles may have age restrictions or require background checks, while others may require specific qualifications or certifications. We strive to provide opportunities that are inclusive and accessible to all, so please reach out if you have any specific concerns or needs.",
            "Can volunteers choose the projects they want to work on?": "Yes, we encourage volunteers to express their preferences and interests when applying for opportunities. While we may not always be able to accommodate specific requests, we do our best to match volunteers with roles that align with their skills, interests, and availability.",
            "How do you match volunteers with suitable roles?": "We match volunteers with suitable roles based on their skills, interests, availability, and our organization's current needs. Our volunteer coordinator works closely with volunteers to understand their preferences and match them with appropriate opportunities.",
            "Is there any support available for volunteers during their time with the NGO?": "Yes, we provide ongoing support and guidance to volunteers throughout their time with our NGO. This may include regular check-ins, feedback sessions, resources, and access to staff members for assistance or guidance.",
            "How do you recognize and appreciate the contributions of volunteers?": "We recognize and appreciate the contributions of our volunteers through various means, including thank-you notes, volunteer appreciation events, certificates of appreciation, social media shout-outs, and opportunities for professional development or advancement within the organization. We value and celebrate the dedication and hard work of our volunteers.",
            "How can I get involved in food distribution efforts?": "You can get involved in food distribution efforts by volunteering to help pack and distribute food parcels during our events. We are always in need of extra hands to ensure food reaches those who need it most.",
            "What locations do you serve with food distribution services?": "We serve various locations within our community with food distribution services. Locations may vary depending on the event and need. You can check our website or social media channels for updates on upcoming distribution locations.",
            "What safety protocols are in place for food handling during distribution?": "We take food safety very seriously. Our volunteers are trained in proper food handling procedures, and we follow strict guidelines to ensure the safety and quality of the food we distribute. This includes maintaining proper hygiene, temperature control, and packaging standards.",
            "Are there any specific requirements or qualifications needed to volunteer in food distribution?": "No specific qualifications are required to volunteer in food distribution. We welcome volunteers of all backgrounds and experience levels. However, we do provide training on food safety and handling protocols to ensure the safety of our volunteers and the recipients.",
            "How often do you conduct food distribution events?": "We conduct food distribution events regularly, depending on the demand and availability of resources. You can check our events calendar on our website or social media channels for upcoming distribution dates and locations.",

            // Administrative Support
            "What types of administrative tasks do you need assistance with?": "We need assistance with various administrative tasks, including data entry, answering phones and emails, scheduling appointments, and maintaining records. Administrative support is essential to keep our organization running smoothly.",
            "Are there any specific software or tools I need to be familiar with for administrative support?": "Familiarity with common office software such as Microsoft Office (Word, Excel, PowerPoint) and email systems is helpful for administrative support roles. We also provide training on any specialized software or tools used in our organization.",
            "How much time commitment is required for administrative volunteering?": "The time commitment for administrative volunteering can vary depending on your availability and the specific tasks involved. We offer flexible scheduling options to accommodate volunteers' schedules.",
            "Do you offer any training for volunteers in administrative roles?": "Yes, we provide training for volunteers in administrative roles to ensure they are equipped with the necessary skills and knowledge to perform their tasks effectively. Training may include orientation sessions, on-the-job training, and access to resources and support.",
            "Can administrative volunteers work remotely or do they need to be onsite?": "We offer both onsite and remote opportunities for administrative volunteers, depending on the nature of the tasks and our organization's policies. Remote volunteers must have access to the necessary technology and communication tools.",

            // Special Events
            "What upcoming special events do you have that require volunteer assistance?": "We have various special events throughout the year that require volunteer assistance, including fundraising galas, community festivals, and awareness campaigns. You can check our events calendar for upcoming opportunities to get involved.",
            "What roles are available for volunteers during special events?": "Volunteers play a crucial role in special events, performing tasks such as event setup and decoration, registration and check-in, guest assistance, and cleanup. We offer a variety of roles to match volunteers' interests and skills.",
            "Are there any specific skills or experience needed for volunteering in special events?": "No specific skills or experience are required for volunteering in special events, although certain roles may benefit from skills such as organization, communication, and teamwork. We provide training and guidance for all volunteers.",
            "How can I contribute to event planning and coordination as a volunteer?": "As a volunteer, you can contribute to event planning and coordination by assisting with tasks such as venue selection, logistics planning, marketing and promotion, and sponsorship outreach. Your input and ideas are valuable in making our events successful.",
            "What is the expected time commitment for volunteering at special events?": "The time commitment for volunteering at special events can vary depending on the event's duration and the specific role you choose. We provide flexible scheduling options to accommodate volunteers' availability and preferences.",

            // Social Media Advertising
            "How can I help with social media advertising efforts as a volunteer?": "You can help with social media advertising efforts by creating and scheduling posts, monitoring engagement, responding to comments and messages, and conducting research on target audiences and trends. Your support is invaluable in expanding our reach and impact.",
            "What platforms do you use for social media advertising?": "We use various social media platforms for advertising, including Facebook, Twitter, Instagram, LinkedIn, and YouTube. Each platform serves different purposes and target audiences, so we tailor our advertising strategies accordingly.",
            "Are there any guidelines or branding standards I should follow for social media posts?": "Yes, we have guidelines and branding standards that volunteers should follow when creating social media posts. This includes using consistent messaging, tone, and visual elements that align with our organization's brand and values.",
            "Do you provide training or resources for volunteers interested in social media advertising?": "Yes, we provide training and resources for volunteers interested in social media advertising, including tutorials, guidelines, and access to social media management tools. We also offer support and guidance from our marketing team.",
            "How do you measure the effectiveness of social media advertising campaigns?": "We measure the effectiveness of social media advertising campaigns through various metrics, including reach, engagement, click-through rates, conversions, and return on investment (ROI). These metrics help us evaluate the success of our campaigns and make data-driven decisions for future efforts.",
            "show the list of volunteers": "Here are the Volunters: " +
                "1. Arjun\n2. Priya\n3. Rahul\n4. Aisha\n5. Vikram\n6. Maya\n7. Karthik\n8. Ananya\n9. Raj\n10. Sita\n" +
                "11. Aditya\n12. Aarti\n13. Deepak\n14. Kavita\n15. Sanjay\n16. Meera\n17. Ravi\n18. Nisha\n19. Aruna\n20. Nikhil"

        };

        // Check if user input matches any FAQ
        var response = faqs[userInput];
        if (response) {
            return response;
        } else {
            return "Sorry, I don't understand. Please try asking a different question.";
        }
    }
}

function appendMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    if (sender === 'user') {
        messageElement.textContent = "You: " + message;
    } else if (sender === 'bot') {
        messageElement.textContent = "Bot: " + message;
    }
    chatBox.appendChild(messageElement);
}
function toggleChatBox() {
    var chatPopup = document.getElementById("chat-popup");
    if (chatPopup.style.display === "block") {
        chatPopup.style.display = "none";
    } else {
        chatPopup.style.display = "block";
    }
}
