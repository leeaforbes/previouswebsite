
public class Lab07BSln {
	public static void main(String[] args) {
		printWordLength("mousepad");
		biggerNumber(42);
	}
	
	public static void printWordLength(String word){
		System.out.println("The word \"" + word + "\" is length " + word.length());
	}
	
	public static void biggerNumber(int number){
		System.out.println((number + 1) + " is bigger than " + number);
	}
}
