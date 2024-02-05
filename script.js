function calculateLetterGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function gradeCalculator() {
    let numberOfAssignments;
    let totalScore = 0;

    // Prompt the user for the number of assignments
    do {
        numberOfAssignments = parseInt(prompt("Enter the number of assignments to grade (maximum 10):"));
    } while (isNaN(numberOfAssignments) || numberOfAssignments <= 0 || numberOfAssignments > 10);

    // Gather assignment scores and calculate continuous average
    for (let i = 1; i <= numberOfAssignments; i++) {
        let score = parseFloat(prompt(`Enter the score for assignment ${i} (percentage):`));
        while (isNaN(score) || score < 0 || score > 100) {
            score = parseFloat(prompt(`Invalid input. Enter a valid score for assignment ${i} (percentage):`));
        }
        totalScore += score;
    }

    // Calculate the average
    const average = totalScore / numberOfAssignments;

    // Display the letter grade
    console.log(`Average Percentage: ${average.toFixed(2)}%`);
    console.log(`Letter Grade: ${calculateLetterGrade(average)}`);
}

do {
    gradeCalculator();
    var repeat = prompt("Do you want to repeat the program? (yes/no)").toLowerCase();
} while (repeat === 'yes');
