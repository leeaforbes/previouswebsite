
public class Project06BSln {
	public static void main(String[] args) {
		//pyramid 1, approach 1
		String output = "";
		for(int row = 1; row <= 5; row++){
			for(int col = 0; col < row; col++){
				output += "*";
			}
			output += "\n";
		}
		System.out.println(output);
		
		//pyramid 2, approach 2
		for(int row = 1; row <= 5; row++){
			for(int col = 0; col < row; col++){
				System.out.print("*");
			}
			System.out.println();
		}
		
		//for clarity
		System.out.println();
		
		//pyramid 2, approach 1
		output = "";
		for(int row = 1; row <= 5; row++){
			for(int col = 0; col <= 5 - row; col++){
				output += "*";
			}
			output += "\n";
		}
		System.out.println(output);
		
		//pyramid 2, approach 2
		for(int row = 1; row <= 5; row++){
			for(int col = 0; col <= 5 - row; col++){
				System.out.print("*");
			}
			System.out.println();
		}
		
		//for clarity
		System.out.println();
		
		//challenge pyramids
		for(int row = 1; row <= 5; row++){
			for(int col = 0; col < 5 - row; col++){
				System.out.print(" ");
			}
			for(int col = 0; col < row; col++){
				System.out.print("*");
			}
			System.out.println();
		}
		
		//for clarity
		System.out.println();
		
		for(int row = 1; row <= 5; row++){
			for(int col = 1; col < row; col++){
				System.out.print(" ");
			}
			for(int col = 0; col <= 5 - row; col++){
				System.out.print("*");
			}
			System.out.println();
		}
		
		//for clarity
		System.out.println();
		
		for(int row = 1; row <= 5; row++){
			for(int col = 0; col < 5 - row; col++){
				System.out.print(" ");
			}
			for(int col = 0; col < row * 2; col++){
				System.out.print("*");
			}
			System.out.println();
		}
	}
}
