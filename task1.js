function task1(str) {
    var mult = 1;
    var result = 0;
    var len = str.length-1;

    for (var i=0;i<len+1;i++){
        if(str[len - i]==='0'||str[len-i]==='1'){
            result+=mult*str[len-i];
            mult*=2;
        }else{
            return undefined;
        }
    }
    return result;
}
