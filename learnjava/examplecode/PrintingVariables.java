
public class PrintingVariables {
	public static void main(String[] args) {
		//now we can store data and print it out
		String name = "Lee";
		System.out.println(name);
		
		//works with many data types
		int num = 10;
		System.out.println(num);
		
		boolean isAwake = true;
		System.out.println(isAwake);
		
		//what if I want to print a description about the data?
		//one way:
		System.out.print("My name is ");
		System.out.println(name);
		
		//or better
		System.out.println("My name is " + name);
		System.out.println(name + " " + num);
	}
}
