import java.util.Scanner;

public class Lab06DSln {
	public static void main(String[] args) {
		System.out.print("Calculate 2 to the power of: ");
		Scanner scanner = new Scanner(System.in);
		int power = scanner.nextInt();
		
		int answer = 1;
		for(int i = 0; i < power; i++){
			answer *= 2;
		}
		
		System.out.println("2 to the power of " + power + " is " + answer);
	}
}
