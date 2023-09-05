
public class NewObjectsAndClasses {
	public static void main(String[] args){
		//usually each class has its own java file, so that is how this lesson will be set up
		//up until now all things that we define are inside methods, but the layer above methods are classes
		//this lesson will teach about things defined outside of methods and what they mean
		//see dog class
		
		//create new Dog object, these are called instances
		//this is where the term instantiation comes from
		Dog dog1 = new Dog();
		//can use instance variables
		dog1.name = "Roofus";
		dog1.age = 3;
		
		Dog dog2 = new Dog();
		dog2.name = "Spot";
		dog2.age = 8;
		
		//call instance methods
		dog1.bark();
		dog2.bark();
		dog1.fetch();
		dog2.fetch();
		System.out.println(dog1.name + " is " + dog1.ageInDogYears() + " years old in dog years.");
		System.out.println(dog2.name + " is " + dog2.ageInDogYears() + " years old in dog years.");
	}
}
