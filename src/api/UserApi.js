
export async function getUserById(id) {
  const response = await fetch(`http://localhost:8081/portfolio/${id}`)
  return await response.json()
}

export async function getGitHubRepositories(username) {
  const response = await fetch(`http://localhost:8081/github/repos/${username}`)
  return await response.json()
}
