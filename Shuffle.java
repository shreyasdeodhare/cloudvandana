import java.util.*;
import java.lang.*;
class Shuffle{

    public static void main(String[] args){

        Scanner sc=new Scanner(System.in); 
        int n=sc.nextInt(); 
        int [] a=new int[n]; 
        for(int i=0;i<n;i++){
            a[i]=sc.nextInt(); 
        }
        
        int [] shuffle =new int[n];

    for(int i=0;i<n/2;i++){
        shuffle[2*i]= a[i]; 
        shuffle[2*i+1]=a[(n/2)+i]; 
    }

 for(int i=0;i<shuffle.length;i++){
    System.out.print(shuffle[i]+" "); 
 }
    }
}