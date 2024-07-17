document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const schoolName = document.getElementById('school-name').value;
    const department = document.getElementById('department').value;
    const level = document.getElementById('level').value;
    const courseTitle = document.getElementById('course-title').value;
    const matrixNumber = document.getElementById('matrix-number').value;
    const studentName = document.getElementById('student-name').value;
    const lecturerName = document.getElementById('lecturer-name').value;
    const assignmentTopic = document.getElementById('assignment-topic').value;
    const submissionDate = document.getElementById('submission-date').value;

    // Construct the WhatsApp message
    const message = `*Homework & Project Help Subscription*\n\n` +
                    `*School Name:* ${schoolName}\n` +
                    `*Department:* ${department}\n` +
                    `*Level:* ${level}\n` +
                    `*Course Title:* ${courseTitle}\n` +
                    `*Matrix Number:* ${matrixNumber}\n` +
                    `*Student Name:* ${studentName}\n` +
                    `*Lecturer Name:* ${lecturerName}\n` +
                    `*Assignment/Project Topic:* ${assignmentTopic}\n` +
                    `*Date of Submission:* ${submissionDate}\n\n` +
                    `Please remember that payment must be made before the commencement of work. Thank you!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp with the message
    window.location.href = `https://wa.me/+2348102341648?text=${encodedMessage}`;
});