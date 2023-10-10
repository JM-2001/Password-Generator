/**
 * This function funcGenPass() is the main function that is called when the button is clicked. It is responsible for obtaining the values from the inputs 
 * which will be used for other functions. Once, the resulting password is generated, it is displayed.
 */
function funcGenPass() {
    /* Declare Variables */
    // Declare Password Variable
    const passwordLengthVar = document.getElementById("passwordLength").value;

    // Declare Option Variables
    const optionUpperCaseVar = document.getElementById("optionUpperCase").checked;
    const optionLowerCaseVar = document.getElementById("optionLowerCase").checked;
    const optionNumberVar = document.getElementById("optionNumbers").checked;

    // Declare Special Characters Variables
    const specialOptionEx = document.getElementById("specialOptEx").checked;
    const specialOptionHash = document.getElementById("specialOptHash").checked;
    const specialOptionAst = document.getElementById("specialOptAst").checked;
    const specialOptionQues = document.getElementById("specialOptQues").checked;
    const specialOptionDoll = document.getElementById("specialOptDoll").checked;
    const specialOptionMin = document.getElementById("specialOptMin").checked;
    const specialOptionPer = document.getElementById("specialOptPer").checked;
    const specialOptionEquiv = document.getElementById("specialOptEquiv").checked;
    const specialOptionUnd = document.getElementById("specialOptUnd").checked;
    const specialOptionPerc = document.getElementById("specialOptPerc").checked;
    const specialOptionCaret = document.getElementById("specialOptCaret").checked;
    const specialOptionVert = document.getElementById("specialOptVert").checked;
    const specialOptionOPar = document.getElementById("specialOptOpenPar").checked;
    const specialOptionCPar = document.getElementById("specialOptClosedPar").checked;

    // Declare other variables
    let passwordResults = '';
    let charsSet = '';

    // Declare If-Else Statement to check if password characteristics were checked
    if (optionUpperCaseVar == false && optionLowerCaseVar == false && optionNumberVar == false) {
        document.getElementById("labelPassChar").innerText = "Password Characteristics: Please, select an option!";
    } else {
        document.getElementById("labelPassChar").innerText = "Password Characteristics:";
        
        // Initialize charset by calling generateCharset() function
        charsSet = generateCharset(optionUpperCaseVar, optionLowerCaseVar, optionNumberVar, 
            specialOptionEx, specialOptionHash, specialOptionAst, specialOptionQues, specialOptionDoll,
            specialOptionMin, specialOptionPer, specialOptionEquiv, specialOptionUnd, specialOptionPerc,
            specialOptionCaret, specialOptionVert, specialOptionOPar, specialOptionCPar);

        // Initialize passwordResults by calling generatePass() function
        passwordResults = generatePass(passwordLengthVar, charsSet);

        // Display the passwordResult
        document.getElementById("outputField").value = passwordResults;

        // For Debugging purposes
        console.log(passwordResults);
    } // End If-Else statement
} // End funcGenPass()

/**
 * This function generateCharset() contains 17 parameters that are used for If statements. Furthermore, this function generates a 
 * character set based on the user's choices. The resulting character set is returned.
 * @param {*} useUppercase 
 * @param {*} useLowercase 
 * @param {*} useNumbers 
 * @param {*} useOptEx 
 * @param {*} useOptHash 
 * @param {*} useOptAst 
 * @param {*} useOptQues 
 * @param {*} useOptDoll 
 * @param {*} useOptMin 
 * @param {*} useOptPer 
 * @param {*} useOptEquiv 
 * @param {*} useOptUnd 
 * @param {*} useOptPerc 
 * @param {*} useOptCaret 
 * @param {*} useOptVert 
 * @param {*} useOptOPar 
 * @param {*} useOptCPar 
 * @returns The final character set 
 */
function generateCharset (useUppercase, useLowercase, useNumbers,
    useOptEx, useOptHash, useOptAst, useOptQues, useOptDoll, useOptMin, useOptPer, useOptEquiv, 
    useOptUnd, useOptPerc, useOptCaret, useOptVert, useOptOPar, useOptCPar) {
    // Declare variables
    let charsetVar = '';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';

    /* Declare If statement to add characters to charsetVar*/
    if (useUppercase == true) {
        charsetVar += uppercaseChars;
    }

    if (useLowercase == true) {
        charsetVar += lowercaseChars;
    }

    if (useNumbers == true) {
        charsetVar += numberChars;
    }

    if (useOptEx == true) {
        charsetVar += '!';
    }

    if (useOptHash == true) {
        charsetVar += '#';
    }

    if (useOptAst == true) {
        charsetVar += '*';
    }

    if (useOptQues == true) {
        charsetVar += '?';
    }

    if (useOptDoll == true) {
        charsetVar += '$';
    }

    if (useOptMin == true) {
        charsetVar += '-';
    }

    if (useOptPer == true) {
        charsetVar += '.';
    }

    if (useOptEquiv == true) {
        charsetVar += '~';
    }

    if (useOptUnd == true) {
        charsetVar += '_';
    }

    if (useOptPerc == true) {
        charsetVar += '%';
    }

    if (useOptCaret == true) {
        charsetVar += '^';
    }

    if (useOptVert == true) {
        charsetVar += '|';
    }

    if (useOptOPar == true) {
        charsetVar += '(';
    }

    if (useOptCPar == true) {
        charsetVar += ')';
    }

    // Return charsetVar
    return charsetVar;
} // End generateCharset()

/**
 * This function generatePass() contains 2 parameters that will be used to generate the final password. Once, the final password is generated, it will be 
 * returned. 
 * @param {*} passwordLen 
 * @param {*} charactersSetVar 
 * @returns The final password
 */
function generatePass(passwordLen, charactersSetVar) {
    // Declare variable
    let finalPassword = '';

    // Declare For loop
    for (let i = 0; i < passwordLen; i++) {
        let randomIndex = Math.floor(Math.random() * charactersSetVar.length);
        finalPassword += charactersSetVar[randomIndex];
    }

    // Return finalPassword
    return finalPassword;
} // End generatePass()