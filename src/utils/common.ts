export const formatSlug = (topic: string) =>
  topic.toLowerCase().replace(' ', '-').replace('.', '')

export const getEnv = (host: string): string => {
  if (host.includes('localhost') || host.includes('dev')) return 'dev'
  if (host.includes('stage')) return 'stage'
  return 'prod'
}
