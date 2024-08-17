export const handelContextMenu = (
  event,
  contentID,
  positionSetter,
  visibilitySetter,
  IDSetter
) => {
  event.preventDefault();
  positionSetter({ x: event.pageX, y: event.pageY });
  visibilitySetter(true);
  IDSetter(contentID);
  setTimeout(() => {
    visibilitySetter(false);
  }, 1500);
};
