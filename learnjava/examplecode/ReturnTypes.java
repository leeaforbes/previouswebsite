
public class ReturnTypes {
	public static void main(String[] args) {
		//a return type allows us to save a value from a method or use it somewhere else
		//once the program hits the return statement, the method stops execution
		//so that means a method can only return one thing per call
		int difference = subtract(4, 2);
		System.out.println(difference);
		//or
		System.out.println(subtract(4, 2));
		
		//can still call the method without saving the return value, but it may appear to do nothing
		subtract(3, 1);
		
		String info = playerInfo("Michael Jordan", 1);
		System.out.println(info);
		//or
		System.out.println(playerInfo("Michael Jordan", 1));
		
		char letter1 = firstLetter("Zowie");
		System.out.println(letter1);
		//or
		System.out.println(firstLetter("Zowie"));
	}
	
	public static int subtract(int a, int b){
		int sub = a - b;
		return sub;
	}
	
	public static String playerInfo(String player, int rank){
		String result = player + " is rank " + rank;
		return result;
	}
	
	public static char firstLetter(String word){
		char first = word.charAt(0);
		return first;
	}
}
