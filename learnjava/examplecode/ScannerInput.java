import java.util.Scanner;

public class ScannerInput {
	public static void main(String[] args) {
		//a scanner variable is used for parsing types of data in a linear fashion
		//the syntax of this line is beyond what has been taught so far, so just use this for now
		//I believe button - Mike Scott
		//remember how System.out.println() printed out to the console, System.in reads in from the console
		//notice this also requires an import statement at the top because it uses the Java library
		Scanner scanner = new Scanner(System.in);
		
		//this is a method of the scanner variable, this concept will be taught later, so just use this for now
		//this waits for you to "make a new line" in the console, which is the enter key
		//the data that is typed on the current line is what this method interacts with
		scanner.nextLine();
		
		//what if I want to store what I type?
		String line = scanner.nextLine();
		
		//now you have saved what the user typed to be used later! WOW!
		System.out.println("You typed: " + line);
		
		//commonly, you prompt the user to type something
		System.out.print("What is your name? ");
		String name = scanner.nextLine();
		System.out.println("Hello " + name + "!");
	}
}
