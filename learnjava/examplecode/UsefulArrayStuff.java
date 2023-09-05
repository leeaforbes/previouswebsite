import java.util.Arrays;

public class UsefulArrayStuff {
	public static void main(String[] args) {
		String[] names = new String[4];
		
		names[0] = "Jerry";
		names[1] = "George";
		names[2] = "Kramer";
		names[3] = "Elaine";
		
		//print out the entire array
		System.out.println(Arrays.toString(names));
		
		//array length
		System.out.println("Array \"names\" is length: " + names.length);
		
		//array shorthand
		//creates the array for you with the specified values in that order
		int[] ages = {35, 18, 21, 65};
		System.out.println(Arrays.toString(ages));
		
		//sort the array
		Arrays.sort(ages);
		System.out.println(Arrays.toString(ages));
	}
}
