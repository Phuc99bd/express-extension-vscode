// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const Case = require('case');
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "phuc" is now active!');

  let disposable1 = vscode.commands.registerCommand('phuc.generateController', async () => {
    const { activeTextEditor } = vscode.window;

    let nameFile = activeTextEditor.document.uri.path.split('/')[activeTextEditor.document.uri.path.split('/').length - 1] || '';
    nameFile = nameFile.split('.');
    nameFile = nameFile
      .splice(0, nameFile.length - 1)
      .join('.')
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '.');
    nameFile = Case.pascal(nameFile);
    activeTextEditor.edit((selectedText) => {
      selectedText.replace(
        activeTextEditor.selection,
        `
const ${nameFile} = {
	functionA: (req, res) => {
		try {
					
		} catch (error) {
					
		}
	}
}

export default ${nameFile};
		`
      );
    });
    vscode.window.showInformationMessage(`😂 Generate by Phuc DZai`);
  });

  let disposable3 = vscode.commands.registerCommand('phuc.generateService', async () => {
    const { activeTextEditor } = vscode.window;

    let nameFile = activeTextEditor.document.uri.path.split('/')[activeTextEditor.document.uri.path.split('/').length - 1] || '';
    nameFile = nameFile.split('.');
    nameFile = nameFile
      .splice(0, nameFile.length - 1)
      .join('.')
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '.');
    nameFile = Case.pascal(nameFile);
    activeTextEditor.edit((selectedText) => {
      selectedText.replace(
        activeTextEditor.selection,
        `
const ${nameFile} = {
  /**
   * 
   * @param {*} param0 
   * @returns 
   */
	functionA: ({}) => {
		try {
					
		} catch (error) {
					
		}
	}
}

export default ${nameFile};
		`
      );
    });
    vscode.window.showInformationMessage(`😂 Generate by Phuc DZai`);
  });

  let disposable2 = vscode.commands.registerCommand('phuc.generateRouter', async () => {
    const { activeTextEditor } = vscode.window;

    let nameFile = activeTextEditor.document.uri.path.split('/')[activeTextEditor.document.uri.path.split('/').length - 1] || '';
    nameFile = nameFile.split('.');
    nameFile = nameFile
      .splice(0, nameFile.length - 1)
      .join('.')
      .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '.');
    nameFile = Case.pascal(nameFile);
    activeTextEditor.edit((selectedText) => {
      selectedText.replace(
        activeTextEditor.selection,
        `
import express from 'express';

const ${nameFile} = express.Router();

nameFile.get('/', );
nameFile.post('/', );
nameFile.put('/', );
nameFile.delete('/', );

export default ${nameFile};
		`
      );
    });
    vscode.window.showInformationMessage(`😂 Generate by Phuc DZai`);
  });

  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
  context.subscriptions.push(disposable3);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
