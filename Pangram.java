import java.util.*;
import java.lang.*;

class Pangram{
    public static char tol(char c){
        c+=32;
        return c; 
    }
    public static boolean ispana(String s){
      char c;
        boolean [] present=new boolean[26]; 
        for(int i=0;i<s.length();i++){
          if(s.charAt(i)>='A' && s.charAt(i)<='Z'){
             c=tol(s.charAt(i));
          }
          else{
             c=(s.charAt(i));} 
            if(c>='a' && c<='z' ){
                present[c-'a']=true; 
            }
        }
        for(boolean p:present){
            if(!p) return false; 
        }
        return true;
    }

    public static void main(String [] args){
        Scanner sc=new Scanner(System.in); 
        String s=sc.nextLine(); 

     if(!ispana(s)){
        System.out.println("String is not  a panagram"); 
     }
     else{
        System.out.println("String is  a panagram"); 
     }
    }
}