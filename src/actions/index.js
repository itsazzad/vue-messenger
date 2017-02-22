export function sendMessage(text) {
  return { type: 'SEND_MESSAGE', text }
}
