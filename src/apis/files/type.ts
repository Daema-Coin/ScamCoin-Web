export type PreSignedResponse = {
  urls: PreSignedType[];
};

export type PreSignedType = {
  file_path: string;
  pre_signed_url: string;
};
