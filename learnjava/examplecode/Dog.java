
public class Dog {
	//no need for main method because our program does not start here
	//Objects in java usually have their own class files
	//an instance of an Object is created when the keyword "new" is used
	//each Object can be best defined by its instance variables(attributes) and its instance methods(behaviors)
	//those variables and methods are unique to that instance of the Object
	
	//dog instance variables(attributes)
	//created as public for ease for now
	public String name;
	public int age;
	
	//static methods are used when the behavior is not unique to the Object's instance
	//up until now we have made all of our methods static because we created no new Objects ourselves
	//methods that we create here will not be static because they are unique to this Dog's behavior
	//an analogy could be that if the bark() method was static, all dogs ever created would bark in the exact same way
	public void bark(){
		System.out.println(name + "barked.");
	}
	
	public void fetch(){
		System.out.println(name + " played fetch.");
	}
	
	public int ageInDogYears(){
		int dogYears = age * 7;
		return dogYears;
	}
}
