import{au as t,c as n,e as o,a as s}from"./index-DCMV4SLN.js";const a={},r={className:"card p-4"};function l(i,e){return s(),n("div",r,e[0]||(e[0]=[o(`<div class="flex items-center mb-4"><i class="pi pi-fw pi-users text-yellow-500 mr-2"></i><h1 class="font-semibold text-xl">Programmation Orientée Objet</h1></div><h2 class="font-semibold text-lg mt-4 mb-2">Classes &amp; Objets</h2><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>class Personne {
    String nom;
    int age;

    Personne(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }

    void afficher() {
        System.out.println(nom + &quot; a &quot; + age + &quot; ans.&quot;);
    }
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Héritage</h2><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>class Animal {
    void parler() { System.out.println(&quot;...&quot;); }
}

class Chien extends Animal {
    @Override
    void parler() { System.out.println(&quot;Wouf!&quot;); }
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Interfaces</h2><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>interface Volant {
    void voler();
}

class Oiseau implements Volant {
    public void voler() {
        System.out.println(&quot;Je vole !&quot;);
    }
}</code></pre><h2 class="font-semibold text-lg mt-4 mb-2">Polymorphisme</h2><pre class="bg-gray-100 p-3 rounded-lg text-sm"><code>Animal a = new Chien();
a.parler(); // &quot;Wouf!&quot;</code></pre>`,9)]))}const c=t(a,[["render",l]]);export{c as default};
