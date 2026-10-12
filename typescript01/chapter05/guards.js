"use strict";
function moveMammal(mammal) {
    if ("walkingSpeed" in mammal) {
        console.log(`human is moving at ${mammal.walkingSpeed} km/h`);
    }
    else {
        console.log(`Horse is movin at ${mammal.runningSpeed} km/h `);
    }
}
moveMammal({ walkingSpeed: 10 });
moveMammal({ runningSpeed: 40 });
//# sourceMappingURL=guards.js.map