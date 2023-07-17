// Function to get the total number of submissions from localStorage
function getTotalSubmissions() {
    const submissions = localStorage.getItem('specialtyDrinkSubmissions');
    return submissions ? parseInt(submissions) : 0;
}

// Function to update and display the total number of submissions
function updateTotalSubmissions() {
    const totalSubmissionsElement = document.querySelector('#total-submissions');
    const totalSubmissionsParagraph = document.querySelector('#drinks-paragraph');

    const totalSubmissions = getTotalSubmissions();

    if (totalSubmissions > 0) {
        totalSubmissionsElement.textContent = totalSubmissions;
    }
    else{
        totalSubmissionsElement.textContent = totalSubmissions;
        totalSubmissionsParagraph.style.display = 'none';
    }
    
}

// Function to increment the total number of submissions
function incrementTotalSubmissions() {
    const totalSubmissions = getTotalSubmissions();
    const newTotalSubmissions = totalSubmissions + 1;
    localStorage.setItem('specialtyDrinkSubmissions', newTotalSubmissions);
    updateTotalSubmissions();
}

// Call the function to update and display the total number of submissions on page load
updateTotalSubmissions();
