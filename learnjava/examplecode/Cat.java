
public class Cat{
	//default values initialized if not set in constructor
	public String name = "Bistro";
	//private, meaning it can only be accessed from this class
	//the only way to access it is with getter and setter methods
	private int lives = 9;
	
	//constructor
	public Cat(String n, int l){
		name = n;
		lives = l;
	}
	
	//getters and setters need to be public so that they can be called outside of the class
	//not required to create both depending on the purpose (ex. read only or write only)
	public int getLives(){
		return lives;
	}
	
	public void setLives(int l){
		lives = l;
	}
	
	//this is a private method
	//it can only be called from inside this class
	private void purr(){
		System.out.println(name + " purred.");
	}
	
	//this public method can be called with an instance of the class
	public void curlUp(){
		System.out.println(name + " curled up.");
		//there is a 50% chance that the cat will purr if curled up
		if(Math.random() > 0.5){
			purr();
		}
	}
}
