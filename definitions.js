var defined_words = 
[
    "Bacille",
    "Vibrio Cholerae", 
    "Pandémie",
    "Épidémie",
    "Foyer d'épidémie",
    "Maladie infectieuse",
    "Endémique",
    "Bactérie",
    "Micro-organisme",   
    "Microbe",
    "Entérocyte",
    "Procaryote",
    "Muqueuse intestinale", 
    "Diarrhée aiguë sévère",
    "Selles",
    "Symptôme",
    "P.I.B", 
    "Produit Intérieur Brut",
    "PIB",
    "I.D.H",
    "IDH",
    "Indice de Développement Humain",
    "Espérance de vie",
    "Frontière",
    "Amont",   
    "Aval",
    "Affluent", 
    "Toxine",
    "Pathogène",
    "L'échelle de Richter", 
    "Déshydratation",
    "Foyer du séisme",
    "Casques bleus", 
    "Porteur sain"
];

var marker_begin = '<a href="definitions.html" class="def">';
var marker_end = "</a>";

var p = document.querySelectorAll("p");

for(i = 0; i < p.length; i++)
{
    for(j = 0; j < defined_words.length; j++)
    {
        p[i].innerHTML = p[i].innerHTML.replace(new RegExp(defined_words[j] + "s?", "gi"), function add_marker(x)
        {
            return marker_begin + x + marker_end;
        });
    }
}

