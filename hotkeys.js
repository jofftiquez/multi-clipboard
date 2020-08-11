
let registerCopy, registerPaste;
let numberCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
document.addEventListener('keydown', (event) => {
	if (event.ctrlKey && event.altKey) {
  	if (event.keyCode === 67) {
    	console.warn('copy!');
      registerCopy = true;
    }
    
    if (event.keyCode === 86) {
    	console.warn('paste!');
      registerPaste = true;
    }
    
    if (registerCopy && numberCodes.includes(event.keyCode)) {
    	console.warn('copy to:', event.keyCode);
      registerCopy = false;
    }

		if (registerPaste && numberCodes.includes(event.keyCode)) {
    	console.warn('paste from:', event.keyCode);
      registerPaste = false;
    }
  }
});
