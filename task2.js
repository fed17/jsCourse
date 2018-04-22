function List(){
    this.len = 0;
    this.first = null;
    this.fin = null;
}
function Elem(num){
    this.value = parseInt(num);
    this.prev = null;
    this.next = null;
}

List.prototype.add = function(val){
    var el = new Elem(val);

    if(this.len){
        this.fin.next = el;
        el.prev = this.fin;
        this.fin = el;
    }else{
        this.first = el;
        this.fin = el;
    }
    this.len++;

    return el;
};

List.prototype.search = function(num){
    var temp = this.first;

    if(!this.len || num > this.len || num < 1){
        return "Incorrect number or list is empty";
    }
    for (var curr=1;curr<num;curr++){
        temp = temp.next;
    }
    return temp;
};
List.prototype.del = function(num){
    var temp = this.first;

    if(!this.len || num > this.len || num < 1){
        return "Incorrect number or list is empty";
    }
    if(num===this.len){
        this.fin = this.fin.prev;
        this.fin.next = null;
    }else if(num===1){
        this.first = temp.next;
        if (!this.first) {
            this.first.prev = null;
        } else {
            this.fin = null;
        }
    }else {
        for (var curr=1;curr<num;curr++){
            temp = temp.next;
        }
        var extra = temp;
        temp.prev = temp.next;
        temp.next.prev = temp.prev;
    }
    this.len--;
    return "Successfully deleted element "+num;
};
function numberToList(num){
    var l = new List();
    var str = String(num);
    var len = str.length-1;
    for (var i = 0; i < len+1; i++){
        l.add(str[len-i]);
    }
    return l;
}

// second part

var v1 =717;
var v2 =1;
var l1 = numberToList(v1);
var l2 = numberToList(v2);

function addList(l1,l2){
    var long = null;
    var short = null;
    if (l1.len>l2.len){
        long = l1;
        short = l2;
    }
    else{
        long = l2;
        short = l1;
    }
    var res = new List();
    var s = short.first;
    var l = long.first;
    var left = parseInt(0);
    for (var i=0;i<short.len;i++){
        alert('first');
        alert((s.value+l.value+left) % 10);
        res.add((s.value+l.value+left) % 10);
        left = Math.trunc((s.value+l.value)/10);
        s = s.next;
        l = l.next;
    }
    for (var j=0;j<long.len-short.len;j++) {
        res.add((l.value + left) % 10);
        left = Math.trunc((l.value) / 10);
        l = l.next;
    }
    return res.first;
}
function addList1() {
    addList(l1,l2);
}
