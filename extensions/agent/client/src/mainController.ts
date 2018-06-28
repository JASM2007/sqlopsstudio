/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import * as vscode from 'vscode';
import { CreateAlertDialog } from './dialogs/createAlertDialog';
import { CreateJobDialog } from './dialogs/createJobDialog';
import { CreateStepDialog } from './dialogs/createStepDialog';
import { PickScheduleDialog } from './dialogs/pickScheduleDialog';

/**
 * The main controller class that initializes the extension
 */
export class MainController {
    protected _context: vscode.ExtensionContext;

    // PUBLIC METHODS //////////////////////////////////////////////////////
    public constructor(context: vscode.ExtensionContext) {
        this._context = context;
    }

    /**
     * Deactivates the extension
     */
    public deactivate(): void {
    }

    public activate(): void {
        vscode.commands.registerCommand('agent.openCreateJobDialog', (ownerUri: string) => {
            let dialog = new CreateJobDialog(ownerUri);
            dialog.showDialog();
        });
        vscode.commands.registerCommand('agent.openNewStepDialog', (ownerUri: string, jobId: string, server: string, stepId: number) => {
			let dialog = new CreateStepDialog(ownerUri, jobId, server, stepId);
			dialog.openNewStepDialog();
        });
        vscode.commands.registerCommand('agent.openPickScheduleDialog', (ownerUri: string) => {
            let dialog = new PickScheduleDialog(ownerUri);
            dialog.showDialog();
        });
        vscode.commands.registerCommand('agent.openCreateAlertDialog', (ownerUri: string) => {
            let dialog = new CreateAlertDialog(ownerUri);
            dialog.showDialog();
        });
	}

	 private updateJobStepDialog() {

	 }
}
