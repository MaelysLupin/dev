import{au as e,c as t,e as n,a as s}from"./index-B388aYJq.js";const a={},r={class:"card p-4"};function l(m,o){return s(),t("div",r,o[0]||(o[0]=[n(`<div class="flex items-center mb-4"><i class="pi pi-fw pi-users text-yellow-500 mr-2"></i><h1 class="font-semibold text-xl">Programmation Orientée Objet</h1></div><h2 class="font-semibold text-lg mt-4 mb-2">Classes &amp; Objets</h2><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>class Personne {
    String nom;
    int age;

    Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }

    void afficher() {
        System.out.println(nom + &quot; a &quot; + age + &quot; ans.&quot;);
    }
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Héritage</h2><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>class Animal {
    void parler() { System.out.println(&quot;...&quot;); }
}

class Chien extends Animal {
    @Override
    void parler() { System.out.println(&quot;Wouf!&quot;); }
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Interfaces</h2><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>interface Volant {
    void voler();
}

class Oiseau implements Volant {
    public void voler() {
        System.out.println(&quot;Je vole !&quot;);
    }
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Polymorphisme</h2><pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto shadow-sm"><code>Animal a = new Chien();
a.parler(); // &quot;Wouf!&quot;</code></pre>`,9)]))}const d=e(a,[["render",l]]);export{d as default};
