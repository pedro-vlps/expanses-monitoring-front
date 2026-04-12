const getLocalStorageUserId = () => {
  const userId = localStorage.getItem("user_id");
  return userId ? userId : null;
};


export { getLocalStorageUserId };