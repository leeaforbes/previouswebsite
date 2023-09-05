
public class ElseStatements {
	public static void main(String[] args) {
		//if statement executes if a condition is met
		//else comes after the if statement and executes if the if statement does not
		
		int num = 5;
		
		//num is not greater than 4, will execute else block
		if(num > 4){
			System.out.println("num is greater than 4");
		}
		else{
			System.out.println("num is not greater than 4");
		}
		
		//num is 5, so else block will not execute
		if(num == 5){
			System.out.println("num is 5");
		}
		else {
			System.out.println("num is not 5");
		}
		
		
		boolean isAlive = true;
		
		//isAlive is true, executes else block
		if(isAlive == false){
			System.out.println("not alive");
		}
		else{
			System.out.println("alive");
		}
	}
}
