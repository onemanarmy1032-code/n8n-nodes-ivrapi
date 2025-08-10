import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class SmsApi implements ICredentialType {
	name = 'smsApi';
	displayName = 'SMS API';
	documentationUrl = 'https://betaapi.ivrapi.com/docs#/SMS-y/SmsController_sendMessage';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			  headers: {
				'X-Api-Key': '={{$credentials.apiKey}}'
			}
		},
	} 
}