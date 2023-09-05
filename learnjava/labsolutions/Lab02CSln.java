
public class Lab02CSln {
	public static void main(String[] args) {
		int dogTreats = 0;
		String dogName = "Roofus";
		
		System.out.println(dogName + " is a good dog.");
		System.out.println("A kid gives " + dogName + " a treat.");
		dogTreats++;
		System.out.println(dogName + " has " + dogTreats + " treat.");
		
		System.out.println(dogName + " does a trick on the street and people like it.");
		dogTreats += 3;
		System.out.println(dogName + " now has " + dogTreats + " treats.");
		
		System.out.println(dogName + " gets hungry.");
		dogTreats--;
		System.out.println(dogName + " has " + dogTreats + " treats.");
	}
}
