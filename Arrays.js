// This code defines a function called guestName that prompts the user for their name. If the user's name is found in the guestList array, it displays a welcome message with the user's name. Otherwise, it displays a message saying the username was not found.

// An array of guest names
const guestList = [
  "Angela",
  "Omolara",
  "Olaoluwa",
  "Oluwaseyi",
  "Joseph",
  "Kehinde",
];

// A function that prompts the guest for their name.

const guestName = () => {
  const yourName = prompt("What is your name?");

  if (guestList.includes(yourName)) {
    alert("Welcome  " + yourName);
  } else {
    alert("Name not found");
  }
};
guestName();
