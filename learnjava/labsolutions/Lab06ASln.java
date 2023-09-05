
public class Lab06ASln {
	public static void main(String[] args) {
		//keep track of the carrots in each place
		int carrotsInRow = 5;
		int bucket = 0;
		
		//the farmer pulls up the carrots one by one to put in the bucket
		while(carrotsInRow > 0){
			//carrots in row is decremented so that it will eventually be 0
			carrotsInRow--;
			bucket++;
		}
	}
}
