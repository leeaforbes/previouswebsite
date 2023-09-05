import java.util.Scanner;

public class MoreScanner {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//what if I want to get one word at a time?
		//"words" are separated by a space by default
		//the String used to separate "words" is called a delimiter
		//this delimiter can be changed, but this will not be covered in any lessons
		String firstName = scanner.next();
		String lastName = scanner.next();
		System.out.println("Your name is: " + firstName + " " + lastName);
		
		//what if I want a number??
		//this behaves differently since not everything can be stored as an integer
		//if the user gives something that is not an integer, the program will crash
		int num = scanner.nextInt();
		System.out.println("You typed the number: " + num);
		
		double dec = scanner.nextDouble();
		System.out.println("You typed the decimal: " + dec);
		
		//warning: we are not getting the end of line character each time
		//to fix this call the scanner nextLine() method without saving it to clear the line
		scanner.nextLine();
		//now we can call nextLine again and it works as expected
		System.out.println(scanner.nextLine());
	}
}
