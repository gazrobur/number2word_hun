var ones=['','egy','kettő','három','négy','öt','hat','hét','nyolc','kilenc'];
var tens=['','','húsz','harminc','negyven','ötven','hatvan','hetven','nyolcvan','kilencven'];
var teens=['tíz','tizenegy','tizenkettő','tizenhárom','tizennégy','tizenöt','tizenhat','tizenhét','tizennyolc','tizenkilenc'];


function convert_millions(num){
    if (num>=1000000){
        if(convert_thousands(num%1000000) == "") return convert_millions(Math.floor(num/1000000))+"millió";
        return convert_millions(Math.floor(num/1000000))+"millió-"+
        convert_thousands(num%1000000);
    }
    else {
        return convert_thousands(num);
    }
}

function convert_thousands(num){
    if(num == 1000) {
        return "ezer";
    }
    if (num>1000){
        if(num > 1000 && num <= 1999) {
            return "ezer"+convert_hundreds(num%1000)
        }
        if(convert_hundreds(num%1000) == "") return convert_hundreds(Math.floor(num/1000))+"ezer";
        return convert_hundreds(Math.floor(num/1000))+"ezer-"+convert_hundreds(num%1000);
    }
    else{
        return convert_hundreds(num);
    }
}

function convert_hundreds(num){
    if (num>199){
        return ones[Math.floor(num/100)]+"száz"+convert_tens(num%100);
    } else if(num<= 199 && num>99) {
        return "száz"+convert_tens(num%100);
    }
    else{
        return convert_tens(num);
    }
}

function convert_tens(num){
    if (num<10) {
        return ones[num];
    } else if (num>=10 && num<20) {
        return teens[num-10];
    } else if(num>=21 && num <=29) {
        return "huszon"+ones[num%10];
    }
    else{
        return tens[Math.floor(num/10)]+ones[num%10];
    }
}

function convert(num){
    if (num==0) return "nulla";
    else return convert_millions(num);
}

exports.convert = function(num) {
    return convert(num);
};