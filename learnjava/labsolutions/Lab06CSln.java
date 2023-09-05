import java.util.Scanner;

public class Lab06CSln {
	public static void main(String[] args) {
		String[] names = {"Jill", "Ben", "John", "Kathy", "Tom", "Mark", "Leah", "Anna", "Eve", "Kyle", "Daphne", "Niles", "Leah"};
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter a name: ");
		String requested = scanner.nextLine();
		
		boolean found = false;
		int index = 0;
		
		//loop until we reach the end of the array
		while(index < names.length){
			//see if the value at this index is what the user requested
			if(names[index].equals(requested)){
				//requested name found!
				found = true;
				System.out.println(requested + " found at index " + index);
			}
			//increment index so that it will reach end of the array
			index++;
		}
		
		//if not found through entire array of names, say not found
		if(found == false){
			System.out.println(requested + " does not exist");
		}
	}
}
