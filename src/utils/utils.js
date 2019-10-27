export function randomizeArray(arr) {
  return arr.sort((a, b) => (Math.floor(Math.random() * 1000) > 500 ? 1 : -1));
}

export function showMessage(message) {
  alert(message);
}

export default {
  randomizeArray,
  showMessage
};
