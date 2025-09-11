/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    //set empty hash map
    let map = {};

    //Loop through nums
    for (let i = 0; i< nums.length; i++) {

    // set current number variable
    let current = nums[i];
    
    // set partner number = target num - current number
    let partner = target - current;

    //if partner number exists in hashmap, return index of partner number
    if (map.hasOwnProperty(partner)){
        return [map[partner], i];
    }

    // else store current number with its index
    map[current] = i;
    
    }

};