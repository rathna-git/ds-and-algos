var twoSum = function(nums, target){
    let result = {};
    for (let i=0; i< nums.length; i++){
        let complement = target - nums[i];
        if(nums[i] in result){
            return [result[nums[i]], i];
        }
      result[complement] = i;
    }
};

twoSum([8, 2, 1, 7, 11, 15], 9);
