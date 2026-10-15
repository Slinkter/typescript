"use strict";
const family = ['anna', 'liam', 'peterson'];
//family.push("raj")
//family.pop()
family.find(x => {
    if (x.length > 5) {
        console.log(x);
    }
});
