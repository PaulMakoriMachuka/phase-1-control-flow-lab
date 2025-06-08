function scuberGreetingForFeet(feet) {
  const freeRideLimit = 400;
  const twentyDollarLimit = 2000;
  const maxAllowedDistance = 2500;

  if (feet <= freeRideLimit) {
    return "This one is on me!";
  } else if (feet > freeRideLimit && feet <= twentyDollarLimit) {
    return "That will be twenty bucks.";
  } else if (feet > twentyDollarLimit && feet <= maxAllowedDistance) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  const allowedCity = "NYC";
  return city === allowedCity ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  const generous = "generous";
  const notGenerous = "not as generous";

  switch (tip) {
    case generous:
      return "Thank you so much.";
    case notGenerous:
      return "Thank you.";
    default:
      return "Bye.";
  }
}