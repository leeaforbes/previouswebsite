
public class PrivateVariablesAndMethods {
	public static void main(String[] args) {
		//mention setting default value in instance declaration
		//getters and setters
		Cat cat = new Cat("Maggie", 8);
		
		//can still set name from outside
		cat.name = "Tabby";
		
		//trying to access the private method directly causes an error
		//cat.lives = 0;
		
		//use the getter
		int catLives = cat.getLives();
		
		//use the setter
		cat.setLives(9);
		
		//tell the cat to curl up
		cat.curlUp();
		
		//telling the cat to purr causes an error
		//cat.purr();
	}
}
