import connectDB from '@/lib/mongodb';
import Project from '@/models/Project';
import { fetchGitHubRepos, fetchRepoGif } from '@/lib/github';

export async function GET() {
  try {
    await connectDB();
    
    // GitHub'dan projeleri çek
    const githubRepos = await fetchGitHubRepos();
    
    // Her proje için GIF'i çek
    const projectsWithGifs = await Promise.all(
      githubRepos.map(async (repo) => {
        const gifUrl = await fetchRepoGif(repo.name);
        return {
          ...repo,
          gif_url: gifUrl,
        };
      })
    );
    
    // MongoDB'ye kaydet veya güncelle
    for (const project of projectsWithGifs) {
      await Project.findOneAndUpdate(
        { html_url: project.html_url },
        project,
        { upsert: true, new: true }
      );
    }
    
    // Güncellenmiş projeleri döndür
    const projects = await Project.find({})
      .sort({ updated_at: -1 })
      .limit(20);
    
    return new Response(JSON.stringify({ 
      success: true, 
      count: projects.length,
      projects 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error('Sync error:', error);
    return new Response(JSON.stringify(
      { success: false, error: error.message }
    ), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
