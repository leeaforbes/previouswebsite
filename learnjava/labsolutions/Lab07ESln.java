public class Lab07ESln {
	public static void main(String[] args) {
		char[] dogArray = toCharArray("dog");
		if(dogArray[0] == 'd' && dogArray[1] == 'o' && dogArray[2] == 'g'){
			System.out.println("Test case 1 passed.");
		}
		else{
			System.out.println("Test case 1 FAILED!!");
		}
		
		char[] dellArray = toCharArray("dell");
		if(dellArray[0] == 'd' && dellArray[1] == 'e' && dellArray[2] == 'l' && dellArray[3] == 'l'){
			System.out.println("Test case 2 passed.");
		}
		else{
			System.out.println("Test case 2 FAILED!!");
		}
	}
	
	public static char[] toCharArray(String word){
		char[] letters = new char[word.length()];
		for(int i = 0; i < word.length(); i++){
			letters[i] = word.charAt(i);
		}
		return letters;
	}
}
