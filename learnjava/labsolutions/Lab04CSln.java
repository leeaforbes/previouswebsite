import java.util.Scanner;

public class Lab04CSln {
	public static void main(String[] args) {
		String username = "mcfly";
		int passcode = 12345; //incredibly secure
		
		//ask user for username and passcode
		System.out.println("Enter for access to the DeLorean");
		Scanner scanner = new Scanner(System.in);
		System.out.print("username: ");
		String usernameGuess = scanner.nextLine();
		System.out.print("passcode: ");
		int passcodeGuess = scanner.nextInt();
		
		//tell them about their guesses
		if(username.equals(usernameGuess) && passcode == passcodeGuess){
			System.out.println("ACCESS GRANTED");
		}
		else if(username.equals(usernameGuess) || passcode == passcodeGuess){
			System.out.println("username or passcode is incorrect");
		}
		else{
			System.out.println("both username and passcode incorrect");
		}
	}
}
