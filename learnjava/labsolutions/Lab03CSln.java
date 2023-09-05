import java.util.Scanner;

public class Lab03CSln {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//gets the current year
		System.out.print("What year is it? ");
		int currentYear = scanner.nextInt();
		
		//gets the user's birth year
		System.out.print("What year were you born? ");
		int userBirth = scanner.nextInt();
		
		int age = currentYear - userBirth;
		System.out.println("You are about " + age + " years old.");
	}
}
