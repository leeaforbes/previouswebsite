import java.util.Scanner;

public class Lab04BSlnBonus {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		//gets the first number
		System.out.print("Enter a number: ");
		double number1 = scanner.nextDouble();
		
		//gets the second number
		System.out.print("Enter another number: ");
		double number2 = scanner.nextDouble();
		
		//gets the third number
		System.out.print("Enter a third number: ");
		double number3 = scanner.nextDouble();
		
		//gets the average and prints it out
		double total = number1 + number2 + number3;
		double average = total / 3;
		
		//sets the default grade to the lowest bracket
		//sets the letter to a higher bracket if grade within bracket
		String letterGrade = "F";
		if(average >= 93){
			letterGrade = "A+";
		}
		else if(average >= 90){
			letterGrade = "A";
		}
		else if(average >= 87){
			letterGrade = "B+";
		}
		else if(average >= 83){
			letterGrade = "B";
		}
		else if(average >= 80){
			letterGrade = "B-";
		}
		else if(average >= 77){
			letterGrade = "C+";
		}
		else if(average >= 73){
			letterGrade = "C";
		}
		else if(average >= 70){
			letterGrade = "C-";
		}
		else if(average >= 67){
			letterGrade = "D+";
		}
		else if(average >= 63){
			letterGrade = "D";
		}
		else if(average >= 60){
			letterGrade = "D-";
		}

		//prints out letter grade
		System.out.println("Letter grade average: " + letterGrade);
	}
}
