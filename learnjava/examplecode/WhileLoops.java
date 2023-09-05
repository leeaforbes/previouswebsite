
public class WhileLoops {
	public static void main(String[] args) {
		//while loops will execute code repeatedly while a condition is true
		
		//while loop events in order:
		//	1. check condition
		//	2. if condition true, execute code and go to step 1
		//	3. condition false, loop complete
		
		//code inside loop MUST have an action that leads towards ending the loop
		//infinite loops will make your program run forever, generally bad for programs you want to be fast
		
		//walk through this code
		int i = 0;
		while(i < 4){
			System.out.println("Hello");
			i++; //action to lead to end of loop
		}
		
		String letters = "";
		while(letters.length() < 10){
			letters += "a";
		}
		System.out.println(letters);
		
		
		//arrays and loops are like bread and butter
		String[] names = {"Jerry", "George", "Kramer", "Elaine"};
		int k = 0;
		while(k < names.length){
			System.out.println(names[k]);
			k++; //action to lead to end of loop
		}
		
		k = 0;
		while(!names[k].equals("Kramer")){
			System.out.println(names[k] + " is not Kramer");
			k++;
		}
		
		//prints out all even numbers from 0 to 20 inclusive
		int num = 0;
		while(num <= 20){
			if(num % 2 == 0){
				System.out.println(num);
			}
			num++;
		}
	}
}
