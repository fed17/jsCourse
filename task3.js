function repStr(str){
    var curr = str[0];
    var n = 1;
    var l = 1;
    while (l<str.length/2+1){
        if (curr.repeat(n)===str){
            return n;
        }
        else{
            if (str.indexOf(curr.repeat(n+1))===0){
                n++;
            }
            else{
                curr=str.substr(0,++l);
                n=1;
            }
        }
    }
    return 'No repeats';
}

//part 2

function separator(str){
    var arr = str.split( "\n" ).join( " " ).split( " " );
    var wordsCounter = {};
    var max = 0;
    var response = '';

    for(var i=0;i<arr.length;i++){

        if(arr[i] in wordsCounter){
            wordsCounter[arr[i]]++;
        }else{
            wordsCounter[arr[i]] = 1;
        }
    }
    for(var t in wordsCounter){
        if(wordsCounter[t]===max){
            response = '---';
        }
        if(wordsCounter[t]>max){
            max = wordsCounter[t];
            response = t;
        }
    }
    return response;
}


//part 3


function correctParses (str){
    var state = true;

    while(state){
        if(str.indexOf('{}')!==-1){
            str = str.replace('{}','');
            continue;
        }
        if(str.indexOf('()')!==-1){
            str = str.replace('()','');
            continue;
        }
        if(str.indexOf('[]')!==-1){
            str = str.replace('[]','');
            continue;
        }
        state = false;
    }
    if(str.length){
        return false;
    }else{
        return true;
    }
}
