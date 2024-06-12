function generateRandomPassword(options, length) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;':\"\\,.<>/?";
  
    let charPool = "";
    charPool += options.lowercase ? lowercaseChars : "";
    charPool += options.uppercase ? uppercaseChars : "";
    charPool += options.numbers ? numbers : "";
    charPool += options.symbols ? symbols : "";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool.charAt(randomIndex);
    }
  
    return password;
}


export default function BtnComponent({ setPassword,checkboxes, length }){
    return(
        <div className="btnContainer">
            <button onClick={() => {
                    setPassword(generateRandomPassword(checkboxes, length))
                }} className='btn'>GENERATE
            <svg width="12" height="12" id='arrowRight' xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
            </button>
        </div>
    )
}