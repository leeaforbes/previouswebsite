import java.util.Scanner;

public class Lab03BSln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//gets the first number
		System.out.print("Enter a number: ");
		double number1 = scanner.nextDouble();
		
		//gets the second number
		System.out.print("Enter another number: ");
		double number2 = scanner.nextDouble();
		
		//gets the third number
		System.out.print("Enter a third number: ");
		double number3 = scanner.nextDouble();
		
		//gets the average and prints it out
		double total = number1 + number2 + number3;
		double average = total / 3;
		System.out.println("The average is: " + average);
	}
}
