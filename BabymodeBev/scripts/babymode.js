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
    runCommand(`say its broken bro`);
    runCommand(`say �2�1�2�7�2�3�2�8�2�7�2�5�2�3�2�6 �2�2�2�8�2�3�2�0�2�2�2�7�2�2�2�9�2�1�2�6�2�1�2�1�2�1`);
    chatData.cancel = true
  };
  
  if (chatData.message === ":endbabymode") {
    chatData.cancel = true;
    runCommand(`say its broken bro`)
    runCommand(`say �2�1�2�7�2�3�2�8�2�7�2�5�2�3�2�6 �2�2�2�8�2�3�2�0�2�2�2�7�2�2�2�9�2�1�2�6�2�1�2�1�2�1`)
  };
  