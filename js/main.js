/**
 * todo: Namta
 */

let namta = 5;
for(let i=1; i<=20; i++){

    console.log(namta + "X" + i + "=" + namta*i);

    let age = i*5;

    if(age>0 && age<=15){
        console.log("Apnar bie korar boios hoi nai");
    }else if(age>15 && age<=25){
        console.log("Apni bie korte paren");
    }else if(age>25 && age<=35){
        console.log("Apni taratari bie korun");
    }else if(age>35 && age<=45){
        console.log("Apni bie korte deri kore felecen");
    }else{
        console.log("Apnar bie kora lagbe na");
    }
    
  
}



