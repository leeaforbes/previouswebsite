import java.util.Scanner;

public class Project03ASln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//question 1
		System.out.print("What is your name? ");
		String name = scanner.nextLine();
		
		//question 2
		System.out.print("What is your favorite color? ");
		String color = scanner.nextLine();
		
		//response 1
		System.out.println(color + " is my favorite color too!");
		
		//question 3
		System.out.println("Let’s say you’re stranded on a desert island with one wish. ");
		System.out.print("What would be one item you wished you had? ");
		String item = scanner.nextLine();
		
		//question 4
		System.out.print("How many of that item would you wish for? ");
		int count = scanner.nextInt();
		//this reads in the rest of the line since nextInt() does not, but does not save it
		scanner.nextLine();
		
		//response 2
		System.out.println("Your backpack has " + count + " [" + item + "] in it. ");
		
		//question 5
		System.out.print("Do you wish you had more wishes? ");
		String moreWishes = scanner.nextLine();
		
		//response 3
		System.out.println("I will inform the genie.");
		
		System.out.println("Thank you for your time!");
	}
}
