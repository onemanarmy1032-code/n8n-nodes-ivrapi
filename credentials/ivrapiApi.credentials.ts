import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class ivrapiApi implements ICredentialType {
	name = 'ivrapiApi';
	displayName = 'IVR API';
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
	}; 

		// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.ivrapi.com',
			url: '/v1/account',
		},
	};
}