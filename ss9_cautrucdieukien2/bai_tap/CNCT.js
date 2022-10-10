function cannangcothe() {
    let kg =document.getElementById('cannang').value;
    let m= document.getElementById('chieucao').value;
    let result = kg /(m*m);


    if(result<18.5){
        document.getElementById("result").innerHTML = "chỉ số BMI là " + result + "underwight "
    }
    else if (result>25){
        document.getElementById("result").innerHTML="chỉ số BMI"+result+ "normal";
    }
    else if (result>30){
        document.getElementById('result').innerHTML='chỉ số BMI'+result+'Overweight'
    }
    else {
        document.getElementById('result').innerHTML='chỉ số BMi'+result+'Obese'

    }


}