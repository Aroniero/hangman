export default function showMessage(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}
