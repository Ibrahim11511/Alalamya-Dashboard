/* eslint-disable no-prototype-builtins */
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

export function allValuesPresent(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (
        obj[key] == undefined ||
        obj[key] == null ||
        obj[key] == "" ||
        obj[key] == "0"
      ) {
        return false;
      }
    }
  }
  return true;
}

export const handelInputsGroupChange = (e, setterFunction) => {
  setterFunction((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

export function capitalizeText(text) {
  return new String(text)
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function getDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
}
