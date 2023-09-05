
public class MultipleConditions {
	//multiple conditions
	//and
	//or
	public static void main(String[] args) {
		//practice tip: run this program multiple times while changing variable values to get different output
		
		boolean isAwake = true;
		int num = 5;
		
		//and checks if two conditions are true
		//and represented by &&
		if(isAwake == true && num == 5){
			System.out.println("awake and num is 5");
		}
		
		//each condition is checked in order
		//if one is false, code inside if statement will not execute
		if(isAwake == false && num == 5){
			System.out.println("this code will not execute");
		}
		
		if(isAwake == true && num == 0){
			System.out.println("this code will not execute");
		}
		
		//can be used with if, else if, and else statements
		if(isAwake == true && num == 4){
			System.out.println("awake and num is 4");
		}
		else if(isAwake == false){
			System.out.println("awake is false");
		}
		else if(isAwake == true && num == 5){
			System.out.println("awake and num is 5");
		}
		else{
			System.out.println("last resort");
		}
		
		
		boolean isOn = false;
		int count = 10;
		
		//or checks if one or more of the conditions are true
		//each condition is checked in order
		//or represented by ||
		if(isOn == false || count == 10){
			System.out.println("both conditions true");
		}
		
		if(isOn == false || count == 4){
			System.out.println("first condition true");
		}
		
		if(isOn == true || count == 10){
			System.out.println("second condition true");
		}
		
		if(isOn == true || count == 3){
			//will not execute
			System.out.println("neither condition true");
		}
		
		//can be used with if, else if, and else statements
		if(isOn == false || count == 4){
			System.out.println("isOn is false or count is 4");
		}
		else if(isOn == true){
			System.out.println("isOn is true");
		}
		else if(isOn == true || count == 10){
			System.out.println("isON or count is 10");
		}
		else{
			System.out.println("last resort");
		}
		
		//can even use them in combination
		if((isAwake == true && num == 5) || (isOn == true && count == 1)){
			System.out.println("executes because first part is true");
		}
		
		if((isAwake == true || num == 5) && (isOn == true || count == 1)){
			System.out.println("does not execute");
		}
		
		if((isAwake == true && num == 5) && (isOn == true && count == 1)){
			System.out.println("does not execute");
		}
		
		if((isAwake == true || num == 5) && (isOn == true && count == 1)){
			System.out.println("does not execute");
		}
	}
}
