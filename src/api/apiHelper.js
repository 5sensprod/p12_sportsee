export const fetchData = async (
  userId,
  resource,
  Model,
  mockData,
  baseUrl,
  useMock
) => {
  if (useMock) {
    const data = mockData[userId]
    if (!data) {
      throw new Error(`No ${resource} data for user ${userId}`)
    }
    return new Model(data)
  } else {
    try {
      const response = await fetch(`${baseUrl}${userId}/${resource}`)
      const data = await response.json()
      return new Model(data.data)
    } catch (error) {
      console.error(`Failed to fetch ${resource} data`, error)
      throw error
    }
  }
}
