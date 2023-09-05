
public class Lab08ABCSln {
	public static void main(String[] args) {
		Student student1 = new Student("Luke");
		Student student2 = new Student("Obi Wan");
		Student student3 = new Student("Leia");
		
		student1.eatCookie();
		student3.writeSomeCode(10);
		student2.printIdentification();
		
		student1.setAddress("Tatooine");
		System.out.println(student1.identifier + " lives in " + student1.getAddress());
	}
}
