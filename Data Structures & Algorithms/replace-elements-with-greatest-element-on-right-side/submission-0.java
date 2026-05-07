class Solution {
    public int[] replaceElements(int[] arr) {
        int length=arr.length;
        int maxRightNum = arr[length-1];
        int[] ans = new int[length];
        Arrays.fill(ans, -1);
        for(int i=length-2;i>=0;i--){
            ans[i]=maxRightNum;
            maxRightNum = Math.max(arr[i], maxRightNum);
        }
        return ans;
    }
}