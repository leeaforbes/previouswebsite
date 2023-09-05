
public class CallingMethodsFromEachother {
	public static void main(String[] args) {
		//calling methods from eachother can help to break down complex problems
		//for example, putting together a Lego set
		//we could create a method to put it together
		buildLegoSet();
		//but putting together a Lego set is not that simple
		//it can be broken down into putting multiple pieces together
		
		//BE CAREFUL! a method that CALLS ITSELF is called recursive
		//recursion is a whole programming concept in itself and very powerful when used correctly
		//I will not be teaching recursion in this lesson set
	}
	
	public static void buildLegoSet(){
		//lets say we had 10 pieces
		//put the next piece 10 times
		for(int i = 0; i < 10; i++){
			putNextLegoPiece();
		}
	}
	
	public static void putNextLegoPiece(){
		//add code here to put next Lego piece together
	}
}
