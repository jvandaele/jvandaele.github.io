var menuItemFormation = document.getElementById('menuItemFormation');
var menuItemCompetences = document.getElementById('menuItemCompetences');
var menuItemRealisations = document.getElementById('menuItemRealisations');
var menuItemContact = document.getElementById('menuItemContact');
var langageIconeDiv = document.getElementById('langageIconeDiv');
var bonjour = document.getElementById('bonjour');
var jeSuis = document.getElementById('jeSuis');
var jeSuisDescription = document.getElementById('jeSuisDescription');
var formationLabelBac = document.getElementsByClassName('formationLabelBac');
var formationTextBac = document.getElementsByClassName('formationTextBac');
var formationTitleDut = document.getElementsByClassName('formationTitleDut');
var formationTextDut = document.getElementsByClassName('formationTextDut');
var formationPlaceDut = document.getElementsByClassName('formationPlaceDut');
var formationTextLp = document.getElementsByClassName('formationTextLp');
var formationPlaceLp = document.getElementsByClassName('formationPlaceLp');
var compAutoEvaluation = document.getElementById('compAutoEvaluation');
var compSectionTitleLangagesWeb = document.getElementsByClassName('compSectionTitleLangagesWeb');
var compSectionTitleFrameworksWeb = document.getElementsByClassName('compSectionTitleFrameworksWeb');
var compSectionTitleAutresCompetencesWeb = document.getElementsByClassName('compSectionTitleAutresCompetencesWeb');
var compSectionTitleAutresCompetencesInf = document.getElementsByClassName('compSectionTitleAutresCompetencesInf');
var compSectionTitleAutres = document.getElementsByClassName('compSectionTitleAutres');
var realisationDescriptionStageDUT = document.getElementsByClassName('realisationDescriptionStageDUT');
var realisationDescriptionStageLP = document.getElementsByClassName('realisationDescriptionStageLP');
var loisirLabelJeuxVideos = document.getElementById('loisirLabelJeuxVideos');
var loisirLabelMontageVideo = document.getElementById('loisirLabelMontageVideo');
var loisirLabelPetitsProjets = document.getElementById('loisirLabelPetitsProjets');
var lienGithubText = document.getElementById('linkGithub');
var lienLinkedInText = document.getElementById('linkLinkedIn');
var titleContact = document.getElementById('titleContact');
var descriptionContact = document.getElementById('descriptionContact');
var description2Contact = document.getElementById('description2Contact');
var footerDescription = document.getElementById('footerDescription');

