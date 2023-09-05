
public class NestedConditionals {
	public static void main(String[] args) {
		//nested conditional statements are useful in some cases
		
		int num = 5;
		if(num > 3){
			//num is greater than 3
			if(num < 7){
				System.out.println("num is greater than 3 and less than 7");
			}
			else{
				System.out.println("num is greater than 3 and not less than 7");
			}
		}
		else{
			System.out.println("num is not greater than 3");
		}
		
		//can be extremely pedantic, not recommended
		if(num > 0){
			if(num > 1){
				if(num > 2){
					if(num > 3){
						System.out.println("num is greater than 0, 1, 2, and 3");
					}
				}
			}
		}
	}
}
