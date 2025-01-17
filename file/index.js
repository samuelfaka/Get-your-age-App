document.getElementById("Calculate").onclick = function() {
    const month = parseInt(document.getElementById("Month").value);
    const day = parseInt(document.getElementById("Day").value);
    const year = parseInt(document.getElementById("Year").value);

    const today = new Date();

    
    if (isNaN(month) || isNaN(day) || isNaN(year) || month < 1 || month > 12 || day < 1 || day > 31 || year < 0) {
        document.getElementById("CountAge").innerText = "Invalid date input!";
        document.getElementById("UpComing").innerText = "";
        document.getElementById("PastBirthday").innerText = "";
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const currentYear = today.getFullYear();

    let age = currentYear - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    
    let birthdayMessage = "Your birthday is upcoming.";
    if (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)) {
        birthdayMessage = "Your birthday has already passed this year.";
    }

    
    document.getElementById("CountAge").innerText = `${age}`;
    if (birthdayMessage === "Your birthday is upcoming.") {
        document.getElementById("UpComing").innerText = birthdayMessage;
        document.getElementById("PastBirthday").innerText = "";
    } else {
        document.getElementById("PastBirthday").innerText = birthdayMessage;
        document.getElementById("UpComing").innerText = "";
    }
};
