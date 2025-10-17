import axios from 'axios';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = 'mucarrr';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Authorization': GITHUB_TOKEN ? `token ${GITHUB_TOKEN}` : undefined,
    'Accept': 'application/vnd.github.v3+json',
  },
});

export async function fetchGitHubRepos() {
  try {
    const response = await githubAPI.get(`/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'owner',
      },
    });

    return response.data.map(repo => ({
      name: repo.name,
      description: repo.description || '',
      html_url: repo.html_url,
      language: repo.language || 'JavaScript',
      updated_at: new Date(repo.updated_at),
      topics: repo.topics || [],
      homepage: repo.homepage || '',
      stargazers_count: repo.stargazers_count || 0,
      forks_count: repo.forks_count || 0,
      is_featured: repo.topics?.includes('portfolio') || repo.topics?.includes('featured') || false,
    }));
  } catch (error) {
    console.error('GitHub API Error:', error);
    return [];
  }
}

export async function fetchRepoGif(repoName) {
  try {
    // GitHub'da README.md'den gif linklerini çekmeye çalış
    const response = await githubAPI.get(`/repos/${GITHUB_USERNAME}/${repoName}/contents/README.md`);
    
    if (response.data && response.data.content) {
      const content = Buffer.from(response.data.content, 'base64').toString();
      
      // README'den .gif linklerini bul
      const gifMatch = content.match(/!\[.*?\]\((.*?\.gif)\)/);
      if (gifMatch) {
        return gifMatch[1];
      }
      
      // Alternatif: raw.githubusercontent.com linklerini bul
      const rawGifMatch = content.match(/https:\/\/raw\.githubusercontent\.com\/.*?\.gif/);
      if (rawGifMatch) {
        return rawGifMatch[0];
      }
    }
    
    return '';
  } catch (error) {
    console.error(`GIF fetch error for ${repoName}:`, error);
    return '';
  }
}
