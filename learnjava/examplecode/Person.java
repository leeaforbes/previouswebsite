
public class Person {
	public String name;
	public Dog dog;
	private String secret;
	
	public Person(String nameAtBirth){
		name = nameAtBirth;
	}
	
	public String getSecret(){
		if(Math.random() < 0.1){
			return secret;
		}
		else{
			return "I keep my secret.";
		}
	}
	
	public void setSecret(String s){
		secret = s;
	}
	
	public Dog seeDog(){
		return dog;
	}
}
