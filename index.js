"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeSection = document.getElementById('resume-section');
    const resumeContainer = document.getElementById('resume');
    const editButton = document.getElementById('edit-button');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const profilePic = document.getElementById('profile-pic').value;
        const education = document.getElementById('education').value;
        const workExperience = document.getElementById('work-experience').value;
        const skills = document.getElementById('skills').value;
        // Generate resume HTML
        const resumeHTML = `
            <div class="profile">
                <img src="${profilePic}" alt="Profile Picture">
                <h1>${name}</h1>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
            </div>
            <section>
                <h2>Education</h2>
                <p>${education}</p>
            </section>
            <section>
                <h2>Work Experience</h2>
                <p>${workExperience}</p>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
            </section>
        `;
        // Display the generated resume
        resumeContainer.innerHTML = resumeHTML;
        resumeSection.style.display = 'block';
        form.style.display = 'none';
    });
    editButton.addEventListener('click', () => {
        // Hide the resume and show the form again
        resumeSection.style.display = 'none';
        form.style.display = 'block';
    });
});
