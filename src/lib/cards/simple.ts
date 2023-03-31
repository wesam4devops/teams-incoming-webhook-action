export interface SimpleCardParams {
  title: string;
  text: string;
  color?: string;
}

export const populateCard = ({
  title,
  text,
  color = 'emphasis',
}: SimpleCardParams) => ({
  type: 'message',
  attachments: [
    {
      contentType: 'application/vnd.microsoft.card.adaptive',
      content: {
        type: 'AdaptiveCard',
        body: [
          {
            type: 'TextBlock',
            text: 'hi <at>DevOps - test</at>'
          }
        ],
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        version: '1.0',
        msteams: {
          entities: [
            {
              type: 'mention',
              text: '<at>DevOps - test</at>',
              mentioned: {
                id: '19:3c0d68f48f3f4aa0bd97eb0db82cadf5',
                name: 'DevOps - test'
              }
            }
          ]
        },
      },
    },
  ],
});
