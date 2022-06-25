/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustPeople = new Array(n).fill(false);
    let townJudge = -1;
    
    while(trust.length !== 0) {
        let peoples = trust.shift();
        trustPeople[peoples[0]-1] ?
            trustPeople[peoples[0]-1].push(peoples[1])
            : trustPeople[peoples[0]-1] = [peoples[1]]
    }
    
    let tempJudgeList = [];
    
    //아무도 믿지 않는 사람을 tempJudgeList 에 추가
    for(let i=0; i<trustPeople.length; i++) {
        if(trustPeople[i] === false) tempJudgeList.push(i+1);
    }
    
    while(tempJudgeList.length !== 0) {
        const tempJudge = tempJudgeList.pop();
        let isTownJudge = true;
   
        for(let i=0; i<trustPeople.length; i++) {
            if(i === tempJudge - 1) continue;
            if(!trustPeople[i] || !trustPeople[i].includes(tempJudge)) {
                isTownJudge = false;
                break;
            }
        }
        
        if(isTownJudge) {
            townJudge = tempJudge;
            break;
        }
        
        continue;  
    }
    
    return townJudge;
};