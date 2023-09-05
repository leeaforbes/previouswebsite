import java.util.Scanner;

public class Lab03ASln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//get the first word
		System.out.print("Enter a word: ");
		String word1 = scanner.nextLine();
		
		//get the second word
		System.out.print("Enter another word: ");
		String word2 = scanner.nextLine();
		
		//concatenates the two words and prints them out
		String combinedWord = word1 + word2;
		System.out.println("Your combined word: " + combinedWord);
	}
}
