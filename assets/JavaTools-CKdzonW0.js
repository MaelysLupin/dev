import{au as o,c as e,e as n,a as s}from"./index-BYpfrHtz.js";const r={},a={class:"card p-4"};function m(c,t){return s(),e("div",a,t[0]||(t[0]=[n(`<div class="flex items-center mb-4"><i class="pi pi-fw pi-bolt text-orange-500 mr-2"></i><h1 class="font-semibold text-xl">Outils avancés</h1></div><h2 class="font-semibold text-lg mt-4 mb-2">Exceptions</h2><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println(&quot;Erreur : &quot; + e.getMessage());
} finally {
    System.out.println(&quot;Toujours exécuté&quot;);
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Entrées / Sorties</h2><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print(&quot;Nom : &quot;);
String nom = sc.nextLine();
System.out.println(&quot;Bonjour &quot; + nom);</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Fonctions modernes (Java 8+)</h2><p class="mb-2 font-medium">Lambda :</p><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>List&lt;Integer&gt; nombres = Arrays.asList(1,2,3);
nombres.forEach(n -&gt; System.out.println(n));</code></pre><p class="mb-2 font-medium">Stream API :</p><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>nombres.stream()
       .filter(n -&gt; n &gt; 1)
       .forEach(System.out::println);</code></pre>`,10)]))}const i=o(r,[["render",m]]);export{i as default};
