function calculateResult(event) {
    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let math = parseFloat(document.getElementById("math").value);
    let his = parseFloat(document.getElementById("his").value);
    let ph = parseFloat(document.getElementById("ph").value);
    let bio = parseFloat(document.getElementById("bio").value);
    let ch = parseFloat(document.getElementById("ch").value);

    let totalMarks = math + his + ph + bio + ch;
    let percentage = (totalMarks / 500) * 100;

    let grade;
    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let resultMessage = "Student Name : " + studentName + "<br><br>" +
        "Total Marks : " + totalMarks + "<br><br>" +
        "Percentage : " + percentage + " %<br><br>" +
        "Grade : " + grade;

    document.getElementById("result").innerHTML = resultMessage;
}