export const objClean = (obj: any) => {
  if (obj.items) {
    const itms: any[] = [];
    obj.items.forEach((i: any) => {
      itms.push(Object.assign({}, i));
    });
    obj.items = itms;
  }
  return Object.assign({}, obj);
};
