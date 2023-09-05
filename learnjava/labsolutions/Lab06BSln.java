import java.util.Scanner;

public class Lab06BSln {
	public static void main(String[] args) {
		double sum = 0;
		double enteredNum = -1; //placeholder value; can be anything except 0
		Scanner scanner = new Scanner(System.in);
		
		//keep asking for a number until it is 0
		while(enteredNum != 0){
			System.out.print("Enter a number: ");
			enteredNum = scanner.nextDouble();
			sum += enteredNum;
		}
		System.out.println("The sum of the numbers is " + sum);
	}
}
