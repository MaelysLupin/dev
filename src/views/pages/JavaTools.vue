<template>
    <div className="card p-4">
        <!-- Titre -->
        <div class="flex items-center mb-4">
            <i class="pi pi-fw pi-bolt text-orange-500 mr-2"></i>
            <h1 class="font-semibold text-xl">Outils avancés</h1>
        </div>

        <!-- Exceptions -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Exceptions</h2>
        <pre class="bg-gray-100 p-3 rounded-lg text-sm">
<code>try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Erreur : " + e.getMessage());
} finally {
    System.out.println("Toujours exécuté");
}</code></pre>

        <!-- Entrées / sorties -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Entrées / Sorties</h2>
        <pre class="bg-gray-100 p-3 rounded-lg text-sm">
<code>import java.util.Scanner;

Scanner sc = new Scanner(System.in);
System.out.print("Nom : ");
String nom = sc.nextLine();
System.out.println("Bonjour " + nom);</code></pre>

        <!-- Fonctions modernes (Java 8+) -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Fonctions modernes (Java 8+)</h2>

        <p class="mb-2 font-medium">Lambda :</p>
        <pre class="bg-gray-100 p-3 rounded-lg text-sm">
<code>List&lt;Integer&gt; nombres = Arrays.asList(1,2,3);
nombres.forEach(n -&gt; System.out.println(n));</code></pre>

        <p class="mb-2 font-medium">Stream API :</p>
        <pre class="bg-gray-100 p-3 rounded-lg text-sm">
<code>nombres.stream()
       .filter(n -&gt; n &gt; 1)
       .forEach(System.out::println);</code></pre>
    </div>
</template>
