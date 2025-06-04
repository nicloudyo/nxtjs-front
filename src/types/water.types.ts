interface TextItem {
  type: 'text';
  content: string;
}

interface ListItem {
  type: 'li';
  items: string[];
}

interface Paragraph {
  id: number;
  title: string;
  content: Array<TextItem | ListItem>;
}