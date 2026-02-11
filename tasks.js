document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      title: "ColdFusion Output",
      instruction: "Gib den Text 'Hallo Welt' mit cfoutput aus.",
      code: "<______>Hallo Welt</______>",
      options: ["cfoutput", "cfset", "cfif", "cflog", "cfparam", "cfmail"],
      answer: ["cfoutput", "cfoutput"]
    },
    {
      title: "Variable Setzen",
      instruction: "Lege die Variable name mit dem Wert 'Mia' an.",
      code: "<______ name=\"name\" value=\"______\">",
      options: ["cfset", "cfparam", "cfinclude", "Mia", "Tim", "value"],
      answer: ["cfset", "Mia"]
    },
    {
      title: "cfset Kurzform",
      instruction: "Nutze cfset, um age auf 21 zu setzen.",
      code: "<cfset ______ = ______>",
      options: ["age", "21", "years", "value", "cfparam", "cfif"],
      answer: ["age", "21"]
    },
    {
      title: "Ausgabe einer Variable",
      instruction: "Gib die Variable name aus.",
      code: "<cfoutput>Hallo #______#</cfoutput>",
      options: ["name", "age", "url", "form", "session", "application"],
      answer: ["name"]
    },
    {
      title: "cfparam Standardwert",
      instruction: "Setze einen Standardwert von 0 für url.page.",
      code: "<______ name=\"url.page\" default=\"______\">",
      options: ["cfparam", "cfset", "0", "1", "default", "cfif"],
      answer: ["cfparam", "0"]
    },
    {
      title: "cfif Bedingung",
      instruction: "Prüfe, ob age größer als 18 ist.",
      code: "<cfif age ______ 18>Volljährig</cfif>",
      options: [">", "<", "eq", "gte", "is", "neq"],
      answer: [">"]
    },
    {
      title: "cfelse Nutzung",
      instruction: "Füge einen else-Zweig hinzu.",
      code: "<cfif isLoggedIn>OK<______>Bitte anmelden</cfif>",
      options: ["cfelse", "cfelseif", "cfset", "cfoutput", "cfcatch", "cfparam"],
      answer: ["cfelse"]
    },
    {
      title: "cfelseif",
      instruction: "Füge einen elseif-Zweig hinzu.",
      code: "<cfif score gte 90>A<______ score gte 80>B</cfif>",
      options: ["cfelseif", "cfelse", "cfset", "cfloop", "cfoutput", "cflog"],
      answer: ["cfelseif"]
    },
    {
      title: "Vergleichsoperator",
      instruction: "Nutze den ColdFusion-Operator für Gleichheit.",
      code: "<cfif status ______ \"ok\">OK</cfif>",
      options: ["eq", "=", "==", "is", "neq", "lt"],
      answer: ["eq"]
    },
    {
      title: "String zusammenbauen",
      instruction: "Setze fullName aus first und last zusammen.",
      code: "<cfset fullName = first & \" \" & ______>",
      options: ["last", "name", "age", "fullName", "&", "middle"],
      answer: ["last"]
    },
    {
      title: "cfloop From-To",
      instruction: "Erstelle eine Schleife von 1 bis 5.",
      code: "<cfloop index=\"i\" from=\"1\" to=\"______\">#i#</cfloop>",
      options: ["5", "10", "0", "i", "to", "count"],
      answer: ["5"]
    },
    {
      title: "cfloop Step",
      instruction: "Setze den Schrittwert auf 2.",
      code: "<cfloop index=\"i\" from=\"0\" to=\"10\" ______=\"2\">#i#</cfloop>",
      options: ["step", "by", "jump", "inc", "cfset", "count"],
      answer: ["step"]
    },
    {
      title: "cfloop List",
      instruction: "Iteriere über eine Liste in names.",
      code: "<cfloop list=\"#names#\" index=\"n\" ______=\",\">#n#</cfloop>",
      options: ["delimiters", "separator", "split", "list", "index", "item"],
      answer: ["delimiters"]
    },
    {
      title: "cfloop Query",
      instruction: "Iteriere über das Query result.",
      code: "<cfloop query=\"result\">#result.______#</cfloop>",
      options: ["name", "row", "column", "index", "currentrow", "data"],
      answer: ["name"]
    },
    {
      title: "Array Erstellen",
      instruction: "Erstelle ein leeres Array namens items.",
      code: "<cfset items = ______()>",
      options: ["arrayNew", "structNew", "listNew", "queryNew", "array", "newArray"],
      answer: ["arrayNew"]
    },
    {
      title: "Array Append",
      instruction: "Füge 'Buch' zum Array items hinzu.",
      code: "<cfset ______(items, \"Buch\")>",
      options: ["arrayAppend", "arrayAdd", "append", "arrayPush", "listAppend", "structInsert"],
      answer: ["arrayAppend"]
    },
    {
      title: "Struct Erstellen",
      instruction: "Erstelle ein leeres Struct namens user.",
      code: "<cfset user = ______()>",
      options: ["structNew", "arrayNew", "queryNew", "createStruct", "newStruct", "struct"],
      answer: ["structNew"]
    },
    {
      title: "Struct Key Exists",
      instruction: "Prüfe, ob key 'email' im Struct user existiert.",
      code: "<cfif ______(user, \"email\")>OK</cfif>",
      options: ["structKeyExists", "arrayLen", "isDefined", "keyExists", "structFind", "structHas"],
      answer: ["structKeyExists"]
    },
    {
      title: "String Länge",
      instruction: "Ermittle die Länge von message.",
      code: "<cfset lenMsg = ______(message)>",
      options: ["len", "length", "stringLen", "size", "count", "listLen"],
      answer: ["len"]
    },
    {
      title: "Trim",
      instruction: "Entferne Leerzeichen am Anfang/Ende von title.",
      code: "<cfset clean = ______(title)>",
      options: ["trim", "lcase", "ucase", "replace", "strip", "clean"],
      answer: ["trim"]
    },
    {
      title: "Lowercase",
      instruction: "Wandle city in Kleinbuchstaben um.",
      code: "<cfset cityLower = ______(city)>",
      options: ["lcase", "ucase", "lower", "toLower", "case", "trim"],
      answer: ["lcase"]
    },
    {
      title: "Uppercase",
      instruction: "Wandle code in Großbuchstaben um.",
      code: "<cfset codeUpper = ______(code)>",
      options: ["ucase", "lcase", "upper", "toUpper", "case", "replace"],
      answer: ["ucase"]
    },
    {
      title: "Replace",
      instruction: "Ersetze alle Leerzeichen in name durch '-'.",
      code: "<cfset slug = replace(name, \" \", \"-\", \"______\")>",
      options: ["all", "one", "first", "regex", "every", "global"],
      answer: ["all"]
    },
    {
      title: "Numeric Prüfen",
      instruction: "Prüfe, ob input numeric ist.",
      code: "<cfif ______(input)>OK</cfif>",
      options: ["isNumeric", "isNumber", "val", "len", "isInteger", "number"],
      answer: ["isNumeric"]
    },
    {
      title: "Val",
      instruction: "Wandle input in eine Zahl um.",
      code: "<cfset n = ______(input)>",
      options: ["val", "num", "toNumber", "isNumeric", "int", "parse"],
      answer: ["val"]
    },
    {
      title: "Datum Jetzt",
      instruction: "Speichere das aktuelle Datum in nowDate.",
      code: "<cfset nowDate = ______()>",
      options: ["now", "dateNow", "today", "getDate", "createDate", "date"],
      answer: ["now"]
    },
    {
      title: "Datum Format",
      instruction: "Formatiere nowDate als tt.mm.jjjj.",
      code: "<cfset nice = ______(nowDate, \"dd.mm.yyyy\")>",
      options: ["dateFormat", "dateToString", "formatDate", "lsDateFormat", "timeFormat", "date"],
      answer: ["dateFormat"]
    },
    {
      title: "createDate",
      instruction: "Erstelle den 1.1.2025.",
      code: "<cfset d = ______(2025, 1, 1)>",
      options: ["createDate", "createDateTime", "now", "dateNew", "makeDate", "date"],
      answer: ["createDate"]
    },
    {
      title: "cfinclude",
      instruction: "Binde header.cfm ein.",
      code: "<______ template=\"header.cfm\">",
      options: ["cfinclude", "cfinsert", "cfimport", "cfoutput", "cfset", "cfmodule"],
      answer: ["cfinclude"]
    },
    {
      title: "cfmodule Tag",
      instruction: "Rufe das Custom Tag myTag.cfm auf.",
      code: "<______ template=\"myTag.cfm\">",
      options: ["cfmodule", "cfinclude", "cfimport", "cfoutput", "cfset", "cftag"],
      answer: ["cfmodule"]
    },
    {
      title: "cfquery Start",
      instruction: "Starte eine Query mit datasource mydb.",
      code: "<______ name=\"qUsers\" datasource=\"______\">SELECT * FROM users</cfquery>",
      options: ["cfquery", "cfqueryparam", "mydb", "db", "datasource", "cfstoredproc"],
      answer: ["cfquery", "mydb"]
    },
    {
      title: "cfqueryparam",
      instruction: "Sichere die id mit cfqueryparam.",
      code: "WHERE id = <______ value=\"#url.id#\" cfsqltype=\"cf_sql_integer\">",
      options: ["cfqueryparam", "cfparam", "cfset", "cfif", "cfoutput", "cfquery"],
      answer: ["cfqueryparam"]
    },
    {
      title: "cfoutput Query",
      instruction: "Gib eine Query mit cfoutput aus.",
      code: "<cfoutput query=\"qUsers\">#qUsers.______#</cfoutput>",
      options: ["name", "row", "column", "currentRow", "id", "data"],
      answer: ["name"]
    },
    {
      title: "URL Scope",
      instruction: "Greife auf den URL-Parameter id zu.",
      code: "<cfset userId = url.______>",
      options: ["id", "userId", "param", "value", "name", "key"],
      answer: ["id"]
    },
    {
      title: "FORM Scope",
      instruction: "Lies das Formularfeld email.",
      code: "<cfset email = form.______>",
      options: ["email", "value", "field", "mail", "name", "input"],
      answer: ["email"]
    },
    {
      title: "SESSION Scope",
      instruction: "Speichere die userId in die Session.",
      code: "<cfset session.userId = ______>",
      options: ["userId", "session", "id", "url.id", "form.id", "value"],
      answer: ["userId"]
    },
    {
      title: "APPLICATION Scope",
      instruction: "Setze einen App-Titel.",
      code: "<cfset application.______ = \"Mein Shop\">",
      options: ["title", "name", "app", "key", "value", "scope"],
      answer: ["title"]
    },
    {
      title: "COOKIE Setzen",
      instruction: "Setze ein Cookie namens theme auf dark.",
      code: "<cfset cookie.______ = \"dark\">",
      options: ["theme", "value", "name", "cookie", "key", "style"],
      answer: ["theme"]
    },
    {
      title: "isDefined",
      instruction: "Prüfe, ob form.email existiert.",
      code: "<cfif ______(\"form.email\")>OK</cfif>",
      options: ["isDefined", "structKeyExists", "isNull", "len", "exists", "isDefinedVar"],
      answer: ["isDefined"]
    },
    {
      title: "cfscript Block",
      instruction: "Beginne einen cfscript-Block.",
      code: "<______>var total = 0;</______>",
      options: ["cfscript", "cfset", "cfoutput", "cfsavecontent", "cfif", "cfloop"],
      answer: ["cfscript", "cfscript"]
    },
    {
      title: "cfscript Zuweisung",
      instruction: "Setze total in cfscript auf 10.",
      code: "<cfscript>total = ______;</cfscript>",
      options: ["10", "'10'", "ten", "total", "value", "cfset"],
      answer: ["10"]
    },
    {
      title: "Komponenten Aufruf",
      instruction: "Erstelle eine Instanz von components.UserService.",
      code: "<cfset service = ______(\"components.UserService\")>",
      options: ["createObject", "newObject", "cfobject", "createComponent", "objectNew", "cfset"],
      answer: ["createObject"]
    },
    {
      title: "createObject Typ",
      instruction: "Nutze createObject für eine CFC-Komponente.",
      code: "<cfset service = createObject(\"______\", \"components.UserService\")>",
      options: ["component", "java", "webservice", "com", "corba", "object"],
      answer: ["component"]
    },
    {
      title: "cfinvoke",
      instruction: "Rufe die Methode getUser auf.",
      code: "<______ component=\"components.UserService\" method=\"getUser\" returnVariable=\"user\">",
      options: ["cfinvoke", "cfinclude", "cfset", "cfobject", "cfoutput", "cfreturn"],
      answer: ["cfinvoke"]
    },
    {
      title: "cffunction",
      instruction: "Starte eine Funktion namens add.",
      code: "<______ name=\"add\" returntype=\"numeric\">\n  <cfreturn arguments.a + arguments.b>\n</cffunction>",
      options: ["cffunction", "cfargument", "cfreturn", "cfscript", "cfinvoke", "cfcomponent"],
      answer: ["cffunction"]
    },
    {
      title: "cfargument",
      instruction: "Definiere ein Argument namens a.",
      code: "<cfargument name=\"a\" type=\"numeric\" ______=\"true\">",
      options: ["required", "default", "value", "cfset", "hint", "output"],
      answer: ["required"]
    },
    {
      title: "cfreturn",
      instruction: "Gib result aus der Funktion zurück.",
      code: "<______>#result#</______>",
      options: ["cfreturn", "cfoutput", "cffunction", "cfset", "cfscript", "cfargument"],
      answer: ["cfreturn", "cfreturn"]
    },
    {
      title: "cflocation",
      instruction: "Leite zu index.cfm weiter.",
      code: "<______ url=\"index.cfm\">",
      options: ["cflocation", "cfheader", "cfinclude", "cfset", "cfreport", "cfabort"],
      answer: ["cflocation"]
    },
    {
      title: "cfheader",
      instruction: "Setze den Content-Type auf application/json.",
      code: "<______ name=\"Content-Type\" value=\"application/json\">",
      options: ["cfheader", "cfcontent", "cfoutput", "cflocation", "cfset", "cfparam"],
      answer: ["cfheader"]
    },
    {
      title: "cfcontent",
      instruction: "Liefere JSON ohne Template-Output.",
      code: "<______ type=\"application/json\" reset=\"true\">",
      options: ["cfcontent", "cfheader", "cfoutput", "cfsavecontent", "cfset", "cfparam"],
      answer: ["cfcontent"]
    },
    
  ];

  const explanations = {
    "ColdFusion Output": "cfoutput gibt dynamischen Inhalt im Template aus.",
    "Variable Setzen": "cfset weist einer Variable einen Wert zu.",
    "cfset Kurzform": "Mit cfset setzt du Variablen wie age = 21.",
    "Ausgabe einer Variable": "In cfoutput gibst du Variablen mit #name# aus.",
    "cfparam Standardwert": "cfparam setzt Standardwerte für fehlende Variablen.",
    "cfif Bedingung": "Der Operator > prüft, ob etwas größer ist.",
    "cfelse Nutzung": "cfelse ist der Alternativzweig einer Bedingung.",
    "cfelseif": "cfelseif prüft eine weitere Bedingung.",
    "Vergleichsoperator": "eq ist der ColdFusion-Operator für Gleichheit.",
    "String zusammenbauen": "Das &-Zeichen verknüpft Strings.",
    "cfloop From-To": "to legt den Endwert einer Zählschleife fest.",
    "cfloop Step": "step bestimmt die Schrittweite der Schleife.",
    "cfloop List": "delimiters setzt das Trennzeichen für Listen.",
    "cfloop Query": "Im Query-Loop greifst du auf Spalten per #result.name# zu.",
    "Array Erstellen": "arrayNew() erzeugt ein neues leeres Array.",
    "Array Append": "arrayAppend fügt ein Element an ein Array an.",
    "Struct Erstellen": "structNew() erzeugt ein neues Struct.",
    "Struct Key Exists": "structKeyExists prüft, ob ein Key existiert.",
    "String Länge": "len() liefert die Länge eines Strings.",
    "Trim": "trim() entfernt Leerzeichen am Anfang und Ende.",
    "Lowercase": "lcase() wandelt in Kleinbuchstaben um.",
    "Uppercase": "ucase() wandelt in Großbuchstaben um.",
    "Replace": "replace mit 'all' ersetzt alle Vorkommen.",
    "Numeric Prüfen": "isNumeric() prüft, ob der Wert eine Zahl ist.",
    "Val": "val() konvertiert den Wert in eine Zahl.",
    "Datum Jetzt": "now() liefert aktuelles Datum und Uhrzeit.",
    "Datum Format": "dateFormat formatiert ein Datum als String.",
    "createDate": "createDate erzeugt ein Datum aus Jahr, Monat und Tag.",
    "cfinclude": "cfinclude bindet ein anderes Template ein.",
    "cfmodule Tag": "cfmodule ruft ein Custom Tag auf.",
    "cfquery Start": "cfquery startet eine DB-Abfrage über eine Datasource.",
    "cfqueryparam": "cfqueryparam bindet Werte sicher in SQL ein.",
    "cfoutput Query": "cfoutput mit query iteriert über das Query.",
    "URL Scope": "url.id liest den URL-Parameter id.",
    "FORM Scope": "form.email liest das Formularfeld email.",
    "SESSION Scope": "session speichert benutzerspezifische Daten.",
    "APPLICATION Scope": "application speichert appweite Daten.",
    "COOKIE Setzen": "cookie.theme setzt den Wert eines Cookies.",
    "isDefined": "isDefined prüft, ob eine Variable existiert.",
    "cfscript Block": "cfscript erlaubt Script-Syntax in ColdFusion.",
    "cfscript Zuweisung": "In cfscript weist du Werte ohne cfset zu.",
    "Komponenten Aufruf": "createObject erstellt eine Instanz der Komponente.",
    "createObject Typ": "Der Typ 'component' lädt eine CFC.",
    "cfinvoke": "cfinvoke ruft eine Methode einer Komponente auf.",
    "cffunction": "cffunction definiert eine ColdFusion-Funktion.",
    "cfargument": "required=true macht ein Argument verpflichtend.",
    "cfreturn": "cfreturn gibt den Funktionswert zurück.",
    "cflocation": "cflocation leitet den Browser weiter.",
    "cfheader": "cfheader setzt HTTP-Header wie Content-Type.",
    "cfcontent": "cfcontent setzt den Response-Typ und kann Output resetten."
  };

  const progressBar = document.querySelector("[data-progress]");
  const progressText = document.querySelector("[data-progress-text]");
  const title = document.querySelector("[data-title]");
  const instruction = document.querySelector("[data-instruction]");
  const codeText = document.querySelector("[data-code-text]");
  const optionsContainer = document.querySelector("[data-options]");
  const submitButton = document.querySelector("[data-submit]");
  const clearButton = document.querySelector("[data-clear]");
  const feedback = document.querySelector("[data-feedback]");
  const successCard = document.querySelector("[data-success]");
  const successText = document.querySelector("[data-success-text]");
  const successExplanation = document.querySelector("[data-explanation]");
  const nextButton = document.querySelector("[data-next]");
  const questionCard = document.querySelector("[data-question-card]");

  let index = 0;
  let blanks = [];
  let filled = [];

  const escapeHtml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const updateProgress = () => {
    const percent = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;
    progressText.textContent = `Frage ${index + 1} von ${questions.length}`;
  };

  const renderCode = (code) => {
    const parts = code.split("______");
    const htmlParts = [];

    parts.forEach((part, partIndex) => {
      htmlParts.push(escapeHtml(part));
      if (partIndex < parts.length - 1) {
        htmlParts.push(`<span class="blank" data-blank="${partIndex}"></span>`);
      }
    });

    codeText.innerHTML = htmlParts.join("");
    blanks = Array.from(codeText.querySelectorAll("[data-blank]"));
    filled = new Array(blanks.length).fill("");
  };

  const renderOptions = (options) => {
    optionsContainer.innerHTML = "";

    options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-chip";
      button.textContent = option;
      button.dataset.value = option;

      button.addEventListener("click", () => handleOptionClick(button));
      optionsContainer.appendChild(button);
    });
  };

  const handleOptionClick = (button) => {
    const targetIndex = filled.findIndex((value) => value === "");
    if (targetIndex === -1) {
      return;
    }

    filled[targetIndex] = button.dataset.value;
    blanks[targetIndex].textContent = button.dataset.value;
    blanks[targetIndex].classList.add("is-filled");
  };

  const resetAnswer = () => {
    filled = filled.map(() => "");
    blanks.forEach((blank) => {
      blank.textContent = "";
      blank.classList.remove("is-filled");
    });

    optionsContainer.querySelectorAll(".option-chip").forEach((button) => {
      button.classList.remove("is-used");
    });

    feedback.textContent = "";
  };

  const renderQuestion = () => {
    const current = questions[index];
    title.textContent = current.title;
    instruction.textContent = current.instruction;
    feedback.textContent = "";
    successExplanation.textContent = "";

    renderCode(current.code);
    renderOptions(current.options);

    questionCard.classList.remove("is-hidden");
    successCard.classList.add("is-hidden");
    updateProgress();
  };

  const checkAnswer = () => {
    const current = questions[index];

    if (filled.some((value) => value === "")) {
      feedback.textContent = "Bitte fülle alle Lücken aus.";
      return;
    }

    const isCorrect = current.answer.every((value, i) => value === filled[i]);

    if (!isCorrect) {
      feedback.textContent = "Nicht ganz. Versuche es noch einmal.";
      return;
    }

    feedback.textContent = "";
    questionCard.classList.add("is-hidden");
    successCard.classList.remove("is-hidden");

    const explanation = explanations[current.title] || "Erklärung folgt.";
    successExplanation.textContent = explanation;

    if (index === questions.length - 1) {
      successText.textContent = "Stark! Du hast alle Fragen richtig gelöst.";
      nextButton.textContent = "Neu starten »";
    } else {
      successText.textContent = "Du kannst zur nächsten Frage gehen.";
      nextButton.textContent = "Next Question »";
    }
  };

  submitButton.addEventListener("click", checkAnswer);
  clearButton.addEventListener("click", resetAnswer);

  nextButton.addEventListener("click", () => {
    if (index === questions.length - 1) {
      index = 0;
    } else {
      index += 1;
    }

    renderQuestion();
  });

  renderQuestion();
});
