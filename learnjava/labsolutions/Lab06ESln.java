import java.util.Scanner;

public class Lab06ESln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//gets the String they typed
		System.out.print("Type something: ");
		String words = scanner.nextLine();
		
		//gets the first character of the string they typed
		System.out.print("Type a letter: ");
		char letter = scanner.nextLine().charAt(0);
		
		//counts how many of that letter are in what they typed
		int count = 0;
		//loop defines index variable, while index is less than words length, increment index each time
		for(int index = 0; index < words.length(); index++){
			//increments count if the current character at this index is the right letter
			if(words.charAt(index) == letter){
				count++;
			}
		}
		
		System.out.println("There are " + count + " of the letter '" + letter + "'");
	}
}
