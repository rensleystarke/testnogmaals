node {
stage('Website Preparation'){
//clone maken van de website
sh 'cd Sites/Website/'
sh 'git pull'
}
stage('Preparation') {
// Mijn voorbeeld project uit mijn Git repository halen. Doe dit eenmalig en verwijder dan deze stage.
git 'https://github.com/rensleystarke/hsac-fitnesse-fixtures.git'
}
stage('Testing') {
// Met Maven de test draaien. Alles laten staan behalve het -D argument aanpassen naar een script of scenario naar keuze.
sh 'mvn test-compile -DfitnesseSuiteToRun=FrontPage.ProofOfConceptTest'
}
stage('Publish Report') {
//Vervolgens het Allure rapport publiceren aan de hand van de locatie waar de vorige stage het rapport heeft neergezet.
publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'target/fitnesse-results/', reportFiles: 'index.html', reportName: 'FitNesse Report', reportTitles: ''])
}
}