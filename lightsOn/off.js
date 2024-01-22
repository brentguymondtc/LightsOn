
    // Light Bulb
    const lightBulbImage = document.querySelector("#lightBulb");

    //mouse over = light buld on
    lightBulbImage.addEventListener("mouseover", () => {
        lightBulbImage.src = "light_bulb_on.png";
    });

    // mouse away = light off 
    lightBulbImage.addEventListener("mouseout", () => {
        lightBulbImage.src = "light_bulb_off.png";
    });


    // pumpkins
    const pumpkinImage = document.querySelector("#pumpkins");

    pumpkinImage.addEventListener("click", () => {
        const currentSrc = pumpkinImage.getAttribute("src");

        if (currentSrc === "pumpkins.jpg") {
            pumpkinImage.src = "pumpkins-lit.jpg";
        } else {
            pumpkinImage.src = "pumpkins.jpg";
        }
    });

