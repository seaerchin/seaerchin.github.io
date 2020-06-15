const lineBreak = (listItems) => {
  return listItems.join('<br>');
};

const insertTab = (str) => {
  return `&nbsp;&nbsp;&nbsp;&nbsp${str}`;
};

const makeText = (text) => {
  return `<span style = "color:orange; font-family: Anonymous Pro;">${text}</span>`;
};

export { lineBreak, insertTab, makeText };
