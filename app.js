var student = [];
var num = 0;

// get(x) - This indicates document.getElementById()

function get(x) {
    return document.getElementById(x);
}

// This is for entering the student details

function addmarks() {
    if (get("english").value == "" || get("math").value == "" || get("science").value == "" ) {
        document.getElementById("info").innerHTML = `Enter the marks for all the subjects.`;
    }
    else if (get("english").value > 100 || get("math").value > 100 || get("science").value > 100 || get("english").value < 0 || get("math").value < 0 || get("science").value < 0) {
        document.getElementById("info").innerHTML = `Enter the marks within 0 & 100.`;
    }
    else {
        window ['student'+num] = {
            name: (get("name").value).toLowerCase(),
            english: (get("english").value),
            math: (get("math").value),
            science: (get("science").value),
        }
        student.push(window ['student'+num]);
        num++;
        get("name").value = "";
        get("english").value = "";
        get("math").value = "";
        get("science").value = "";
        document.getElementById("info").innerHTML = `Marks of student ${num} has been entered.`;
    }
}

// Display the marks and average of the student

function result() {
    var input = get("stuname").value.toLowerCase();
    var output = get("output");

    for (var i=0; i < student.length; i++) {
        if (input === student[i].name) {
            var avg = Math.round((Number(student[i].math) + Number(student[i].english) + Number(student[i].science)) / 3);
            output.innerHTML = `Math: ${student[i].math} <br>
                                English: ${student[i].english} <br>
                                Science: ${student[i].science} <br>
                                Average: ${avg} <br>`;
            break;
        }
        else {
            output.innerHTML = "No student found";
        }
    }
}

console.log(student)