
public class Student {
	public String identifier;
	public int linesOfCodeWritten = 0;
	public int cookiesEaten = 0;
	private int phoneNumber;
	private String address;
	
	public Student(String id){
		identifier = id;
	}
	
	public Student(String id, int codeLines, int cookies){
		identifier = id;
		linesOfCodeWritten = codeLines;
		cookiesEaten = cookies;
	}
	
	public void printIdentification(){
		System.out.println("My ID is: " + identifier);
	}
	
	public void writeSomeCode(int howMuchCode){
		linesOfCodeWritten += howMuchCode;
	}
	
	public int eatCookie(){
		cookiesEaten++;
		return cookiesEaten;
	}
	
	public int getPhoneNumber(){
		return phoneNumber;
	}
	
	public void setPhoneNumber(int n){
		phoneNumber = n;
	}
	
	public String getAddress(){
		return address;
	}
	
	public void setAddress(String a){
		address = a;
	}
	
	private void printPhoneNumber(){
		System.out.println("My phone number is: " + phoneNumber);
	}
	
	private void printAddress(){
		System.out.println("My address is: " + address);
	}
}
