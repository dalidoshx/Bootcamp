let random = Math.random();
if (random < 0.5) {
    console.log("Your nr is less than 0.5");
}
else if (random > 0.5) {
    console.log("Your nr is bigger then 0.5");
}

const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
    console.log("Uhhh I hate Mondays!") 
} else if (dayOfWeek === 'Saturday') {
    console.log("Yay I love Saturdays")
} else if (dayOfWeek === 'Friday') {
    console.log("Yay I love Fridays") 
} 


-- Nesting --
const password = prompt("please enter a new password");

//Password must be 6+ characters 
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Good job! No space!")
    } else {
        console.log("Password cannot contain spaces!")
    }

} else {
    console.log("Password to short! Must be 6+ characters")
}
//Password cannnot include space

-- Logical operator && --
const password = prompt("Enter your password");

if (password.length >=6 && password.indexOf(" ") === -1) {
    console.log("Valid password!")
} else {
    console.log("Incorrect format for password!")
}
 
-- Logical operator || --
0-5 free
5-10 $10
10-65 $20
65+ free

const age = 90;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("free")
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20") 
} else {
    console.log("Invalid age")
}

-- Logical operator ! --
