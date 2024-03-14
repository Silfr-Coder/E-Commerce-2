const apiURL = "http://127.0.0.1:3001";

export async function getAudiobooks(AudioBook) {
  const response = await fetch(apiURL + "/Audiobook");
  return response.json();
}
