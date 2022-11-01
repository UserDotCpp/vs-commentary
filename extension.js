const vscode = require('vscode');
const { tsPanel } = require('./tsPanel');

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
	console.log('"p2pcode" is now active!');
	

	//_________________________________________________________________



	context.subscriptions.push(
		vscode.commands.registerCommand('p2pcode.linkStart',  () => {
			vscode.window.showInformationMessage("loading...")
			setTimeout(() => {
				vscode.window.showInformationMessage("Its ON")
				tsPanel.createorShow(context.extensionUri);
			}, 1000);
		})
	);
	

	//the registerhover provider need the spesific language to work
	vscode.languages.registerHoverProvider('html', {
		provideHover(document, position, token) {
			const range = document.getWordRangeAtPosition(position);
            const word = document.getText(range);
			
			if (word == "HELLO"){
				console.log(range) //para poder ver por la terminal las  weas
				console.log(position)
				
				return new vscode.Hover(
				{
					language: "readingComents",
					value: "funca la HELLO machine"}
				);
			}
		}
	  });//_________________________________________________________
	
	
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
