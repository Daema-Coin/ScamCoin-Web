/** 서버에서 받아온 url을 매개변수로 전달하면 file base url을 붙여 반환하는 함수입니다. */
export const TransImageURL = (url: string) => {
  return import.meta.env.VITE_FILE_URL + url;
};
