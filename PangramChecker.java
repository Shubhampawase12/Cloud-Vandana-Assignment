import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence:");
        String input = scanner.nextLine();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    private static boolean isPangram(String input) {
        Set<Character> alphabetSet = new HashSet<>();

        
        for (char c = 'a'; c <= 'z'; c++) {
            alphabetSet.add(c);
        }

        
        for (char c : input.toLowerCase().toCharArray()) {
            
            alphabetSet.remove(c);
        }

        
        return alphabetSet.isEmpty();
    }
}
