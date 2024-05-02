import { Direction, playerDirection } from '@lerna_demo_project/common_eum';

export const getPlayerDirection = (direction: string): Direction | '' => {
  return playerDirection[direction] ? playerDirection[direction] : '';
};
