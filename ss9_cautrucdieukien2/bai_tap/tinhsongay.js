function songaytrongthang() {
    let a = parseInt(document.getElementById('thang').value);
    switch (a) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('songay').innerHTML = '31'
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('songay').innerHTML ='30'
            break;
        case 2:
            document.getElementById('songay').innerHTML = '28,29';
            break;

    }

}