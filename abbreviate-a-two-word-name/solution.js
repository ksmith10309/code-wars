function abbrevName(name){
    var split = name.toUpperCase().split(" "); 
    return `${split[0][0]}.${split[1][0]}`;
}