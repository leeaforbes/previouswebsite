import java.util.Scanner;

public class Lab05ASln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int[] numbers = new int[3];
		
		System.out.print("Type a number: ");
		numbers[0] = scanner.nextInt();
		System.out.print("Type another number: ");
		numbers[1] = scanner.nextInt();
		System.out.print("Type a third number: ");
		numbers[2] = scanner.nextInt();
		
		System.out.println("The sum of the numbers is " + (numbers[0] + numbers[1] + numbers[2]));
	}
}
