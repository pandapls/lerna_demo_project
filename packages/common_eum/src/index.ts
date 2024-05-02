export enum Direction {
  Up,
  Down,
  Left,
  Right,
}
type DirectionMap = {
  [key: string]: Direction;
};
export const playerDirection: DirectionMap = {
  testDown: Direction.Down,
  testUp: Direction.Up,
  testLeft: Direction.Left,
  testRight: Direction.Right,
};
