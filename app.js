let friends = ['Marrea', 'Tavanya', 'Sonja', 'Debra', 'Mark'];
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    //First console.log works
    var num = 99;
    while (num > 0) {
        console.log(num, 'lines of code in the file,', num, 'lines of code,', friends[i], 
        'strikes out, clears it all out', num - 1, 'lines of code in the file!');
        num--;
    }
}