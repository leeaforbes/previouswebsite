import java.util.Scanner;

public class Lab04ASln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Type a whole number: ");
		int number = scanner.nextInt();
		
		//prints if the number is equal to 42 or not
		if(number == 42){
			System.out.println("The number is equal to 42");
		}
		else{
			System.out.println("The number is not equal to 42");
		}
		
		//prints if the number is less than 0, equal to 0, or greater than 0
		if(number < 0){
			System.out.println("The number is less than 0");
		}
		else if(number == 0){
			System.out.println("The number is 0");
		}
		else{
			System.out.println("The number is greater than 0");
		}
	}
}
