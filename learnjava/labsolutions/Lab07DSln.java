
public class Lab07DSln {
	public static void main(String[] args) {
		//test case 1
		int[] nums = {1, 2, 3, 4, 5};
		if(sumArray(nums) == 15){
			System.out.println("Test case 1 passed.");
		}
		else{
			System.out.println("Test case 1 FAILED!!");
		}
		
		//test case 2
		int[] nums2 = {4, 3, 2, 5, 1};
		if(sumArray(nums2) == 15){
			System.out.println("Test case 2 passed.");
		}
		else{
			System.out.println("Test case 2 FAILED!!");
		}
		
		//test case 3
		int[] nums3 = {};
		if(sumArray(nums3) == 0){
			System.out.println("Test case 3 passed.");
		}
		else{
			System.out.println("Test case 3 FAILED!!");
		}
		
		//test case 4
		int[] nums4 = {7};
		if(sumArray(nums4) == 7){
			System.out.println("Test case 4 passed.");
		}
		else{
			System.out.println("Test case 4 FAILED!!");
		}
		
		//test case 5
		int[] nums5 = {101, 420, 1337, 69};
		if(sumArray(nums5) == 1927){
			System.out.println("Test case 5 passed.");
		}
		else{
			System.out.println("Test case 5 FAILED!!");
		}
	}
	
	public static int sumArray(int[] numbers){
		int sum = 0;
		for(int number : numbers){
			sum += number;
		}
		return sum;
	}
}
