
public class RandomNumbers {
	public static void main(String[] args) {
		//RUNNING THIS PROGRAM MULTIPLE TIMES WILL MOST LIKELY GIVE DIFFERENT RESULTS EACH TIME
		
		Math.random(); // gives a random double value [0, 1)
		System.out.println("[0, 1) " + Math.random());
		
		//casting a variable can change it into another variable type
		//format: (desired variable type)(variable)
		//NOT ALL VARIABLES CAN BE CASTED TO ONE ANOTHER
		int num = (int)(Math.random()); //casts the double from Math.random() to an int, which truncates it to the whole number
		System.out.println("zero " + num); //should be 0 every time since 1 not included
		
		//bigger range than [0, 1)
		System.out.println("[0, 3) " + (Math.random() * 3)); //[0, 3) because [0 * 3, 1 * 3)
		
		//add the cast for whole numbers [0, 3)
		System.out.println("Z [0, 3) " + (int)(Math.random() * 3));
		
		//shifted range
		System.out.println("[1, 2) " + (Math.random() + 1)); //[1, 2) because [0 + 1, 1 + 1)
		System.out.println("[7, 8) " + (Math.random() + 7)); //[7, 8) because [0 + 7, 1 + 7)
		
		//shifted and bigger range
		System.out.println("[4, 9) " + ((Math.random() * 5) + 4)); //[4, 9) because [(0 * 5) + 4, (1 * 5) + 4)
		
		//NOTE: you can add casts to ints for any of the examples
		//I encourage you to try some of your own
	}
}
