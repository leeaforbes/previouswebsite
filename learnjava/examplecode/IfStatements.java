
public class IfStatements {
	public static void main(String[] args) {
		//an if statement is used for optional code based on a condition
		//compare the equality of values by using ==
		//examples:
		
		boolean isHappy = true;
		if(isHappy == true){
			//this code only executes if the value of isHappy is true
			System.out.println("Clap your hands!");
		}
		
		if(isHappy == false){
			//this code only executes if the value of isHappy is false
			System.out.println("User is not happy.");
		}
		
		int count = 0;
		if(isHappy == true){
			count++;
		}
		System.out.println(count + " people are happy.");
		
		//can also be used for other variables besides boolean
		int number = 3;
		if(number == 3){
			System.out.println("number is 3");
		}
		
		//what if I want to see if they number is anything but 5?
		//I could write A LOT of if statements for every other number or use the not equal operator
		//compare the inequality of values by using !=
		//examples:
		if(number != 5){
			System.out.println("number is not 5");
		}
		
		//this does the same thing as checking if true
		if(isHappy != false){
			System.out.println("User is happy");
		}
		
		//other useful operators include
		//less than
		if(number < 4){
			System.out.println("number is less than 4");
		}
		//greater than
		if(number > 4){
			System.out.println("number is greater than 4");
		}
		//less/greater than or equal to
		if(number <= 4){
			System.out.println("number is less or equal to 4");
		}
		
		if(number >= 4){
			System.out.println("number is less or equal to 4");
		}
		
		
		//Strings are handled differently for equality comparisons
		String word1 = "test";
		String word2 = "test";
		
		//this will not work
		if(word1 == word2){
			System.out.println("word1 == word2");
		}
		
		//this will work for reasons that can be explained in later lessons
		if(word1.equals(word2)){
			System.out.println("word1 equals word2");
		}
		if(!word1.equals(word2)){
			System.out.println("word1 does not equal word2");
		}
	}
}
