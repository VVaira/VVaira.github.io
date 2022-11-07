const divek = document.querySelectorAll('.item');
let counter = 0;

main();

function main() {
    let veletlen = Math.floor(36 * Math.random());
    let jelenlegi = divek[veletlen]
    jelenlegi.classList.toggle('kepes');
    
    jelenlegi.addEventListener('click', kep);
}

function kep(e) {
    let itt = e.target;
    itt.classList.toggle('kepes');
    itt.removeEventListener('click', kep);

    let veletlen = Math.floor(36 * Math.random());

    while (divek[veletlen] == itt) {
        veletlen = Math.floor(36 * Math.random());
    }

    let jelenlegi = divek[veletlen]
    jelenlegi.classList.toggle('kepes');
    
    jelenlegi.addEventListener('click', kep);

    counter++;
    document.querySelector('#szamlal').innerHTML = counter;
}