export default async function getMessages(locale) {
  try {
    const messages = await import(`../../messages/${locale}.json`);
    return messages.default;
  } catch (error) {
    console.error(`Error loading messages for locale "${locale}":`, error);
    return {};
  }
}
