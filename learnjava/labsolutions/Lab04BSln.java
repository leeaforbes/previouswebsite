import java.util.Scanner;

public class Lab04BSln {
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
		
		//sets the default grade to the lowest bracket
		//sets the letter to a higher bracket if grade within bracket
		char letter = 'F';
		if(average >= 90){
			letter = 'A';
		}
		else if(average >= 80){
			letter = 'B';
		}
		else if(average >= 70){
			letter = 'C';
		}
		else if(average >= 60){
			letter = 'D';
		}
		
		//prints out letter grade
		System.out.println("Letter grade average: " + letter);
	}
}
