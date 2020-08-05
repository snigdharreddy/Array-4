/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums == null || nums.length == 0) return;
    
    //find the breach
    let i = nums.length -2;
    while(i>=0 && nums[i] >= nums[i+1]){
        i--;
    }
    
    if(i >= 0){
            let j = nums.length-1;

        //find the element to swap with
        while(nums[i] >= nums[j]){
            j--;
        }
        swap(nums,i,j);
    }
    
    //reverse the list to get ascending order to obtain next greatest
    reverse(nums,i+1,nums.length-1);
    
};

var swap = function(nums, i, j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var reverse = function(nums, start, end ){
    while(start < end){
        swap(nums,start,end);
        start++; end--;
    }
}

//time complexity : O(n)
