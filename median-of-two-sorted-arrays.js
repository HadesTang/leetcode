/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var a1 = 0;
    var a2 = 0;
    var arr = [];
    var len1 = nums1.length;
    var len2 = nums2.length;
    while(a1 < len1 && a2 < len2){
        if(nums1[a1]<nums2[a2]){
            arr.push(nums1[a1]);
            a1 ++;
        } else {
            arr.push(nums2[a2]);
            a2 ++;
        }
    }
    if (a1 === len1){
        arr = arr.concat(nums2.slice(a2));
    }else{
        arr = arr.concat(nums1.slice(a1));
    }
    var len = arr.length
    return len % 2 === 0 ? (arr[len/2 - 1] + arr[len/2])/2 : arr[(len-1)/2]   
};