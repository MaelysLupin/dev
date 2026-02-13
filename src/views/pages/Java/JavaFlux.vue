<template>
    <div class="card p-4">
        <!-- Titre -->
        <div class="flex items-center mb-4">
            <i class="pi pi-fw pi-share-alt text-green-500 mr-2"></i>
            <h1 class="font-semibold text-xl">Contrôle de flux</h1>
        </div>

        <!-- Conditions -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Conditions (if / else)</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>int age = 18;

if (age >= 18) {
    System.out.println("Majeur");
} else {
    System.out.println("Mineur");
}</code></pre>

        <!-- Switch -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Switch</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>int jour = 2;

switch (jour) {
    case 1: System.out.println("Lundi"); break;
    case 2: System.out.println("Mardi"); break;
    default: System.out.println("Autre jour");
}</code></pre>

        <!-- Boucles -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Boucles</h2>

        <p class="mb-2 font-medium">For classique :</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>for (int i = 0; i &lt; 5; i++) {
    System.out.println(i);
}</code></pre>

        <p class="mb-2 font-medium">While :</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>int compteur = 3;
while (compteur > 0) {
    System.out.println(compteur);
    compteur--;
}</code></pre>

        <p class="mb-2 font-medium">Do...while :</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>int n = 0;
do {
    System.out.println("Au moins une fois");
} while (n > 0);</code></pre>

        <p class="mb-2 font-medium">For-each :</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>String[] noms = {"Alice", "Bob", "Eve"};

for (String nom : noms) {
    System.out.println(nom);
}</code></pre>
    </div>
</template>
