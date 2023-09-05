
public class MethodsWithParameters {
	public static void main(String[] args) {
		//arguments are variables that can be passed to a method with matching parameters
		String myName = "Lee";
		//method call with argument
		greet(myName);
		//notice how it does not have to have the same variable name, just type has to match
		
		//also do not have to define variable explicitly before passing it as an argument
		greet("McFly");
		
		//multiple parameters are separated by commas
		int x = 5;
		int y = 4;
		add(x, y);
		//or
		add(5, 4);
		
		//what if I wanted to add two doubles??
		//create another add method but change the variable types to double
		//Overloading is when the method signature is the same except for the parameter list
		//neither parameter names nor types need to match
		double a = 3.2;
		double b = 9.5;
		add(a, b);
		//or
		add(3.2, 9.5);
		
		//do not even need to have the same number of parameters
		add(1.1, 4.8, 6.3);
	}
	
	//method parameters have their own declaration of the variable that is passed
	public static void greet(String name){
		System.out.println("Nice to meet you " + name + ".");
	}
	
	public static void add(int x, int y){
		int sum = x + y;
		System.out.println(x + " + " + y + " is " + sum);
	}
	
	//overloaded add method
	public static void add(double a, double b){
		double sum = a + b;
		System.out.println(a + " + " + b + " is " + sum);
	}
	
	//overloaded add method
	public static void add(double x, double a, double b){
		double sum = x + a + b;
		System.out.println(x + " + " + a + " + " + b + " is " + sum);
	}
}
