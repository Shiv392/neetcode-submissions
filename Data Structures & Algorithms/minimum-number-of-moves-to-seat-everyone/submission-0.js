class Solution {
    /**
     * @param {number[]} seats
     * @param {number[]} students
     * @return {number}
     */
    minMovesToSeat(seats, students) {
        seats.sort((a,b)=>a-b);
        students.sort((a,b)=>a-b);
        let length=seats.length, ans=0;
        for(let i=0; i<length; i++){
            ans+= Math.abs(seats[i]-students[i]);
        }
        return ans;
    }
}
