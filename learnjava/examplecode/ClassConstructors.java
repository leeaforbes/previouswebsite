
public class ClassConstructors {
	public static void main(String[] args){
		//constructors are used to specify information about an Object being created upon instantiation
		//they are optional to include in classes or Objects, but are very common
		Giraffe savanna = new Giraffe("Savanna", 14);
		System.out.println(savanna.name);
		System.out.println(savanna.neckLength);
		Giraffe plains = new Giraffe("Jane");
		System.out.println(plains.name);
		System.out.println(plains.neckLength);
		
		//notice how Dog used default, zero argument constructor
		//now cannot use default constructor since others created
		//this will cause an error
		//Giraffe g = new Giraffe();
		
		int leafHeight = 12;
		if(savanna.catEatLeafAtHeight(leafHeight)){
			System.out.println(savanna.name + " ate a leaf at height " + leafHeight);
		}
		if(plains.catEatLeafAtHeight(leafHeight)){
			System.out.println(plains.name + " ate a leaf at height " + leafHeight);
		}
	}
}
