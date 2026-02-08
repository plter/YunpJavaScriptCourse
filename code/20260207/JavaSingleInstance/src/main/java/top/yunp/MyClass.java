package top.yunp;

public class MyClass {

    private static MyClass _instance = null;

    public synchronized static MyClass getInstance() {
        if (_instance == null) {
            _instance = new MyClass();
        }
        return _instance;
    }

    public MyClass() {
        System.out.println("Instance created");
    }
}
