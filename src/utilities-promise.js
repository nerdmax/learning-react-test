export const getFakeMembersFromUtil = count => {
  return new Promise((resolve, reject) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      request.status === 200
        ? resolve(JSON.parse(request.response))
        : reject(Error(request.statusText));
    };
    request.onerror = err => {
      return reject(err);
    };
    request.send();
  });
};
