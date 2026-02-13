<template>
    <div class="card p-4">
        <!-- Titre -->
        <div class="flex items-center mb-4">
            <i class="pi pi-fw pi-cog text-purple-500 mr-2"></i>
            <h1 class="font-semibold text-xl">Méthodes & Tableaux</h1>
        </div>

        <!-- Méthodes -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Définir une méthode</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>public static int addition(int a, int b) {
    return a + b;
}</code></pre>

        <h2 class="font-semibold text-lg mt-4 mb-2">Surcharge de méthodes</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>public static int addition(int a, int b, int c) {
    return a + b + c;
}</code></pre>

        <!-- Tableaux -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Tableaux</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>int[] nombres = {1, 2, 3};
System.out.println(nombres[0]); // 1</code></pre>

        <!-- Collections -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Collections</h2>

        <p class="mb-2 font-medium">Liste (ArrayList) :</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>import java.util.*;

List&lt;String&gt; liste = new ArrayList&lt;&gt;();
liste.add("Java");
liste.add("Python");

for (String s : liste) {
    System.out.println(s);
}</code></pre>

        <p class="mb-2 font-medium">Map (clé/valeur) :</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>Map&lt;String, Integer&gt; map = new HashMap&lt;&gt;();
map.put("Alice", 25);
map.put("Bob", 30);

System.out.println(map.get("Alice")); // 25</code></pre>
    </div>
</template>
