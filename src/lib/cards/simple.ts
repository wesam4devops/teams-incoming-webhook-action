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
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        version: '1.3',
        msteams: {
          width: 'Full',
        },
        body: [
          {
            type: 'Container',
            items: [
              {
                type: 'TextBlock',
                text: title,
                wrap: true,
                size: 'Large',
                weight: 'Bolder',
              },
            ],
            style: color,
            bleed: true,
          },
          {
            type: 'TextBlock',
            text: text,
            wrap: true,
            height: 'stretch',
          },
          {
            type: 'mention',
            text: `<at>DevOps - test</at>`,
            mentioned: {
              id: `19:3c0d68f48f3f4aa0bd97eb0db82cadf5`,
              name: `DevOps - test`
            }
          },
        ],
      },
    },
  ],
});
