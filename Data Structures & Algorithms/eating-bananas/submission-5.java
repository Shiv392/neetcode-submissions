class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int length=piles.length;
        int max = Arrays.stream(piles).max().getAsInt();
        int min_speed=1, max_speed = max;
        while(min_speed<=max_speed){
            int speed = min_speed+(max_speed-min_speed)/2;
            int time = get_hours(piles, speed);
            if(time>h){
                min_speed = speed+1;
            }
            else max_speed = speed-1;
        }
        return min_speed;
    }

    public static int get_hours(int[] arr, int speed){
        int time=0;
        for(int num : arr){
            time+= (num/speed);
            if(num%speed!=0) time++;
        }
        return time;
    }
}
