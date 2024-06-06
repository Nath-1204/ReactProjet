
import Edt_janv from '../images/29janv.png'
import EDT_fev from '../images/5fev.PNG'
import EDT_mars from '../images/4mars.PNG'
import EDT_Mars from '../images/11mars.PNG'
import EDT_avril from '../images/7Avril.PNG'
import EDT_Avril from '../images/15_Avril.PNG'
import EDT_mai from '../images/13_Mai.PNG'

import Professionnalisme from '../images/attitudomètre.jpg'
import bootstrap from '../images/bootstrap.jpg'
import environnementIt from '../images/devops.jpg'
import english from '../images/english.jpg'
import htmlcss from '../images/htmlcss.png'
import java from '../images/java.png'
import laravel from '../images/laravel.png'
import mongoDB from '../images/mongodb.jpg'
import mysql from '../images/mysql.png'
import nodejs from '../images/nodejs.jpg'
import php from '../images/php.jpg'
import python from '../images/python.jpg'
import reactNative from '../images/react-native.png'
import reactjs from '../images/reactjs.gif'

import cloneFacebook from '../images/fb.jpg'
import noteDigit from '../images/ninaprojet.png'
import schoolProject from '../images/schoolProject.jpg'

const contentApplications = [
    {type: 'EDT', name: 'Janvier', visibility: false, image: Edt_janv, description: "Emploi du temps du mois de janvier"},
    {type: 'EDT', name: 'Février', visibility: false, image: EDT_fev, description: "Emploi du temps du mois de février"},
    {type: 'EDT', name: 'Part1_Mars', visibility: false, image: EDT_mars, description: "Emploi du temps du mois de mars"},
    {type: 'EDT', name: 'Part2_Mars', visibility: false, image: EDT_Mars, description: "Emploi du temps du mois de mars"},
    {type: 'EDT', name: 'Part1_Avril',visibility: false,  image: EDT_avril, description: "Emploi du temps du mois d'avril"},
    {type: 'EDT', name: 'Part2_Avril', visibility: false, image: EDT_Avril, description: "Emploi du temps du mois d'avril "},
    {type: 'EDT', name: 'Mai', visibility: false, image: EDT_mai, description: "Emploi du temps du mois de mai "},

    {type: 'Module', name: 'Professionnalisme', visibility: true, image: Professionnalisme, description: "C'est un module qui nous permet d'être professionnelle surtout dans le monde du travail. "},
    {type: 'Module', name: 'bootstrap', visibility: true, image: bootstrap, description: "C'est une technologie pré-définie pour styliser notre application ou page web. "},
    {type: 'Module', name: 'environnementIt', visibility: true, image: environnementIt, description: "C'est un module qui montre l'environnement informatique dans le domaine du travail, apprendre toutes les méthodes employés dans le monde du travail"},
    {type: 'Module', name: 'english', visibility: true, image: english, description: "C'est un module qui nous apprend à avoir un 'active listening' et surtout apprendre le Speaking in English."},
    {type: 'Module', name: 'htmlcss', visibility: true, image: htmlcss, description: "C'est une technologie de base qui permet créer une page statique. C'est le base dans la programmation informatique."},
    {type: 'Module', name: 'java', visibility: true, image: java, description: "C'est une technologie côté serveur orienté objet, un langage qui permet de créer des applications mobiles."},
    {type: 'Module', name: 'laravel', visibility: true, image: laravel, description: "C'est une framework php, qui est plus rapide et flexible."},
    {type: 'Module', name: 'mongoDB', visibility: true, image:mongoDB, description: "C'est un langage NoSQL utilisé pour créer des bases des données."},
    {type: 'Module', name: 'mysql', visibility: true, image:mysql, description: "C'est un langage SQL pour créer des tables et des entités dans une base de donné."},
    {type: 'Module', name: 'nodejs', visibility: true, image: nodejs, description: "C'est une technologie javascript du côté serveur, qui permet de stocker, insérer, supprimer, mettre à jour des données dans la base de donnés."},
    {type: 'Module', name: 'php', visibility: true, image: php, description: "C'est une technologie backend orienté objet qui permet de stocker, insérer, supprimer, mettre à jour des données dans la base de donnés."},
    {type: 'Module', name: 'python', visibility: true, image: python, description: "C'est un langage de programmation côté serveur facile à utiliser qui permet de créer des jeux vidéo, des détecteur de mouvement ou des sons, qui est utiliser pour faire l'hacking ou dans le cybersécurité."},
    {type: 'Module', name: 'reactNative', visibility: true, image: reactNative, description: "C'est une librairie javascript créé par facebook qui permet de créer des applications mobiles dynamiques."},
    {type: 'Module', name: 'reactjs', visibility: true, image: reactjs, description: "C'est une librairie javascript créé par facebook pour faire des interfaces utilisateurs plus dynamiques. "},

    {type: 'Projet', name: 'cloneFacebook', visibility: '', image: cloneFacebook, description: "C'est un projet reactlaravel qui reproduit l'application."},
    {type: 'Projet', name: 'noteDigit', visibility: '', image: noteDigit, description: "C'est un projet  react qui gère les notes des étudiants dans un établissement."},
    {type: 'Projet', name: 'schoolProject', visibility: '', image: schoolProject, description: "C'est un projet php qui gère les étudiants, les parents, le profs, les emplois du temps ainsi que les bulletins des notes des étudiants dans un école"}
]

export default contentApplications;