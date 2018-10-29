//create button and add to page
let button = document.createElement("button");
let buttonText = document.createTextNode("Sing!");
button.appendChild(buttonText);
document.body.appendChild(button);

let friends = ['Marrea', 'Tavanya', 'Sonja', 'Debra', 'Mark'];

//click event
button.addEventListener('click', function () {
    let page = document.createElement('div');
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        page.className = 'friend';
        document.body.appendChild(page);

        let names = document.createElement("h3");
        let text = document.createTextNode(friend);
        names.appendChild(text)
        page.appendChild(names)


        for (num = 99; num > 0; num--) {
            let song = (num + ' lines of code in the file, ' + num + ' lines of code, ' + (friends[i]) +
                ' strikes out, clears it all out, ' + (num - 1) + ' lines of code in the file! ')
            let p = document.createElement("p");
            let lines = document.createTextNode(song)
            p.appendChild(lines);
            page.appendChild(p);
        };

    }
}
);