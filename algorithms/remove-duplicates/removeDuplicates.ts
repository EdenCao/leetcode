export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
