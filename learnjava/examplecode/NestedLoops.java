
public class NestedLoops {
	public static void main(String[] args) {
		//nested loops are loops that are inside another loop
		
		//examples of nested loops
		for(int row = 1; row < 5; row++){
			for(int col = 1; col < 5; col++){
				System.out.print(row + ", " + col + "\t");
			}
			System.out.println();
		}
		
		//for clarity
		System.out.println();
		
		//3 * 4
		int total = 0;
		for(int first = 0; first < 3; first++){
			for(int second = 0; second < 4; second++){
				total++;
			}
		}
		System.out.println("3 * 4 is " + total);
		
		//for clarity
		System.out.println();
		
		for(int i = 1; i < 5; i++){
			for(int k = 1; k < 5; k++){
				System.out.print((i * k) + "\t");
			}
			System.out.println();
		}
		
		//for clarity
		System.out.println();
		
		//there are also nested loops that are dependent on the loops around them
		for(int row = 1; row < 5; row++){
			for(int col = 1; col <= row; col++){
				System.out.print(row + ", " + col + "\t");
			}
			System.out.println();
		}
	}
}
