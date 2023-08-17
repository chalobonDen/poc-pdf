export const replaceThaiMessage = (msg: string) => msg.replace(/ำ/g, "ํา");

export const renderText = (msg: string) => {
  let newMsg = msg;
  newMsg = replaceThaiMessage(newMsg);
  return newMsg;
};
