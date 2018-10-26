document.getElementById('btn').addEventListener('click', function () {
    let friends = ['Marrea', 'Tavanya', 'Sonja', 'Debra', 'Mark'];
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        var div = document.createElement('div');
        let h3 = document.createElement("h3");
        div.className = 'friends';
        h3.innerHTML = friends[i];
        document.body.appendChild(div);

        div.appendChild(h3);
        var p = document.createElement("p");
        let pdiv = document.createElement('pdiv')
        document.body.appendChild(p)
        for(var num=99; i>0; i--) {
         p.innerTest(num, 'lines of code in the file,', num, 'lines of code,', friends[i], 
            'strikes out, clears it all out', num - 1, 'lines of code in the file!')
            
            num--;
    };
}
})