import java.util.Scanner;

public class VoidMethods {
	public static void main(String[] args) {
		//up until now we have done everything in our main method
		//we can create a method so that we can avoid redundant code
		//they help for readability and maintaining code later
		
		//the keywords used in the method declaration are called the method signature
		//each keyword has a meaning and here is a general format for methods:
		//<access modifier> <static(optional)> <return type> <method name>(<parameter list>)
		//	for now all of our access modifiers will be public
		//	for now all of our methods will be static
		//	for now all of our return types will be void
		//	our method name can be whatever we like
		//	for now we will have no parameters
		
		//see method 1
		//you can "call" the method by stating its method name
		printHello();
		
		//can call methods as many times as you like, which often is their purpose to avoid redundant code
		printHello();
		printHello();
		
		//see method 2
		askForWord();
		
		//see method 3
		countToFive();
		countToFive();
	}
	
	//method 1
	public static void printHello(){
		//code inside here executes upon method call
		System.out.println("Hello.");
	}
	
	//method 2
	public static void askForWord(){
		Scanner scanner = new Scanner(System.in);
		System.out.print("Type something: ");
		String something = scanner.nextLine();
		System.out.println("You typed: " + something);
	}
	
	//method 3
	public static void countToFive(){
		for(int i = 1; i <= 5; i++){
			System.out.println(i);
		}
	}
}
