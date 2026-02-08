package top.yunp;


public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            new Thread() {
                @Override
                public void run() {
                    MyClass.getInstance();
                }
            }.start();
        }
    }
}