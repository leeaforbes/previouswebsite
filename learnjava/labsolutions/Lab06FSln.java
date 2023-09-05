import java.util.Scanner;

public class Lab06FSln {
	public static void main(String[] args) {
		String[] commonWords = {"the", "be",  "to", "of", "and", "a", "in", "that", "have", "I"};
		Scanner scanner = new Scanner(System.in);
		
		//gets the first character of what they typed
		System.out.print("End letter: ");
		char endLetter = scanner.nextLine().charAt(0);
		
		//for each String in commonWords
		for(String word : commonWords){
			//prints out the word with the end letter after it
			System.out.println(word + endLetter);
		}
	}
}
