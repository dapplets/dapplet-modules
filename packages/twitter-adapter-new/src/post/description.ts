export const description = {
  id: {
    description: 'id of a post',
    optional: true,
    TYPE: 'string',
  },
  text: {
    description: 'text of a post',
    optional: true,
    TYPE: 'string',
  },
  authorFullname: {
    description: "display name of post's author",
    optional: true,
    TYPE: 'string',
  },
  authorUsername: {
    description: "username of post's author without at @ sign",
    optional: true,
    TYPE: 'string',
  },
  authorImg: {
    description: "url of post's author avatar",
    optional: true,
    TYPE: 'string',
  },
  theme: {
    description: "'DARK' | 'LIGHT'",
    optional: true,
    TYPE: 'string',
  },
  hidden: {
    description: 'hides the widget',
    optional: true,
    TYPE: 'boolean',
  },
  exec: {
    description: 'action on click',
    optional: true,
    TYPE: '(ctx: any, me: IButtonState) => void',
  },
  init: {
    description: 'action through initialisation',
    optional: true,
    TYPE: '(ctx: any, me: IButtonState) => void',
  },
  date: {
    description: 'Date custom tweet',
    optional: true,
    TYPE: 'string',
  },
  time: {
    description: 'Time custom tweet',
    optional: true,
    TYPE: 'string',
  },
}
