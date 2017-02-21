var questions = 
[
"Le Choléra est une maladie qui affecte les humains et les animaux.",
"Une personne atteinte du choléra peut mourrir de déshydratation.",
"La République Dominicaine est une ancienne colonie Mexicaine."
];

var questions_good_answers =
[
false,
true,
false
];

var ol = document.createElement("ol");

for(i = 0; i < questions.length; i++)
{
    var li = document.createElement("li");

    var p_question = document.createElement("p");
    p_question.innerHTML = questions[i];
    
    var form = document.createElement("form");
    form.action = "";

    var p_yes = document.createElement("p");
    p_yes.innerHTML = "Oui : ";
    
    var radio_button_yes = document.createElement("input");
    radio_button_yes.type = "radio";
    radio_button_yes.name = questions[i];
    radio_button_yes.value = "yes";

    var p_no = document.createElement("p");
    p_no.innerHTML = "Non : ";
    
    var radio_button_no = document.createElement("input");
    radio_button_no.type = "radio";
    radio_button_no.name = questions[i];
    radio_button_no.value = "no";

    p_yes.appendChild(radio_button_yes);
    p_no.appendChild(radio_button_no);

    form.appendChild(p_yes);
    form.appendChild(p_no);

    li.appendChild(p_question);
    li.appendChild(form);

    ol.appendChild(li.cloneNode(true));
}

var article = document.getElementsByTagName("article")[0]

var form = document.createElement("form");
form.action = "";

var button = document.createElement("button");
button.type = "button";
button.innerHTML = "Valider !";

form.appendChild(button);

article.insertBefore(form, document.getElementsByTagName("hr")[0]);
article.insertBefore(ol, form);

button.onclick = function() {
    var questions_answers = document.querySelectorAll("input:checked");

    if(questions_answers.length !== questions.length)
    {
        alert("Vous devez répondre à toutes les questions !");
        return;
    }

    var mark = 0;
    
    for(i = 0; i < questions_answers.length; i++)
    {
        if(questions_good_answers[i] === true && questions_answers[i].value == "yes")
        {
            mark++;
        }
        else if(questions_good_answers[i] === false && questions_answers[i].value == "no")
        {
            mark++;
        }

        questions_answers[i].checked = false;
    }
    
    alert("Vous avez obtenu : " + mark + "/" + questions.length);
};




