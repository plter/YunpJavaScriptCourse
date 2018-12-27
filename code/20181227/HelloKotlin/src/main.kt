import kotlin.browser.document

fun main(args: Array<String>) {
    println("Hello Kotlin");
    document.body?.innerHTML = "Hello Kotlin"
}