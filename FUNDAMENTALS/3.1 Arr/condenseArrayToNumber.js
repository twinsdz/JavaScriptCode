function condenseNum(nums) {
    while (nums.length >= 2) {

        let condensed = [];  // Array(nums.length-1)

        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(nums[0]);
}


condenseNum([2, 10, 3]);

condenseNum([5]);