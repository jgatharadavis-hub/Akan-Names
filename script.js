const maleNames = {
  sunday: "Kwasi",
  monday: "Kwadwo",
  tuesday: "Kwabena",
  wednesday: "Kwaku",
  thursday: "Yaw",
  friday: "Kofi",
  saturday: "Kwame",
};

const femaleNames = {
  sunday: "Akosua",
  monday: "Adwoa",
  tuesday: "Abena",
  wednesday: "Yaa",
  thursday: "Esi",
  friday: "Afua",
  saturday: "Ama",
};

document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const day = document.getElementById("day").value;

  if (!gender || !day) {
    document.getElementById("result").textContent =
      "Please select both gender and day.";
    return;
  }

  const name = gender === "male" ? maleNames[day] : femaleNames[day];

  document.getElementById("result").textContent = "Your Akan name is: " + name;
});
