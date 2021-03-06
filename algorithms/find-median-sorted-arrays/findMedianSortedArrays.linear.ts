export function findMedianSortedArrays(
  nums1: number[] = [],
  nums2: number[] = []
): number | null {
  const ans: number[] = [];
  const ansLen = nums1.length + nums2.length;

  if (ansLen === 0) return null;

  let currNum1: number | undefined = nums1.shift();
  let currNum2: number | undefined = nums2.shift();

  while (currNum1 !== undefined || currNum2 !== undefined) {
    if (currNum1 === undefined) {
      ans.push(currNum2!, ...nums2);
      break;
    }

    if (currNum2 === undefined) {
      ans.push(currNum1!, ...nums1);
      break;
    }

    if (currNum1 >= currNum2) {
      ans.push(currNum2);
      currNum2 = nums2.shift();
    } else {
      ans.push(currNum1);
      currNum1 = nums1.shift();
    }
  }

  if (ansLen % 2 === 0) {
    const i = ansLen / 2;
    return (ans[i] + ans[i - 1]) / 2;
  } else {
    const i = Math.floor(ansLen / 2);
    return ans[i];
  }
}
