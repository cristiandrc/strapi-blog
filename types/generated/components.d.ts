import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'sections.rich-text': SectionsRichText;
    }
  }
}
