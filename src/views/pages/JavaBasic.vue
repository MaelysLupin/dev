<template>
    <div className="card p-4">
        <!-- Titre -->
        <div class="flex items-center mb-4">
            <i class="pi pi-fw pi-book text-blue-500 mr-2"></i>
            <h1 class="font-semibold text-xl">Bases de Java</h1>
        </div>

        <!-- Introduction -->
        <p class="mb-3">Java est un langage orienté objet, fortement typé et portable. Tout programme commence par une méthode <code>main</code>.</p>

        <!-- Structure minimale -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Structure minimale</h2>
        <pre class="bg-gray-100 p-3 rounded-lg text-sm">
<code>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>

        <!-- Commentaires -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Commentaires</h2>
        <pre class="bg-gray-100 p-3 rounded-lg text-sm">
<code>// Commentaire sur une ligne
/* Commentaire
   sur plusieurs lignes */</code></pre>

        <!-- Types primitifs -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Types de données primitifs</h2>
        <ul class="list-disc pl-6 mb-3">
            <li><code>int</code> – entiers</li>
            <li><code>double</code> – nombres décimaux</li>
            <li><code>boolean</code> – true / false</li>
            <li><code>char</code> – caractère unique</li>
        </ul>

        <!-- Objets courants -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Objets courants</h2>
        <ul class="list-disc pl-6 mb-3">
            <li><code>String</code> – chaînes de caractères</li>
            <li><code>Integer</code>, <code>Double</code>, etc.</li>
        </ul>

        <!-- Variables et constantes -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Variables et constantes</h2>
        <pre class="bg-gray-100 p-3 rounded-lg text-sm">
<code>int age = 25;
final double PI = 3.14159; // constante</code></pre>

        <!-- Opérateurs -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Opérateurs</h2>
        <ul class="list-disc pl-6 mb-3">
            <li>Arithmétiques : <code>+ - * / %</code></li>
            <li>Comparaison : <code>== != > < >= <=</code></li>
            <li>Logiques : <code>&& || !</code></li>
            <li>Affectation : <code>= += -= *= /=</code></li>
        </ul>
    </div>
</template>
