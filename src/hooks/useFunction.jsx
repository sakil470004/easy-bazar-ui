function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useFunction() {
  return {
    isEmpty,
  };
}
export default useFunction;
