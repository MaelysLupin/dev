<template>
    <div class="card p-4">
        <!-- Titre -->
        <div class="flex items-center mb-4">
            <i class="pi pi-fw pi-users text-yellow-500 mr-2"></i>
            <h1 class="font-semibold text-xl">Programmation Orientée Objet</h1>
        </div>

        <!-- Classes & Objets -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Classes & Objets</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>class Personne {
    String nom;
    int age;

    Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }

    void afficher() {
        System.out.println(nom + " a " + age + " ans.");
    }
}</code></pre>

        <!-- Héritage -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Héritage</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>class Animal {
    void parler() { System.out.println("..."); }
}

class Chien extends Animal {
    @Override
    void parler() { System.out.println("Wouf!"); }
}</code></pre>

        <!-- Interfaces -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Interfaces</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>interface Volant {
    void voler();
}

class Oiseau implements Volant {
    public void voler() {
        System.out.println("Je vole !");
    }
}</code></pre>

        <!-- Polymorphisme -->
        <h2 class="font-semibold text-lg mt-4 mb-2">Polymorphisme</h2>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>Animal a = new Chien();
a.parler(); // "Wouf!"</code></pre>
    </div>
</template>
