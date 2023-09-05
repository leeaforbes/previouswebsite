
public class VariableMath {
	public static void main(String[] args) {
		//here are some simple addition examples
		int dog = 25;
		int cat = 50;
		int elephant = dog + 3;
		System.out.println(dog + " + 3 = " + elephant);
		int zebra = dog + cat;
		System.out.println(dog + " + " + cat + " = " + zebra);
		
		//you can also change the value of a variable by using itself
		dog = dog + 1;
		System.out.println(dog);
		
		//math operators work pretty much the same
		int add = 1 + 1;
		int sub = 2 - 1;
		int mult = 3 * 5;
		
		//except division!
		System.out.println("Division works differently!");
		int numerator = 11;
		int divisor = 4;
		System.out.println(numerator + " / " + divisor + " = " + numerator / divisor + " ?");
		
		//integers can only be represented as whole numbers so it gives largest possible whole number
		//where does the remainder go? that's what the modulus operator is for
		System.out.println(numerator + " % " + divisor + " = " + numerator % divisor);
		
		//what if I do want a decimal value? start with a type that supports decimals
		double decimalValue = 11;
		System.out.println(decimalValue + " / " + divisor + " = " + decimalValue / divisor);
		
		//but it gets better, there's shorthand!!
		//<variable> <operator>= <value>
		double number = 2;
		number += 3; //5.0
		number -= 1; //4.0
		number *= 5; //20.0
		number /= 2; //10.0
		number %= 3; //1.0
		System.out.println(number);
		
		//increment and decrement operators
		//many algorithms need to add one to or subtract one from a value
		//two ways:
		int start = 0;
		start = start + 1;
		start += 1;
		
		//or better
		System.out.println(start);
		start++;
		System.out.println(start);
		start--;
		System.out.println(start);
		
		//Strings are treated as though they can be added in Java
		String word1 = "news";
		String word2 = "caster";
		System.out.println(word1 + word2);
	}
}
