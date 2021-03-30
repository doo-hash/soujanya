var marks = 85;
switch (true) {
    case (marks <= 99 && marks >= 90):
        console.log('Grade A');
        break;
    case (marks < 90 && marks >= 75):
        console.log('Grade B');
        break;
    case (marks < 75 && marks >= 60):
        console.log('Grade C');
        break;
    default:
        console.log('Try again');
        break;
}