function changeLanguage(languageId){
	switch(languageId){
		case 0 :
			menuItemFormation.innerHTML = 'Formation';
			menuItemCompetences.innerHTML = 'Compétences';
			menuItemRealisations.innerHTML = 'Réalisations';
			menuItemContact.innerHTML = 'Contact';
			langageIconeDiv.innerHTML = '<img id="langageIcone" src="./Icônes/union-jack.png" onclick="changeLanguage(1)">'
			bonjour.innerHTML = 'Bonjour !';
			jeSuis.innerHTML = 'Je suis Jason Vandaele, développeur web !';
			jeSuisDescription.innerHTML = "J'ai 22 ans et suis titulaire d'une Licence Professionnelle en ce qui concerne le domaine du web. J'aime réaliser des projets me permettant de mettre à profit ma créativité, mon organisation et ma prévoyance ! Je suis spécialisé dans l'utilisation de Symfony mais je peux également utiliser d'autres langages et frameworks adaptés. De plus, j'ai déjà pu faire des réalisations en télétravail (partiel ou total), cette notion ne me pose donc pas de problèmes !";
			compAutoEvaluation.innerHTML = 'Voici une auto-évaluation des compétences que je possède !';
			loisirLabelJeuxVideos.innerHTML = 'Jeux vidéos';
			loisirLabelMontageVideo.innerHTML = 'Montage vidéo';
			loisirLabelPetitsProjets.innerHTML = 'Petits projets';
			lienGithubText.text = 'Mon dépôt Github';
			lienLinkedInText.text = 'Mon profil LinkedIn';
			titleContact.innerHTML = 'Me contacter';
			descriptionContact.innerHTML = "Une question ? Une remarque ? N'hésitez pas à me contacter grâce à l'adresse e-mail ci-dessous, je vous répondrai dès que possible !";
			description2Contact.innerHTML = "N'hésitez pas à me fournir votre numéro de téléphone si vous préférez les échanges vocaux !";
			footerDescription.innerHTML = 'Site et image de fond créés par Jason Vandaele.';
			for(var i=0;i<formationLabelBac.length;i++){
				formationLabelBac[i].innerHTML = 'Mention Bien';
				formationTextBac[i].innerHTML = "Baccalauréat de Sciences et Technologies de l'Industrie et du Développement Durable.<br>Option SIN (Système d'Information et Numérique), permettant de faire ses premiers pas dans le monde de l'informatique."
				formationTitleDut[i].innerHTML = 'DUT Informatique';
				formationTextDut[i].innerHTML = "Formation permettant d'acquérir les bases de l'informatique puis de les maîtriser. Divers langages et autres méthodes de développement y sont enseignés afin de préparer l'insertion professionnelle."
				formationPlaceDut[i].innerHTML = 'IUT de Belfort-Montbéliard';
				formationTextLp[i].innerHTML = "Licence Professionnelle (Technologies de Projets Web et mobiles) permettant de parfaire ses connaissances en web et en développement d'applications mobile pour pouvoir s'insérer dans le monde professionnel.";
				formationPlaceLp[i].innerHTML = 'IUT de Belfort-Montbéliard';
				compSectionTitleLangagesWeb[i].innerHTML = 'Langages Web';
				compSectionTitleFrameworksWeb[i].innerHTML = 'Frameworks Web';
				compSectionTitleAutresCompetencesWeb[i].innerHTML = 'Autres compétences Web';
				compSectionTitleAutresCompetencesInf[i].innerHTML = 'Autres compétences informatiques';
				compSectionTitleAutres[i].innerHTML = 'Autres';
				realisationDescriptionStageDUT[i].innerHTML = "Stage de DUT Informatique.<br>Ajouts et améliorations de fonctionnalités appliquées sur le site web réalisé avec Symfony4, notamment d'un système d'import de données automatique depuis des tableaux Excel.";
				realisationDescriptionStageLP[i].innerHTML = "Stage de LP TeProW.<br>Site web entièrement réalisé seul avec Symfony5, comprenant système d'inscription, forum, actualités, gestion administrative, formulaire de contact, etc.";
			}
			break;

		case 1 :
			menuItemFormation.innerHTML = 'Formation';
			menuItemCompetences.innerHTML = 'Skills';
			menuItemRealisations.innerHTML = 'Achievements';
			menuItemContact.innerHTML = 'Contact';
			langageIconeDiv.innerHTML = '<img id="langageIcone" src="./Icônes/france.jpg" onclick="changeLanguage(0)">'
			bonjour.innerHTML = 'Hello !';
			jeSuis.innerHTML = 'I am Jason Vandaele, web developer !';
			jeSuisDescription.innerHTML = "I am 22 years old and hold a Professional License in the field of the web. I like to carry out projects that allow me to use my creativity, my organization and my foresight ! I specialize in using Symfony but I can also use other languages and frameworks. Moreover, I have already been able to make achievements in teleworking (partial or total), this notion does not pose me any problems !";
			compAutoEvaluation.innerHTML = 'Here is a self-assessment of the skills I have !';
			loisirLabelJeuxVideos.innerHTML = 'Video games';
			loisirLabelMontageVideo.innerHTML = 'Video editing';
			loisirLabelPetitsProjets.innerHTML = 'Little projects';
			lienGithubText.text = 'My Github repository';
			lienLinkedInText.text = 'My LinkedIn profile';
			titleContact.innerHTML = 'Contact me';
			descriptionContact.innerHTML = "A question ? A comment ? Do not hesitate to contact me through the email address below, I will answer you as soon as possible !";
			description2Contact.innerHTML = 'Do not hesitate to provide me with your telephone number if you prefer voice exchanges !';
			footerDescription.innerHTML = 'Website and background image created by Jason Vandaele.';
			for(var i=0;i<formationLabelBac.length;i++){
				formationLabelBac[i].innerHTML = "Honors 'Good'";
				formationTextBac[i].innerHTML = "Baccalaureate of Sciences and Technology of the Industry and Sustainable Development.<br>Option SIN (Information System and Digital), allowing to take its first steps in the world of computer science."
				formationTitleDut[i].innerHTML = 'DUT in Computer Science';
				formationTextDut[i].innerHTML = "Formation to acquire the basics of computer science and then master them. Various languages and other development methods are taught to prepare for professional integration."
				formationPlaceDut[i].innerHTML = 'IUT of Belfort-Montbéliard';
				formationTextLp[i].innerHTML = "Professional License (Technologies of Web and mobile projects) allowing to perfect its knowledge in web and development of mobile applications to be able to insert itself in the professional world.";
				formationPlaceLp[i].innerHTML = 'IUT of Belfort-Montbéliard';
				compSectionTitleLangagesWeb[i].innerHTML = 'Web Languages';
				compSectionTitleFrameworksWeb[i].innerHTML = 'Web Frameworks';
				compSectionTitleAutresCompetencesWeb[i].innerHTML = 'Other Web Skills';
				compSectionTitleAutresCompetencesInf[i].innerHTML = 'Other IT skills';
				compSectionTitleAutres[i].innerHTML = 'Others';
				realisationDescriptionStageDUT[i].innerHTML = "DUT in Computer Science Internship.<br>Additions and improvements of functionalities applied on the website realized with Symfony4, including an automatic data import system from Excel tables.";
				realisationDescriptionStageLP[i].innerHTML = "LP TeProW Internship.<br> Website entirely realized alone with Symfony5, including registration system, forum, news, administrative management, contact form, etc.";
			}
			break;
	}
}