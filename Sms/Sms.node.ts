import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Sms implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'SMS',
		name: 'sms',
		icon: 'file:sms.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Sending SMS Message',
		defaults: {
			name: 'SMS',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'smsApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://betaapi.ivrapi.com/api',
			headers: {
				Accept: '*/*',
			},
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Send SMS',
						value: 'send',
						action: 'Send a new SMS message',
						routing: {
							request: {
								method: 'POST',
								url: '/smses',
								headers: {
									'Accept': '*/*',
									'Content-Type': 'application/json',
								},
								body: {
									from: '={{$parameter.from}}',
									to: '={{$parameter.to}}',
									message: '={{$parameter.message}}',
									clientId: '={{$parameter.clientId}}',
								},
							},
						},
					},
				],
				default: '',
			},
			{
				displayName: 'From',
				name: 'from',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['send'],
					},
				},
			},
			{
				displayName: 'To',
				name: 'to',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['send'],
					},
				},
			},
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['send'],
					},
				},
			},
			{
				displayName: 'Client ID',
				name: 'clientId',
				type: 'number',
				default: 0,
				displayOptions: {
					show: {
						operation: ['send'],
					},
				},
			},
		],
	};
}
