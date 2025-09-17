import{_ as e,a as n,g as s,f as o}from"./index-BtxGKKnu.js";const r={},a={className:"card p-4"};function c(m,t){return o(),n("div",a,t[0]||(t[0]=[s(`<div class="flex items-center mb-4"><i class="pi pi-fw pi-bolt text-orange-500 mr-2"></i><h1 class="font-semibold text-xl">Outils avancés</h1></div><h2 class="font-semibold text-lg mt-4 mb-2">Exceptions</h2><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println(&quot;Erreur : &quot; + e.getMessage());
} finally {
    System.out.println(&quot;Toujours exécuté&quot;);
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Entrées / Sorties</h2><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print(&quot;Nom : &quot;);
String nom = sc.nextLine();
System.out.println(&quot;Bonjour &quot; + nom);</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Fonctions modernes (Java 8+)</h2><p class="mb-2 font-medium">Lambda :</p><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>List&lt;Integer&gt; nombres = Arrays.asList(1,2,3);
nombres.forEach(n -&gt; System.out.println(n));</code></pre><p class="mb-2 font-medium">Stream API :</p><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>nombres.stream()
       .filter(n -&gt; n &gt; 1)
       .forEach(System.out::println);</code></pre>`,10)]))}const l=e(r,[["render",c]]);export{l as default};
