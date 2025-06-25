import { World, Commands } from 'mojang-minecraft';

function runCommand(command, dimension) {
  try {
    return { error: false, ...Commands.run(command, World.getDimension(dimension ?? 'overworld')) };
  } catch (error) {
    return { error: true };
  };
};

World.events.beforeChat.subscribe((chatData) => {
  let plName = chatData.sender.name ?? chatData.sender.nameTag;
  if (chatData.message === ":babymode") {
    runCommand(`say [BabyModeMCBE] : W.I.P`);
    chatData.cancel = true
  };
  
  if (chatData.message === ":endbabymode") {
    chatData.cancel = true;
    runCommand(`say [BabyModeMCBE] : W.I.P`)
  };
  
