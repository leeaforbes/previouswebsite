
public class CreatingArrays {
	public static void main(String[] args) {
		//what if I wanted to define a large number of the same variable?
		int number1;
		int number2;
		int number3;
		int number4;
		int number5;
		//...
		//it would take forever and would be really messy since they aren't actually grouped in any programmatical way
		//this is where arrays are useful
		
		//arrays are declared by adding [] after the variable type
		//by convention, a lot of the time the name has an "s" at the end because an array holds multiple elements
		int[] numbers;
		
		//instantiating an array creates an array of those variables with their default values set
		//for example, an int array has all of its values set to 0
		//the number inside the [] when instantiating the array is how many elements are in the array, or length
		numbers = new int[10];
		
		//more examples of creating arrays
		//char array of length 5, default value null character
		char[] letters = new char[5];
		
		//boolean array of length 4, default value false
		boolean[] lightSwitches = new boolean[4];
		
		//String array of length 100, default value null
		String[] names = new String[100];
	}
}
