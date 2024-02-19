var denishPrice = 50;
var packedWell = true;
var butterBonPrice = 20;
var tustBiscut = 10;
var myBudget = 11;


if(denishPrice < myBudget){
    if(packedWell == false ){
        console.log('denish ami khabo na');
    }else{
        console.log("denish diya cha khabo");
    }
    
}
else if(butterBonPrice <= myBudget && tustBiscut < myBudget){
    console.log('butter bon and tust, diya cha khabo')
}else if(tustBiscut <myBudget){
    console.log('tust diya cha khabo')
}
else{
    console.log("batasha diya cha khabo")
}