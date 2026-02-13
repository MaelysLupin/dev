<template>
    <!-- Tuto Installation Java -->
    <div class="w-full">
        <div class="card h-full p-4 bg-white rounded-xl shadow-md flex flex-col">
            <!-- Header -->
            <div class="flex justify-between mb-4">
                <div>
                    <span class="block text-gray-500 dark:text-gray-400 font-medium mb-2">Guide</span>
                    <div class="text-gray-900 dark:text-gray-100 font-medium text-xl">Installation complète de Java</div>
                </div>
                <div class="flex items-center justify-center bg-green-100 dark:bg-green-400/10 rounded-full" style="width: 2.5rem; height: 2.5rem">
                    <i class="pi pi-download text-green-500 !text-xl"></i>
                </div>
            </div>

            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">Ce guide vous accompagne pas à pas pour installer Java sur Windows, macOS ou Linux.</p>

            <!-- Accordéons pour chaque étape -->
            <Accordion :multiple="true" class="mt-4">
                <!-- Étape 1 -->
                <AccordionTab header="1. Télécharger le JDK">
                    <ul class="list-disc pl-6 space-y-1">
                        <li>Allez sur <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" class="text-green-500 underline hover:text-green-600">la page officielle d’Oracle</a>.</li>
                        <li>Choisissez la version <strong>LTS</strong> (ex : Java 21 LTS).</li>
                        <li>
                            Téléchargez le programme adapté à votre système :
                            <ul class="list-disc pl-6">
                                <li>Windows : fichier <code>.msi</code></li>
                                <li>macOS : fichier <code>.dmg</code></li>
                                <li>Linux : archive <code>.tar.gz</code> ou via le gestionnaire de paquets</li>
                            </ul>
                        </li>
                    </ul>
                </AccordionTab>

                <!-- Étape 2 -->
                <AccordionTab header="2. Installer le JDK">
                    <ul class="list-disc pl-6 space-y-1">
                        <li>Exécutez le programme téléchargé.</li>
                        <li>Suivez les étapes par défaut (le chemin d’installation est souvent <code>C:\Program Files\Java\jdk-xx</code>).</li>
                        <li>Sur macOS, glissez simplement le JDK dans le dossier <code>Applications</code>.</li>
                    </ul>
                </AccordionTab>

                <!-- Étape 3 -->
                <AccordionTab header="3. Configurer les variables d’environnement (Windows)">
                    <p class="italic">⚠️ Cette étape est nécessaire pour que Java soit reconnu dans le terminal.</p>

                    <h3 class="text-lg mt-2 text-gray-800 dark:text-gray-200">a) Créer <code>JAVA_HOME</code></h3>
                    <ol class="list-decimal pl-6 space-y-1">
                        <li>Menu Démarrer → tapez <strong>Variables d’environnement</strong>.</li>
                        <li>Cliquez sur <strong>Modifier les variables d’environnement du système</strong>.</li>
                        <li>Dans <strong>Variables système</strong> → <strong>Nouveau…</strong></li>
                        <li><strong>Nom de la variable</strong> : <code>JAVA_HOME</code></li>
                        <li>
                            <strong>Valeur de la variable</strong> : chemin du JDK sans <code>\bin</code>, ex. :<br />
                            <code>C:\Program Files\Java\jdk-21</code>
                        </li>
                        <li>Validez avec OK.</li>
                    </ol>

                    <h3 class="text-lg mt-2 text-gray-800 dark:text-gray-200">b) Modifier la variable <code>Path</code></h3>
                    <ol class="list-decimal pl-6 space-y-1">
                        <li>Dans la même fenêtre → sélectionnez <strong>Path</strong> → <strong>Modifier</strong>.</li>
                        <li>
                            Cliquez sur <strong>Nouveau</strong> et ajoutez :<br />
                            <code>C:\Program Files\Java\jdk-21\bin</code>
                        </li>
                        <li>Validez et fermez toutes les fenêtres.</li>
                    </ol>
                </AccordionTab>

                <!-- Étape 4 -->
                <AccordionTab header="4. Vérifier l’installation">
                    <ul class="list-disc pl-6 space-y-1">
                        <li>Ouvrez un terminal (ou Invite de commandes).</li>
                        <li>Tapez <code>java -version</code> et <code>javac -version</code>.</li>
                        <li>Vous devriez voir la version de Java installée.</li>
                    </ul>
                    <p class="text-green-400 mt-2">✅ Si la version s’affiche, Java est correctement configuré !</p>
                </AccordionTab>

                <!-- Étape 5 -->
                <AccordionTab header="5. Installer un IDE">
                    <ul class="list-disc pl-6 space-y-1">
                        <li><a href="https://www.jetbrains.com/idea/download/" target="_blank" class="text-green-500 underline hover:text-green-600">IntelliJ IDEA Community</a> (gratuit)</li>
                        <li><a href="https://code.visualstudio.com/" target="_blank" class="text-green-500 underline hover:text-green-600">Visual Studio Code</a> (ajouter l’extension Java)</li>
                    </ul>
                </AccordionTab>

                <!-- Étape 6 -->
                <AccordionTab header="6. Premier test">
                    <ul class="list-disc pl-6 space-y-1">
                        <li>Créez un fichier <code>HelloWorld.java</code> :</li>
                        <pre class="bg-gray-900 text-gray-200 p-2 rounded-md text-sm overflow-x-auto">
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello Java!");
    }
}
                                </pre
                        >
                        <li>Dans un terminal, compilez : <code>javac HelloWorld.java</code></li>
                        <li>Puis exécutez : <code>java HelloWorld</code></li>
                        <li>Vous devriez voir : <code>Hello Java!</code></li>
                    </ul>
                    <p class="mt-4 text-green-400 font-medium">🎉 Félicitations ! Java est prêt à l’emploi.</p>
                </AccordionTab>
            </Accordion>
        </div>
    </div>
</template>
