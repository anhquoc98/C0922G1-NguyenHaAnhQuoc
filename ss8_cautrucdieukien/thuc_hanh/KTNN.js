var nam =parseInt(prompt('enter a year'));
var laNamNhuan = false;
var namchiahetcho4 = nam % 4 ==0 ;
if(namchiahetcho4){
    var namchiahetcho100 = nam % 100 ==0;
    if (namchiahetcho100){
        var namchiahetcho400 = nam % 400 ==0;
        if (namchiahetcho400){
            laNamNhuan = true;
        }
        else {
            laNamNhuan=true
        }
    }
    if(laNamNhuan) {
        alert( nam+"lanamnhuan");

    }
    else {
        alert( nam+ "namkhongnhuan");
    }


}
