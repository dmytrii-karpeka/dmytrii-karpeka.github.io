export const disactivePreviousButton = () => {
  if (document.getElementsByClassName('isActive')[0]) {
    const activeButton = document.getElementsByClassName('isActive')[0];
    activeButton.className = activeButton.className.slice(0, -' isActive'.length);
  }
}