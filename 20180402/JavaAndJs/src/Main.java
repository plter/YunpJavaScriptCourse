import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class Main {

    public static void main(String[] args) {
//        System.out.println("Hello World!");

//        String eName = new ScriptEngineManager().getEngineFactories().get(0).getEngineName();
//        System.out.println(eName);

//        ScriptEngine engine = new ScriptEngineManager().getEngineByName("Nashorn");
        ScriptEngine engine = new ScriptEngineManager().getEngineByExtension("js");
//        ScriptEngine engine = new ScriptEngineManager().getEngineByMimeType("application/javascript");
//        System.out.println(engine);

        try {
//            engine.eval("print('Hello World')");
            engine.eval(new FileReader("./src/app.js"));
        } catch (ScriptException | FileNotFoundException e) {
            e.printStackTrace();
        }
    }
}
