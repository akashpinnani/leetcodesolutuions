// Input: nums = [1,2,3,1]
// Output: true


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i=0; i< nums.length; i++) {
    if(set.has(nums[i])) {return true;}
    else {
        set.add(nums[i]);
    }
    }
    return false;
};