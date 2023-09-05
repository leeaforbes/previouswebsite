import java.util.Scanner;

public class Project06ASln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("How many words would you like to type? ");
		int numWords = scanner.nextInt();
		//clear the line after getting the int
		scanner.nextLine();
		
		//create an array with enough spots to hold the number of words
		String[] words = new String[numWords];
		
		//loop for all index locations
		for(int index = 0; index < words.length; index++){
			System.out.print("Type a word: ");
			//set the String at the current index to the next line typed
			words[index] = scanner.nextLine();
		}
		
		//picks a random index in the range of the words of array
		System.out.println("Your random word is: " + words[(int)(Math.random() * numWords)]);
	}
}
