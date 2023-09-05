
public class ForEachLoops {
	public static void main(String[] args) {
		//for each loops can be used for things that are iterable, such as an array
		//used when you do not need any index information
		//"for each object IN iterable item"
		//format: for(<current variable> : <iterable>)
		//example:
		String[] locations = {"Houston", "Austin", "Dallas", "San Antonio", "El Paso"};
		for(String location : locations){
			System.out.println("Location in Texas: " + location);
		}
		
		int[] nums = {1, 2, 3};
		for(int num : nums){
			System.out.println(num);
		}
	}
}
