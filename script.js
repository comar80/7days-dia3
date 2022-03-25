var listaTec = [];
var listaPessoa = [];


function enviar() {
  
  //pega os dados e salva no array listaPessoa
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var lang = document.getElementById("lang").value;
  
  var pessoa = {
    nome: name,
    idade: age,
    linguagem: lang,
  }
  
  listaPessoa.push(pessoa);
  console.log(pessoa);
  
  cleanMain();

  //cria o HTML de Frontend/Backend
  var message =
    "<p>Olá, " +
    pessoa.nome +
    "!</p>";

  message +=
    "<p>Você quer seguir para área de Front-End ou a área de Back-End?</p>";
  message +=
    "<div><input type='radio' name='answer' value='front-end' id='front-end' checked>Front-End";
  message +=
    "<input type='radio' name='answer' value='back-end' id='back-end'>Back-End</div>";
  message += "<br><button onclick='answer()'>Confirmar</button>";

  document.getElementById("main").innerHTML = message;
}

  //cria o HTML de React/Vue ou C#/Java
function answer() {
  var answer = "";
  var frontend = document.getElementById("front-end").checked;
  var backend = document.getElementById("back-end").checked;

  if (frontend) {
    cleanMain();
    listaTec.push("Front-End");
    answer += "Legal, quer aprender React ou aprender Vue?";
    answer +=
      "<div><input type='radio' name='answer' value='react' id='react' checked>React";
    answer +=
      "<input type='radio' name='answer' value='vue' id='vue'>Vue</div>";
    answer += "<br><button onclick='answer2()'>Confirmar</button>";

    document.getElementById("main").innerHTML = "<p>" + answer + "</p>";
  } else if (backend) {
    cleanMain();
    listaTec.push("Back-End");
    answer += "Legal, quer aprender C# ou aprender Java?";
    answer +=
      "<div><input type='radio' name='answer' value='c#' id='c#' checked>C#";
    answer +=
      "<input type='radio' name='answer' value='java' id='java'>Java</div>";
    answer += "<br><button onclick='answer3()'>Confirmar</button>";

    document.getElementById("main").innerHTML = "<p>" + answer + "</p>";
  }
  console.log(listaTec);
}

  //cria o HTML de Especialidade ou Fullstack no caso de respota react ou vue
function answer2() {
  var answer = "";
  var react = document.getElementById("react").checked;
  var vue = document.getElementById("vue").checked;

  if (react) {
    cleanMain();
    listaTec.push("React");
    answer +=
      "Você pretende seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?";
    answer +=
      "<div><input type='radio' name='answer' value='especializar' id='especializar' checked>Especializar";
    answer +=
      "<input type='radio' name='answer' value='fullstack' id='fullstack'>Fullstack</div>";
    answer += "<br><button onclick='answer4()'>Confirmar</button>";
    document.getElementById("main").innerHTML = "<p>" + answer + "</p>";
  } else if (vue) {
    cleanMain();
    listaTec.push("Vue");
    answer +=
      "Você pretende seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?";
    answer +=
      "<div><input type='radio' name='answer' value='especializar' id='especializar' checked>Especializar";
    answer +=
      "<input type='radio' name='answer' value='fullstack' id='fullstack'>Fullstack</div>";
    answer += "<br><button onclick='answer4()'>Confirmar</button>";
    document.getElementById("main").innerHTML = "<p>" + answer + "</p>";
  }
  console.log(listaTec);
}

  //cria o HTML de Especialidade ou Fullstack no caso de respota c# ou java
function answer3() {
  var answer = "";
  var csharp = document.getElementById("c#").checked;
  var java = document.getElementById("java").checked;

  if (csharp) {
    cleanMain();
    listaTec.push("C#");
    answer +=
      "Você pretende seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?";
    answer +=
      "<div><input type='radio' name='answer' value='especializar' id='especializar' checked>Especializar";
    answer +=
      "<input type='radio' name='answer' value='fullstack' id='fullstack'>Fullstack</div>";
    answer += "<br><button onclick='answer4()'>Confirmar</button>";
    document.getElementById("main").innerHTML = "<p>" + answer + "</p>";
  } else if (java) {
    cleanMain();
    listaTec.push("Java");
    answer +=
      "Você pretende seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack?";
    answer +=
      "<div><input type='radio' name='answer' value='especializar' id='especializar' checked>Especializar";
    answer +=
      "<input type='radio' name='answer' value='fullstack' id='fullstack'>Fullstack</div>";
    answer += "<br><button onclick='answer4()'>Confirmar</button>";
    document.getElementById("main").innerHTML = "<p>" + answer + "</p>";
  }
  console.log(listaTec);
}

  //cria o HTML de quais tecnologias quer aprender
function answer4() {
  var answer = "";
  var especializar = document.getElementById("especializar").checked;
  var fullstack = document.getElementById("fullstack").checked;

  if (especializar || fullstack) {
    cleanMain();
    answer += "E quais tecnologias você gostaria de aprender?";
    answer += "<div><input type='text' id='tecnologia'></div>";
    answer += "<br><button onclick='adicionarNoArray()'>Confirmar</button>";
    document.getElementById("main").innerHTML = "<p>" + answer + "</p>";
  }
}

// adiciona as respostas no array listaTec
function adicionarNoArray() {
  var tecnologia = document.getElementById("tecnologia").value; //pega o valor do input;
  listaTec.push(tecnologia);
  listarNaTela(listaTec);

  console.log(listaTec);

  // limpar input
  document.getElementById("tecnologia").value = "";
}

//Imprime as respostas na tela
function listarNaTela(tecnologia) {
  var pessoa = listaPessoa[0];

  var elementoTecnologia = "<li>" + pessoa.nome + ", as tecnologias que você deseja estudar são: <br>" + tecnologia + "</li>"; // escreve
  var elementoListaTecnologia = document.getElementById("listaTecnologia"); // cria o elemento

  elementoListaTecnologia.innerHTML = elementoTecnologia;
}

// Limpa a página para construção do novo HTML
function cleanMain(name) {
  document.getElementById("main").innerHTML = "";
  
}