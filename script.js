let count = 0;

const target = 99;

function increment() {

    count++;

    document.getElementById("count").innerHTML = count;


    const beads = document.getElementById("beads");


    beads.classList.add("animate");


    setTimeout(() => {

        beads.classList.remove("animate");

    }, 300);



    if (count === target) {

        document.getElementById("message").innerHTML =
            "✨ Target completed!";

    }

}



function resetCounter() {

    count = 0;

    document.getElementById("count").innerHTML = count;


    document.getElementById("message").innerHTML =
        "Start your zikr";

}