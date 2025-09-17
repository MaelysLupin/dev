<template>
    <div class="card p-4">
        <!-- Titre -->
        <div class="flex items-center mb-4">
            <i class="pi pi-fw pi-shield text-red-500 mr-2"></i>
            <h1 class="font-semibold text-xl">Erreurs courantes</h1>
        </div>

        <!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->

        <!-- NullPointerException -->
        <h2 class="font-semibold text-lg mt-4 mb-2">NullPointerException</h2>
        <p class="mb-2 text-gray-700 dark:text-gray-300">Cette erreur survient lorsque vous tentez d'utiliser un objet qui n'a pas été initialisé.</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>String texte = null;
System.out.println(texte.length()); // NullPointerException</code></pre>

        <!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->

        <!-- ArrayIndexOutOfBoundsException -->
        <h2 class="font-semibold text-lg mt-4 mb-2">ArrayIndexOutOfBoundsException</h2>
        <p class="mb-2 text-gray-700 dark:text-gray-300">Cette erreur se produit lorsqu’on accède à un index inexistant d’un tableau.</p>
        <pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm">
<code>int[] nombres = {1,2,3};
System.out.println(nombres[5]); // ArrayIndexOutOfBoundsException</code></pre>

        <!-- Astuce -->
        <p class="mt-4 text-gray-600 dark:text-gray-400 italic">Astuce : Toujours initialiser vos objets et vérifier les limites des tableaux pour éviter ces erreurs courantes.</p>

        <!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
    </div>
</template>
