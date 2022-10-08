function chuyenTien () {
    let tienNhap = document.getElementById("tienNhapVao").value;
    let den = document.getElementById('from').value;
    let di = document.getElementById('to').value;
    let result;
    if (den == "usd" && di == "VND") {
        result = "result: " + (tienNhap * 23000) + " Đ";
    }
    else if (den == "VND"&& di =="usd"){
        result = "result: "+ (tienNhap / 23000) + " $";
    }
    else if (den == "VND") {
        result = "result: " +tienNhap ;
    } else {
        result = "result: " + tienNhap ;
    }
    document.getElementById('result').innerHTML =result;
}

