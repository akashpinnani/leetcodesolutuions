
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.



// Input: nums = [5,4,-1,7,8]
// Output: 23

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxCurrent = nums[0], maxGlobal = nums[0];
    for(let i = 1; i< nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent+ nums[i]);
        maxGlobal = Math.max(maxCurrent, maxGlobal);
    }
    return maxGlobal;
};