function Graph(){
    this.arr = [];
}

Graph.prototype.add=function(l){
    var max = [];
    for (var i in l){
        if (l[i][0]>max){ max = l[i][0];}
        if (l[i][1]>max){ max = l[i][1];}
    }
    ++max;
    var b = [];
    for (var i=0; i<max; i++){
        a = [];
        for (var j=0;j<max;j++){
            a.push(0);
        }
        b.push(a);
    }
    this.arr = b;
    for (i in l){
        var x = l[i][0];
        var y = l[i][1];
        this.arr[x][y] = l[i][2];
        this.arr[y][x] = l[i][2];
    }
};
Graph.prototype.dfs=function(){
    var stack=[0];
    var prev = [];
    while (stack.length>0){
        var cur = stack.pop();
        prev.push(cur);
        console.log(cur);
        for (var i in this.arr[cur]){
            if (this.arr[cur][i]>0){
                if (prev.indexOf(i)===-1){
                    stack.push(i);
                }
            }
        }
    }
};
Graph.prototype.bfs=function(){
    var stack = [0];
    var prev = [];
    while (stack.length>0){
        var stack2 = [];
        for (var i=0;i<stack.length;i++){
            console.log(stack[i]);
            prev.push(stack[i]);
            for (var j=0;j<this.arr[stack[i]];j++){
                if (this.arr[stack[i]][j]>0){
                    if (prev.indexOf(j)===-1){
                        stack2.push(j);
                    }
                }
            }
        }
        stack = stack2;
    }
};
Graph.prototype.djkstr=function(s){
    var matrix = this.arr;
    var N = matrix.length;
    var val = [];
    var wt = [];
    for (var i=0; i<N; i++){
        val.push(true);
        wt.push(-1);
    }
    wt[s]=0;
    for (var i=0;i<N;i++){
        var light = -1;
        var light_num = -1;
        for (var j=0;j<wt.length;j++){
            if (light===-1){
                if ((val[j]) && (wt[j]!==-1)){
                    light = wt[j];
                    light_num = j;
                }
            }
            else{
                if ((val[j])&&(wt[j]<light)&&(wt[j]!==-1)){
                    light = wt[j];
                    light_num = j;
                }
            }
            if (light_num===-1){
                break;
            }
            /**/
            for (var k=0; k<N;k++){
                if (wt[k]===-1){
                    if (matrix[light_num][k]>0){
                        wt[k]=weight[light_num]+matrix[light_num][k];
                    }
                }
                else{
                    if (wt[light_num]+matrix[light_num][k] < wt[k]){
                        if (matrix[light_num][k]>0){
                            wt[k] = wt[light_num]+matrix[light_num][k];
                        }
                    }
                }
            }
            val[light_num] = false;
        }
    }
    return wt;
};
Graph.prototype.minPath=function(s,e){
    var ww = this.djkstr(s);
    return ww[e];
};
