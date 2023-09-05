import java.util.Scanner;

public class Lab05BSln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int[] numbers = new int[3];
		int total = 0;
		
		System.out.print("Type a number: ");
		numbers[0] = scanner.nextInt();
		System.out.print("Type another number: ");
		numbers[1] = scanner.nextInt();
		System.out.print("Type a third number: ");
		numbers[2] = scanner.nextInt();
		
		if(numbers[0] % 2 == 0){
			total += numbers[0];
		}
		if(numbers[1] % 2 == 0){
			total += numbers[1];
		}
		if(numbers[2] % 2 == 0){
			total += numbers[2];
		}
		
		System.out.println("The sum of the even numbers is " + total);
	}
}
