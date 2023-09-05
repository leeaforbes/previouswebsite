import java.util.Scanner;

public class Project04ASln {
	//I'm indebted to Graham Forbes for the inspiration behind this exercise.
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
		
		//print them in ascending order
		System.out.print("Sorted in ascending order: ");
		if(number1 < number2){
			if(number2 < number3){
				System.out.println(number1 + ", " + number2 + ", " + number3);
			}
			else if(number3 < number1){
				System.out.println(number3 + ", " + number1 + ", " + number2);
			}
			else{
				System.out.println(number1 + ", " + number3 + ", " + number2);
			}
		}
		else if(number2 < number3){
			if(number1 > number3){
				System.out.println(number2 + ", " + number3 + ", " + number1);
			}
			else{
				System.out.println(number2 + ", " + number1 + ", " + number3);
			}
		}
		else{
			System.out.println(number3 + ", " + number2 + ", " + number1);
		}
	}
}
