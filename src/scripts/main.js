const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

inputText.addEventListener("input", detectarCaracteres);

function detectarCaracteres() {
  const inputValue = inputText.value;
  const caracteresAmbiguos = new Set();
  const caracteresSuspeitos = new Set();

  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue.charCodeAt(i) > 127) {
      caracteresAmbiguos.add(inputValue[i]);
    } else if (inputValue.charCodeAt(i) < 32) {
      caracteresSuspeitos.add(inputValue[i]);
    }
  }

  if (caracteresAmbiguos.size > 0 && !caracteresSuspeitos.size > 0) {
    result.innerHTML = `Caracteres com semelhança visual: ${[...caracteresAmbiguos].join(
      ", "
    )}`;
  } else if (caracteresSuspeitos.size > 0 && !caracteresAmbiguos.size > 0) {
    result.innerHTML = `Caracteres potencialmente suspeitos: ${[...caracteresSuspeitos].join(
      ", "
    )}`;
  } else if (caracteresAmbiguos.size > 0 && caracteresSuspeitos.size > 0) {
    result.innerHTML = `Caracteres com semelhança visual: ${[...caracteresAmbiguos].join(
      ", "
    )} <br/> Caracteres potencialmente suspeitos: ${[...caracteresSuspeitos].join(
      ", "
    )}`;
  } else if (inputValue !== "" && inputValue !== null) {
    result.innerHTML = "Nenhum caractere ambíguo ou suspeito encontrado.";
  } else {
    result.innerHTML = "";
  }
}
