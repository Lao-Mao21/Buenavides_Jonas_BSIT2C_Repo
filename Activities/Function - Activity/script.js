function whatShallIWear (temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a Sweater");
    } else {
        console.log("Wear a T-Shirt");
    }
}

whatShallIWear(50);
whatShallIWear(60);
whatShallIWear(80);