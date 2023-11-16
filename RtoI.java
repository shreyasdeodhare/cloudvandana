public class RomanToInteger {
    public static void main(String[] args) {
        String roman1 = "II";
        String roman2 = "I";
        String roman3 = "VII";
        String roman4 = "LVIII";
        String roman5 = "MCMXCIV";

        System.out.println(romanToInt(roman1)); 
        System.out.println(romanToInt(roman2)); 
        System.out.println(romanToInt(roman3)); 
        System.out.println(romanToInt(roman4)); 
        System.out.println(romanToInt(roman5)); 
    }

    private static int romanToInt(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int currentNum = romanCharToInt(s.charAt(i));

            if (i < s.length() - 1) {
                int nextNum = romanCharToInt(s.charAt(i + 1));

                if (currentNum < nextNum) {
                    result += nextNum - currentNum;
                    i++; 
                } else {
                    result += currentNum;
                }
            } else {
                result += currentNum;
            }
        }

        return result;
    }

    private static int romanCharToInt(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
}