const inputUser = document.getElementById("input-user")! as HTMLInputElement;
/*  */
inputUser?.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    console.log(target.value);
});
