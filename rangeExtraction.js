function solution(list) {
    var endArray = [];
    var tempArray = [];
    var arr = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i] + 1 === list[i + 1]) {
            tempArray.push(list[i])
        } else {
            tempArray.push(list[i])
            if (tempArray.length >= 3) {
                endArray.push(tempArray[0] + '-' + tempArray[tempArray.length - 1]);
                tempArray = [];
            }
            while (tempArray.length > 0) {
                endArray.push(tempArray.shift())
            }
        }
    }
    return endArray.join(",");
}
