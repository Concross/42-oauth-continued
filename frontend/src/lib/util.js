export const renderIf = (test, component) => {
  return test ? component : null;
};

const _msToDay = days => {
  const result = new Date();
  const msPDay = 86400000;

  result.setTime(result.getTime() + (days * msPDay));
  return result.toUTCString();
};

export const cookieCreate = (name, value, days) => {
  const expires = days ? ` ${_msToDay(days)};` : '';
  document.cookie = `${name}=${value};${expires} path='/'`;
};

export const cookieDelete = key => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
};

export const cookieFetch = key => {
  const cookies = Object.assign(...document.cookie.split(';')
    .map(cookie => {
      let [key, value] = cookie.split('=');
      return { [key.trim()]: value };
    }));
  return cookies[key];
};
