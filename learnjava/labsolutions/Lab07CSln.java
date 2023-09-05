
public class Lab07CSln {
	public static void main(String[] args) {
		printWorkStatus(true, "Marty McFly", 5);
		printWorkStatus(true, "Frasier", 7);
		printWorkStatus(true, "Kramer", 8);
		printWorkStatus(false, "Jerry", 6);
		printWorkStatus(false, "Niles", 7);
		printWorkStatus(false, "Doc", 9);
	}
	
	public static void printWorkStatus(boolean isAwake, String name, int timeHrs){
		if(isAwake == true){
			if(timeHrs <= 7){
				System.out.println(name + " is awake at " + timeHrs + ". They will be on time.");
			}
			else{
				System.out.println(name + " is awake at " + timeHrs + ". They should be at work.");
			}
		}
		else{
			if(timeHrs <= 7){
				System.out.println(name + " is not awake at " + timeHrs + ". They are okay to be sleeping.");
			}
			else{
				System.out.println(name + " is not awake at " + timeHrs + ". They are late for work.");
			}
		}
	}
}
