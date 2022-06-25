/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let answer = false;
    let queue = [[root,0]];
    
    while(queue.length !== 0) {
        const v = queue.shift();
        const node = v[0];
        const currentSum = v[1];
        
        if(!node) continue;        
        
        if(targetSum === currentSum + node.val && !node.left && !node.right) {
            answer = true;
            break;
        }
        
        queue.push([node.left, currentSum + node.val]);
        queue.push([node.right,currentSum + node.val]);
    }

    return answer 
};