
public class ArrayValues {
	public static void main(String[] args) {
		int[] numbers = new int[4];
		
		//accessing a value
		//arrays in Java are zero indexed, which means the first element is in position 0
		//getting a value is done by using the array name then [position]
		
		//getting the values in the array
		System.out.println(numbers[0]);
		System.out.println(numbers[1]);
		System.out.println(numbers[2]);
		System.out.println(numbers[3]);
		
		//this causes an error because there is no position 4 (5th element) in the array
		//System.out.println(numbers[4]);
		
		//setting values in the array is like getting them except assigning a value to it after
		numbers[0] = 23;
		//so now if you were to print that value out, it will have changed to what you set it to
		System.out.println(numbers[0]);
	}
}
