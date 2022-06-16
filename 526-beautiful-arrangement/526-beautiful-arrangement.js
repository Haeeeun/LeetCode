/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let answer = 0;
    
    const dp = (array) => {
        let tempArray = [...array];
        const index = tempArray.length+1;
        
        for(let i=1; i<n+1; i++) {
            if((i%index === 0 || index%i === 0) && !tempArray.includes(i)) {
                tempArray[index-1] = i;
                if(tempArray.length === n) {
                    answer++;
                } else {
                    dp(tempArray);
                }
            }
        }
    }
    
    dp([]);
    
    return answer;
};