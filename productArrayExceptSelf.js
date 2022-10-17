//Input: nums = [1,2,3,4]
//Output: [24,12,8,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let output = [1];
        // calculating prefix
        for(let i=1; i<nums.length; i++) {
            output[i] = output[i-1] * nums[i-1];
        }
        // calculating suffix and multiplying with prefix
        let suffix = 1;
        for(let i = nums.length - 1; i>=0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }
        return output;
    };