///// TEST
console.log("CHARGEMENT DU FICHIER javascript.js : OK"); 

/*///// CREATION TABLEAU DES ARTICLES EN VENTE (avec 4 caractéristiques : photo / description / prix / déclinaison (tailles ou couleur):

let tableauArticlesHommes = [
    ['Chaussures marrons en cuir', "img/chaussuresH1.png", 149, "du 37 au 45"],
    ['Chaussures noires en cuir', "img/chaussuresH2.png", 159, "du 37 au 45"],
    ['Chaussures bleues en cuir', "img/chaussuresH1.png", 139, "du 37 au 45"],
    ['Chaussures grises en cuir', "img/chaussuresH2.png", 99, "du 37 au 45"],
    ['Chaussures marrons en daim', "img/chaussuresH1.png", 129, "du 37 au 45"],
    ['Chaussures bleues en daim', "img/chaussuresH2.png", 119, "du 37 au 45"],
    ['Chaussures noires en daim', "img/chaussuresH1.png", 149, "du 37 au 45"],
    ['Chaussures grises en daim', "img/chaussuresH2.png", 129, "du 37 au 45"],
    ['Baskets Edition Limitée', "img/chaussuresH1.png", 199, "du 37 au 45"],
    ['Pantalon baggy marron', "img/pantalonH1.png", 49, "S / L / XL"],
    ['Pantalon baggy noir', "img/pantalonH2.png", 59, "S / L / XL"],
    ['Pantalon baggy camouflage', "img/pantalonH1.png", 69, "S / L / XL"],
    ['Pantalon chino gris', "img/pantalonH2.png", 69, "S / L / XL"],
    ['Pantalon chino noir', "img/pantalonH1.png", 59, "S / L / XL"],
    ['Pantalon chino bleu marine', "img/pantalonH2.png", 54, "S / L / XL"],
    ['Jean bleu marine', "img/pantalonH1.png", 79, "S / L / XL"],
    ['Jean noir', "img/pantalonH2.png", 69, "S / L / XL"],
    ['Jean marron', "img/pantalonH1.png", 59, "S / L / XL"],
    ['Chemise blanche', "img/chemiseH1.png", 39, "S / L / XL"],
    ['Chemise rouge', "img/chemiseH1.png", 39, "S / L / XL"],
    ['Chemise grise', "img/chemiseH2.png", 59, "S / L / XL"],
    ['Chemise noire', "img/chemiseH1.png", 49, "S / L / XL"],
    ['Chemise bleue', "img/chemiseH2.png", 49, "S / L / XL"],
    ['Chemise à carreaux', "img/chemiseH1.png", 59, "S / L / XL"],
    ['Chemise en lin', "img/chemiseH2.png", 79, "S / L / XL"],
    ['Chemise en soie', "img/chemiseH1.png", 89, "S / L / XL"],
    ['Chemise en cachemire', "img/chemiseH2.png", 99, "S / L / XL"],
    ['T-shirt blanc', "img/tshirtH1", 19, "S / L / XL"],
    ['T-shirt noir', "img/tshirtH2", 19, "S / L / XL"],
    ['T-shirt rouge', "img/tshirtH1", 19, "S / L / XL"],
    ['T-shirt bleu', "img/tshirtH2", 19, "S / L / XL"],
    ['T-shirt jaune', "img/tshirtH1", 19, "S / L / XL"],
    ['Polo bleu foncé', "img/tshirtH2", 29, "S / L / XL"],
    ['Polo blanc', "img/tshirtH1", 29, "S / L / XL"],
    ['Polo noir', "img/tshirtH2", 29, "S / L / XL"],
    ['Polo gris', "img/tshirtH1", 29, "S / L / XL"],
    ['Manteau à capuche', "img/manteauH1.png", 119, "S / L / XL"],
    ['Blouson en cuir', "img/manteauH2.png", 189, "S / L / XL"],
    ['Manteau été marron', "img/manteauH1.png", 89, "S / L / XL"],
    ['Manteau été bleu ciel', "img/manteauH2.png", 89, "S / L / XL"],
    ['Parka', "img/manteauH1.png", 89, "S / L / XL"],
    ['K-way', "img/manteauH2.png", 29, "S / L / XL"],
    ['Doudoune noire', "img/manteauH1.png", 99, "S / L / XL"],
    ['Doudoune grise', "img/manteauH2.png", 89, "S / L / XL"],
    ['Doudoune bleue', "img/manteauH2.png", 79, "S / L / XL"],
];

let tableauArticlesFemmes = [  // à compléter pour avoir 45 lignes au total
    ['Robe élégante', "robeF1.png", 199, "S / L / XL"],
    ['Robe de soirée', "robeF2.png", 599, "S / L / XL"],
    ['Bottes noir en cuir', "chaussuresF1.png", 149, "du 35 au 45"],
    ['Chaussures à talon', "chaussuresF2.png", 149, "du 37 au 45"],
    ['Manteau beige', "manteauF1.png", 119, "S / L / XL"],
    ['Manteau gris', "manteauF2.png", 139, "S / L / XL"],
    ['Echarpe acrylique', "echarpeF1.png", 29, "autre couleur : blanc"],
    ['Echarpe soie', "echarpeF2.png", 69, "autre couleur : noir"],
    ['Chemisier blanc', "chemisierF1.png", 59, "S / L / XL"],
    ['Chemisier à rayures', "chemisierF2.png", 79, "S / L / XL"]
];*/


// FONCTION BOUTON RECHERCHE //
function recherche() {
    alert("Recherche en cours...");
};

// FONCTION BOUTON AJOUT PANIER
function ajoutPanier() {
    alert("Article ajouté à votre panier !");
};


// FONCTION IMPRIMER //
function imprimerPage() {
    window.print();
};

// FONCTION BOUTON LANGUE //
function changerLangue() {
    alert("Langue changée");
};

/*let langue = "FR";
function changerLangue() {
    if (langue == "FR") {
        alert(langue);
    }else{
        langue = "EN";
        alert(langue);
    };
    changerLangue(); 
}*/

// FONCTION CARROUSEL BG IMAGE

$("div.owl-carousel").owlCarousel({ 
    autoplay: true,
    //autoWidth: true,
    loop:true, //boucle sur la liste d'image une fois la dernière afficher on revient à la première
    margin:10,
    nav:true, //pour afficher la navigation avec les flèches
    responsive:{ //design responsive adapté au smartphone, tablette et PC fixe ou portable
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// FONCTION CARROUSEL BG IMAGE
