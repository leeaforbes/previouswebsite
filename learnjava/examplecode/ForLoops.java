
public class ForLoops {
	public static void main(String[] args) {
		//remember how we would make a variable to increment or decrement for the loop condition?
		//for loops do all of that in a nice, compact way
		
		//format: for(<make variable>; <condition>; <action to lead to end>)
		//variable created first,
		//then condition checked each time before loop execution,
		//action executed once after each loop execution
		
		//example: counts from 1 to 5 inclusive
		for(int i = 1; i <= 5; i++){
			System.out.println("count: " + i);
		}
		
		//especially helpful with arrays
		int[] nums = {0, 1, 4, 2, 3, 7, 8, 12};
		for(int i = 0; i < nums.length; i++){
			if(nums[i] % 2 == 1){
				System.out.println("odd: " + nums[i]);
			}
		}
		
		//a short keyboard
		char[] keys = {'a', 'w', 's', 'd', ' '};
		for(int keyLocation = 0; keyLocation < keys.length; keyLocation++){
			System.out.println("Key at location " + keyLocation + " is " + keys[keyLocation]);
		}
		
		for(int keyLocation = 4; keyLocation >= 0; keyLocation--){
			System.out.println("Key at location " + keyLocation + " is " + keys[keyLocation]);
		}
	}
}
