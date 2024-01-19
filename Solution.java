import java.util.*;
import java.lang.* ;
class Solution{
public static boolean pali(String s){

     s=s.toLowerCase(); 

     StringBuffer sb=new StringBuffer(s); 
     if(s.equals(sb.reverse().toString())) return true; 

   return false;



}
  public static void main(String[] args){ 
     String s="Ramar" ;
    System.out.println("IS a Paliindrome" +pali(s)); 
}
}
