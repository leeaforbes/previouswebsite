
public class Giraffe {
	
	//instance variables
	public String name;
	public int neckLength;
	
	//constructor looks like a method with no return type specified
	//called upon instantiation
	public Giraffe(String n, int nl){
		name = n;
		neckLength = nl;
	}
	
	//can also overload constructors if there are default values or information is unknown
	public Giraffe(String n){
		name = n;
		//fill in information not specified
		neckLength = 10;
	}
	
	//constructors do not change anything about instance methods, but here is one just for another example
	public boolean catEatLeafAtHeight(int height){
		return neckLength >= height;
	}
}
