
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.sql.Timestamp;
import java.util.Random;


/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
/**
 *
 * @author Käyttäjä
 */
public class RandomStringGenerator {

    public static void main(String[] args) throws InterruptedException, UnsupportedEncodingException {

        byte[] randombytes = new byte[10];
        new Random().nextBytes(randombytes);
        String newRandomString = new String(randombytes, Charset.forName("UTF-8"));

        while (true) {

            System.out.println(newRandomString + ": " + (new Timestamp(System.currentTimeMillis())));
            
            Thread.sleep(5000);

        }
    }

}
