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
export const handelDeleteRequest = (path, id) => {
  fetch(`http://localhost:3000/${path}/${id}`, {
    method: "DELETE",
  });
};
