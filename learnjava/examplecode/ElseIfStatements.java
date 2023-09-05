
public class ElseIfStatements {
	public static void main(String[] args) {
		//else if statements give another option
		//if the first if statement does not execute, else if is tested
		//else if goes after if, but before else
		//will keep checking conditions until one is satisfied, the rest are skipped
		
		int num = 5;
		if(num == 3){
			System.out.println("num is 3");
		}
		else if(num == 5){
			//will execute if num is not 3
			System.out.println("num is 5");
		}
		else{
			System.out.println("num is not 3 or 5");
		}
		
		boolean isHappy = true;
		if(isHappy == false){
			System.out.println("not happy");
		}
		else if(isHappy == true){
			System.out.println("happy");
		}
		else{
			//this code can literally never execute because boolean must be true or false
			System.out.println("??? happy and not happy ???");
		}
		
		//multiple there can be as many else if statements as you want
		int count = 3;
		if(count == 0){
			System.out.println("count is 0");
		}
		else if(count == 1){
			System.out.println("count is 1");
		}
		else if(count == 2){
			System.out.println("count is 2");
		}
		else if(count == 3){
			System.out.println("count is 3");
		}
		else{
			System.out.println("count is not 0, 1, 2, or 3");
		}
	}
}
