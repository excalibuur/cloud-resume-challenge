const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://noes6vmnzg3rvbxwyeafwo6ozm0liinr.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = `  ${data} Vues !`;
    console.log(data);
}

updateCounter();